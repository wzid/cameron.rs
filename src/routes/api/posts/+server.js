// @ts-nocheck
// src/routes/api/posts/+server.js
import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const filteredPosts = allPosts.filter((post) => !post.meta.draft);
    const sortedPosts = filteredPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));


	return json(sortedPosts);
};