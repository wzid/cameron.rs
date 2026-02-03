<script lang="ts">
  import Icon from "@iconify/svelte";
  import "../markdown.css";
  import Meta from "$lib/Meta.svelte";
  let { data } = $props();
</script>

<Meta
  title="cameron.rs - {data.title}"
  desc={data.desc}
  slug={`/blog/${data.slug}`}
  author="Cameron Kauffman"
  keywords="{data.tags.join(", ")} blog, cameron, compilers, software engineering, liberty university"
/>

<article class="text-xl">
  <header class="mb-6 pb-6 border-b border-neutral-700/50">
    <h1 class="my-0! py-0! text-4xl tracking-tight">{data.title}</h1>
    {#if data.draft}
      <span class="inline-block mt-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-0.5 text-sm text-emerald-400">Draft</span>
    {/if}
    <div class="text-lg mt-3">
      <p class="inline pt-0 text-neutral-500">Published <span class="font-medium text-neutral-400">{data.date}</span></p>
      <div class="flex flex-wrap gap-2 py-2">
        {#each data.tags as tag}
          <a href="/blog/tag/{tag}" class="rounded-full px-2.5 py-0.5 text-sm bg-neutral-700/50 text-neutral-400 transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-400">#{tag}</a>
        {/each}
      </div>
    </div>
  </header>
  <div class="markdown">
    <data.content />
  </div>
  <div class="flex w-full justify-start">
    <div class="w-fit my-10 rounded-xl border px-5 py-4 border-neutral-700/50 bg-gradient-to-br from-neutral-800/80 to-neutral-800/50 backdrop-blur-sm">
      <div class="flex items-center justify-between gap-6 pb-2">
        <h2 class="my-0!">👋 Thanks for reading!</h2>
        <a
          class="flex items-center gap-2 rounded-full bg-neutral-900 border border-neutral-700 px-3 py-1.5 text-base text-neutral-300 transition-all duration-300 hover:border-neutral-600 hover:text-white hover:bg-neutral-800"
          target="_blank"
          href="https://github.com/wzid"
        >
          <Icon icon="mdi:github" width="18" height="18" />
          Follow
        </a>
      </div>
      <p class="text-lg text-neutral-400">If you enjoyed this post, consider sharing it or following me on GitHub.</p>
    </div>
  </div>
</article>