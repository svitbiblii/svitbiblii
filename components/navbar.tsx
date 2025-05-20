"use client";
import Image from "next/image";
import { Sparkles, Mic, MicOff, Volume2, VolumeOff } from "lucide-react";
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
    const [isSpeechSynthesisActive, setIsSpeechSynthesisActive] = useState(false);
    const [showVoiceControlTooltip, setShowVoiceControlTooltip] = useState(false);
    const [showSpeechSynthesisTooltip, setShowSpeechSynthesisTooltip] = useState(false);
    const [hasVoiceControlInitialRun, setHasVoiceControlInitialRun] = useState(false);
    const [hasSpeechSynthesisInitialRun, setHasSpeechSynthesisInitialRun] = useState(false);

    const toggleVoiceControl = () => {
        const newState = !isVoiceControlActive;
        setIsVoiceControlActive(newState);
        setShowVoiceControlTooltip(true);
        setTimeout(() => setShowVoiceControlTooltip(false), 1500);
    };

    const toggleSpeechSynthesis = () => {
        const newState = !isSpeechSynthesisActive;
        setIsSpeechSynthesisActive(newState);
        setShowSpeechSynthesisTooltip(true);
        setTimeout(() => setShowSpeechSynthesisTooltip(false), 1500);
    };

    useEffect(() => {
        if (!hasVoiceControlInitialRun) {
            setIsVoiceControlActive(true); // Вмикаємо голосове керування при першому завантаженні
            setShowVoiceControlTooltip(true);
            setHasVoiceControlInitialRun(true);
            setTimeout(() => setShowVoiceControlTooltip(false), 2000);
        }
    }, [hasVoiceControlInitialRun]);

    useEffect(() => {
        if (!hasSpeechSynthesisInitialRun) {
            setIsSpeechSynthesisActive(true); // Вмикаємо озвучування при першому завантаженні
            setShowSpeechSynthesisTooltip(true);
            setHasSpeechSynthesisInitialRun(true);
            if (typeof window !== 'undefined' && !sessionStorage.getItem('hasVisited')) {
                sessionStorage.setItem('hasVisited', 'true');
            }
            setTimeout(() => setShowSpeechSynthesisTooltip(false), 2000);
        }
    }, [hasSpeechSynthesisInitialRun]);

    const voiceControlButtonClassName = cn(
        "relative rounded-md p-2 transition-colors",
        isVoiceControlActive ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-red-500 text-white hover:bg-red-600"
    );

    const speechSynthesisButtonClassName = cn(
        "relative rounded-md p-2 transition-colors",
        isSpeechSynthesisActive ? "bg-green-400 text-white hover:bg-green-500" : "bg-yellow-400 text-white hover:bg-yellow-500"
    );

    const voiceControlTooltipClassName = cn(
        "absolute top-full left-[50%] -translate-x-[75%] mt-1 px-2 py-1 text-xs font-semibold rounded-md bg-gray-800 text-white transition-opacity duration-200",
        showVoiceControlTooltip ? "opacity-100" : "opacity-0"
    );

    const speechSynthesisTooltipClassName = cn(
        "absolute top-full left-[60%] -translate-x-[25%] mt-1 px-2 py-1 text-xs font-semibold rounded-md bg-gray-800 text-white transition-opacity duration-200",
        showSpeechSynthesisTooltip ? "opacity-100" : "opacity-0"
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
                        className={voiceControlButtonClassName}
                    >
                        <div className={voiceControlTooltipClassName}>
                            Голос {isVoiceControlActive ? 'увімкнено' : 'вимкнено'}
                        </div>
                        {isVoiceControlActive ? <Mic className="h-5 w-5"/> : <MicOff className="h-5 w-5"/>}
                    </button>
                </div>

                <div className="relative">
                    <button
                        onClick={toggleSpeechSynthesis}
                        className={speechSynthesisButtonClassName}
                    >
                        <div className={speechSynthesisTooltipClassName}>
                            Озвучування {isSpeechSynthesisActive ? 'увімкнено' : 'вимкнено'}
                        </div>
                        {isSpeechSynthesisActive ? <Volume2 className="h-5 w-5"/> : <VolumeOff className="h-5 w-5"/>}
                    </button>
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
