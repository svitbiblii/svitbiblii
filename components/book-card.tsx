import { useState } from "react";
import { Link } from "@/i18n/routing";
import { ExpandableText } from "./expandable-text";

interface BookCardProps {
  title: string;
  author?: string | null;
  link: string;
  anotation?: string | null; 
}

export function BookCard({ title, author, link, anotation}: BookCardProps) {

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-card-soft overflow-hidden flex h-auto">

      <div className="p-4 flex flex-col justify-between flex-grow w-2/3">
        {/* Верхній блок з назвою та автором */}
        <div className="mb-4">
          <h3 className="text-left font-semibold text-gray-900 border-b border-gray-300 dark:text-white line-clamp-2">
            {title}
          </h3>
          {author && (
            <p className="text-lg text-gray-600 dark:text-gray-400 line-clamp-1">
              {author}
            </p>
          )}
        </div>

        {anotation && (
            <ExpandableText text={anotation} initialLineClamp={3} />
        )}

        {/* Кнопки "Читати" / "Слухати" */}
        <div className="mt-4">
            <Link href={link} className="inline-flex items-center px-4 py-2 mr-10 border-2 border-primary text-sm font-medium text-primary rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
              Читати
            </Link>
                        <Link href={link} className="inline-flex items-center px-4 py-2 border-2 border-primary text-sm font-medium text-primary rounded-full shadow-sm hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
              Слухати
            </Link>
        </div>
      </div>

 <div className="relative w-1/3 flex-shrink-0 flex items-center justify-center p-2 h-64"> 
      <div className="absolute inset-y-4 right-4 w-[calc(100%-1rem)] h-[calc(100%-2rem)] bg-primary rounded-lg shadow-lg flex flex-col items-center justify-center text-primary-foreground p-2 text-center">
        <p className="text-base font-bold leading-tight mb-10 line-clamp-3">
          {author}
        </p>
        <p className="text-base font-bold leading-tight line-clamp-3">
          {title}
        </p>
      </div>
    </div>
    </div>
  );
}