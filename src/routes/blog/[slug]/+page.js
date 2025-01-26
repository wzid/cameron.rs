export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, date, desc, tags } = post.metadata;
  const content = post.default;
  const draft = post.metadata.draft ? true : false;

  return {
    content,
    title,
    date,
    desc,
    tags,
    draft,
    slug: params.slug,
  };
}
