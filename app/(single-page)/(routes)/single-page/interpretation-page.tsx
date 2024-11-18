"use client";

import { useState } from "react";
import {Int} from "@/app/(single-page)/components/int";

export default function InterpretationPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDiv = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Int isOpen={isOpen} toggleDiv={toggleDiv} />

            {isOpen && (
                <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-100">
                    <p>Это содержание div, которое можно скрыть или показать!</p>
                </div>
            )}
        </div>
    );
}
