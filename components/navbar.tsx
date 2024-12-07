"use client";
import Image from "next/image";
import { Sparkles } from "lucide-react";
// import { Poppins } from "next/font/google";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";
import { LangSwitcher } from "@/components/lang-switcher";
import { MobileSidebar } from "@/components/mobile-sidebar";

// const font = Poppins({ weight: "600", subsets: ["latin"] });

export const Navbar = () => {
    const router = useRouter();

    return (
        <div
            className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <MobileSidebar/>
                <Link href="/">
                    {/* <Image
                            className="mb-0"
                            src="/images/logo.svg"
                            width={75}
                            height={50}
                            alt="logo"/> */}
                        <Image
                            className="mb-0"
                            src="/images/logogoryzont.svg"
                            width={200}
                            height={125}
                            alt="logo"/>
                </Link>
            </div>
            <div className={cn('flex items-center gap-x-3')}>
                <Button variant="premium" size="sm"
                        onClick={() => router.push('/catalog')}>
                    Каталог
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                </Button>

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