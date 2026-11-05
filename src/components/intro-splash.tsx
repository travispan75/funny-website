"use client";

import { useState } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./intro-splash.module.css";

const rows = [
  { src: "/images/intro/tra.svg", y: 0 },
  { src: "/images/intro/vis.svg", y: 79 },
  { src: "/images/intro/pan.svg", y: 158 },
];

export function IntroSplash() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <button
      type="button"
      className={styles.splash}
      aria-label="Travis Pan intro. Skip animation."
      onClick={() => setVisible(false)}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setVisible(false);
      }}
    >
      <svg
        className={styles.wordmark}
        viewBox="0 0 263 234"
        aria-hidden="true"
        focusable="false"
      >
        {rows.map((row) => (
          <image
            key={row.src}
            href={assetPath(row.src)}
            x="0"
            y={row.y}
            width="263"
            height="76"
            preserveAspectRatio="none"
          />
        ))}
      </svg>
    </button>
  );
}
