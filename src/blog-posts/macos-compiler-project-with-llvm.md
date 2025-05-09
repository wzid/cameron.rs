---
title: Setting up a Compiler Project with LLVM on MacOS
date: "3-21-2025"
desc: I found a stark lack of resources on how to setup a compiler project that emits LLVM on MacOS. This blog shows you how to setup a structure for a project that compiles code and emits LLVM.
tags:
  - compiler
  - macos
  - llvm
---

Over spring break I had tried to start a compiler project that emits LLVM IR. I had a terribly hard time finding information about how to setup the Makefile and the project structure specifically for MacOS. I got it working by a lot of research and some help from [Claude](https://claude.ai/).

# Setup

> This tutorial assumes you have [homebrew](https://brew.sh) installed

You are going to need the Developer Tools for MacOS. You can install it by running the following command in your terminal.

```bash
xcode-select --install
```

> There are going to be a couple times every year where you will have to update these tools through the settings app.

<span class="split" style="gap: 8rem">

You will have to also install the LLVM tools through brew.

```bash
brew install llvm
```
</span>

You may be good to go once installed, but for further use of the tools that LLVM provides you may have to add it to your **PATH** variable.


The way that I did it was by modifying my `~/.zshrc` file. I added this to the end of my file.

```bash
export PATH="/opt/homebrew/opt/llvm/bin:$PATH"
```

You should be good to go now! 

If you end up with problems following this article, please don't hesitate to [email me](mailto:me@cameron.rs) with your problems so I can update this blog to adjust the setup process.

## Directory Structure

<span class="split">

<span>

This is the directory structure you should setup. Try to setup your project as a git project because version control never hurt anyone.

The `src` directory is where all your `*.c` files will go and the `include` directory will contain all your header files (`*.h`).

</span>

```
├── Makefile
├── include
│   └── lexer.h
└── src
    ├── lexer.c
    └── main.c
```
</span>

# The Makefile

This is the most important part of this setup and took me forever to figure out.

```make
# Find source files and generate object file paths
SRC_FILES = $(wildcard src/*.c)
OBJ_FILES = $(patsubst src/%.c,obj/%.o,$(SRC_FILES))

# Output executable
TARGET = bin/mycompiler

.PHONY: all clean

all: $(TARGET)

$(TARGET): $(OBJ_FILES) | bin
	clang $^ -o $@ $(shell llvm-config --ldflags --libs core)

obj/%.o: src/%.c | obj
	clang -Wall -Wextra $(shell llvm-config --cflags) -I./include -c $< -o $@

bin obj:
	mkdir -p $@

clean:
	rm -rf obj bin
```

The above code should allow you to code in an enviornment that imports LLVM header files.

One other thing I had to add for my VSCode to stop yelling at me is to modify my includePath in vscode

This is what my `.vscode/c_cpp_properties.json` file looks like:

```json
{
  "configurations": [
    {
      "name": "Mac",
      "includePath": [
        "${workspaceFolder}/**",
        "/opt/homebrew/opt/llvm/include/*"
      ],
      "defines": [],
      "macFrameworkPath": [
        "/Library/Developer/CommandLineTools/SDKs/MacOSX15.sdk/System/Library/Frameworks"
      ],
      "compilerPath": "/opt/homebrew/opt/llvm/bin/clang",
      "cStandard": "c17",
      "intelliSenseMode": "macos-clang-arm64"
    }
  ],
  "version": 4
}
```

Hope this helps! I used this setup for my [spunc language](https://github.com/wzid/spunc).