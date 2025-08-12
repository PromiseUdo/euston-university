"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";

interface CampusLife {
  title: string;
  description: string;
  image: string;
  link: string;
}

const campusLifeItems: CampusLife[] = [
  {
    title: "World-Class Academic Programmes",
    description:
      "Euston University is structured around forward-thinking faculties and programs that address local, national, and global challenges.",
    image: "/our-story1.jpg",
    link: "/campus-life",
  },
  {
    title: "Technology-Driven Learning Environment",
    description:
      "At Euston University, we understand that the future of education is digital and dynamic.",
    image: "/our-story2.jpg",
    link: "/campus-life",
  },
  {
    title: "Global Connections, Local Relevance",
    description:
      "We foster academic partnerships, faculty exchanges, research collaborations, and virtual exchanges with institutions across Africa, Europe, and North America",
    image: "/our-story3.jpg",
    link: "/athletics",
  },
];

const whyUs = [
  "Commitment to Innovation and Research",
  "Founded on Purpose",
  "Deep Community Engagement",
  "Inclusive, Safe, and Empowering",
  "Strategic Location and Global Linkages",
  "Vision-Driven Leadership",
  "Entrepreneurship and Employability Focus",
  "Experienced Purpose-Driven Faculty",
  "Holistic Student Development",
  "A Culture of Excellence Built to Excel",
];

const CampusLifeSection: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-6">
            {/* Left Section */}
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
                Why Euston University
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                At Euston University, choosing us is not just about pursuing a
                degree; it is about stepping into a transformative journey that
                shapes the mind, heart, and character.
              </p>
              <div className="relative">
                <ul className="list-none pl-4 space-y-2 text-base text-gray-600">
                  {whyUs.map((item, index) => (
                    <li key={index} className="relative pl-6 flex items-start">
                      <Check
                        className="absolute left-[-20px] top-1 w-4 h-4 text-[#181818]"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              {campusLifeItems.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white  h-44 border border-gray-300 overflow-hidden group"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-top opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                  <div className="relative flex items-center justify-between p-6 h-full z-10">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 font-heading mb-2">
                        <Link
                          href={item.link}
                          className="hover:text-blue-600 transition-colors group-hover:text-white"
                        >
                          {item.title}
                        </Link>
                      </h4>
                      <p className="text-base text-[#737477] group-hover:text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Custom Styles for Animation */}
      <style jsx global>{`
        .group:hover .transform {
          transform: translateX(0);
        }
      `}</style>
    </>
  );
};

export default CampusLifeSection;
