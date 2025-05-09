// // "use client";
// // import Image from "next/image";
// // import { Sparkles } from "lucide-react";
// // import { Link } from "@/i18n/routing";
// // import { cn } from "@/lib/utils";
// // import { ModeToggle } from "@/components/mode-toggle";
// // import { LangSwitcher } from "@/components/lang-switcher";
// // import { MobileSidebar } from "@/components/mobile-sidebar";
// // import { useTranslations } from "next-intl";

// // export const Navbar = () => {
// //     const t = useTranslations("Navbar");

// //     return (
// //         <div
// //             className="w-full z-50 fixed top-0 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
// //             <div className="flex items-center">
// //                 <MobileSidebar/>
// //                 <Link href="/">
// //                         <Image
// //                             className="mb-0"
// //                             src="/images/logogoryzont.svg"
// //                             width={200}
// //                             height={125}
// //                             alt="logo"/>
// //                 </Link>
// //             </div>
// //             <div className={cn('flex items-center gap-x-3')}>
// //                 <Link   href="/library" 
// //                         className="hidden md:flex items-center hover:no-underline transition h-9 rounded-md px-3 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white border-0">
// //                     {t('library')}
// //                     <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
// //                 </Link>

// //                 <LangSwitcher/>
// //                 <ModeToggle/>

// //                 <Link href="/onboarding">
// //                     <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         className="h-6 w-6"
// //                         fill="none"
// //                         viewBox="0 0 24 24"
// //                         stroke="currentColor"
// //                     >
// //                         <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth="2"
// //                             d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
// //                         />
// //                     </svg>
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // }

// "use client";
// import Image from "next/image";
// import { Sparkles } from "lucide-react";
// import { Link } from "@/i18n/routing";
// import { cn } from "@/lib/utils";
// import { ModeToggle } from "@/components/mode-toggle";
// import { LangSwitcher } from "@/components/lang-switcher";
// import { MobileSidebar } from "@/components/mobile-sidebar";
// import { useTranslations } from "next-intl";
// import { forwardRef } from "react";
// import FontSizeControls from "./FontSizeControls";

// export const Navbar = forwardRef<HTMLDivElement>((props, ref) => {
//     const t = useTranslations("Navbar");

//     return (
//         <div
//             ref={ref}
//             className="w-full z-50 fixed top-0 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary"
//         >
//             {/* Вміст Navbar */}
//             <div className="flex items-center">
//                 <MobileSidebar/>
//                 <Link href="/">
//                     <Image
//                         className="mb-0"
//                         src="/images/logogoryzont.svg"
//                         width={200}
//                         height={125}
//                         alt="logo"/>
//                 </Link>
//             </div>
//             <div className={cn('flex items-center gap-x-3')}>
//                 <Link   href="/library"
//                         className="hidden md:flex items-center hover:no-underline transition h-9 rounded-md px-3 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white border-0">
//                     {t('library')}
//                     <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
//                 </Link>

//                 <FontSizeControls targetId="book-content"/>

//                 <LangSwitcher/>
//                 <ModeToggle/>

//                 <Link href="/onboarding">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
//                         />
//                     </svg>
//                 </Link>
//             </div>
//         </div>
//     );
// });

// Navbar.displayName = "Navbar";

"use client";
import Image from "next/image";
import { Sparkles, Mic, MicOff } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { LangSwitcher } from "@/components/lang-switcher";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { useTranslations } from "next-intl";
import { forwardRef, useState, useEffect } from "react";
import FontSizeControls from "./FontSizeControls";

export const Navbar = forwardRef<HTMLDivElement>((props, ref) => {
    const t = useTranslations("Navbar");
    const [isVoiceControlActive, setIsVoiceControlActive] = useState(false);
    const [isInitialAttention, setIsInitialAttention] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false);

    const toggleVoiceControl = () => {
        const newState = !isVoiceControlActive;
        setIsVoiceControlActive(newState);
        setIsInitialAttention(false);
        setShowTooltip(newState); // Показуємо надпис при активації/деактивації

        // Приховуємо надпис через деякий час
        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 1500);

        return () => clearTimeout(timer);
    };

    useEffect(() => {
        if (isInitialAttention) {
            setShowTooltip(true); // Показуємо надпис під час початкової уваги
            const timer = setTimeout(() => {
                setIsInitialAttention(false);
                setShowTooltip(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isInitialAttention]);

    const buttonClassName = cn(
        "relative rounded-md p-2 transition-colors",
        isVoiceControlActive || isInitialAttention ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-white hover:bg-blue-600"
    );

    const tooltipClassName = cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs font-semibold rounded-md bg-gray-800 text-white transition-opacity duration-200",
        showTooltip ? "opacity-100" : "opacity-0"
    );

    return (
        <div
            ref={ref}
            className="w-full z-50 fixed top-0 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary"
        >
            {/* Вміст Navbar */}
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
                <Link  href="/library"
                        className="hidden md:flex items-center hover:no-underline transition h-9 rounded-md px-3 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white border-0">
                    {t('library')}
                    <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                </Link>

                <FontSizeControls targetId="book-content"/>

                <div className="relative">
                    <button
                        onClick={toggleVoiceControl}
                        className={buttonClassName}
                    >
                        {isVoiceControlActive || isInitialAttention ? <MicOff className="h-5 w-5"/> : <Mic className="h-5 w-5"/>}
                    </button>
                    {showTooltip && (
                        <div className={tooltipClassName}>
                            Голосове керування увімкнено
                        </div>
                    )}
                </div>

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
});

Navbar.displayName = "Navbar";