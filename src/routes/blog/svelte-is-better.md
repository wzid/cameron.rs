---
title: Svelte is better for beginners
date: 12-17-2023
desc: Svelte has recently become near and dear to me. I would like to explain the hype around this frontend framework and why it makes sense
tags:
  - programming
  - svelte
  - beginners
---
Hi, I'm Cameron, and welcome to my Ted Talk. I'm here to shout my opinion about frontend frameworks into the endless void of hot takes and terrible opinions. I firmly believe that anyone learning frontend web development should start with Svelte rather than React.

# What is a Svelte?
The word Svelte is from French, *svelt*, meaning "slim, slender". Which is the perfect description for a framework that prides itself on minimalist design.

Svelte was first released in 2016 and recently updated to version 4 in June of this year. I first discovered Svelte around a month ago after seeing it featured in a [YouTube video](https://www.youtube.com/watch?v=bh-e700IlmQ) by ThePrimeagen.

My first application in Svelte was a website that replays a competitive programming competition leaderboard on [Kattis](https://open.kattis.com). On the same day that I started that project, I also finished it. Using Svelte that day made me feel like a superhero. I had informed my competition team about the tool I was going to make for us, and was able to release it to them on the same day, something I don't think would have been possible if I started out learning a framework like React.

# My experience with React
My first experience with frontend development was using React for my university's competitive programming club [website](https://lucpc.org). Jumping into the codebase was quite the cold shower. When searching for help on the React website you can find some pretty good tutorials to help you learn. After a week, you should have a firm grasp on most of the concepts that React offers.

Sure, React's fundamentals aren't impossible, but its approach to building UIs deviates significantly from traditional development. This is something I feel like Svelte stays close to.

# What's the difference maker?
There are two points I would like to raise on what makes Svelte so much better for beginners.
## Tutorial Website
Holy crap. The way that Svelte has structured their tutorial website and documentation is top tier.

When you go to their [tutorial page](https://learn.svelte.dev) it greets you with some instructions on the left and an IDE on the right. Almost like the layout for [Leetcode](https://leetcode.com).

![Svelte's tutorial website](https://s6.imgcdn.dev/VXRqK.png)
Their tutorial series consists of 4 parts with each having different lessons all separated by categories.

![List of Svelte's subcategories of tutorials](https://s6.imgcdn.dev/VXfuo.png)
Sure, React also has a tutorial on their website. In no way is that tutorial better than Svelte's. React has structured their tutorial through documentation rather than an interactive layout like Svelte's.

![React's website for teaching](https://s6.imgcdn.dev/VXt1O.png)
This may just be personal preference, but when I was learning React, I would have loved something like Svelte's tutorials where every concept could be treated like a Leetcode problem that I needed to solve. It's just how my brain works. I believe that this the style of learning is the most productive when it comes to teaching something new in programming.

## Simplicity
Ahhh! I can't get over the simplicity of this framework. Everything just makes sense. You want to make a component that adds two numbers together?

```svelte
<script>
let a = 0, b = 0;
</script>

<input type="number" bind:value={a} />
<input type="number" bind:value={b} />
<p>{a + b}</p>
```
**Boom! There it is!**

Now switch to React:

```jsx
import { useState } from 'react';

export default () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	return (
		<input type="number" value={a} onChange={(e) => setA(e.target.value)} />
		<input type="number" value={a} onChange={(e) => setB(e.target.value)} />
		<p>{parseInt(a) + parseInt(b)}</p>
	)
}
```
My brother in Christ... There is no debate. From someone who used to be a React fanboy, the Svelte code is:
1. Easier to read
2. More enjoyable to write
3. **Simple!**

As a beginner, starting out with React, my first thoughts when reading react code were:
1. what

There is just too much verbosity for something that really can be much simpler.

**Sure,** at times verbosity is needed, no not you Java (I have 3 years of pain with Java 😭). When learning something like frontend for the first time, the verbosity can be overwhelming at times and thats the last thing you would want when trying something new.

# Conclusion
I've since gone on to rewrite **this website** in Svelte and I love it. As a beginner, being able to learn even more about this framework has been exhilarating for me. Some of you may argue that Svelte has a smaller community and a smaller job market. To that I argue, not everything you learn will help you get a job and the community is ever growing along with the ecosystem. Be fun and learn Svelte to help you understand the basics of frontend development with components and reactivity.

Svelte has a lot going for it and as a proud adopter I am excited for the future of Svelte.

View the Svelte tutorial [here](https://learn.svelte.dev).