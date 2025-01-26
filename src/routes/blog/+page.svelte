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

<h1 class="mb-8! py-0 text-4xl! sm:text-5xl!">Blog</h1>

<PostListing posts={data.posts} />
