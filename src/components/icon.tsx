import type { SVGProps } from "react";

type IconName = "resume" | "github" | "linkedin" | "mail" | "graduation";

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    resume: (
      <>
        <path d="M5 2h9l5 5v15H5V2Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M14 2v5h5" />
        <circle cx="9" cy="10" r="1.5" fill="currentColor" stroke="none" />
        <path d="M7 14c0-2 4-2 4 0m2-4h3m-3 3h3M8 17h8M8 20h5" />
      </>
    ),
    github: (
      <path fill="currentColor" stroke="none" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.08.67-3.73-1.3-3.73-1.3-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.62 10.62 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.59 5.2-5.06 5.48.4.35.75 1.02.75 2.06v3.03c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z" />
    ),
    linkedin: (
      <>
        <defs>
          <mask id="linkedin-cutout" x="0" y="0" width="24" height="24" maskUnits="userSpaceOnUse">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="#fff" stroke="none" />
            <g fill="#000" stroke="none">
              <circle cx="7" cy="7" r="1.5" />
              <path d="M5.7 10h2.6v8.3H5.7zM10.5 10H13v1.1c.5-.8 1.3-1.4 2.7-1.4 2.8 0 3.3 1.8 3.3 4.2v4.4h-2.6v-3.9c0-1 0-2.3-1.4-2.3s-1.8 1.1-1.8 2.3v3.9h-2.7V10Z" />
            </g>
          </mask>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" stroke="none" mask="url(#linkedin-cutout)" />
      </>
    ),
    mail: (
      <>
        <defs>
          <mask id="mail-cutout" x="0" y="0" width="24" height="24" maskUnits="userSpaceOnUse">
            <rect x="2" y="4" width="20" height="16" rx="2" fill="#fff" stroke="none" />
            <path d="m3 6 9 7 9-7M3 18l5-5m13 5-5-5" fill="none" stroke="#000" strokeWidth="1.5" />
          </mask>
        </defs>
        <rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor" stroke="none" mask="url(#mail-cutout)" />
      </>
    ),
    graduation: (
      <>
        <path d="m2 9 10-5 10 5-10 5-10-5Zm4 2v6c4 3 8 3 12 0v-6m4-2v8" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
