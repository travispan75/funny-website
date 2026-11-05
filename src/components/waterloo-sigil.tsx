import { assetPath } from "@/lib/asset-path";

export function WaterlooSigil({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 92 112" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sigil-ribbon" x1="14" y1="7" x2="76" y2="108" gradientUnits="userSpaceOnUse">
          <stop stopColor="#da8bfc" />
          <stop offset="0.45" stopColor="#a74add" />
          <stop offset="1" stopColor="#7429aa" />
        </linearGradient>
        <linearGradient id="sigil-metal" x1="18" y1="11" x2="73" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e3eaf0" />
          <stop offset="0.35" stopColor="#94a3b6" />
          <stop offset="0.7" stopColor="#4e657e" />
          <stop offset="1" stopColor="#a8bac9" />
        </linearGradient>
        <linearGradient id="sigil-face" x1="25" y1="19" x2="65" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#385778" />
          <stop offset="1" stopColor="#172a43" />
        </linearGradient>
      </defs>
      <path d="m13 14 14-9 19 6 17-6 16 9-1 94-31-12-33 14-1-96Z" fill="url(#sigil-ribbon)" stroke="#17233a" strokeWidth="3" strokeLinejoin="round" />
      <path d="m17 19 11-7 18 5 18-5 10 6M19 100l26-10 27 10" stroke="#f0b9ff" strokeWidth="3" strokeLinejoin="round" />
      <path d="m16 20 30-11 30 11-2 56-28 24-28-24-2-56Z" fill="url(#sigil-metal)" stroke="#101e32" strokeWidth="3" strokeLinejoin="round" />
      <path d="m22 25 24-9 24 9-2 48-22 19-22-19-2-48Z" fill="url(#sigil-face)" stroke="#23344b" strokeWidth="2" strokeLinejoin="round" />
      <path d="m22 25 24-9 24 9M24 73l22 19 22-19" stroke="#e0edf5" strokeOpacity="0.45" strokeWidth="2" strokeLinejoin="round" />
      <path d="M37 11V5l9 3 9-3v6l-9 4-9-4Z" fill="#d784f4" stroke="#28304a" strokeWidth="2" strokeLinejoin="round" />
      <image href={assetPath("/images/companies/waterloo.svg")} x="22" y="23" width="48" height="56" />
    </svg>
  );
}
