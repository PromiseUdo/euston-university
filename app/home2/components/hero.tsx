// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
// import { ArrowRight, ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import MaxWidthWrapper from "@/components/max-width-wrapper";

// const slides = [
//   {
//     image: "/slide1.webp",
//     headline: "Inspiring Minds, Shaping Futures",
//     subheading: "Euston University",
//     primaryButton: "Apply",
//     secondaryButton: "Learn more",
//   },
//   {
//     image: "/slide2.webp",
//     headline: "Designed for the 21st Century Learner",
//     subheading: "Euston University",
//     primaryButton: "Apply",
//     secondaryButton: "Learn more",
//   },
//   {
//     image: "/slide3.webp",
//     headline: "World-Class Faculty and Learning Infrastructure",
//     subheading: "Euston University",
//     primaryButton: "Faculty",
//     secondaryButton: "Learn more",
//   },
// ];

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const controls = useAnimation();

//   // Variants with proper typing
//   const textVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut" as const,
//       },
//     },
//   };

//   const staggerContainer: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     resetAnimations();
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     resetAnimations();
//   };

//   const resetAnimations = () => {
//     controls.start("hidden");
//     setTimeout(() => {
//       controls.start("visible");
//     }, 100);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     controls.start("visible");
//   }, [currentSlide, controls]);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Navigation Arrows */}
//       <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
//         <button
//           onClick={prevSlide}
//           className="z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors duration-300"
//           aria-label="Previous slide"
//         >
//           <ArrowLeft className="w-6 h-6 text-white" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors duration-300"
//           aria-label="Next slide"
//         >
//           <ArrowRight className="w-6 h-6 text-white" />
//         </button>
//       </div>

