import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import History from "@/components/history";
import { About } from "@/components/about";
import { Sparkles } from "lucide-react";
import { Link } from "@/i18n/routing";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-10 w-80">
            <Link   href="/library" 
                         className="flex  items-center hover:no-underline transition h-9 rounded-md px-3 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white border-0">
                     Бібліотека
                     <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
                 </Link>
                <About />
                <History />
            </SheetContent>
        </Sheet>
    )
}