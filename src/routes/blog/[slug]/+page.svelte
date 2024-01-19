<!-- Alternate approach! 👀 -->
<script>
	export let data;
    import Icon from '@iconify/svelte';
	import '../markdown.css';
	import '../prismtheme.css';
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
        {#if data.draft}
            <span class="px-2 rounded-xl text-lg bg-emerald-500 text-emerald-100">Draft</span>
        {/if}
        <div class="text-lg pt-1">
            <p class="pt-0 inline text-lg">Posted: {data.date}</p>
            <div class="sm:pl-2 inline space-x-2">
                {#each data.tags as tag}
                    <a href="/blog/tag/{tag}" class="tag">#{tag}</a>
                {/each}
            </div>
        </div>
	</header>
	<div class="markdown">
		<svelte:component this={data.content} />
	</div>
    <div class="my-8 border-l-2 rounded-xl border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 pl-4 p-2">
        <h2>👋 Thanks for reading!</h2>
        <p>If you enjoyed this post, then consider sharing it and/or following me on Github.</p>
        <!-- <p>I am also currently <b>looking for an internship</b>, so please <a class="link" href="mailto:me@cameron.rs">contact me</a> with any opportunities</p> -->
        <div class="flex gap-4 mb-2 mt-4">
            <a class="flex items-center text-xl w-fit bg-[#1D9BF0] hover:bg-[#198CD8] transition-colors rounded-lg py-1 px-2 text-blue-100 gap-2" target="_blank" href="https://twitter.com/intent/tweet?text=I+just+read+{data.title}+by+%40cameronkffn+%F0%9F%91%87+https%3A%2F%2Fcameron.rs%2Fblog%2F{data.slug}">
                <Icon icon="simple-icons:x" width="14" height="14" />
                Tweet
            </a>
            <a class="flex items-center text-xl w-fit bg-[#02040A] hover:bg-neutral-900 transition-colors rounded-lg py-1 px-2 text-blue-100 gap-2" target="_blank" href="https://github.com/wzid">
                <Icon icon="mdi:github" width="18" height="18" />
                Follow
            </a>
        </div>
    </div>
</article>

<style lang="postcss">
    .tag {
        @apply px-2 rounded-xl text-base bg-neutral-300 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400;
        @apply transition-colors hover:bg-neutral-400 hover:text-neutral-700 hover:dark:bg-neutral-600 hover:dark:text-neutral-300;
    }
</style>
