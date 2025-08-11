"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function ShowcaseScrollScript() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>(
      "section[data-showcase-section]",
    );
    const track = section?.querySelector<HTMLElement>("[data-showcase-track]");
    if (!track) return;

    gsap.set(track, { x: 0, willChange: "transform" });
    gsap.to(track, { x: -800, duration: 1.2, ease: "power2.out" });
  }, []);

  return null;
}
