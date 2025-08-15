"use client";

import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const AboutUniversity = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <MaxWidthWrapper>
        <div className=" mx-auto">
          {/* Title and Description Section with Vertical Line */}
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 lg:w-4/12 md:pr-8 relative">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                About University
              </h3>
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
            </div>
            <div className="md:w-2/3 lg:w-8/12 md:pl-8">
              <p className="text-[15px] text-gray-600">
                Welcome to Euston University, where knowledge meets inspiration,
                and every individual's educational journey is valued.
                Established in 1971, our university has been a bastion of
                learning, innovation, and community for 51 years.
              </p>
            </div>
          </div>

          <div className=" my-10">
            <hr />
          </div>

          {/* Image and Stats Section */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Column */}
            <div className="lg:w-7/12 xl:w-8/12">
              <div className="relative w-full h-80 lg:h-[500px] xl:h-[600px]">
                <Image
                  src="/aboutus.jpg"
                  alt="Euston University Campus"
                  fill
                  className="object-cover "
                />
              </div>
            </div>

            {/* Stats Column */}
            <div className="lg:w-5/12 xl:w-4/12 flex flex-col">
              <div className="space-y-4 flex flex-col h-full lg:min-h-[500px] xl:min-h-[600px]">
                {/* Stat 1 */}
                <div className="flex items-center gap-6 bg-[#890c25] p-6  text-white flex-1">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold">20,000</h3>
                    <p className="mt-2">undergraduate and graduate students</p>
                  </div>
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/07.svg"
                      alt="Students icon"
                      fill
                      className="filter brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-6 bg-[#890c25] p-6 text-white flex-1">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold">16,214</h3>
                    <p className="mt-2">Euston University Faculty and Staff</p>
                  </div>
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/06.svg"
                      alt="Faculty icon"
                      fill
                      className="filter brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-6 bg-[#890c25] p-6  text-white flex-1">
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold">300k</h3>
                    <p className="mt-2">Euston Alumni Worldwide</p>
                  </div>
                  <div className="w-12 h-12 relative">
                    <Image
                      src="/07.svg"
                      alt="Alumni icon"
                      fill
                      className="filter brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Custom CSS for height matching */}
      <style jsx>{`
        @media (min-width: 1024px) {
          .flex-col.h-full {
            height: 100%;
            justify-content: space-between;
          }
          .flex-col.h-full > div {
            flex: 1 1 0;
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUniversity;
