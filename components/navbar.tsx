"use client";

import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";
import { LangSwitcher } from "@/components/lang-switcher";
import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({ weight: "600", subsets: ["latin"] });

export const Navbar = () => {
  return (
      <div
          className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
        <div className="flex items-center">
          {/* <Menu className="block md:hidden"/> */}
          <MobileSidebar/>
          <Link href="/onboarding">
            <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
              Світ Біблії
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="border px-10 py-2 rounded shadow cursor-pointer">Каталог</div>
        </div>
        <div className="flex items-center gap-x-3">
          <Button variant="premium" size="sm">
            ШІ помічник
            <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
          </Button>

            <LangSwitcher/>
            <ModeToggle/>
            <UserButton/>
        </div>
      </div>
  );
}