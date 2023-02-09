import React from "react";

import { IconProps } from "../icons.type";

const Website = (props: IconProps) => {
  const { size, className } = props;
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM18 35.86C10.11 34.88 4 28.16 4 20C4 18.77 4.15 17.57 4.42 16.42L14 26V28C14 30.21 15.79 32 18 32V35.86ZM31.79 30.79C31.28 29.17 29.78 28 28 28H26V22C26 20.9 25.1 20 24 20H12V16H16C17.1 16 18 15.1 18 14V10H22C24.21 10 26 8.21 26 6V5.17C31.86 7.54 36 13.28 36 20C36 24.16 34.4 27.94 31.79 30.79Z"
          fill="#0A66C2"
        />
      </svg>
    </div>
  );
};

export default Website;
