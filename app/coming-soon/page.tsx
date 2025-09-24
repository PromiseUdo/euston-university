"use client";
import React, { useState, useEffect } from "react";
import "./ComingSoon.css";
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
    <div className="parent">
      <div className="coming-soon">
        <div className="content">
          <h1>
            <span>Coming Soon</span>
          </h1>
          <p>This page is under construction. Stay tuned!</p>
          {/* <div className="timer">
            <div className="time-block">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="time-block">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="time-block">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="time-block">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div> */}
          {/* <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email for updates"
              required
              aria-label="Email for newsletter"
            />
            <button type="submit">Notify Me</button>
          </form> */}
        </div>
        <Link href="/" className="back-button">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
