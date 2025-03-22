<script lang="ts">
  import Icon from "@iconify/svelte";
  import "../markdown.css";
  import Meta from "$lib/Meta.svelte";
  let { data } = $props();
</script>

<Meta
  title="cameron.rs - {data.title}"
  desc={data.desc}
  keywords="{data.tags.join(", ")} blog, cameron, compilers, software engineering, liberty university"
/>

<article class="text-xl">
  <header class="mb-2">
    <h1 class="my-0! py-0! text-4xl">{data.title}</h1>
    {#if data.draft}
      <span class="rounded-xl bg-emerald-500 px-2 text-lg text-emerald-100">Draft</span>
    {/if}
    <div class="text-lg">
      <p class="inline pt-0 text-lg">Posted: <span class="font-semibold">{data.date}</span></p>
      <div class="flex flex-wrap gap-2 py-1">
        {#each data.tags as tag}
          <a href="/blog/tag/{tag}" class="rounded-xl px-2 text-base bg-neutral-700 text-neutral-400 transition-colors hover:bg-neutral-600 hover:text-neutral-300">#{tag}</a>
        {/each}
      </div>
    </div>
  </header>
  <div class="markdown">
    <data.content />
  </div>
  <div class="flex w-full justify-center">
    <div class="w-fit pr-4 my-8 rounded-xl border p-2 pl-4 border-neutral-700 bg-neutral-800">
      <h2>👋 Thanks for reading!</h2>
      <p class="text-lg">If you enjoyed this post, then consider sharing it and/or following me on Github.</p>
      <div class="mt-2 mb-2 flex gap-4">
        <a
          class="flex items-center gap-2 rounded-lg bg-[#1D9BF0] px-2 text-lg text-blue-100 transition-colors hover:bg-[#198CD8]"
          target="_blank"
          href="https://twitter.com/intent/tweet?text=I+just+read+{data.title}+by+%40cameronkffn+%F0%9F%91%87+https%3A%2F%2Fcameron.rs%2Fblog%2F{data.slug}"
        >
          <Icon icon="simple-icons:x" width="13" height="13" />
          Tweet
        </a>
        <a
          class="flex items-center gap-2 rounded-lg bg-[#02040A] px-2 py-1 text-lg text-blue-100 transition-colors hover:bg-neutral-900"
          target="_blank"
          href="https://github.com/wzid"
        >
          <Icon icon="mdi:github" width="18" height="18" />
          Follow
        </a>
      </div>
    </div>
  </div>
</article>