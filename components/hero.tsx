"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MaxWidthWrapper from "./max-width-wrapper";

const slides = [
  {
    image: "/slide1.png",
    headline: "Built to excel and shine",
    subheading: "Euston University",
    primaryButton: "Apply",
    secondaryButton: "Learn more",
  },
  {
    image: "/slide2.jpg",
    headline: "Designed for the 21st Century Learner",
    subheading:
      "Euston University offers a bold departure from the traditional university model.",
    primaryButton: "Apply",
    secondaryButton: "Learn more",
  },
  {
    image: "/slide3.png",
    headline: "World-Class Faculty and Learning Infrastructure",
    subheading:
      "Euston University prides itself on attracting seasoned academics and industry professionals who are passionate about teaching and mentoring.",
    primaryButton: "Apply",
    secondaryButton: "Learn more",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3000ms for better visibility, change to 1000ms if preferred

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slideshow */}
      <AnimatePresence>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      {/* Content */}
      <MaxWidthWrapper className="h-full">
        <div className="flex h-full w-full flex-col items-center justify-end pb-16 text-white">
          <div className="w-full grid grid-cols-12">
            {/* Left Column - Animated */}
            <div className="col-span-8 min-h-[220px] max-w-[550px] md:min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-[0.5rem] md:gap-[0.875rem]"
                >
                  <p className="font-body font-medium text-[15px] leading-[15px] uppercase tracking-[4px]">
                    {slides[currentSlide].subheading}
                  </p>
                  <h1 className="leading-[2.1875rem] md:leading-[3.4375rem] text-[35px] md:text-[55px] font-heading font-bold mb-4 text-center md:text-left">
                    {slides[currentSlide].headline}
                  </h1>
                  <div className="flex items-center gap-4">
                    <button className="text-center uppercase bg-[#ffffff] h-[44px] px-12 py-2 text-[14px] text-[#292929] tracking-[2px]">
                      {slides[currentSlide].primaryButton}
                    </button>
                    <button className="text-center text-white uppercase bg-transparent h-[44px] px-10 py-2 text-[14px] tracking-[2px]">
                      {slides[currentSlide].secondaryButton}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Static */}
            <div className="col-span-4 flex flex-col gap-[0.5rem] md:gap-[0.875rem]">
              <p className="font-body font-medium text-[26px] leading-[15px] tracking-normal">
                Undergraduate
              </p>
              <p className="font-body font-medium text-[15px] leading-[31.2px] tracking-normal">
                Browse the undergraduate programs
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
