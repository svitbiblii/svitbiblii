"use client"

import { Books } from "@prisma/client"
import {cn} from "@/lib/utils";

interface BooksProps {
    data: Books[];
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