"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const faculties = [
  {
    name: "Faculty of Allied Health Sciences",
    programs: ["BNSc Nursing Science"],
  },
  {
    name: "Faculty of Natural and Applied Sciences",
    programs: [
      "BSc Biology",
      "BSc Microbiology",
      "BSc Chemistry",
      "BSc Mathematics",
      "BSc Statistics",
      "BSc Physics",
      "BSc Physics with Electronics",
      "BSc Forensic Science",
    ],
  },
  {
    name: "Faculty of Computing",
    programs: [
      "BSc Computer Science",
      "BSc Cybersecurity",
      "BSc Data Science",
      "BSc Information and Communication Technology (ICT)",
      "BSc Information Systems",
      "BSc Information Technology",
      "BSc Software Engineering",
      "BSc Artificial Intelligence",
    ],
  },
  {
    name: "Faculty of Arts, Management and Social Sciences",
    programs: [
      "BSc Accounting",
      "BSc Economics",
      "BSc Finance",
      "BSc Entrepreneurship and Innovation",
      "BSc Business Administration",
      "BSc Public Administration",
      "BSc Procurement Management",
      "BSc Logistics and Supply Chain Management",
      "BSc Criminology and Security Studies",
      "BSc Hospitality and Tourism Management",
      "BA History and International Studies",
      "BA French",
    ],
  },
];

const AcademicPrograms: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
              Academics & Program
            </h2>
          </div>
        </div>

        {/* Scrollable Program Cards */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
          {faculties.map((faculty, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 w-[90%] sm:w-[70%] md:w-auto snap-center rounded-lg shadow-md overflow-hidden group ${
                index === 0
                  ? "bg-blue-100"
                  : index === 1
                  ? "bg-green-100"
                  : index === 2
                  ? "bg-purple-100"
                  : "bg-yellow-100"
              } min-h-[540px] md:min-h-[600px]`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={`/slide${index + 1}.${index % 2 === 0 ? "png" : "jpg"}`}
                  alt={`${faculty.name} background`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative p-6 z-10">
                <h5 className="text-xl font-semibold mb-4 font-heading text-gray-900 group-hover:text-white transition-colors">
                  {faculty.name}
                </h5>
                <ul className="space-y-3">
                  {faculty.programs.map((program, programIndex) => (
                    <li key={programIndex}>
                      <a
                        href="/program-single"
                        className="flex items-center justify-between text-base text-gray-700 group-hover:text-white hover:text-blue-400 group-hover:hover:text-blue-300 transition-colors"
                      >
                        {program}
                        <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AcademicPrograms;
