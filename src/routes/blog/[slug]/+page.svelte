<!-- Alternate approach! 👀 -->
<script lang="ts">
  import Icon from "@iconify/svelte";
  import "../markdown.css";
  import "../prismtheme.css";
  import Meta from "$lib/Meta.svelte";
  let { data } = $props();
</script>

<Meta
  title="cameron.rs - {data.title}"
  desc={data.desc}
  keywords="blog, cameron, compilers, python, software engineering, liberty, university, rust, liberty university, {data.tags.join(", ")}"
/>

<article class="text-xl">
  <header class="mb-4">
    <h1 class="my-0 py-0 text-4xl">{data.title}</h1>
    {#if data.draft}
      <span class="rounded-xl bg-emerald-500 px-2 text-lg text-emerald-100">Draft</span>
    {/if}
    <div class="pt-1 text-lg">
      <p class="inline pt-0 text-lg">Posted: {data.date}</p>
      <div class="inline space-x-2 sm:pl-2">
        {#each data.tags as tag}
          <a href="/blog/tag/{tag}" class="rounded-xl bg-neutral-300 px-2 text-base text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400 transition-colors hover:bg-neutral-400 hover:text-neutral-700 dark:hover:bg-neutral-600 dark:hover:text-neutral-300">#{tag}</a>
        {/each}
      </div>
    </div>
  </header>
  <div class="markdown">
    <data.content />
  </div>
  <div
    class="my-8 rounded-xl border-l-2 border-neutral-300 bg-neutral-200 p-2 pl-4 dark:border-neutral-700 dark:bg-neutral-800"
  >
    <h2>👋 Thanks for reading!</h2>
    <p>If you enjoyed this post, then consider sharing it and/or following me on Github.</p>
    <!-- <p>I am also currently <b>looking for an internship</b>, so please <a class="link" href="mailto:me@cameron.rs">contact me</a> with any opportunities</p> -->
    <div class="mt-4 mb-2 flex gap-4">
      <a
        class="flex w-fit items-center gap-2 rounded-lg bg-[#1D9BF0] px-2 py-1 text-xl text-blue-100 transition-colors hover:bg-[#198CD8]"
        target="_blank"
        href="https://twitter.com/intent/tweet?text=I+just+read+{data.title}+by+%40cameronkffn+%F0%9F%91%87+https%3A%2F%2Fcameron.rs%2Fblog%2F{data.slug}"
      >
        <Icon icon="simple-icons:x" width="14" height="14" />
        Tweet
      </a>
      <a
        class="flex w-fit items-center gap-2 rounded-lg bg-[#02040A] px-2 py-1 text-xl text-blue-100 transition-colors hover:bg-neutral-900"
        target="_blank"
        href="https://github.com/wzid"
      >
        <Icon icon="mdi:github" width="18" height="18" />
        Follow
      </a>
    </div>
  </div>
</article>