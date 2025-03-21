---
title: Competitive Programming on Apple Silicon
date: "2-3-2025"
desc: I decided to torture/challenge myself to solve some weekly competitive programming problems in ARM Assembly on my Mac. This blog documents my struggles and success and why you should try it as well.
tags:
  - arm
  - macos
  - assembly
  - competitive programming
---

For some reason on a random night I decided to solve some competitive programming problems in assembly. I picked out an easy and a medium problem that I had already solved in Python and got to work.

# The Easy Problem

I've programmed in Assembly before for a Computer Architecture class but never set it up to work on my Mac. I used [this github](https://github.com/below/HelloSilicon) to help me setup and walk through the build process of ARM on Apple Silicon.

I copied the hello world program to start off with.

```asm
.global _main
.align 4

; Setup the parameters to print hello world and then call the Kernel to do it.
_main:
  mov x0, #1
  adr x1, helloworld  ; string to print
  mov x2, #13         ; length of our string
  mov x16, #4         ; Unix write system call
  svc #0x80           ; Call kernel to output the string

  ; exit program
  mov x0, #0    ; Use 0 return code
  mov x16, #1   ; System call number 1 terminates this program
  svc #0x80     ; Call kernel to terminate the program

helloworld:      .ascii  "Hello World!\n"
```

This worked super well and I was on my way to solve the easy problem.

## AArch64 struggles

