"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";

interface Program {
  title: string;
  description: string;
  image: string;
  link: string;
}

const programs: Program[] = [
  {
    title: "Faculty of Allied Health Sciences",
    description:
      "Embark on a journey of knowledge discovery, and growth at Unipix University.",
    image: "/our-story1.webp",
    link: "/faculties/faculty-of-allied-health-sciences",
  },
  {
    title: "Faculty of Natural and Applied Sciences",
    description:
      "Embark on a journey of knowledge discovery, and growth at Unipix University.",
    image: "/our-story2.webp",
    link: "/faculties/faculty-of-natural-and-applied-sciences",
  },
  {
    title: "Faculty of Computing",
    description:
      "Embark on a journey of knowledge discovery, and growth at Unipix University.",
    image: "/our-story3.webp",
    link: "/faculties/faculty-of-computing",
  },
  {
    title: "Faculty of Arts, Management and Social Sciences",
    description:
      "Embark on a journey of knowledge discovery, and growth at Unipix University.",
    image: "/our-story4.webp",
    link: "/faculties/faculty-of-arts-management-and-social-sciences",
  },
];

const ProgramSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            Our Faculties
          </h2>
          <Link
            href="/faculties"
            className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm rounded-[25px] shadow-md bg-[linear-gradient(135deg,#890c25_0%,#b71c1c_100%)] font-semibold text-white  uppercase tracking-wider  transition-colors"
          >
            <span className="relative z-10">Explore</span>

            <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

            <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
          </Link>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center bg-no-repeat h-96  shadow-md overflow-hidden group"
              style={{ backgroundImage: `url(${program.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
              <div className="relative p-10 flex flex-col justify-between  h-full z-10">
                <div>
                  <h5 className="text-[26px] font-semibold text-white font-heading mb-2">
                    {program.title}
                  </h5>
                  <p className="text-base text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {program.description}
                  </p>
                </div>

                <Link
                  href={program.link}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white   tracking-wider"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProgramSection;
