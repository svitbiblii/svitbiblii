"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { About } from "@/components/about";
import History from "@/components/history";
import { ChevronFirst, ChevronLast} from "lucide-react";
import {Library } from '@prisma/client';
import { FC } from 'react';

interface BookPageProps {book: Library | null;} // Видаляємо bookId з пропсів, якщо він не передається ззовні

const NewTestamentPage: FC<BookPageProps> = () => {
  const t = useTranslations("BookContents");
  const [expanded, setExpanded] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [book, setBook] = useState<Library | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/books/8`); // Явно вказуємо ID 8
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error || "Сталася помилка при обробці запиту.");
          return;
        }
        const data: Library = await response.json();
        setBook(data);
      } catch (err: any) {
        setError("Сталася помилка при обробці запиту.");
        console.error('Помилка отримання книги:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, []); // Пустий масив залежностей, щоб запит виконувався лише один раз при монтуванні компонента

  if (loading) {
    return <div>Грузим...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!book) {
    return <div>Не знайдено</div>;
  }

  return (
    <div className="h-min-full flex mt-16">
      <div className="relative">
        <button onClick={() => setExpanded(curr => !curr)}
                className={`absolute top-4 z-20 ${expanded ? "left-60 dark:bg-secondary" : "left-8 dark:bg-background"} hidden md:block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:color-white`}>
          {expanded ? <ChevronFirst/> : <ChevronLast/>}
        </button>
      </div>

      <div className={`hidden h-screen w-72 min-w-72 overflow-y-scroll bg-secondary pb-12 shadow-lg ${
        expanded ? "md:block" : "initial"}`}>
        <div>
          <About/>

          <div className="bg-secondary px-6 pt-1 pb-8">
            <div className="py-2 flex justify-between font-medium">
              <button className={`w-1/2 ${showContent ? "" : "border-b-2 border-blue-500 text-blue-500"}`}
                      onClick={() => {setShowContent(false)}}>
                {t('navigator')}
              </button>
              <button className={`w-1/2 ${showContent ? "border-b-2 border-blue-500 text-blue-500" : ""}`}
                      onClick={() => {setShowContent(true)}}>
                {t('content')}
              </button>
            </div>

            {showContent ?
              <ul className="list-none bg-secondary pl-0">
                <li>
                  <Link href='/library/bible/bible-ua/#section1'
                        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    Глава 1
                  </Link>
                </li>
                <li>
                  <Link href='/library/bible/bible-ua/#section2'
                        className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                    Глава 2
                  </Link>
                </li>
              </ul> :
              <History />}
          </div>
        </div>
      </div>

      <div className="relative md:flex h-full w-full px-4 pt-2">
          <div>
            <h1>{book?.title}</h1> {/* Додано опціональний ланцюжок */}
            <div dangerouslySetInnerHTML={{ __html: book?.content?.replace(/\n/g, '<br />') ?? '' }} /> {/* Додано опціональний ланцюжок */}
          </div>

      </div>
    </div>
  );
};

export default NewTestamentPage;