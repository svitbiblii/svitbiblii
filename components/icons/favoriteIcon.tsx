import React from 'react';

interface FavoriteIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ className, title, ...props }) => {
  return (
    <svg
      width="36"
      height="33"
      viewBox="0 0 36 33"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className} 
      {...props}
    >
        {title && <title>{title}</title>}
      <path
        d="M22.5225 10.7461L22.8555 11.3164L23.502 11.457L32.2842 13.3574L26.2969 20.0596L25.8564 20.5527L25.9229 21.21L26.8281 30.1504L18.6045 26.5273L18 26.2607L17.3955 26.5273L9.1709 30.1504L10.0771 21.21L10.1436 20.5527L9.70312 20.0596L3.71484 13.3574L12.498 11.457L13.1445 11.3164L13.4775 10.7461L18 2.97949L22.5225 10.7461Z"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
};

export default FavoriteIcon;