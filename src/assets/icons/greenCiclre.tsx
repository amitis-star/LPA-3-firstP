// src/assets/icons/GreenCircleIcon.tsx

import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const GreenCircleIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    width="8"
    height="9"
    viewBox="0 0 8 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4.86816" r="4" fill="#01986F" />
  </svg>
);

export default GreenCircleIcon;
