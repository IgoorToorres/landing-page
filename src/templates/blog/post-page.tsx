import { Avatar } from "@/components/avatar";
import { AvatarTitle } from "@/components/avatar/avatar-title";
import { MarkDown } from "@/components/markdown/markdown";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share/use-share";
import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { PostShare } from "./components/post-share";

export type PostPageProps = {
    post: Post;
}

export const PostPage = ({ post }: PostPageProps) => {
    const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR')
    const postUrl = `https://site.set/blog/${post.slug}`;



    return (
        <main className="container mt-32 text-gray-100">
            <div className="container space-y-12 px-4 md:px-8">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link className="text-action-sm" href={"/blog"}>BLog</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <span className="text-blue-200 text-action-sm">{post?.slug}</span>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
                    <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
                        <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                            <Image
                                src={post?.image ?? ''}
                                alt={`imagem-do-${post?.title}`}
                                fill
                                className="object-cover"
                            />
                        </figure>
                        <header className="p-4 md:p-6 lg:p-12 pb-0">
                            <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                                {post?.title}
                            </h1>

                            <Avatar.Container>
                                <Avatar.Image
                                    size="sm"
                                    src={post?.author.avatar ?? ""}
                                    alt={`avatar-${post?.author.name}`}
                                />
                                <Avatar.Content>
                                    <AvatarTitle>{post?.author.name}</AvatarTitle>
                                    <Avatar.Description>
                                        Publicado em {" "}
                                        <time dateTime={post?.date}>
                                            {publishedDate}
                                        </time>
                                    </Avatar.Description>
                                </Avatar.Content>
                            </Avatar.Container>
                        </header>

                        <div className="prose prove-invert max-2-none px-4 mt-12 md:px-6 lg:px-12">
                            <MarkDown
                                content={post.body.raw}
                            />
                        </div>

                    </article>

                    <PostShare
                        text={post.description}
                        title={post.title}
                        url={postUrl}
                    />

                </div>
            </div>
        </main>
    )
}