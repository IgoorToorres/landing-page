import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
    params: Promise<{
        slug: string;
    }>
}

//revalidar rotas de 1 em 1 minuto
export const revalidate = 60;

//caso usuario tente acessar uma rota que nao foi gerada em build ele tenta procurar a rota sem dar erro 404
export const dynamicParams = true;


export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author.name }],
        robots: 'index, follow',
        openGraph: {
            images: [post.image]
        }
    }
}

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug
    }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {

    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <PostPage
            post={post}
        />
    )
}