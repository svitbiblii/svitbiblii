"use client"

import { Library } from "@prisma/client";
import {cn} from "@/lib/utils";

type BookWithLink = Library & { link: string };

interface BooksProps {
    data: BookWithLink[];
}

export const Books = ({
  data
  }: BooksProps) => {
    return (
        <div className="mt-[100px]">
            {data.map((item) => (
                    <button
                        key={item.id}
                        className={cn('flex')}
                    >
                        {item.title}
                    </button>
                ))
            }
        </div>
    )
}