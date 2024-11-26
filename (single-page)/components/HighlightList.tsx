import { useState, useEffect, useRef } from 'react';

const HighlightList = () => {
    const [selection, setSelection] = useState<Range | null>(null);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleMouseUp = () => {
            const selection = window.getSelection();
            if (!selection || selection.isCollapsed) {
                setSelection(null);
                return;
            }

            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            setSelection(range);
            setPosition({
                top: rect.top - 40, // Для отступа над словом
                left: rect.left,
            });
        };

        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const handleItemClick = (item: string) => {
        console.log(item); // Для примера — логируем выбранный пункт
        setSelection(null); // Закрываем список после выбора
    };

    return (
        <div className="relative">
            {selection && position && (
                <ul
                    ref={listRef}
                    className="absolute bg-white border border-gray-300 shadow-lg rounded p-2"
                    style={{ top: `${position.top}px`, left: `${position.left}px` }}
                >
                    <li
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => handleItemClick('Действие 1')}
                    >
                        Действие 1
                    </li>
                    <li
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => handleItemClick('Действие 2')}
                    >
                        Действие 2
                    </li>
                    <li
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => handleItemClick('Действие 3')}
                    >
                        Действие 3
                    </li>
                </ul>
            )}
        </div>
    );
};

export default HighlightList;
