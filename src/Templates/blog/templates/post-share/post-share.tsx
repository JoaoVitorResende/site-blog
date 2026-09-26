"use client"

import { Button } from "@/components/ui/button"
import { useShare } from "@/hooks"

type PostShareProps = {
    url: string;
    title: string;
    description: string;
}

export const PostShare = ({ url, title, description }: PostShareProps) => {
    const { shareButtons } = useShare({
        url,
        title,
        text: description
    })
    return (
        <aside className="space-y-6">
            <div className="rounder-lg bg-gray-700 p-4 md:p-6">
                <h2 className="mb-4 text-heading-xs text-gray-100">Compartilar</h2>
                <div className="space-y-3">
                    {shareButtons.map((provider) => (
                        <Button key={provider.provider} onClick={() => provider.action()} variant="outline" className="gap-2 w-full justify-start">
                            {provider.name}
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}