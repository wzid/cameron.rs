<script>
	export let data;
</script>

<h1 class="layout-md pt-0 pb-0 text-5xl mb-8">Blog</h1>

<div class="layout-md flex flex-col gap-6">
	{#each data.posts as post}
	<div>
		<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
			<h2 class="text-3xl my-0">
				<a class="link-hidden" href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			<p class="pt-0 text-lg">Published <span class="text-white">{post.meta.date}</span></p>

		</div>
		<p>{post.meta.desc}</p>
	</div>
	{/each}
</div>