import React from 'react';

interface RouteIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

const RouteIcon: React.FC<RouteIconProps> = ({ className, title, ...props }) => {
  return (
    <svg
      width="31"
      height="40"
      viewBox="0 0 31 40"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
        {title && <title>{title}</title>}
      <path d="M25 35C23.6668 35 23.6666 37 25 37C26.3333 37 26.3333 35 25 35Z" stroke="currentColor" strokeWidth="5"/>
      <path d="M12.5 22.5C17.9997 28 29.5 16 29.5 25.5C29.5 35.5 1.96875 23 1.96875 31.9339C1.96875 39.5 14 36 20 36" stroke="currentColor" strokeWidth="3"/>
      <path d="M14.0874 15.5C13.1168 16.625 11.1485 18.875 9.97304 20C8.79747 18.875 6.79132 16.4912 5.85913 15.5C0.569211 9.875 3.01011 2 9.97332 2C17.0598 2 19.4253 9.3125 14.0874 15.5Z" stroke="currentColor" strokeWidth="3"/>
      <path d="M10 6C6.00026 6 5.99985 12 10 12C14 12 14 6 10 6Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
};

export default RouteIcon;