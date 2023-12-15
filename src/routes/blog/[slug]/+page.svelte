<!-- Alternate approach! 👀 -->
<script>
	export let data;
	import '../markdown.css';
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.desc} />
    <meta name="og:title" content={data.title} />
    <meta name="og:description" content={data.desc} />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://cameron.rs" />
    <meta name="og:site_name" content="cameron.rs/blog"/>
    <meta name="twitter:title" content={data.title} />
    <meta name="twitter:description" content={data.desc} />
</svelte:head>

<article class="text-xl">
	<header class="mb-4">
		<h1 class="text-4xl my-0 py-0">{data.title}</h1>
        <div class="text-lg pt-1">
            <p class="pt-0 inline text-lg">Posted: {data.date}</p>
            <div class="pl-2 inline space-x-2">
                {#each data.tags as tag}
                    <a href="/blog/tag/{tag}" class="tag">#{tag}</a>
                {/each}
            </div>
        </div>
	</header>
	<div class="markdown">
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="postcss">
    .tag {
        @apply px-2 rounded-xl text-base bg-neutral-300 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400;
        @apply transition-colors hover:bg-neutral-400 hover:text-neutral-700 hover:dark:bg-neutral-600 hover:dark:text-neutral-300;
    }
</style>
