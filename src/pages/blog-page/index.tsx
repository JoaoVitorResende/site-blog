import { allPosts } from "@/contentlayer";
import { BlogList, type BlogListProps } from "@/Templates/blog/blog-list";
import { GetStaticProps } from "next";

export default function BlogPage({posts}: BlogListProps){
    return(
        <BlogList posts={posts}/>
    )
}

export const getStaticProps = (async() => {
    const sortedPosts = allPosts.sort(
        (a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return{
        props:{
            posts: sortedPosts
        },
    }
}) satisfies GetStaticProps