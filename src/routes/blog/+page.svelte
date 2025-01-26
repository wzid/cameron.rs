<script lang="ts">
    import PostListing from "$lib/PostListing.svelte";
    import type { Post } from "$lib/types";
    let { data }: { data: { posts: Post[] } } = $props();
</script>

<svelte:head>
    <title>blog</title>
    <meta
        name="description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
    <meta name="og:title" content="Cameron Kauffman - Blog" />
    <meta
        name="og:description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://cameron.rs" />
    <meta name="og:site_name" content="cameron.rs" />
    <meta name="twitter:title" content="Cameron Kauffman - Blog" />
    <meta
        name="twitter:description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
</svelte:head>

<h1 class="mb-8 py-0 text-4xl sm:text-5xl">Blog</h1>

<PostListing posts={data.posts} />
