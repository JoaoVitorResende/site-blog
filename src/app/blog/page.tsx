import { allPosts } from "@/contentlayer";
import { BlogList } from "@/Templates/blog/blog-list";

export default function BlogListPage() {
    const sortedPosts = allPosts.sort(
        (a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return <BlogList posts={sortedPosts}/>
}
