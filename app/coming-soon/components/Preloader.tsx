"use client";

import React, { useEffect, useRef } from "react";
import "./Preloader.css";

const Preloader: React.FC = () => {
  const preloaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const preload = preloaderRef.current;
    if (!preload) return;

    const hidePreloader = () => {
      preload.style.opacity = "0";
      setTimeout(() => {
        if (preload) preload.style.display = "none";
      }, 1000);
    };

    const timer = setTimeout(hidePreloader, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="spinner_wrap">
        <div className="spinner" />
      </div>
    </div>
  );
};

export default Preloader;
