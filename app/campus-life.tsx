"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const CampusLife: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="mb-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4">
              Building a vibrant community of creative and accomplished people from
              around the world
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Campus <span className="text-yellow-300">Life</span>
            </h2>
          </div>
        </div>

        {/* Campus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Student Life",
              image: "/assets/images/campus/01.jpg",
            },
            {
              title: "Arts & Culture",
              image: "/assets/images/campus/02.jpg",
            },
            {
              title: "Recreation & Wellness",
              image: "/assets/images/campus/03.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link href="/campus-life">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={`${item.title} image`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <h5 className="p-4 text-xl font-semibold text-gray-900 font-heading">
                <Link
                  href="/campus-life"
                  className="flex items-center justify-between hover:text-blue-600 transition-colors"
                >
                  {item.title}
                  <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-blue-600" />
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Shape Images */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <Image
          src="/assets/images/icon/note_khata.svg"
          alt="Note khata shape"
          width={80}
          height={80}
          className="absolute left-4 bottom-4 opacity-50"
        />
        <Image
          src="/assets/images/icon/book.svg"
          alt="Book shape"
          width={80}
          height={80}
          className="absolute left-1/4 bottom-8 opacity-50"
        />
        <Image
          src="/assets/images/icon/compas_scale.svg"
          alt="Compass scale shape"
          width={80}
          height={80}
          className="absolute right-4 bottom-4 opacity-50"
        />
      </div>
    </section>
  );
};

export default CampusLife;