import React from 'react';
import { Link } from "@/i18n/routing";
import { Transition } from '@headlessui/react';
import FontSizeControls from "./FontSizeControls";
import { Mic, MicOff, Volume2, VolumeOff } from "lucide-react";
import { useState} from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    
    const [isVoiceControlActive, setIsVoiceControlActive] = useState(false);
    const [isSpeechSynthesisActive, setIsSpeechSynthesisActive] = useState(false);

    const toggleVoiceControl = () => {
        const newState = !isVoiceControlActive;
        setIsVoiceControlActive(newState);
    };

    const toggleSpeechSynthesis = () => {
        const newState = !isSpeechSynthesisActive;
        setIsSpeechSynthesisActive(newState);
    };

    const voiceControlButtonClassName = cn(
        "relative rounded-md p-2 transition-colors hover:text-primary-dark",
        isVoiceControlActive ? "text-primary" : "text-muted-foreground"
    );

    const speechSynthesisButtonClassName = cn(
        "relative rounded-md p-2 transition-colors hover:text-primary-dark",
        isSpeechSynthesisActive ? "text-primary" : "text-muted-foreground"
    );

  return (
    <>
      <Transition
        show={isOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      </Transition>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"   
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-x-0"     
        leaveTo="translate-x-full" 
      >
        <div className="fixed inset-y-0 right-0 w-32 bg-secondary shadow-lg z-50 p-4"> 
          <div className="flex justify-end mb-4">
            <button onClick={onClose} className="focus:outline-none">
              {/* Іконка закриття (X) */}
              <svg
                className="w-6 h-6 hover:text-primary-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-start space-y-4">
            <div className='hover:text-primary-dark'>
<FontSizeControls targetId="book-content"/>
<span>Шрифт</span>
            </div>
            

            <div className="relative">
                    <button
                        onClick={toggleVoiceControl}
                        className={voiceControlButtonClassName}>
                        {isVoiceControlActive ? <Mic className="h-5 w-5"/> : <MicOff className="h-5 w-5"/>}
                        <span>Звук</span>
                    </button>
            </div>

                <div className="relative">
                    <button
                        onClick={toggleSpeechSynthesis}
                        className={speechSynthesisButtonClassName}>
                        {isSpeechSynthesisActive ? <Volume2 className="h-5 w-5"/> : <VolumeOff className="h-5 w-5"/>}
                                        <span>Голос</span>
                    </button>

                </div>

                <div className='flex flex-col hover:text-primary-dark'>
                   <ModeToggle/>
                   <span>Тема</span>
                </div>

                {/* <Link href="/onboarding">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-primary-dark"
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
                </Link> */}
          </nav>
        </div>
      </Transition>
    </>
  );
};

export default SideMenu;