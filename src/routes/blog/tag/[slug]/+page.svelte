<script lang="ts">
    let { tag, posts } = data;
    import PostListing from "$lib/PostListing.svelte";
    let { data } = $props();
</script>

<svelte:head>
    <title>blog - #{tag}</title>
    <meta
        name="description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
    <meta name="og:title" content="Cameron Kauffman - Blog #{tag}" />
    <meta
        name="og:description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://cameron.rs" />
    <meta name="og:site_name" content="cameron.rs" />
    <meta name="twitter:title" content="Cameron Kauffman - Blog #{tag}" />
    <meta
        name="twitter:description"
        content="My personal website where you can learn about me, see my resume, and some stuff that I've written"
    />
</svelte:head>

<div class="mb-8 mt-2 flex items-center">
    <a href="/blog" class="pb-0 pt-0 text-4xl font-bold text-black sm:text-5xl dark:text-white">Blog</a>
    <h2
        class="ml-4 w-fit rounded-xl bg-neutral-300 px-2 py-1 leading-none text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400"
    >
        #{tag}
    </h2>
</div>

<PostListing {posts} />
