"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useRef, useEffect, useState } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const HomeLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        const updateLayout = () => {
            if (navbarRef.current && scrollContainerRef.current) {
                const height = navbarRef.current.offsetHeight;
                setNavbarHeight(height);
                scrollContainerRef.current.style.height = `calc(100vh - ${height}px)`;
            }
        };

        updateLayout();

        window.addEventListener('resize', updateLayout);

        return () => {
            window.removeEventListener('resize', updateLayout);
        };
    }, []);

    return (
        <div className="h-min-full">
            <Navbar ref={navbarRef} />
            <div
                ref={scrollContainerRef}
                className="w-full overflow-y-auto shadow-lg"
                style={{ height: `calc(100vh - ${navbarHeight}px)` }}
            >
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