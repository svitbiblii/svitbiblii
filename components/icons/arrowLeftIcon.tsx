import React from 'react';

interface ArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string; // Додаємо title для доступності
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ className, title, ...props }) => {
  return (
    <svg
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none" // Залишаємо fill="none", оскільки це іконка з обведенням
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Tailwind класи для розміру та інших стилів
      {...props} // Передаємо інші SVG-пропси
    >
      {title && <title>{title}</title>} {/* Рендеримо елемент <title> для доступності */}
      {/*
        ЗМІНА: stroke="#079F9B" БУЛО ЗАМІНЕНО НА stroke="currentColor"
        Тепер колір іконки буде наслідуватися від властивості 'color' батьківського елемента.
      */}
      <path
        d="M9 2L2 9L9 16"
        stroke="currentColor" // Встановлюємо stroke на currentColor
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;