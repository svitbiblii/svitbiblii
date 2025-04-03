"use client"

import { books as PrismaBook } from "@prisma/client";
import {cn} from "@/lib/utils";

type BookWithLink = PrismaBook & { link: string };

interface BooksProps {
    data: BookWithLink[];
};

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
                        {item.name}
                    </button>
                ))
            }
        </div>
    )
}