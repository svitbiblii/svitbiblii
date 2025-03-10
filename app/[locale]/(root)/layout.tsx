"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";import { ChevronFirst, ChevronLast } from "lucide-react";
import { useRef } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";


const HomeLayout = ({
    children
}: {
children: React.ReactNode;
}) => {
const [expanded, setExpanded] = useState(true);
const scrollContainerRef = useRef<HTMLDivElement>(null);

return (

    <div className="h-min-full">

        <Navbar />

                <div ref={scrollContainerRef} className="h-screen w-full overflow-y-auto shadow-lg">
                    <main>
                        {children}
                        <Footer/>
                    </main>
                    <ScrollToTopButton scrollContainerRef={scrollContainerRef} />
                </div>

        </div>
    );
};
export default HomeLayout;