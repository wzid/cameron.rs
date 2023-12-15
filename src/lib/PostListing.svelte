<script>
    export let posts;
</script>

<div class="flex flex-col gap-6">
	{#each posts as post}
	<div>
		<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
			<h2 class="text-2xl sm:text-3xl my-0">
				<a class="link-hidden" href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			<p class="pt-0 sm:text-lg">Published <span class="text-black dark:text-white">{post.meta.date}</span></p>
		</div>
		<div class="space-x-2 py-1">
			{#each post.meta.tags as tag}
				<a href="/blog/tag/{tag}" class="tag">#{tag}</a>
			{/each}
		</div>
		<p>{post.meta.desc}</p>
	</div>
	{/each}
</div>

<style lang="postcss">
    .tag {
        @apply px-2 rounded-xl text-base bg-neutral-300 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400;
        @apply transition-colors hover:bg-neutral-400 hover:text-neutral-700 hover:dark:bg-neutral-600 hover:dark:text-neutral-300;
    }
</style>