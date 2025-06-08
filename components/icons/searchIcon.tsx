import React from 'react';

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ className, title, ...props }) => {
  return (
    <svg
      width="28"
      height="31"
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
        {title && <title>{title}</title>}
      <circle cx="11.5625" cy="11.5625" r="10.0625" stroke="currentColor" strokeWidth="3"/>
      <line x1="17.7123" y1="19.489" x2="26.8078" y2="29.967" stroke="currentColor" strokeWidth="3"/>
    </svg>
  );
};

export default SearchIcon;