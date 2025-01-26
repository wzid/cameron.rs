<script lang="ts">
  import PostListing from "$lib/PostListing.svelte";
  import Meta from "$lib/Meta.svelte";
  let { data } = $props();
  let { tag, posts } = data;
</script>

<Meta
  title="cameron.rs - blog #{tag}"
  desc="My blog where you can view some stuff that I've written"
  keywords="blog, cameron, compilers, python, software engineering, liberty, university, rust, liberty university, {tag}"
/>

<div class="mt-2 mb-8 flex items-center">
  <a href="/blog" class="pt-0 pb-0 text-4xl font-bold text-black sm:text-5xl dark:text-white">Blog</a>
  <h2
    class="ml-4 w-fit rounded-xl bg-neutral-300 px-2 py-1 leading-none text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400"
  >
    #{tag}
  </h2>
</div>

<PostListing {posts} />
