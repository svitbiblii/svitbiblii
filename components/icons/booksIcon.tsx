import React from 'react';

interface BooksIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

const BooksIcon: React.FC<BooksIconProps> = ({ className, title, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props} 
    >
        {title && <title>{title}</title>}
      <rect width="8" height="18" x="3" y="3" rx="1"/>
      <path d="M7 3v18"/>
      <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>
    </svg>
  );
};

export default BooksIcon;