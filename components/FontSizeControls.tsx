"use client";

import { useEffect, useState } from "react";

interface FontSizeControlsProps {
    targetId: string; // например, "book-content"
}

export default function FontSizeControls({ targetId }: FontSizeControlsProps) {
    const [fontSize, setFontSize] = useState(16);
    const storageKey = `fontSize-${targetId}`;

    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            setFontSize(parseInt(saved));
        }
    }, [storageKey]);

    useEffect(() => {
        const target = document.getElementById(targetId);
        if (target) {
            target.style.fontSize = `${fontSize}px`;
        }
    }, [fontSize, targetId]);

    const changeFontSize = (delta: number) => {
        setFontSize(prev => {
            const newSize = Math.min(32, Math.max(12, prev + delta));
            localStorage.setItem(storageKey, newSize.toString());
            return newSize;
        });
    };

    return (
        <div className="font-controls flex justify-end hover:text-primary-dark">
            <button
                onClick={() => changeFontSize(1)}
                className="px-2 py-1 border mr-2 rounded"
            >
                A+
            </button>
            <button
                onClick={() => changeFontSize(-1)}
                className="px-2 py-1 border rounded"
            >
                A−
            </button>
        </div>
    );
}
