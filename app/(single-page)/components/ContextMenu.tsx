import React, { useState, useEffect } from 'react';

const ContextMenu: React.FC = () => {
    const [position, setPosition] = useState<{ top: number, left: number } | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleMouseUp = (e: MouseEvent) => {
            const selection = window.getSelection();
            if (!selection?.toString()) {
                setVisible(false);
                return;
            }

            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            // Позиция меню
            const menuWidth = 100; // Ширина меню (можно изменить в зависимости от контента)
            const center = rect.left + rect.width / 2;
            setPosition({
                top: rect.top + window.scrollY - 40, // 40px выше выделенного текста
                left: center + window.scrollX - menuWidth / 2, // Центрируем меню
            });
            setVisible(true);
        };

        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const handleCloseMenu = () => {
        setVisible(false);
    };

    return (
        <div
            className={`absolute p-2 bg-gray-800 text-white rounded-lg ${visible ? 'block' : 'hidden'}`}
            style={{
                top: position?.top,
                left: position?.left,
            }}
        >
            <button onClick={handleCloseMenu} className="px-4 py-2 hover:bg-gray-600">Option 1</button>
            <button onClick={handleCloseMenu} className="px-4 py-2 hover:bg-gray-600">Option 2</button>
        </div>
    );
};

export default ContextMenu;