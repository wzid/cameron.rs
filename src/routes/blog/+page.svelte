<script lang="ts">
  import PostListing from "$lib/PostListing.svelte";
  import type { Post } from "$types";
  import Meta from "$lib/Meta.svelte";
  let { data }: { data: { posts: Post[] } } = $props();
</script>

<Meta
  title="cameron.rs - blog"
  desc="My blog where you can view some stuff that I've written"
  keywords="blog, cameron, compilers, python, software engineering, liberty, university, rust, liberty university"
/>

<div class="mb-10">
  <h1 class="mb-2! py-0 text-4xl! sm:text-5xl! tracking-tight">Blog</h1>
  <p class="text-lg text-neutral-500">Thoughts on programming, compilers, and more</p>
</div>

<PostListing posts={data.posts} />
