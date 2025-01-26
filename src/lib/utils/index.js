// @ts-nocheck
export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("/src/blog-posts/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      // must adjust this everytime you change the path of the blog posts
      const postSlug = path.slice(16, -3);

      return {
        meta: metadata,
        postSlug: postSlug,
      };
    }),
  );

  return allPosts;
};

export function timeAgo(dateInput) {
  const date = new Date(dateInput);
  const now = new Date();
  const diffInTime = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
  const months = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
  const years = Math.floor(months / 12);
  
  if (years > 0) {
    return years === 1 ? `${years} year ago` : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? `${months} month ago` : `${months} months ago`;
  } else if (diffInDays === 0) {
    return "Today";
  } else {
    return diffInDays === 1 ? `${diffInDays} day ago` : `${diffInDays} days ago`;
  }
}
