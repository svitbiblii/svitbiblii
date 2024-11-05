"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export const BackButton = () => {
    const router = useRouter();

    return (
        <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
            <div className="flex gap-x-2 items-center">
                <Button onClick={() => router.back()} size="icon" variant="ghost">
                    <ChevronLeft className="h-8 w-8"/>
                </Button>
            </div>
        </div>
    )
}