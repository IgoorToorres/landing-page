import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Site.Set',
    description: 'Dicas e estratégias para impulsionar seu negócio',
    robots: 'index, follow',
    openGraph: {
        title: 'Blog',
        description: 'Dicas e estratégias para impulsionar seu negócio',
        url: 'https://rocketseat-nextjs-fundamentals.vercel.app/og-image.jpg',
        siteName: 'Site.Set',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: 'https://rocketseat-nextjs-fundamentals.vercel.app/og-image.jpg',
                width: 800,
                height: 600,
                alt: 'Site.Set'
            }
        ]
    }
}

export default function BlogListPage() {

    const sortedPosts = allPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <BlogList
            posts={sortedPosts}
        />
    )
}