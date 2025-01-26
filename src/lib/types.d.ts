export interface Post {
  meta: {
    title: string;
    date: string;
    desc: string;
    tags: string[];
    draft?: boolean;
  };
  postSlug: string;
}
