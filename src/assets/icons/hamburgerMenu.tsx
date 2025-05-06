import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const Hamburger: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26 9H6C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11H26C26.5523 11 27 10.5523 27 10C27 9.44772 26.5523 9 26 9Z"
      fill="currentColor"
    />
    <path
      d="M26 15H6C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H26C26.5523 17 27 16.5523 27 16C27 15.4477 26.5523 15 26 15Z"
      fill="currentColor"
    />
    <path
      d="M26 21H6C5.44772 21 5 21.4477 5 22C5 22.5523 5.44772 23 6 23H26C26.5523 23 27 22.5523 27 22C27 21.4477 26.5523 21 26 21Z"
      fill="currentColor"
    />
  </svg>
);

export default Hamburger;