//       {/* Image Slideshow with Zoom Effect */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           className="absolute inset-0 h-full w-full"
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             transition: {
//               opacity: { duration: 0.8 },
//               scale: { duration: 8, ease: "linear" },
//             },
//           }}
//           exit={{ opacity: 0 }}
//         >
//           <img
//             src={slides[currentSlide].image}
//             alt="Hero background"
//             className="h-full w-full object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />

//       {/* Content */}
//       <MaxWidthWrapper className="h-full">
//         <div className="flex h-full w-full flex-col items-center justify-center text-white">
//           <motion.div
//             className="w-full max-w-4xl text-center"
//             variants={staggerContainer}
//             initial="hidden"
//             animate={controls}
//           >
//             <motion.div variants={textVariants}>
//               <p className="font-medium text-[15px] uppercase tracking-[4px] mb-4">
//                 {slides[currentSlide].subheading}
//               </p>
//             </motion.div>

//             <motion.div variants={textVariants}>
//               <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
//                 {slides[currentSlide].headline}
//               </h1>
//             </motion.div>

//             <motion.div
//               variants={textVariants}
//               className="flex justify-center gap-4"
//             >
//               <Link
//                 href="#"
//                 className="inline-flex gap-2 items-center relative text-center uppercase bg-[#890c25] h-[44px] px-12 py-2.5 text-[14px] text-white tracking-[2px] font-medium overflow-hidden group"
//               >
//                 <span className="relative z-10">
//                   {slides[currentSlide].primaryButton}
//                 </span>
//                 <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
//                 <ArrowRight className="w-4 h-4 text-white relative z-10" />
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default HeroSlider;

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
// import { ArrowRight, ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import MaxWidthWrapper from "@/components/max-width-wrapper";

// const slides = [
//   {
//     image: "/slide1.webp",
//     headline: "Inspiring Minds, Shaping Futures",
//     subheading: "Euston University",
//     primaryButton: "Apply",
//     secondaryButton: "Learn more",
//   },
//   {
//     image: "/slide2.webp",
//     headline: "Designed for the 21st Century Learner",
//     subheading: "Euston University",
//     primaryButton: "Apply",
//     secondaryButton: "Learn more",
//   },
//   {
//     image: "/slide3.webp",
//     headline: "World-Class Faculty and Learning Infrastructure",
//     subheading: "Euston University",
//     primaryButton: "Faculty",
//     secondaryButton: "Learn more",
//   },
// ];

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const controls = useAnimation();

//   // Variants with proper typing
//   const textVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut" as const,
//       },
//     },
//   };

//   const staggerContainer: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     resetAnimations();
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     resetAnimations();
//   };

//   const resetAnimations = () => {
//     controls.start("hidden");
//     setTimeout(() => {
//       controls.start("visible");
//     }, 100);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     controls.start("visible");
//   }, [currentSlide, controls]);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Navigation Arrows - Updated with theme colors */}
//       <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
//         <button
//           onClick={prevSlide}
//           className="z-30 p-3 rounded-full border-2 border-[#890c25] text-[#890c25] hover:bg-[#890c25] hover:text-white transition-all duration-300"
//           aria-label="Previous slide"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="z-30 p-3 rounded-full border-2 border-[#890c25] text-[#890c25] hover:bg-[#890c25] hover:text-white transition-all duration-300"
//           aria-label="Next slide"
//         >
//           <ArrowRight className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Image Slideshow with Zoom Effect */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           className="absolute inset-0 h-full w-full"
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             transition: {
//               opacity: { duration: 0.8 },
//               scale: { duration: 8, ease: "linear" },
//             },
//           }}
//           exit={{ opacity: 0 }}
//         >
//           <img
//             src={slides[currentSlide].image}
//             alt="Hero background"
//             className="h-full w-full object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />

//       {/* Content */}
//       <MaxWidthWrapper className="h-full">
//         <div className="flex h-full w-full flex-col items-center justify-center text-white">
//           <motion.div
//             className="w-full max-w-4xl text-center"
//             variants={staggerContainer}
//             initial="hidden"
//             animate={controls}
//           >
//             <motion.div variants={textVariants}>
//               <p className="font-medium text-[15px] uppercase tracking-[4px] mb-4">
//                 {slides[currentSlide].subheading}
//               </p>
//             </motion.div>

//             <motion.div variants={textVariants}>
//               <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
//                 {slides[currentSlide].headline}
//               </h1>
//             </motion.div>

//             <motion.div
//               variants={textVariants}
//               className="flex justify-center gap-4"
//             >
//               <Link
//                 href="#"
//                 className="inline-flex gap-2 items-center relative text-center uppercase bg-[#890c25] h-[44px] px-12 py-2.5 text-[14px] text-white tracking-[2px] font-medium overflow-hidden group"
//               >
//                 <span className="relative z-10">
//                   {slides[currentSlide].primaryButton}
//                 </span>
//                 <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
//                 <ArrowRight className="w-4 h-4 text-white relative z-10" />
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default HeroSlider;

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
// import { ArrowRight, ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import MaxWidthWrapper from "@/components/max-width-wrapper";

// const slides = [
//   {
//     image: "/slide1.webp",
//     headline: "Inspiring Minds, Shaping Futures",
//     subheading: "Euston University",
//     primaryButton: "Apply",
//     secondaryButton: "Learn more",
//   },
//   {
//     image: "/slide2.webp",
//     headline: "Designed for the 21st Century Learner",
//     subheading: "Euston University",
//     primaryButton: "Apply",
//     secondaryButton: "Learn more",
//   },
//   {
//     image: "/slide3.webp",
//     headline: "World-Class Faculty and Learning Infrastructure",
//     subheading: "Euston University",
//     primaryButton: "Faculty",
//     secondaryButton: "Learn more",
//   },
// ];

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const controls = useAnimation();

//   // Variants with proper typing
//   const textVariants: Variants = {
//     hidden: {
//       opacity: 0,
//       y: 100, // Increased from 20 to 100 for a more pronounced "from bottom" effect
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1, // Slightly increased duration for smoother animation
//         ease: "easeOut" as const,
//       },
//     },
//   };

//   const staggerContainer: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2, // Increased stagger for a more noticeable sequence
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     resetAnimations();
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     resetAnimations();
//   };

//   const resetAnimations = () => {
//     controls.start("hidden");
//     setTimeout(() => {
//       controls.start("visible");
//     }, 100);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     controls.start("visible");
//   }, [currentSlide, controls]);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Navigation Arrows */}
//       <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
//         <button
//           onClick={prevSlide}
//           className="z-30 p-3 rounded-full border-2 border-[#890c25] text-[#890c25] hover:bg-[#890c25] hover:text-white transition-all duration-300"
//           aria-label="Previous slide"
//         >
//           <ArrowLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="z-30 p-3 rounded-full border-2 border-[#890c25] text-[#890c25] hover:bg-[#890c25] hover:text-white transition-all duration-300"
//           aria-label="Next slide"
//         >
//           <ArrowRight className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Image Slideshow with Zoom Effect */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           className="absolute inset-0 h-full w-full"
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             transition: {
//               opacity: { duration: 0.8 },
//               scale: { duration: 8, ease: "linear" },
//             },
//           }}
//           exit={{ opacity: 0 }}
//         >
//           <img
//             src={slides[currentSlide].image}
//             alt="Hero background"
//             className="h-full w-full object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />

//       {/* Content */}
//       <MaxWidthWrapper className="h-full">
//         <div className="flex h-full w-full flex-col items-center justify-center text-white">
//           <motion.div
//             className="w-full max-w-4xl text-center"
//             variants={staggerContainer}
//             initial="hidden"
//             animate={controls}
//           >
//             <motion.div variants={textVariants}>
//               <p className="font-medium text-[15px] uppercase tracking-[4px] mb-4">
//                 {slides[currentSlide].subheading}
//               </p>
//             </motion.div>

//             <motion.div variants={textVariants}>
//               <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
//                 {slides[currentSlide].headline}
//               </h1>
//             </motion.div>

//             <motion.div
//               variants={textVariants}
//               className="flex justify-center gap-4"
//             >
//               <Link
//                 href="#"
//                 className="inline-flex gap-2 items-center relative text-center uppercase bg-[#890c25] h-[44px] px-12 py-2.5 text-[14px] text-white tracking-[2px] font-medium overflow-hidden group"
//               >
//                 <span className="relative z-10">
//                   {slides[currentSlide].primaryButton}
//                 </span>
//                 <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
//                 <ArrowRight className="w-4 h-4 text-white relative z-10" />
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default HeroSlider;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";

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
    primaryButton: "Faculty",
    secondaryButton: "Learn more",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Variants with proper typing
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100, // Pronounced "from bottom" effect
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // CHANGED: Increased from 1 to 1.5 seconds for slower animation
        ease: "easeOut" as const,
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // CHANGED: Increased from 0.2 to 0.3 to complement slower animation
        delayChildren: 0.4, // CHANGED: Increased from 0.3 to 0.4 for smoother stagger with slower animation
      },
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="z-30 p-3 rounded-full border-2 border-[#cccccc] hover:border-[#890c25] text-[#cccccc] hover:bg-[#890c25] hover:text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="z-30 p-3 rounded-full border-2 border-[#cccccc] hover:border-[#890c25] text-[#cccccc] hover:bg-[#890c25] hover:text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Image Slideshow with Zoom Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              opacity: { duration: 0.8 },
              scale: { duration: 8, ease: "linear" },
            },
          }}
          exit={{ opacity: 0 }}
        >
          <img
            src={slides[currentSlide].image}
            alt="Hero background"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />

      {/* Content */}
      <MaxWidthWrapper className="h-full">
        <div className="flex h-full w-full flex-col items-center justify-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide} // Force re-render on slide change
              className="w-full max-w-4xl text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden" // Ensure exit animation
            >
              <motion.div variants={textVariants}>
                <p className="font-medium text-[15px] uppercase tracking-[4px] mb-4">
                  {slides[currentSlide].subheading}
                </p>
              </motion.div>

              <motion.div variants={textVariants}>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  {slides[currentSlide].headline}
                </h1>
              </motion.div>

              <motion.div
                variants={textVariants}
                className="flex justify-center gap-4"
              >
                <Link
                  href="#"
                  className="inline-flex gap-2 items-center relative text-center uppercase bg-[#890c25] h-[44px] px-12 py-2.5 text-[14px] text-white tracking-[2px] font-medium overflow-hidden group"
                >
                  <span className="relative z-10">
                    {slides[currentSlide].primaryButton}
                  </span>
                  <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <ArrowRight className="w-4 h-4 text-white relative z-10" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSlider;