The premise for the [easy problem](https://open.kattis.com/problems/lubbilaerir) was that you are given a string and you need to print out the first character of the string. I imported the `_getchar` method from C using `.extern _getchar` to make it easier.

<span class="split">

When you call `_getchar` the result gets stored in the x0/w0 register. We need to move the result to a buffer for it to be persistent in our program. To do this I just used a buffer of size 1.


```asm
buffer: .space 1 
```
</span>


<span class="split">

<span>

Ok seems simple enough, right? I wrote this code to test and I thought it would work. 

..._but_ I get a `zsh: bus error`. Meaning that a process tried to access memory that the CPU cannot physically address - i.e. an _invalid_ address.

To fix this I need to specify the `.data` and `.text` sections. 

</span>


```asm
.global _main
.align 4
.extern _getchar

_main: 
  ; reads a single character
  bl _getchar ; Result will be in x0

  adr x1, buffer ; store the address of the buffer in x1
  strb w0, [x1] ; store the char in the buffer location

  ; excluded to save space
  print: ...
  exit: ...

buffer: .space 1 ; We only need 1 byte for a single char
```
</span>


<span class="split">
Ok, easy enough, I do that and... now I get a assemble error 🫤

```ansi
as -arch arm64 -g -o lubbi.o lubbi.s
[0m[1mlubbi.s:11:3: [31merror:[0m[1m unknown AArch64 fixup kind!
[0m  adr x1, buffer
  [32m^
[0mmake: *** [assemble] Error 1
```

</span>

This problem took me a bit to figure out _and_ be satisfied with the answer. It turns out on AArch64 platforms (My Mac) there is a pretty strict limitation on the `adr` instruction. If `adr` references a symbol that's **not in a nearby memory location**, then there is no built-in way to adjust the instruction properly during linking.

The symbol that `adr` points to has to be within 1 MB of the instruction. This is super restrictive and is not preferred. The solution is to use the instruction `adrp`. This instruction allows us to reference a symbol within a relative space of 4 GB (it is unlikely to exceed 4 GB) -- [[1](https://stackoverflow.com/questions/65351533/apple-clang12-llvm-unknown-aarch64-fixup-kind)\] [[2](https://duetorun.com/blog/20230610/arm-adr-ldr/#adr_faster_than_indirect_ldr)\] [[3](https://devblogs.microsoft.com/oldnewthing/20220809-00/?p=106955)\].

Implementing that we get the following:

```asm
.text
.global _main
.align 4
.extern _getchar

_main: 
  ; reads a single character
  bl _getchar ; Result will be in x0

  adrp x1, buffer@PAGE
  add x1, x1, buffer@PAGEOFF
  strb w0, [x1] ; store the char in the buffer location

  ; excluded to save space
  print: ...
  exit: ... 
  
.data
buffer: .space 1 ; We only need 1 byte for a single char
```

`adrp` stands for Address Relative with Page Offset. This instruction is used to load the ***absolute page address*** of `buffer` into `x1`. It computes the address by loading the upper bits of the address, effectively discarding the lower 12 bits. The reason it does this is for efficient memory addressing; absolute addresses require large immediate value which wouldn't fit in a single instruction.

Using the `add x1, x1, buffer@PAGEOFF` we add the ***page offset*** to x1 to compute the full address of `buffer`. To clarify, `buffer@PAGEOFF` gives the offset into the page that the symbol is located in -- [[1](https://devblogs.microsoft.com/oldnewthing/20220809-00/?p=106955)\] [[2](https://stackoverflow.com/questions/38711058/how-to-find-the-offset-value-of-page-pageoff)\]

**Nice! 👍** This code works and we learned something new about the quirks our CPU architecture has.

# The Medium Problem

In the easy problem we solved all our issues with AArch64 and referencing our buffers. For the medium problem it was just knowing how to translate my logic from Python to ARM Assembly.

In the problem, you were given 2 strings. The first one is the text on a coffee mug and the second string is the transformations (horizontal/vertical flip or 180 degree rotation) the mug takes as it falls to the ground.

You are asked to find what the text will the look like to you right before it hits the ground. (Read about the problem [here](https://open.kattis.com/problems/kittenofchaos)).

My solution in Python took a few attempts to realize the trick, computing the final state and transform the string once or twice.

```py
h = {'b': 'd', 'q': 'p', 'd': 'b', 'p': 'q'}
v = {'b': 'p', 'q': 'd', 'd': 'q', 'p': 'b'}

x = [c for c in input()]
f = input()

# flip the string based on the mapping
def flip(s, mapping, flip=False):
    for i in range(len(s)):
        s[i] = mapping[s[i]]
    if flip:
        s.reverse()

horizontal, vertical = False, False
for c in f:
    if c == 'h':
        horizontal = not horizontal
    elif c == 'v':
        vertical = not vertical
    elif c == 'r':
        horizontal = not horizontal
        vertical = not vertical

if horizontal:
    flip(x, h, True)
if vertical:
    flip(x, v)

print(''.join(x))
```
## Solution
I'm not going to explain my assembly solution line by line, just some cool parts I learned.

<span class="split">

ARM did not have a logical negation instruction. I had to use this workaround which is a _bitwise XOR_ instruction. 

```asm
eor x1, x1, #1
```
</span>

Our assembly code is basically doing `x1 = x1 ^ 1` which negates it because of how XOR works.

The other piece of code I thought was very interesting was reversing the string. This is called when we need to apply the horizontal translation.

```asm
reverse_string_and_horiz:
    ; start and end indexes
    mov x11, #0
    mov x12, x19 ; x19 stores the length of the s string buffer (first string)
    sub x12, x12, #1 ; fix off by one error

    ; load s string address into x1
    adrp x1, s_buffer@PAGE
    add x1, x1, s_buffer@PAGEOFF

    reverse_loop:
        ldrb w24, [x1, x11] ; char at start of s
        ldrb w25, [x1, x12] ; char at end of s

        ; swap
        strb w24, [x1, x12]
        strb w25, [x1, x11]

        ; move pointers
        add x11, x11, #1
        sub x12, x12, #1

        ; check loop condition
        cmp x11, x12
        b.lt reverse_loop ; branch less than

    b apply_horizontal ; continue to apply the horizontal mapping
```

# Conclusion

I'm glad that I went on this journey looking into how to do things at the lowest level. It always makes you think about how much we take for granted in programming and how much is abstracted away.

The full solution and my Makefiles can all be found at my Github repository: [kattis-asm-solutions](https://github.com/wzid/kattis-asm-solutions)