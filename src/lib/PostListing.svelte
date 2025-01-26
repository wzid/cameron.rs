<script lang="ts">
  import type { Post } from "$types";

  let { posts }: { posts: Post[] } = $props();
</script>

<div class="flex flex-col gap-6">
  {#each posts as post}
    <div>
      <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h2 class="my-0! text-2xl! sm:text-3xl!">
          <a class="link-hidden" href="/blog/{post.postSlug}">
            {post.meta.title}
          </a>
        </h2>
        <p class="pt-0 sm:text-lg">
          Published <span class=" ">{post.meta.date}</span>
        </p>
      </div>
      <div class="space-x-2 py-1">
        {#each post.meta.tags as tag}
          <a
            href="/blog/tag/{tag}"
            class="rounded-xl bg-neutral-300 px-2 text-base text-neutral-600 transition-colors hover:bg-neutral-400 hover:text-neutral-700 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600 dark:hover:text-neutral-300"
          >
            #{tag}
          </a>
        {/each}
      </div>
      <p>{post.meta.desc}</p>
    </div>
  {/each}
</div>
