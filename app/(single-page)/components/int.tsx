"use client";

import React from "react";

interface IntProps {
    isOpen: boolean;
    toggleDiv: () => void;
}
export const Int: React.FC<IntProps> = ({ isOpen, toggleDiv }) => {
    return (
        <button
            onClick={toggleDiv}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            {isOpen ? "Закрити" : "Толкование"}
        </button>
    );
};

export default Int;