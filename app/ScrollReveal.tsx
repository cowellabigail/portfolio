"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const stickyPanels = Array.from(
      document.querySelectorAll<HTMLElement>("[data-sticky-panel]"),
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let panelFrame = 0;

    const updatePanelPositions = () => {
      panelFrame = 0;
      const viewportHeight = window.innerHeight;

      stickyPanels.forEach((panel) => {
        const panelHeight = panel.getBoundingClientRect().height;
        const stickyTop = Math.min(0, viewportHeight - panelHeight);

        panel.style.setProperty(
          "--sticky-top",
          `${Math.round(stickyTop)}px`,
        );
      });
    };

    const schedulePanelPositions = () => {
      if (panelFrame) return;
      panelFrame = window.requestAnimationFrame(updatePanelPositions);
    };

    window.addEventListener("resize", schedulePanelPositions);
    window.addEventListener("load", schedulePanelPositions);
    document.fonts.ready.then(schedulePanelPositions);
    updatePanelPositions();

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return () => {
        window.removeEventListener("resize", schedulePanelPositions);
        window.removeEventListener("load", schedulePanelPositions);
        if (panelFrame) window.cancelAnimationFrame(panelFrame);
      };
    }

    document.documentElement.classList.add("reveal-ready");

    const reveal = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        reveal(entries, observer);
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", schedulePanelPositions);
      window.removeEventListener("load", schedulePanelPositions);
      if (panelFrame) window.cancelAnimationFrame(panelFrame);
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
