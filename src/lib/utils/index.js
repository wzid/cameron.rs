// @ts-nocheck
export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export function timeAgo(dateInput) {
    const date = new Date(dateInput);
    const now = new Date();
    const months = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
    const years = Math.floor(months / 12);

    if (years > 0) {
        return years === 1 ? `${years} year ago` : `${years} years ago`;
    } else {
        return months === 1 ? `${months} month ago` : `${months} months ago`;
    }
}