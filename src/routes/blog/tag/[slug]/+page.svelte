<script>
	export let data;
    let { tag, posts } = data;
	import PostListing  from '$lib/PostListing.svelte';
</script>

<svelte:head>
    <title>blog - #{tag}</title>
    <meta name="description" content="My personal website where you can learn about me, see my resume, and some stuff that I've written" />
    <meta name="og:title" content="Cameron Kauffman - Blog #{tag}" />
    <meta name="og:description" content="My personal website where you can learn about me, see my resume, and some stuff that I've written" />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://cameron.rs" />
    <meta name="og:site_name" content="cameron.rs"/>
    <meta name="twitter:title" content="Cameron Kauffman - Blog #{tag}" />
    <meta name="twitter:description" content="My personal website where you can learn about me, see my resume, and some stuff that I've written" />
</svelte:head>

<div class="flex items-center mb-8 mt-2">
	<a href="/blog" class="text-black dark:text-white font-bold pt-0 pb-0 text-4xl sm:text-5xl">Blog</a>
	<h2 class="ml-4 px-2 py-1 w-fit rounded-xl bg-neutral-300 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400 leading-none">#{tag}</h2>
</div>

<PostListing posts={posts} />

