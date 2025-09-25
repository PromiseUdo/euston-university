"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center">
          {/* Left Column */}
          {/* <div className="flex  items-center flex-row gap-4">
            <div className="flex-1">
              <Image
                src="/mission1.webp"
                alt="About left"
                width={300}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex-1">
              <Image
                src="/our-story6.webp"
                alt="About right"
                width={716} 
                height={477}
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-[18.5rem] md:h-[477px] lg:h-[520px] object-cover"
              />
            </div>

          </div> */}

          <div className="relative w-full h-[400px] md:h-[600px] lg:h-full">
            <Image
              src="/IMG_0016.webp"
              alt="Our Story"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Subheading with Icon */}
            {/* <div className="flex items-center gap-3">
              <Image
                src="/e-cap-pix.svg"
                alt="Cap icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-sm font-medium uppercase text-gray-600 tracking-wider">
                Knowledge Meets Innovation
              </span>
            </div> */}

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
              About Euston University
            </h2>

            {/* Description */}

            <div className="flex items-start gap-3">
              <Image
                src="/vission.svg"
                alt="Vision icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <p className="text-base font-medium text-gray-900">Vision</p>
              </div>
            </div>

            <p className="text-base text-[#737477] leading-relaxed">
              Our vision is to be a leading institution that fosters innovation,
              inclusivity, and excellence in education, empowering students to
              thrive in a global society.
            </p>
            <div className="flex items-start gap-3">
              <Image
                src="/mission.svg"
                alt="Mission icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <p className="text-base font-medium text-gray-900">Mission</p>
              </div>
            </div>
            <p className="text-base text-[#737477] leading-relaxed">
              At Euston University, we envision a future where knowledge knows
              no borders and education empowers individuals to transform their
              immediate environment and the world. Our aim is to become a pillar
              of academic excellence, engendering a culture of innovation,
              inclusivity, and social responsibility. We aim to be a leading
              research-intensive academic institution, renowned for excellence.{" "}
            </p>

            {/* Mission and Vision */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Image
                  src="/mission.svg"
                  alt="Mission icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-base font-medium text-gray-900">
                    University Mission Statement
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/vission.svg"
                  alt="Vision icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <p className="text-base font-medium text-gray-900">
                    University Vision Achievement
                  </p>
                </div>
              </div>
            </div> */}

            {/* Button */}
            {/* <Link
              href="/faculties"
              className="font-medium overflow-hidden inline-flex w-fit items-center gap-2 text-center uppercase bg-[#890c25] h-[44px] px-6 py-3 text-[14px] text-[#ffffff] tracking-[2px] transition-colors"
            >
              <span className="relative z-10">View Our Programs</span>
              <span className=" absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

              <ArrowRight className="-rotate-45 w-4 h-4" />
            </Link> */}

            <Link
              href="/faculties"
              className="inline-flex  relative w-fit items-center gap-2 text-center uppercase  rounded-[25px] shadow-md bg-[linear-gradient(135deg,#890c25_0%,#b71c1c_100%)] h-[44px] px-6 py-3 text-[14px] text-[#ffffff] tracking-[2px] font-medium overflow-hidden group"
            >
              <span className="relative z-10">View Our Programs</span>
              <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <ArrowRight className="-rotate-45 w-4 h-4 text-white relative z-10" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
