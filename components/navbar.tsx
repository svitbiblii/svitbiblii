"use client";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { LangSwitcher } from "@/components/lang-switcher";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { useTranslations } from "next-intl";

export const Navbar = () => {
    const t = useTranslations("Navbar");

    return (
        <div
            className="w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <MobileSidebar/>
                <Link href="/">
                        <Image
                            className="mb-0"
                            src="/images/logogoryzont.svg"
                            width={200}
                            height={125}
                            alt="logo"/>
                </Link>
            </div>
            <div className={cn('flex items-center gap-x-3')}>
                <Link   href="/library" 
                        className="hidden md:flex items-center hover:no-underline transition h-9 rounded-md px-3 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white border-0">
                    {t('library')}
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                </Link>

                <LangSwitcher/>
                <ModeToggle/>

                <Link href="/onboarding">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}