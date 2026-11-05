import { assetPath } from "@/lib/asset-path";

export function WaterlooSigil({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 92 120" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sigil-gold" x1="15" y1="87" x2="75" y2="113" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffe29a" />
          <stop offset="0.45" stopColor="#f4b54c" />
          <stop offset="1" stopColor="#c67a28" />
        </linearGradient>
        <linearGradient id="sigil-bronze" x1="13" y1="23" x2="79" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c78f55" />
          <stop offset="0.4" stopColor="#9c613d" />
          <stop offset="1" stopColor="#673b2a" />
        </linearGradient>
        <linearGradient id="sigil-edge" x1="77" y1="30" x2="61" y2="106" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e7ad68" />
          <stop offset="0.5" stopColor="#ad7045" />
          <stop offset="1" stopColor="#825131" />
        </linearGradient>
        <linearGradient id="sigil-red" x1="27" y1="32" x2="66" y2="87" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a43c32" />
          <stop offset="0.55" stopColor="#842a28" />
          <stop offset="1" stopColor="#602222" />
        </linearGradient>
        <linearGradient id="sigil-crown" x1="19" y1="5" x2="72" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d99bff" />
          <stop offset="0.45" stopColor="#b06de1" />
          <stop offset="1" stopColor="#723b9c" />
        </linearGradient>
      </defs>
      <g strokeLinejoin="round">
        <path d="m14 80 32 16 32-16v35l-32-9-32 9V80Z" fill="url(#sigil-gold)" stroke="#463022" strokeWidth="2.5" />
        <path d="m17 88 23 12v6l-23 6V88Z" fill="#ffcf73" />
        <path d="m72 88 3-2v25l-25-7v-5l22-11Z" fill="#d58a35" />
        <path d="M46 97v9m-29 6 23-6m10-2 25 7" stroke="#fce2a0" strokeWidth="1.5" />
        <path d="m8 26 19-4 19-9 19 9 19 4-1 62-37 23L9 88 8 26Z" fill="url(#sigil-bronze)" stroke="#392820" strokeWidth="3" />
        <path d="m8 27 7 6 1 50 30 18v10L9 88 8 27Z" fill="#8b5335" />
        <path d="m77 32 7-6-1 62-37 23v-10l30-18 1-51Z" fill="url(#sigil-edge)" />
        <path d="m11 30 4 3 1 50 30 18 30-18 1-51 4-3-1 57-34 21-34-21-1-56Z" fill="url(#sigil-bronze)" />
        <path d="m15 32 15-4 16-8 16 8 15 4-1 51-30 18-30-18-1-51Z" fill="#563326" stroke="#bd8551" strokeWidth="1.5" />
        <path d="m20 36 12-4 14-8 14 8 12 4-1 43-25 15-25-15-1-43Z" fill="url(#sigil-red)" />
        <path d="m20 36 5 4 1 35 20 12v7L21 79l-1-43Z" fill="#b4523b" fillOpacity="0.5" />
        <path d="m20 36 12-4 14-8 14 8 12 4-5 4-10-4-11-6-11 6-10 4-5-4Z" fill="#4e241e" fillOpacity="0.6" />
        <path d="m71 39-1 39-24 15" stroke="#cf8151" strokeOpacity="0.55" strokeWidth="1.2" />
        <path d="m12 36 1 48 32 20m34-67-1 46" stroke="#e1a66a" strokeOpacity="0.45" strokeWidth="1.4" />
        <image href={assetPath("/images/companies/waterloo.svg")} x="24" y="34" width="44" height="51" />
        <path d="M8 29 6 14q0-2 3-3l11-3q2 0 3 3l3 9 5-1 2-13q0-2 3-2h18q3 0 4 3l3 13 6 1 3-11q1-2 4-1l11 3-2 18-18-3-19-10-19 10-19 2Z" fill="url(#sigil-crown)" stroke="#3f2a3d" strokeWidth="2.5" />
        <path d="m9 13 11-3 2 4-10 3-3-4Zm26-7h19l2 4-18 1-3-5Zm38 5 9 3-1 4-10-3 2-4Z" fill="#e9c0ff" />
        <path d="m9 13 3 4 1 10-5 2-2-15 3-1Zm26-7 3 5-2 9-5 3 2-17h2Zm36 9 4 2-3 10-5-1 4-11Z" fill="#8245aa" />
        <path d="m22 14 4 10-13 3m25-16 16-1 3 11m18-4 6 1-1 9" stroke="#d99af6" strokeWidth="1.5" />
        <path d="m9 30 18-3 19-10 19 10 17 3" stroke="#4f2e42" strokeWidth="2" />
      </g>
    </svg>
  );
}
