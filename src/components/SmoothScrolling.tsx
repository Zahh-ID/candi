"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
