'use client'
import { Button } from "@/components/ui/button"
import { useShare } from "@/hooks"

type PostShareProps = {
    url: string,
    title: string,
    text: string,
}

export const PostShare = ({ url, title, text }: PostShareProps) => {

    const { shareButtons } = useShare({ url, title, text })

    return (
        <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700">
                <h2 className="mb-3 text-heading-xs text-gray-100">
                    Compartilhar
                </h2>

                <div className="space-y-3 ">
                    {shareButtons.map((provider) => (
                        <Button
                            key={provider.provider}
                            onClick={() => provider.action()}
                            variant="outline"
                            className="w-full justify-start gap-2"
                        >
                            {provider.icon}
                            {provider.name}
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}