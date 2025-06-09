'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableTextProps {
  text: string;
  initialLineClamp?: number;
}

export function ExpandableText({ text, initialLineClamp = 3 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setShowButton(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [text, initialLineClamp]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <p
        ref={textRef}
        className={`text-gray-700 dark:text-gray-300 mb-2 ${
          !isExpanded ? `line-clamp-${initialLineClamp}` : ''
        }`}
      >
        {text}
      </p>

      {showButton && (
        <button
          onClick={toggleExpand}
          className="flex items-center text-primary hover:text-primary-dark  font-medium focus:outline-none  focus:ring-primary-light transition-colors mt-2"
        >
          {isExpanded ? (
            <>
              Згорнути
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Розгорнути
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}