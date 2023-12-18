---
title: Why do people (me) use Svelte
date: 12-15-2023
desc: Svelte has recently become near and dear to me. I would like to explain the hype around this frontend framework and why it makes sense
tags:
  - programming
  - talk
  - svelte
draft: true
---


The word Svelte is from French, *svelt*, meaning "slim, slender". Which is the perfect description for this framework that prides itself on minimalist design. Svelte is very fresh take on frontend frameworks with its unique approach and cool name.

# How I discovered Svelte
As I was browsing on Twitter/X I saw a post about [NativeScript](https://nativescript.org/), a way to use javascript to interact with native mobile APIs. Upon discovering the tool I decided to join their discord and it asked me which framework I would like to pick.

![NativeScript Discord](https://s6.imgcdn.dev/VH5yl.png)

I saw this when joining their discord and was wondering why it emphasized that the person who chooses Svelte is a minimalist. Thus began my journey into watching every video and doing various tutorials about Svelte.

# Why do I like Svelte
My background in frontend frameworks consists of React and Next.js (which are the same thing essentially). So coming from those frameworks it was a pretty different change to learn Svelte. Unlike jumping from Python to Rust, jumping from one framework to another is actually doable in a day or two.

After the initial hurdles, I began to really see the difference in developing in Svelte. Things like making components were as simple as this:


```svelte
<script>
export let name;
</script>

<h1>{name}</h1>
```

and then importing the component:


```svelte
<script>
import HeaderName from '$lib/HeaderName.svelte'
</script>
```

To conclude, In a world full of verbose frameworks, be a Svelte.
