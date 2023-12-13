<!-- Alternate approach! 👀 -->
<script>
	export let data;
	import '../markdown.css';
</script>

<article class="text-xl">
	<header class="mb-4">
		<h1 class="text-4xl my-0 py-0">{data.title}</h1>
		<p class="pt-0 text-lg">Posted: {data.date}</p>
	</header>
	<div class="markdown">
		<svelte:component this={data.content} />
	</div>
</article>
