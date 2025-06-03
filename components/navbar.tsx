"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { LangSwitcher } from "@/components/lang-switcher";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { forwardRef, useState } from "react";
import SideMenu from "./side-menu";

export const Navbar = forwardRef<HTMLDivElement>((props, ref) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);};
   
    return (
        <div
            ref={ref}
            className="w-full z-50 fixed top-0 flex justify-between items-center py-2 px-4 h-16 border-b bg-secondary"
        >
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

       <div className="flex items-center space-x-4">
        <LangSwitcher/> 

        <button
          className="focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">

            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (       
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6h8M4 12h16M12 18h8" />
            )}
          </svg>
        </button>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />  
    </div>
    );
});

Navbar.displayName = "Navbar";
