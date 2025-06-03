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
        "relative rounded-md p-2 transition-colors",
        isVoiceControlActive ? "text-primary" : "text-icon"
    );

    const speechSynthesisButtonClassName = cn(
        "relative rounded-md p-2 transition-colors",
        isSpeechSynthesisActive ? "text-primary" : "text-icon"
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
                className="w-6 h-6"
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
            <FontSizeControls targetId="book-content"/>

            <div className="relative">
                    <button
                        onClick={toggleVoiceControl}
                        className={voiceControlButtonClassName}>
                        {isVoiceControlActive ? <Mic className="h-5 w-5"/> : <MicOff className="h-5 w-5"/>}
                    </button>
            </div>

                <div className="relative">
                    <button
                        onClick={toggleSpeechSynthesis}
                        className={speechSynthesisButtonClassName}>
                        {isSpeechSynthesisActive ? <Volume2 className="h-5 w-5"/> : <VolumeOff className="h-5 w-5"/>}
                    </button>
                </div>

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
            






            {/* Елементи меню залишаються такими ж */}
            {/* <button className="w-full text-left px-3 py-2 border rounded-md">A+</button>
            <button className="w-full text-left px-3 py-2 border rounded-md">A-</button>
            <button className="w-full text-left p-2 rounded-full bg-blue-500 text-white flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 00-2-2v0a2 2 0 00-2 2v6m0 0H5"></path></svg>
              <span>Голосовий пошук</span>
            </button>
            <button className="w-full text-left p-2 rounded-full bg-green-500 text-white flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464l-4.072 4.072M15.536 8.464L19.071 12m-3.535-3.536l-4.072-4.072M15.536 8.464L12 4.929"></path></svg>
              <span>Прослухати</span>
            </button>
            <button className="w-full text-left p-2 rounded-full flex items-center">
              ☀️ <span>Світла тема</span>
            </button>
            <button className="w-full text-left p-2 rounded-full flex items-center">
              ⚫ <span>Темна тема</span>
            </button> */}
          </nav>
        </div>
      </Transition>
    </>
  );
};

export default SideMenu;