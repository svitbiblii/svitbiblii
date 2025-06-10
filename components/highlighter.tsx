import React, { useState, useEffect, useRef } from 'react';

interface HighlighterProps {
  text: string;
  speed?: number;
  isPlaying?: boolean;
  onStop?: () => void; 
}

const Highlighter: React.FC<HighlighterProps> = ({
  text,
  speed = 500,
  isPlaying: propIsPlaying = false,
  onStop,
}) => {
  const words = text.split(/\s+/).filter(Boolean);

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(-1);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Очищаємо попередній таймер при кожній зміні
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (propIsPlaying) { // Використовуємо пропс propIsPlaying
      timerRef.current = setInterval(() => {
        setCurrentWordIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= words.length) {
            if (timerRef.current) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
            // setInternalIsPlaying(false); // Зупиняємо внутрішній стан, якщо є
            setCurrentWordIndex(-1); // Скидаємо індекс
            onStop?.(); // Викликаємо зовнішній колбек про зупинку
            return -1; // Це для поточного setState
          }
          return nextIndex;
        });
      }, speed);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [propIsPlaying, words.length, speed, onStop]);

//   const handleStart = () => {
//     if (!isPlaying) {
//       setCurrentWordIndex(-1);
//       setIsPlaying(true);
//     }
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//   };

//   const handleStop = () => {
//     setIsPlaying(false);
//     setCurrentWordIndex(-1);
//   };

  return (
    <div>
      <p className="leading-relaxed">
        {words.map((word, index) => (
          <span
            key={index}
            className={`
              ${index <= currentWordIndex
                ? 'bg-primary text-primary-foreground px-1 rounded transition-colors duration-200 ease-in-out'
                : ''
              }
            `}
          >
            {word}{' '}
          </span>
        ))}
      </p>
      {/* <div className="mt-4 flex space-x-2">
        <button
          onClick={handleStart}
          disabled={isPlaying}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Почати озвучку
        </button>
        <button
          onClick={handlePause}
          disabled={!isPlaying}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Пауза
        </button>
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Зупинити
        </button>
      </div> */}
    </div>
  );
};

export default Highlighter;