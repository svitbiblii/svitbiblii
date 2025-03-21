"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRef } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";


const HomeLayout = ({
    children
}: {
children: React.ReactNode;
}) => {
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