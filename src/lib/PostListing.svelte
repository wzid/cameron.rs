<script lang="ts">
  import type { Post } from "$types";

  let { posts }: { posts: Post[] } = $props();
</script>

<div class="flex flex-col gap-4">
  {#each posts as post}
    <a 
      href="/blog/{post.postSlug}"
      class="group block p-5 rounded-xl border transition-all duration-300 ease-out border-neutral-700/50 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-800 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
    >
      <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h2 class="my-0! text-2xl! sm:text-3xl! text-white group-hover:text-emerald-400 transition-colors duration-300">
          {post.meta.title}
        </h2>
        <p class="pt-0 text-neutral-500 sm:text-lg">
          <span class="font-medium text-neutral-400">{post.meta.date}</span>
        </p>
      </div>
      <div class="flex flex-wrap gap-2 py-2">
        {#each post.meta.tags as tag}
          <span
            class="rounded-full px-2.5 py-0.5 text-sm transition-all duration-300 bg-neutral-700/50 text-neutral-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400"
          >
            #{tag}
          </span>
        {/each}
      </div>
      <p class="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">{post.meta.desc}</p>
    </a>
  {/each}
</div>