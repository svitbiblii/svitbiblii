"use client";

import { useState, useEffect, useRef } from 'react';
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { About } from "@/components/about";
import History from "@/components/history";
import { ChevronFirst, ChevronLast} from "lucide-react";
import Epub from 'epubjs';

interface Book {
    id: number;
    title: string;
    author: string;
    name?: string;
    content?: string;
    icon?: string;
    anotation?: string;
    type?: string;
    link?: string;
    format: string | null;
    filePath: string | null;
}

interface Section {
    href: string;
  }

const EpubReader = () => {
    const t = useTranslations("BookContents");
    const [expanded, setExpanded] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [bookData, setBookData] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const renditionRef = useRef<any>(null);
    const viewerRef = useRef<HTMLDivElement>(null);
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [book, setBook] = useState<any>(null); // Стан для зберігання об'єкта книги

    useEffect(() => {
        async function fetchBookData() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/get-book/23'); // API-маршрут для отримання інформації про книгу
                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData.error || "Сталася помилка при обробці запиту.");
                    return;
                }
                const data: Book = await response.json();
                setBookData(data);
            } catch (err: any) {
                setError("Сталася помилка при обробці запиту.");
                console.error('Помилка отримання даних про книгу:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchBookData();
    }, []);

    useEffect(() => {
        if (bookData?.format === 'epub' && bookData?.filePath && viewerRef.current) {
            const bookInstance = Epub(bookData.filePath); // epub.js тепер завантажує файл з public
            setBook(bookInstance); // Зберігаємо об'єкт книги в стані
            const rendition = bookInstance.renderTo(viewerRef.current, {
                width: '70vw',
                height: '70vh', // Налаштуйте висоту за потребою
                flow: 'paginated', // Або 'scrolled'
            });
            rendition.display();
            renditionRef.current = rendition;

            // Обробка навігації після рендерингу
            rendition.on('rendered', (section: Section) => {
                if (bookInstance && bookInstance.spine) {
                    bookInstance.spine.each((spineItem: any) => {
                      if (spineItem.href === section.href) {
                        setCurrentChapterIndex((spineItem as any).index); // Потрібне приведення типу для доступу до index
                      }
                    });
                  }
            });

            return () => {
                if (renditionRef.current) {
                    renditionRef.current.destroy();
                }
                if (bookInstance) {
                    bookInstance.destroy(); // Важливо звільнити ресурси книги
                }
            };
        }
    }, [bookData]);

    const goToPreviousChapter = () => {
        if (book && currentChapterIndex > 0) {
            const prevChapterHref = book.spine.get(currentChapterIndex - 1).href;
            renditionRef.current.display(prevChapterHref);
        }
    };

    const goToNextChapter = () => {
        if (book && currentChapterIndex < book.spine.length - 1) {
            const nextChapterHref = book.spine.get(currentChapterIndex + 1).href;
            renditionRef.current.display(nextChapterHref);
        }
    };

    if (loading) {
        return <div>Грузим...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!bookData) {
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
                                    <Link href=''
                                          className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                        Глава 1
                                    </Link>
                                </li>
                                <li>
                                    <Link href=''
                                          className="block py-2 rounded-lg hover:bg-blue-200 dark:hover:text-stone-800 transition-colors duration-200">
                                        Глава 2
                                    </Link>
                                </li>
                            </ul> :
                            <History />}
                    </div>
                </div>
            </div>

            <div >
                    <h1>{bookData.title || "Untitled book"}</h1>
                    <div ref={viewerRef} className="viewer" />
                    <div className="navigation-controls mt-4 flex justify-between">
                        <button className="md:flex items-center h-9 rounded-md px-3 border-4" onClick={goToPreviousChapter} disabled={currentChapterIndex === 0}>
                            попередня
                        </button>
                        <button className="md:flex items-center h-9 rounded-md px-3 border-4" onClick={goToNextChapter} disabled={!book || currentChapterIndex === book.spine?.length - 1}>
                            наступна
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default EpubReader;