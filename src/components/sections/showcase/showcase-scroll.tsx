"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ShowcaseScrollScript() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    console.log("ShowcaseScrollScript");

    const section = document.querySelector<HTMLElement>(
      "section[data-showcase-section]",
    );
    const container = section?.querySelector<HTMLElement>(
      "[data-showcase-container]",
    );
    const track = section?.querySelector<HTMLElement>("[data-showcase-track]");
    if (!section || !container || !track) return;

    gsap.set(track, { x: 0, willChange: "transform" });

    const tween = gsap.to(track, {
      x: () => {
        const firstCard = track.firstElementChild as HTMLElement | null;
        const firstCardWidth = firstCard?.offsetWidth ?? 0;
        return -Math.max(0, track.scrollWidth - firstCardWidth);
      },
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: () => {
          const firstCard = track.firstElementChild as HTMLElement | null;
          const firstCardWidth = firstCard?.offsetWidth ?? 0;
          return `+=${Math.max(0, track.scrollWidth - firstCardWidth)}`;
        },
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      tween?.kill();
      tween.scrollTrigger?.kill();
    };
  }, []);

  return null;
}
