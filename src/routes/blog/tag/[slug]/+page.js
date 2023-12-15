import { fetchMarkdownPosts } from '$lib/utils';

export const load = async ({ params }) => {
	const allPosts = await fetchMarkdownPosts();
    const tag = params.slug;
	
    let filteredPosts = allPosts;

    filteredPosts = allPosts.filter(post => post.meta.tags.includes(tag));

    // @ts-ignore
    const sortedPosts = filteredPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

	return {
		posts: sortedPosts,
		tag: params.slug
	};
};