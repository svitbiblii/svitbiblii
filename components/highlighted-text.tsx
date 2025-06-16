"use client"

import { useEffect, useState, useRef } from "react"; // Додано useRef
import clsx from "clsx";

type HighlightedTextProps = {
  text: string;
  speed?: number;
  highlightColor?: string; 
  textColor?: string; 
  isPlaying: boolean; 
  onStop?: () => void; 
};

const HighlightedText = ({ 
  text, 
  speed = 350,
  highlightColor = "bg-primary",
  textColor = "text-primary-foreground", 
  isPlaying, 
  onStop 
}: HighlightedTextProps) => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); 

  const parts = text.split(/(\s+)/).filter(part => part.length > 0);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isPlaying && highlightIndex < parts.length) {
      timeoutRef.current = setTimeout(() => {
        setHighlightIndex((prev) => prev + 1);
      }, speed);
    } else if (highlightIndex >= parts.length && onStop) {
        onStop(); 
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [highlightIndex, parts.length, speed, isPlaying, onStop]); 

  useEffect(() => {
    if (!isPlaying) {
      setHighlightIndex(0); 
      if (timeoutRef.current) { 
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [isPlaying, text]); 

  return (
    <p className="leading-relaxed flex flex-wrap">
      {parts.map((part, index) => {
        const isWord = !/^\s+$/.test(part);
        const isHighlighted = index < highlightIndex; 

        const isStartOfHighlight = isHighlighted && index === 0;
        const isEndOfHighlight = isHighlighted && index === highlightIndex - 1;

        return (
          <span
            key={index}
            className={clsx(
              "transition-all duration-300", 
              isHighlighted ? `${highlightColor} ${textColor}` : "",
              isStartOfHighlight && "rounded-l-lg", 
              isEndOfHighlight && "rounded-r-lg"  
            )}
            style={{ whiteSpace: isWord ? 'normal' : 'pre' }} 
          >
            {part}
          </span>
        );
      })}
    </p>
  );
};

export default HighlightedText;


