"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MaxWidthWrapper from "./max-width-wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/slide1.webp",
    headline: "Inspiring Minds, Shaping Futures",
    subheading: "Euston University",
    primaryButton: "Apply",
    secondaryButton: "Learn more",
  },
  {
    image: "/slide2.webp",
    headline: "Designed for the 21st Century Learner",
    subheading: "Euston University",

    primaryButton: "Apply",
    secondaryButton: "Learn more",
  },
  {
    image: "/slide3.webp",
    headline: "World-Class Faculty and Learning Infrastructure",
    subheading: "Euston University",

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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />

      {/* Content */}
      <MaxWidthWrapper className="h-full">
        <div className="flex h-full w-full flex-col items-center justify-end pb-16 text-white">
          <div className="w-full grid grid-cols-12 gap-[24px] md:gap-0">
            {/* Left Column - Animated */}
            <div className="col-span-12 md:col-span-8 min-h-[220px] max-w-[550px] md:min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-[0.75rem] md:gap-[0.875rem]"
                >
                  <p className="font-body font-medium text-[15px] leading-[26px] md:leading-[26px] uppercase tracking-[4px]">
                    {slides[currentSlide].subheading}
                  </p>
                  <h1 className="leading-[2.1875rem] md:leading-[3.4375rem] text-[35px] md:text-[55px] font-heading font-bold mb-4 ">
                    {slides[currentSlide].headline}
                  </h1>
                  <div className="flex items-center gap-4">
                    {/* <button className="text-center uppercase bg-[#890c25] h-[44px] px-12 py-2 text-[14px] text-[#ffffff] tracking-[2px] font-medium">
                      {slides[currentSlide].primaryButton}
                    </button> */}
                    <button className="inline-flex  gap-2 items-center relative text-center uppercase bg-[#890c25] h-[44px] px-12 py-2.5 text-[14px] text-[#ffffff] tracking-[2px] font-medium overflow-hidden group">
                      <span className="relative z-10">
                        {slides[currentSlide].primaryButton}
                      </span>
                      <span className=" absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                      <ArrowRight className="w-4 h-4 text-white relative z-10" />
                    </button>

                    {/* <button className="text-center text-white uppercase bg-transparent h-[44px] px-10 py-2 text-[14px] tracking-[2px]">
                      {slides[currentSlide].secondaryButton}
                    </button> */}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Static */}
            <div className="col-span-12  md:col-span-4 flex flex-col gap-[1rem] md:gap-[2.4rem]">
              <div className="flex flex-col gap-[0.625rem] md:gap-[1.0625rem]">
                <p className="font-body font-medium text-[26px] leading-[15px] tracking-normal">
                  Enabling Environment
                </p>
                <p className="hover:underline font-body font-medium text-[15px] leading-[31.2px] tracking-normal">
                  An engaging, lively learning atmosphere
                </p>

                <hr className="py-[10px] max-w-[300px] mt-3 border-gray-500 hover:border-[#890c25] transition-border" />
              </div>
              <div className="flex group flex-col gap-[0.5rem] md:gap-[0.875rem]">
                <p className="font-body font-medium text-[26px] leading-[15px] tracking-normal">
                  Result Validation
                </p>
                <p className="hover:underline font-body font-medium text-[15px] leading-[31.2px] tracking-normal">
                  We ensure transparency in our educational system
                </p>
                <hr className="py-[10px] mt-3 max-w-[300px] border-gray-500 group-hover:border-[#890c25] transition-border" />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
