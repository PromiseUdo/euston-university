"use client";
import React, { useState, useEffect } from "react";
import styles from "./ComingSoon.module.css"; // Import CSS Module
import Link from "next/link";

const ComingSoon = () => {
  // Countdown timer logic
  const targetDate = new Date("2025-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.parent}>
      <div className={styles.comingSoon}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.text}>Coming Soon</span>
          </h1>
          <p className={styles.desc}>
            This page is under construction. Stay tuned!
          </p>
        </div>
        <Link href="/" className={styles.backButton}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
