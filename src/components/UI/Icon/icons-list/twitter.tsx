import React from "react";

import { IconProps } from "../icons.type";

const Twitter = (props: IconProps) => {
  const { size, className } = props;
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1427_79307)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.653961 3.27606C0 4.55953 0 6.23969 0 9.6V14.4C0 17.7603 0 19.4405 0.653961 20.7239C1.2292 21.8529 2.14708 22.7708 3.27606 23.346C4.55953 24 6.23969 24 9.6 24H14.4C17.7603 24 19.4405 24 20.7239 23.346C21.8529 22.7708 22.7708 21.8529 23.346 20.7239C24 19.4405 24 17.7603 24 14.4V9.6C24 6.23969 24 4.55953 23.346 3.27606C22.7708 2.14708 21.8529 1.2292 20.7239 0.653961C19.4405 0 17.7603 0 14.4 0H9.6C6.23969 0 4.55953 0 3.27606 0.653961C2.14708 1.2292 1.2292 2.14708 0.653961 3.27606ZM19.0291 9.0828C19.0291 13.9209 15.3459 19.5 8.6119 19.5V19.4971C6.62248 19.4998 4.67433 18.9298 3 17.8554C3.95859 17.971 4.93056 17.8965 5.86031 17.6361C6.79007 17.3757 7.65936 16.9345 8.41846 16.3379C7.65445 16.3234 6.91404 16.0706 6.30076 15.6147C5.68748 15.1588 5.23198 14.5227 4.99793 13.7953C5.54654 13.901 6.11208 13.8795 6.65109 13.7325C5.82253 13.5651 5.07738 13.1163 4.54201 12.4621C4.00665 11.808 3.71403 10.9888 3.7138 10.1435V10.0971C4.22287 10.3811 4.79285 10.5383 5.37553 10.5554C4.60036 10.0377 4.05161 9.24413 3.84102 8.33612C3.63043 7.42811 3.77383 6.47397 4.24201 5.66797C5.1613 6.79892 6.30813 7.72391 7.60807 8.38292C8.908 9.04193 10.332 9.42021 11.7876 9.49323C11.6054 8.70834 11.687 7.88528 12.0197 7.15142C12.3524 6.41756 12.9177 5.81382 13.6282 5.43362C14.3386 5.05342 15.1545 4.91795 15.9497 5.04819C16.7448 5.17843 17.4749 5.5671 18.0269 6.15407C18.8468 5.99245 19.6331 5.69189 20.3518 5.26539C20.0785 6.11325 19.5065 6.83293 18.7422 7.29044C19.468 7.20481 20.1769 7.01063 20.845 6.71441C20.3535 7.44953 19.7349 8.09126 19.0184 8.60955C19.0291 8.76658 19.0291 8.92433 19.0291 9.0828Z"
            fill="#1DA1F2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1427_79307">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Twitter;