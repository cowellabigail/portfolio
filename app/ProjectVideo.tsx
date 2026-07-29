"use client";

import { useEffect, useRef, useState } from "react";

export function ProjectVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const applyMotionPreference = () => {
      if (motionPreference.matches) {
        video.pause();
        return;
      }

      void video.play().catch(() => setIsPlaying(false));
    };

    applyMotionPreference();
    motionPreference.addEventListener("change", applyMotionPreference);

    return () => {
      motionPreference.removeEventListener("change", applyMotionPreference);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <div className="project-video">
      <video
        id="musicmagpie-preview"
        ref={videoRef}
        src="/work/musicmagpie.mp4"
        aria-describedby="musicmagpie-description"
        loop
        muted
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <span className="sr-only" id="musicmagpie-description">
        A looping preview of a musicMagpie paid social rental animation.
      </span>
      <button
        className="video-toggle"
        type="button"
        aria-controls="musicmagpie-preview"
        onClick={togglePlayback}
      >
        <span className="video-toggle-icon" aria-hidden="true">
          {isPlaying ? "Ⅱ" : "▶"}
        </span>
        <span className="sr-only">
          {isPlaying ? "Pause animation" : "Play animation"}
        </span>
      </button>
    </div>
  );
}
