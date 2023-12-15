export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, desc, tags } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		desc,
		tags
	};
}