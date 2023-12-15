---
title: Python sucks, and why I use it
date: '7-9-2023'
desc: Python is very slow to run but very fast to develop in. In this article, I discuss my experience with Python and why I use it despite its flaws.
tags:
    - python
    - programming
    - rust
    - c++
---

Recently I was contracted to work on a Discord bot written in Python. I'm no pythonista but I partake in some kool-aid now and then. Python boasts a lot of features like subpar performance, lack of static typing, forced indentation and random syntactic quirks. These features would normally push me to a more respectable language, but this time I did not have a choice.

# Python is slow

Python is **slow**. Incredibly, it is [**195x slower** than C++](https://github.com/kostya/benchmarks#brainfuck) by some metrics. Performance wise, it lags behind the herd, falling below all of the most commonly used languages and being one-upped by every new project (Julia, mojo, nim, etc).

Python is an interpreted language that is also single threaded by design. The code must be compiled into platform-independent **bytecode** *while running*. Bytecode is like machine code but instead of being executed by the CPU it is executed by the interpreter. Once the code is compiled then the interpreter reads this bytecode to translate it to machine code.

One of the numerous reasons why Python is slow is because of its design. Since Python compiles and interprets code at runtime it will always be slower than any binary application made in C++. I don't believe Python was ever meant to be a performance based language but many projects attempt to "*fix*" Python in this regard.

Projects like [Cython](https://cython.org/) circumvent the language entirely by allowing C constructs to be *sprinkled into* your Python. This superset of Python compiles your code to C to increase performance. Although Cython is a very interesting project and feat of engineering, it cannot be used to fully replace Python.

A somewhat logical conclusion from the analysis of Python's performance is that "**Python sucks**." After all, if something is slow why would you ever want to use it. I mean, C++ is **195x faster**? Seems like C++ would be the obvious choice. It makes no sense to code in a language that produces slow products.

# Python is fast

While Python boasts the *features* I mentioned earlier, it is **extremely fast** in one regard. In fact, it is **75% faster** than C++ when you compare the time needed to develop a solution to a problem. Although Python scripts may not run as quickly as those written in other languages, they can be developed much more quickly. This bar graph displays the median hours of code needed to create a string processing program (taken from [this paper](http://www.connellybarnes.com/documents/language_productivity.pdf)).

![Median hours to code graph](https://www.monterail.com/hs-fs/hubfs/Is%20Python%20Slow-2.png?width=1534&name=Is%20Python%20Slow-2.png)

# My Experience

I was tasked with creating a Discord Bot entirely in Python. I expected that this thing was going to be slow. A bit of a bummer, as my most recent project was an [interpreter in Rust](https://github.com/wzid/monkey-rs) and I was all about performant code designed in a sexy language (Rust). My Python development experience was limited to a few scripts and some competitive programming, and the thought of more Python failed to excite. Nevertheless, I trudged onward. 

This project soon turned into an eye opening journey. Something that normally would have taken 30+ minutes in Rust, fighting with the borrow checker (I'm still somewhat new) and grappling with lifetimes, only took 15 minutes! Development speed was incredibly faster in Python. This project became **exhilarating**, and I found a new love for programming. I was able to ship the product extremely fast, including time for testing. I completed the project so quickly that the client was impressed and gave me a generous bonus.

My Discord bot built in Python was *probably* slower than anything I could have built in Rust. Rust has a ton of amazing language features that I could talk about for days and performs on par with C++. So, did I create a slow product that was doomed to fail?

No.

To be frank, you can't notice that it's slow. I was able to build a fully working product in a speedy fashion, I loved doing it, and the customer loved the product. Something like Rust wasn't necessary for this use-case.

This kind of project shined a new light on Python for me, as well as other languages like Go. I had heard about Go's ability to ship fast from [MelkeyDev](https://twitter.com/MelkeyDev), but I never realized why that could possibly matter. After all, I can develop in Rust fast enough and when I finish the Rust project it will probably be more performant than the Go or Python project. I was completely blind to the experience of developing in a language that is designed to ship fast. This experience has changed my perspective on programming languages and I hope it will change yours too. I know too many developers who are stuck in their ways and refuse to learn or use new languages because they are "slow" or "bad."

# No language is without flaws

Using performance metrics to measure the success of a language is an arbitrary characteristic when deciding on smaller projects. Python is performant enough most of the time. Projects like automation tools, Data Analytics, and more can all be accomplished in Python. I do not think we should have developers thinking they are better than others because they program in a harder language instead of a "baby language" like Python. If that were true, the most pious software engineers would be using APL to develop their front-end frameworks. That's such a naive take and I challenge those individuals to deliver a fully functional product in the same timeframe as a Python developer.

![APL Code](https://computerhistory.org/wp-content/uploads/2012/10/APLSC_matrix.jpg)

Python is not the best language for every project. I would not recommend using Python for high performance applications or larger projects. Python's strength lies in its efficiency during development rather than in raw performance. Attempting to optimize Python for speed often leads to disappointment. Python is designed to be fast to develop in, and it excels in that regard.