import { Search } from "@/components/search";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./post-grid-card";
import { allPosts, Post } from "contentlayer/generated";
import { useRouter } from "next/router";
import { Inbox } from "lucide-react";



export function BlogList() {

    const router = useRouter();
    const query = router.query.q as string
    const pageTitle = query
        ? `Buscando pelo post: ${query}`
        : "Dicas e estratégias para impulsionar seu negócio";

    const posts = query ? allPosts.filter((post) => post.title.toLocaleLowerCase()?.includes(query.toLocaleLowerCase())) : allPosts;

    const hasPosts = posts.length > 0;

    return (
        <div className="flex flex-col py-24 flex-grow h-full">

            {/** TAG */}
            <header className="pb-14">
                <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
                    <div className="flex flex-col gap-4 md:px-0">
                        <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300 ">BLOG</span>

                        {/** TITULO */}
                        <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">{pageTitle}</h1>
                    </div>

                    {/** SEARCH */}
                    <Search />

                </div>

            </header>

            {/** LISTAGEM DE POSTS */}
            {hasPosts ? (
                <PostGridCard>
                    {posts.map((post) => (
                        <PostCard
                            key={post._id}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            slug={post.slug}
                            image={post.image}
                            author={{
                                avatar: post.author.avatar,
                                name: post.author.name
                            }}
                        />
                    ))}
                </PostGridCard>
            ) : (
                <div className="container flex flex-col gap-6 items-center justify-center mt-10 border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
                    <Inbox className="w-12 h-12 text-cyan-100"/>
                    <p className="text-gray-300 text-body-sm">Nenhum post foi encontrado!</p>
                </div>
            )}

        </div>
    )
}