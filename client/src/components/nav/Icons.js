import * as React from "react";

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.23em"
    height="1em"
    viewBox="0 0 256 209"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const GitHubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

// export const DribbbleIcon = ({ className, ...rest }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="1em"
//     height="1em"
//     viewBox="0 0 256 256"
//     {...rest}
//     className={`w-full h-auto ${className}`}
//   >
//     <path fill="none" d="M0 0h256v256H0z" />
//     <path
//       fill="#E74D89"
//       d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
//     />
//     <path
//       fill="#B2215A"
//       d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
//     />
//   </svg>
// );

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1040}
    height={440}
    viewBox="0 0 900 900"
    {...rest}
  >
    <path d="M434.1 185.3c-10.1 4.2-14.4 13.3-10.8 23 3 8.1 2.8 9-2.8 10.8-2.7.9-5 2.1-4.9 2.7.4 4.9-.4 4.7 10.8 3 1.7-.3 3.1 3.1 11 26.9 7.9 23.6 9.4 27.3 11.1 27.2 1.1 0 2.8-.6 3.8-1.4 1.6-1.1 1.7-1.8.8-4.7-5.7-17.8-9.3-28.6-10-30.3-3.1-7.3-6.7-21.1-5.7-21.7.6-.4 4.8-1.9 9.3-3.3 8.5-2.7 9.7-4 6.7-6.9-2-2-2.3-2-8.1.3-2.6 1-6.5 2.1-8.5 2.5-3.6.7-3.7.6-4.7-3.1-2.2-8.2-2.2-9.3-1.1-12.8 1.3-4 4.1-5.8 12.2-7.9 4.5-1.1 5.3-1.7 5.3-3.7 0-2.1-.5-2.4-4.5-2.6-2.9-.2-6.5.6-9.9 2zM470.6 189.7c-1.7.5-1.8 1.2-1.2 7.8.7 8.1.4 8.5-5.9 8.5-3.9 0-4.9 1.1-4.1 4.6.6 2.4.9 2.5 6.6 1.8l5.9-.6.6 3.8c.3 2.2 1.2 6.8 2 10.4 1.3 6 2.2 11.3 4.5 25.8 1 6.4 4.9 11.8 9.9 13.9 5.3 2.3 14.6 1.3 19.9-2.1 4.5-2.8 5.2-4.6 2.6-6.7-1.4-1.1-2.2-1-5.5.9-4.4 2.6-10.5 2.9-13.7.6-3-2.1-6.2-8.6-6.2-12.7 0-1.8-.6-5.7-1.4-8.7-.7-3-1.7-8.2-2.1-11.5-.3-3.3-1.1-8-1.7-10.4-1.2-4.8-.4-6.1 4.2-6.1 1.3 0 5-.8 8.2-1.7 5.3-1.6 5.8-2 5.8-4.6 0-2.7-.2-2.9-3.2-2.4-18.3 3.2-17.1 3.4-18.2-3.6-1.2-7-2.3-8.2-7-7zM516.7 194.7c-1.1 1.1-.8 3.5 1.4 10.8 1.1 3.8 2.7 9.2 3.4 12 4.2 15 5.8 20.4 7.1 24 .8 2.3 1.4 5 1.4 6 0 1.1.7 3.3 1.5 4.9.8 1.5 1.5 3.8 1.5 5 0 3.2 1.1 4.2 5.2 4.9 3.7.6 3.7.5 6.4-5.1 1.5-3.1 7.1-14.8 12.6-26 10.6-21.8 11.9-23.1 13.1-13.7.4 2.5 1.3 5.9 2.2 7.5.8 1.6 1.5 3.8 1.5 4.9 0 1.1.5 3.2 1.2 4.8.6 1.5 1.7 5 2.4 7.8 2.4 9.9 4.6 17 5.5 17.9.5.6.9 2 .9 3.2 0 1.7.8 2.3 3.7 2.7 3.5.6 6.3-.5 6.3-2.4 0-.5 3.1-7.3 6.9-15.2 14.4-29.7 21.1-44 21.1-44.8 0-.5-1.6-.9-3.6-.9-3.4 0-3.6.2-7 7.7-9.8 21.6-21.5 45.3-22.4 45.3-.4 0-1.5-2.8-2.4-6.3-.9-3.4-2.3-8.5-3-11.2-2-7.1-5.4-19.1-7.2-25.5-.8-3-2-7.4-2.6-9.8-1.1-4-1.3-4.2-4.9-4.2-3.7 0-3.9.2-6.5 5.7-1.4 3.2-3 6.5-3.5 7.3-.5.8-1.2 2.2-1.6 3-3.5 8.3-17.9 37-18.5 37-.4 0-1-1.2-1.3-2.8-.8-3.4-4.1-15.1-6-21.3-.8-2.6-1.5-5.3-1.5-6.1 0-1.4-2.3-9.7-5.8-20.7-1.2-3.8-2.4-5.6-4-6.2-2.8-1.1-2.7-1.1-3.5-.2zM641.3 217.7c-3 .6-4.6 2.9-4 5.5.6 2.2 1.1 2.3 10.9 2.3 8.7.1 11 .4 14.6 2.3 5.8 3.1 8.1 5.6 9.9 10.8 1.3 3.9 1.3 4.9-.1 9.9-1.8 6.1-2.6 6.4-8.4 3.9-2-.9-4.8-2-6.2-2.4-1.4-.5-5.6-2-9.5-3.4-15.2-5.6-24.9-2.3-28.9 9.8-1.7 5.1-1.6 6.6 1.5 13.3 2.1 4.7 6 8 13.4 11.3 6.4 2.9 17.4 3.2 22.3.7 3.6-2 3.7-1.8 2 3.1-1.2 3.1-1.1 3.5 1.1 5.3 1.3 1 2.7 1.9 3.1 1.9.9 0 3.6-5.4 7-14 1.1-3 2.5-6.4 3-7.5 3.2-6.9 7.9-19.8 8.5-23.4 2.3-13.8-6.5-24-24.3-28.2-7.5-1.8-11.4-2.1-15.9-1.2zm14.2 37.8c6.6 2.6 12.2 4.9 12.4 5.1.2.2-.4 1.9-1.3 3.8s-1.6 3.9-1.6 4.4c0 .6-2 2.7-4.6 4.8-4.3 3.5-4.9 3.7-11.7 3.8-5.8 0-8.2-.5-12.2-2.6-6.5-3.4-8.5-5.7-9.2-10.7-1.1-8.3 4.4-14.6 12.2-13.8 2.2.2 9.4 2.6 16 5.2zM383.5 237c-7.5 1.6-11.9 4.2-18.5 10.8-5.1 5.3-6.9 7.9-8.2 12.3-2.3 7.1-2.3 13.1 0 19.5 2.3 6.6 4.5 10 9.9 15.2 7.4 7.1 11.4 8.7 21.8 8.6 10.8 0 15.6-1.9 23.8-9.4 8-7.3 10-12.7 9.5-24.9-.4-9-.7-10-4.3-15.9-2-3.4-5.2-7.4-6.9-8.9-7-6-18.6-9.1-27.1-7.3zm11.4 7.7c10.5 3.4 20.1 16.4 20.1 27.4 0 4.9-3.9 13.6-7.6 17.1-3.9 3.6-13.6 7.8-18.2 7.8-4.3 0-12.3-3.5-16.9-7.4-3.7-3.1-7.8-11.2-8.7-17.3-1.7-11.3 5.8-23.2 17.2-27.1 7.2-2.6 7.4-2.6 14.1-.5zM712.9 248.2c-.7 1.3-4 6.6-7.4 11.8-3.4 5.2-9.3 14.2-13 20-3.7 5.8-8.3 12.7-10.2 15.5l-3.4 5 2.2 1.7c4.1 3.4 5.2 2.4 15.2-13 10.3-15.8 15.2-21.3 20.6-23.1 6.3-2.1 15.2-.9 19.2 2.6 1.5 1.2 1.9 1.1 3.9-1.7 2.8-3.9 1.7-5.4-5.5-7.5-6.2-1.8-10.8-1.9-13.6-.4-1.1.5-2.9.9-4 .7-1.9-.3-1.9-.4.5-3.7 3.2-4.3 3.3-6.5.4-8.5-3-2.1-3.5-2-4.9.6zM309 262.9c-12 4.3-23.3 14.3-28.1 24.8-3 6.4-4 15.5-1.9 16.8.6.3 1 1.4 1 2.4 0 1.8 5.9 8.6 10 11.4 3.1 2.2 11.9 2.2 16.8.1 5.8-2.5 13-6.1 22.2-10.9 6.9-3.7 9.5-4.5 13.7-4.5 4.4 0 5.8.5 8.6 2.9 4.6 4.1 5.8 8.3 4 15-1.1 4.4-2.5 6.6-8 12.2-6.9 7.2-12.2 10.2-23.1 13.6-3.1.9-5.8 1.8-6 1.9-.1 0 .2 1.3.7 2.8 1.7 4.4 6.8 3.7 20.1-2.7 2.5-1.2 8.3-6 13-10.7 9.4-9.3 12-14.5 12-23.3 0-4.8-2.5-11.3-5.9-15.1-4.7-5.4-15.1-7.1-23.3-3.9-2.4.9-9.5 4.6-15.8 8.2-10.3 5.8-12.2 6.5-18.1 6.9-6.5.4-6.8.3-10.4-3-4.9-4.5-5.9-11.3-2.6-18.1 4.1-8.5 16.7-18.8 24.7-20.3 3.9-.7 4.9-2.2 4-5.9-.7-2.8-1.3-2.9-7.6-.6zM748.2 287c-9.1 1.9-18.7 10.6-23.3 21-2.6 5.7-2.8 17.4-.5 22.1.9 1.8 1.6 3.8 1.6 4.6 0 2.4 13.3 14.9 18.2 17.2 2.8 1.2 6.7 2.1 9.7 2.1 5 0 5.1-.1 5.1-3 0-2.6-.4-3-2.6-3-6.7 0-17.9-7.2-22.4-14.6-4.9-7.8-4.6-19.5.5-26.4l2.4-3.3 18.8 18.5c10.3 10.2 19.5 18.8 20.5 19.1 3.8 1.3 12.8-15.6 12.8-24.2 0-1.5-.9-5.5-2.1-8.9-2.5-7.4-9.5-15.6-16-18.9-5.1-2.5-16.3-3.6-22.7-2.3zm19.9 8.7c8 4.2 12.9 12.3 12.9 21.2 0 6.5-3.4 14.6-6.2 14.6-1.9 0-32.8-30-32.8-31.9 0-1.8 4.6-4.9 8.5-5.8 4.8-1.1 13.7-.1 17.6 1.9zM848 364.6c-4.1 2-9.3 4.4-11.5 5.4-2.2 1-7.8 3.6-12.5 5.8-4.7 2.2-11.6 5.4-15.5 7.2-3.8 1.8-10.4 4.8-14.5 6.7-4.1 2-9.4 4.4-11.7 5.4-2.4 1-4.3 2.4-4.3 3.2 0 1.7 9.5 22.6 10.9 24 .6.6 1.1 1.6 1.1 2.3 0 .7 1.3 3.8 2.8 7 1.6 3.3 4.2 9 5.8 12.7 3.3 7.8 4.7 9 8.5 7.4l2.7-1.2-3.3-7c-3.1-6.5-6.9-14.7-14.2-30.5-5.3-11.3-5.6-10.3 4.9-15.3 17-8.1 19.6-9.1 21.3-7.7.8.7 1.5 1.6 1.5 2.1s2.2 5.5 4.9 11.2c2.7 5.6 6.2 13.1 7.8 16.7 3.6 7.9 5.3 9.6 8.2 8 1.2-.6 2.1-1.5 2.1-2.1 0-.6-2.1-5.4-4.6-10.7-8.6-18.1-13.4-28.7-13.4-29.8 0-.6 27.1-13.4 28.4-13.4.3 0 3.4 6.2 8.6 17.5 2.3 4.9 6 12.6 8.1 17.1 2.1 4.4 3.9 8.5 3.9 9.2 0 1.9 1.7 2.3 4.4 1.1 3.4-1.6 3.3-3-.9-11.4-1.9-3.9-3.5-7.5-3.5-8.1 0-.6-.7-1.7-1.5-2.4s-1.5-1.8-1.5-2.6c0-.7-2.4-6.4-5.4-12.7-2.9-6.2-5.6-12.2-6-13.4-.4-1.1-1.4-2.7-2.4-3.6-1.6-1.5-2.3-1.3-9.2 1.9zM295.2 389.2c-1.8 1.8-1.5 7.9.6 9.4 2.5 1.9 6.6 1.7 8.5-.4 2.1-2.3 2.1-4.6.1-7.7-1.8-2.7-7-3.5-9.2-1.3zM220.1 418.7c-.6 2.1-1.1 4.4-1.1 5.1 0 1 9.2 19.6 12.9 26.2.5.8 3.2 6.1 6 11.7 5.5 11.3 5.5 11.3-2.7 8.9-2.6-.8-7.4-2.1-10.7-3-3.3-.9-8.2-2.3-11-3.1-2.7-.8-8.6-2.4-13-3.5-4.4-1.2-10.2-2.8-12.8-3.7-5.4-1.7-6.3-1.3-7.6 3.5l-.9 3.1 5.6 1.2c3.2.7 6.5 1.6 7.4 2.1 1 .5 3.7 1.3 6 1.8 2.4.5 7.5 1.8 11.3 2.9 3.9 1 11.3 3.1 16.5 4.5 5.2 1.5 11.8 3.3 14.5 4.1 2.8.8 8.4 2.4 12.5 3.5s9.1 2.6 11.1 3.2c4.7 1.3 5.9.5 5.9-3.7 0-3-.4-3.6-2.7-4.1-6-1.4-12.9-3.7-14-4.8-1.4-1.3-9.3-16.4-9.3-17.7 0-.5 3.3-2.4 7.3-4.3 11.6-5.3 26.4-11.6 27.5-11.6 1.6 0 4.2-3.6 5.2-7 .5-1.9.8-3.5.6-3.7-.3-.3-16 5.8-19.3 7.6-2.8 1.5-19.1 8.1-19.9 8.1-.4 0-1.5.7-2.5 1.6-1.6 1.5-1.9 1.4-3.8-.8-1.1-1.2-4-6.1-6.4-10.8-5.1-9.9-10.8-20.3-11.2-20.8-.2-.2-.8 1.3-1.4 3.5zM858 454.5c-3 .7-7 1.4-8.9 1.4-1.9.1-6 .7-9 1.5-3.1.8-9.4 2-14.1 2.6-20.3 2.7-20.6 2.8-19.5 8 .6 2.8 1 3.1 3.4 2.6 1.4-.4 6.2-1.1 10.6-1.6 4.4-.6 9.5-1.5 11.4-2.1 1.8-.6 7.5-1.2 12.6-1.3 8.4-.1 9.5.1 13.2 2.6 5.8 3.8 9.1 8.6 10.4 15.1 3.3 16.1-4.3 24-25.4 26.7-4.4.5-9.5 1.4-11.5 2-2.1.5-6.8 1.2-10.6 1.6l-6.8.6.5 4c.3 2.2.7 4.2 1 4.4.2.2 2.6-.1 5.3-.6 2.7-.6 9.2-1.7 14.4-2.5 5.2-.8 11.1-1.9 13-2.5 1.9-.5 4.8-1 6.3-1 4.3 0 12.9-4.4 16.4-8.3 4-4.5 6.7-12.7 6-18.1-1-8.8-3.8-15.6-8-20-2.3-2.4-5.1-4.8-6.2-5.4-2.6-1.4-1.6-2.2 3.4-2.9 3.3-.5 4.3-1.1 4.7-2.9 1.4-5.6-1.4-6.4-12.6-3.9zM208.8 498.7c-10.8 11.7-11.8 30.6-2.1 43.2 7.3 9.7 17.1 13.8 30.5 12.9 12-.9 20.6-6.8 26.5-18.1 2.4-4.6 2.7-6.4 2.8-14.7 0-10.7-1.8-15.9-7.5-21.8-3.9-3.8-4.3-3.9-6-.7-1.1 2.1-1 2.8.6 5.1 4.5 6.4 6.3 11 6.3 16.5.2 18.9-19.1 31.2-37.2 23.8-9-3.7-15.7-13.4-15.7-22.9 0-4.7 3-13 6-16.4 3-3.4 3.5-5.1 2.4-8-.9-2.4-3.7-1.9-6.6 1.1zM797.5 536.1c-9.4 11.3-13.2 33.6-7.8 45.9 5.3 11.9 13 15 45.3 18 5.8.6 14.3 1.6 19 2.2 4.7.7 11 1.3 14 1.3 5.4 0 5.5 0 5.5-3 0-2.6-.4-3-4-3.7-5.8-1.3-6.1-2.2-1.5-5.8 10.5-8.3 13.7-29.2 6.4-41.7-2.9-5.1-9.8-11-15.1-13.1-6-2.4-17.7-2.7-23.2-.6-9.2 3.4-17.4 12.3-19.4 20.9-2.7 11.9-1.3 21.6 4.3 29.4 1.7 2.2 3 4.3 3 4.7 0 .8-8.5-.5-14.9-2.3-11.3-3.2-16.6-13.4-14.1-27.3 1.4-7.8 5.1-16.5 8.7-20.2l2.7-2.8-2.4-2.5c-1.3-1.4-2.7-2.5-3.1-2.5-.4 0-1.9 1.4-3.4 3.1zm61.4 8.9c4.1 2 6.8 4.8 9.9 10.1 3.3 5.5 3.1 18.1-.3 24.9-2.8 5.5-7.3 9.6-13.7 12.1-5.7 2.4-9 2.3-16-.2-11.5-4.2-18-15.3-16.3-27.6 1.6-11 8.1-18.8 18-21.4 4.4-1.2 14.3 0 18.4 2.1zM251.5 568.5c-2.7.7-7.5 1.6-10.5 2-3 .4-7.2 1.4-9.4 2.1-2.1.8-5.1 1.4-6.7 1.4-1.6 0-4.8 1-7.1 2.2-9.9 5-12.2 9.4-11.6 22.7.2 5.3.9 10.5 1.5 11.6.5 1.1 2.1 4.2 3.4 6.8 1.3 2.7 3.6 6.3 5.1 8 2.2 2.7 3 3 4.5 2.1 2.9-1.8 2.7-3.9-1.1-9.3-1.9-2.7-3.8-6.1-4.2-7.6-.3-1.4-1-2.8-1.5-3.1-.5-.3-.9-3.8-.9-7.7 0-6 .4-7.8 2.4-10.8 2.6-3.8 7.5-6.7 13.1-7.6 3.3-.5 3.4-.4 4 3.3.7 4.5 3.3 17.2 4.6 22.6.5 2 1.4 4 1.9 4.3.6.3 1 1.4 1 2.4 0 4.6 10.8 10.7 16.9 9.6 6.7-1.3 10.5-3.9 14-9.6 2.6-4.3 3-17.7.6-22.3-.8-1.5-1.5-3.4-1.5-4.2 0-.7-2.5-3.8-5.5-6.9l-5.5-5.4 3.2-.9c3.6-.9 5.4-3.2 4.5-5.6-.8-2-7.9-2.1-15.2-.1zm2.7 10.7c5.4 3 7.3 5.1 10.3 11.7 3.1 6.6 3.2 12.8.5 18.2-2.3 4.4-5.1 5.9-11 5.9-5.6 0-9.6-3.9-11.6-11-1.2-4.7-4.3-20.9-4.4-23.2 0-1.2 6.2-3.6 9.3-3.7 1.5-.1 4.7.9 6.9 2.1zM802 616.9c-2 3.9-1.3 6 2.6 6.7 2.1.4 8 2.2 13.2 4 5.3 1.9 10.4 3.4 11.3 3.4 1 0 3.3.6 5.1 1.4 1.8.8 6.7 2.5 10.8 3.7 4.1 1.2 9.4 2.8 11.7 3.7 5.6 1.9 7.3 1.1 7.3-3.2 0-3.3-.3-3.6-4.2-4.6-2.4-.6-6.1-1.7-8.3-2.4-2.2-.8-7.4-2.4-11.5-3.6-4.1-1.2-9.3-2.8-11.5-3.5-2.2-.7-6.7-2.1-10-3-3.3-1-7.8-2.4-10-3.1-5.2-1.8-5.2-1.8-6.5.5zM274.2 625.3c-2 2.7-2.1 4.7-.2 5.7 1.1.6 2.6 3.3 3.5 6.2 1.4 4.7 1.4 5.4-.3 8.7-.9 2-2.8 4.1-4.2 4.8-4.6 2.4-15.5 7.1-22.5 9.8-3.8 1.5-7.4 3-8 3.4-.5.4-2.7 1.3-4.9 2-4.5 1.5-4.4 1.7-8.1-7.9-3.6-9.2-3.7-9.3-6.8-7.9-1.5.7-2.7 1.5-2.7 1.8 0 1.1 4.2 11.6 5 12.6 1.5 1.9 1.5 5.7 0 6.5-.8.4-3.6 1.7-6.2 2.9l-4.8 2.2 1.5 3c1.8 3.4 3.4 3.6 9.5.8l4.4-2 1.7 2.3c1 1.2 2 3.5 2.3 5 .6 2.9 2.8 3.6 5.6 1.8 1.2-.7 1.2-1.6.4-4.7-.6-2.1-1.4-4.5-1.8-5.4-.7-1.7 4.9-4.5 27.9-13.9 17.5-7.1 20.5-10.1 20.5-20 0-5.3-1.5-9.2-5.7-14.7-2.8-3.7-4.8-4.7-6.1-3zM881 639.9c-2.5 4.7-.4 10.1 4 10.1 3.1 0 6-3 6-6.2 0-4.7-7.9-7.8-10-3.9zM793.8 643.6c-1.1 2.4-1 2.8 1.5 4.6 1.5 1.1 6 3.7 10 5.8 4 2.1 10.1 5.3 13.6 7.1 8 4.2 13.3 9.3 16 15.4 2.8 6.4 2.7 8.5-1.5 17-4.7 9.7-8.8 12.7-17.2 12.7-5.5 0-7.2-.6-20.8-7.7-8.2-4.2-16.9-8.8-19.4-10.1-4.2-2.4-4.5-2.4-5.8-.7-3 4.2-1.3 6.2 11.3 12.9 24.5 12.9 26.5 13.8 33.6 14.2 8.2.5 12.7-1.5 19.3-8.8 3.3-3.7 5.1-7 6.6-11.7 2.4-7.8 2.4-9.3.5-15.7-.8-2.7-1.3-5.1-1-5.4.2-.2 2.3.5 4.7 1.6 3.8 1.9 4.4 2 5.9.6.9-.8 1.9-2.3 2.2-3.3.4-1.9.6-1.8-25.3-15.3-6.3-3.4-14.4-7.6-17.9-9.6-10.5-5.7-11.5-6.2-13.4-6.2-.9 0-2.3 1.2-2.9 2.6zM282.8 675c-3.8.5-5.7 1.4-8.9 4.5-8.4 8.1-8.8 13.7-2.3 32.6 5.3 15.8 6.5 21.4 5.5 26.2-1.1 4.7-1.6 5.4-6.2 8.2-7.1 4.5-14.1 2.5-22.2-6.5-5.4-6-8.1-11.3-10.1-19.9-1.8-7.6-2.5-8.4-6-7.5-3.1.7-3.3 2.8-1 10.5 2.9 9.7 6.4 15.9 13 22.8 7.9 8.4 11.2 10.1 19.8 10.1 9.7 0 15.9-3.6 20-11.7 3-6 2.1-12.4-4.1-29.8-3.5-10-4.2-13.3-4.3-19.4 0-5 .3-5.7 4-9.3 3.6-3.3 4.7-3.8 8.8-3.8 10.9 0 21.3 12 26.4 30.3 1.1 4.1 1.6 8.2 1.3 9.9-.6 2.6-.4 2.8 2.4 2.8 5.5 0 6.2-6.3 2-19.3-2.6-8.3-6.4-14.8-12-20.6-9-9.3-14.7-11.5-26.1-10.1zM753.9 714.5c-12.9 4.7-22.7 17-23.7 29.8l-.5 5.9 2.8-.4c3.2-.3 4.1-1.7 5-7 .8-5.4 7.8-15.2 12.9-18.2 6.3-3.7 12.4-4.8 18.8-3.5 5.4 1.2 9.7 3.6 9.8 5.4 0 .6-1.9 3.1-4.2 5.6-25.9 27.5-31.8 34-31.8 35.1.1 2.2 8.7 7.9 15.1 9.9 7.5 2.3 10.2 2.4 17 .2 13-4 23.9-17.9 23.9-30.2 0-12.7-9.3-26.2-21.6-31.7-6.3-2.8-17.3-3.2-23.5-.9zm36.6 27.8c.4 2.7.4 7.3 0 10.2-.6 4.8-1.2 6-6 10.9-3.5 3.5-6.8 5.9-9.2 6.5-7.5 2.1-16.4.9-21.2-2.8l-2.4-1.8 9.5-9.9c5.2-5.4 11.9-12.6 14.8-15.9 8-9.1 8-9.1 11.2-5.3 1.7 2.1 2.9 5.1 3.3 8.1zM358.8 749.8c-1.9 2-6.2 7.1-9.4 11.2s-7.5 9.3-9.5 11.5c-2 2.2-6.4 7.4-9.7 11.5-6 7.3-14.9 18.2-22.4 27.2-4.4 5.3-4.6 6.7-1.4 9.7l2.4 2.2 6.3-7.8c3.5-4.3 9-11 12.4-15 5.9-7 13.8-16.5 31.4-37.8 5-6.1 9.1-11.2 9-11.5 0-.3-1.3-1.5-2.8-2.7l-2.8-2.2-3.5 3.7zM698.8 762c-6.9 2.3-10 4.1-15.6 9.4-6.7 6.3-11.1 16.7-7.6 18 3.2 1.2 4.2.5 6.8-4.9 2.9-5.7 8.4-11.2 14.5-14.2 2.5-1.2 5.8-1.8 11.1-1.7 6.4 0 8.2.4 12.3 2.8 5.9 3.5 7.6 6.2 5 8.2-1 .7-11.1 7.5-22.5 15.1-11.5 7.5-20.8 14.3-20.8 15 0 2.6 9.3 11.3 14.9 14 7.8 3.9 18.2 3.9 26.1 0 21.7-10.4 25.4-36.4 7.9-53.8-4.8-4.8-7-6.2-12.5-7.9-8-2.4-12.1-2.4-19.6 0zm34.8 27.6c1.3 4.6 1.4 6.4.4 10.1-2.3 9.5-6.1 14.1-14.8 17.9-6.6 3-10.9 3-17.5.2-6.3-2.7-9.7-5.5-9.7-8 0-1 1-2.3 2.3-2.8 1.2-.5 9.6-5.8 18.7-11.9 9.1-6 17-11 17.7-11 .7-.1 2 2.4 2.9 5.5zM383.5 766.2c-.9 1.3-9.5 14.2-19 28.8-9.6 14.6-18.8 28.4-20.5 30.7-1.6 2.3-3 4.5-3 4.8 0 .3-1.6 2.7-3.5 5.2s-3.5 5-3.5 5.4c0 1.2 5.3 3.7 6.8 3.2.7-.3 8.7-11.8 17.9-25.6 9.1-13.9 20.1-30.5 24.5-37 4.3-6.5 7.8-12.4 7.8-13.1 0-1.2-4-4.6-5.4-4.6-.3 0-1.2 1-2.1 2.2zM402.6 789.2c-2.1 5.1-4.7 11.1-5.6 13.3-1 2.2-3.5 8-5.5 13-2.1 4.9-4.3 10.3-5 12-.7 1.6-2 4.7-2.9 6.8-.9 2.1-1.6 4.1-1.6 4.6 0 1.4 6 3.5 7 2.5.5-.5 3.6-7.4 7-15.4 8.7-20.6 10.1-23.1 14.8-26.7 5.2-3.9 11.4-5 19-3.3 4.4 1 6.4 2.2 10.3 6 8.5 8.5 8.2 12.6-3.1 38.5-.5 1.1-1.5 3.6-2.4 5.5-.8 1.9-2.4 5.7-3.5 8.4-1.2 2.7-1.9 5.1-1.7 5.3.2.3 2.2.7 4.3 1 3.8.5 3.8.4 5.7-4.4 1.9-4.8 8.7-21.1 11.2-26.9 5.7-13 4.8-23.8-2.5-31.2-7.9-7.8-19.7-11.4-29.1-8.9-3 .8-6.3 1.8-7.2 2.2-1.6.6-1.6.3 0-4.5 1.4-4.5 1.4-5.2.2-6-4-2.6-5.5-1.3-9.4 8.2zM649.5 789.3l-2.7 2.3 2.7 6.4c1.4 3.6 3.3 7.9 4.1 9.7.8 1.7 1.4 3.5 1.4 4 0 .4.6 1.9 1.3 3.4 5.3 10 6.2 21.6 2.2 27.8-1.3 2.2-3.6 4.8-5 5.8-7.6 5.2-8.1 5.9-6.6 8.7 1.9 3.4 2.8 3.3 8.5-.8 5.6-3.9 8.1-7.4 9.8-13.1l1.1-4 2.3 5.2c2.5 5.6 4.4 6.5 7.8 4 1.8-1.3 1.5-2.3-4.9-18.3-3.7-9.3-7.5-18.7-8.5-20.9-.9-2.2-2.4-6-3.4-8.5s-2.4-5.9-3.1-7.5c-.7-1.7-1.6-3.8-1.9-4.8-.7-2.3-2-2.2-5.1.6zM579.6 809.1c-5.1 4-2.6 10.9 3.9 10.9 4.6 0 7.2-3.9 5.4-8.2-.7-1.6-2.3-3.4-3.6-3.9-3.1-1.1-2.6-1.2-5.7 1.2zM519.1 815.9c-.6 2.8-1.8 10.8-2.6 17.8-.9 7-1.8 13-2.1 13.5-.7 1.1-13.4.1-22.9-1.7-3.8-.7-10.4-1.5-14.5-1.7l-7.5-.3-.3 3.1-.3 3.1 9.3 1.2c5.1.6 11.6 1.5 14.3 2.1 2.8.5 7.1.9 9.6.9 2.5.1 6 .6 7.8 1.2 3.7 1.3 3.9 3.4 1.6 16.2-.8 4.5-1.7 10.8-2.1 14l-.6 5.9-3.1-.5c-1.8-.2-7-1-11.7-1.6-4.7-.6-12.8-1.8-18-2.6-16.6-2.6-19-2.3-19 1.9 0 1.9.9 2.4 8.3 3.9 4.5.9 10.2 1.7 12.7 1.7s6.3.5 8.5 1c3.3.8 26.2 4 28.6 4 .9 0 3.2-13.8 5.9-35 1.2-9.1 2.8-21 3.6-26.5 3.7-25.9 3.8-24.7-1.7-26-2.6-.6-2.8-.4-3.8 4.4z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
