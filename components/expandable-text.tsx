'use client';

import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useTranslations } from "next-intl";
import HighlightedText from './highlighted-text'; 

interface ExpandableTextProps {
  text: string;
  initialLineClamp?: number;
  isExpanded: boolean;
  onToggle: () => void;
  isHighlightable?: boolean;
  highlightIsPlaying?: boolean;
  onHighlightStop?: () => void;
  highlightColor?: string;
  textColor?: string;
}

export const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  initialLineClamp = 3,
  isExpanded,
  onToggle,
  isHighlightable = false,
  highlightIsPlaying = false,
  onHighlightStop,
  highlightColor,
  textColor,
}) => {
  const t = useTranslations("ExpandableText")
  
  const textRef = useRef<HTMLParagraphElement>(null);
  const [showToggleButton, setShowToggleButton] = useState(false);
  const isCurrentlyClamped = !isExpanded;

  useEffect(() => {
    const checkClamp = () => {
      if (textRef.current) {
        const paragraph = textRef.current;

        const originalDisplay = paragraph.style.display;
        const originalWebkitBoxOrient = paragraph.style.webkitBoxOrient;
        const originalWebkitLineClamp = paragraph.style.webkitLineClamp;
        const originalOverflow = paragraph.style.overflow; 

        paragraph.style.display = '-webkit-box';
        paragraph.style.webkitBoxOrient = 'vertical';
        paragraph.style.overflow = 'hidden'; 
        paragraph.style.webkitLineClamp = `${initialLineClamp}`;

        const clampedHeight = paragraph.clientHeight;

        paragraph.style.webkitLineClamp = '';
        paragraph.style.overflow = originalOverflow; 

        const fullTextHeight = paragraph.scrollHeight;

        paragraph.style.display = originalDisplay;
        paragraph.style.webkitBoxOrient = originalWebkitBoxOrient;
        paragraph.style.webkitLineClamp = originalWebkitLineClamp;
        paragraph.style.overflow = originalOverflow;

        setShowToggleButton(fullTextHeight > clampedHeight + 5); 
      }
    };

    const animationFrameId = requestAnimationFrame(() => {
        setTimeout(checkClamp, 50); 
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, initialLineClamp]); 

  return (
    <div>
      {isExpanded && isHighlightable ? (
        <HighlightedText
          text={text}
          speed={215}
          isPlaying={highlightIsPlaying}
          onStop={onHighlightStop}
          highlightColor={highlightColor}
          textColor={textColor}
        />
      ) : (
        <p
          ref={textRef}
          className={clsx(
            "text-gray-700 dark:text-gray-300",
            isCurrentlyClamped ? `line-clamp-${initialLineClamp}` : "",
          )}
        >
          {text}
        </p>
      )}

      {showToggleButton && (
        <button
          onClick={onToggle}
          className="mt-2 text-primary-dark dark:text-primary-light font-medium hover:underline focus:outline-none"
        >
          {isExpanded ? t('collapse') : t('expand')}
        </button>
      )}
    </div>
  );
};