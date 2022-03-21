import * as React from "react"
import { SVGProps } from "react"

const LogoSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 108.7 121.23"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={24.55}
        y1={68.65}
        x2={98.69}
        y2={48.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9663a9" />
        <stop offset={1} stopColor="#632c8c" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={11.2}
        y1={82.72}
        x2={42.65}
        y2={64.6}
        xlinkHref="#a"
      />
    </defs>
    <path
      style={{
        fill: "#fff",
      }}
      d="M14.93 30.77h78.8v68.34h-78.8z"
    />
    <path
      d="M102.37 25.58 60.68 1.51C57.2-.5 51.5-.5 48.02 1.51L6.33 25.58C2.85 27.59 0 32.53 0 36.55v48.14c0 4.02 2.85 8.96 6.33 10.97l41.69 24.07c3.48 2.01 9.18 2.01 12.66 0l41.69-24.07c3.48-2.01 6.33-6.95 6.33-10.97V36.54c0-4.02-2.85-8.96-6.33-10.97ZM87.94 43.72c-3.35 0-5.47.67-6.69 3.42l-21.6 48.52a5.81 5.81 0 0 1-2.94 2.94c-2.93 1.3-6.36-.01-7.66-2.94l-21.6-48.52c-1.22-2.74-3.34-3.42-6.69-3.42h-5.33c0-5.8.68-11.6 9.04-11.6h3.25c4.77 0 7.25 3.39 8.86 7l17.77 39.92 17.77-39.92c1.61-3.61 4.08-7 8.86-7h3.25c8.36 0 9.04 5.8 9.04 11.6h-5.33Z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M56.71 98.6c-2.93 1.3-6.36-.01-7.66-2.94l-21.6-48.52c-1.22-2.74-3.34-3.42-6.69-3.42h-5.33c0-3.62.26-7.25 2.5-9.46L0 46.77v37.91c0 4.02 2.85 8.96 6.33 10.97l29.88 17.25 20.5-14.3Z"
      style={{
        fill: "url(#b)",
      }}
    />
  </svg>
)

export default LogoSVG
