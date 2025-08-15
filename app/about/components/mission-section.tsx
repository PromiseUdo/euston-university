import React from "react";
import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-heading">
            Mission and Values
          </h2>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Separator Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="h-full w-px bg-gray-300 mx-auto"></div>
          </div>{" "}
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div className="space-y-16 md:pr-8">
              {/* Diversity */}
              <div className="relative">
                <div className="flex flex-col items-center md:items-end text-right">
                  <div className="flex items-center justify-center md:justify-end">
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Diversity
                    </h5>
                    <div className="hidden md:block w-16 h-px bg-gray-300 ml-4 -mr-12"></div>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-right  text-[15px]  mr-8">
                    Celebrating a rich tapestry of backgrounds, perspectives,
                    and talents
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] h-80 mx-auto md:ml-auto md:mr-8">
                  {" "}
                  <Image
                    src="/our-story6.webp"
                    alt="Diversity"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>

              {/* Innovation */}
              <div className="relative">
                <div className="flex flex-col items-center md:items-end text-right">
                  <div className="flex items-center justify-end">
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Innovation
                    </h5>
                    <div className="hidden md:block w-16 h-px bg-gray-300 ml-4 -mr-12"></div>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-right text-[15px]  mr-8">
                    Encouraging creativity, critical thinking, and a spirit of
                    innovation
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] h-80 mx-auto md:ml-auto md:mr-8">
                  <Image
                    src="/our-story6.webp"
                    alt="Innovation"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-16 md:pl-8 md:mt-16">
              {/* Excellence */}
              <div className="relative">
                <div className="flex flex-col items-center md:items-start  text-left">
                  <div className="flex items-center">
                    <div className="hidden md:block w-16 h-px bg-gray-300 mr-4 -ml-12"></div>
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Excellence
                    </h5>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-left text-[15px]   ml-8 ">
                    Striving for academic and research excellence in all
                    endeavors
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] mx-auto mr-auto  h-80  md:ml-8">
                  <Image
                    src="/our-story6.webp"
                    alt="Excellence"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>

              {/* Academic Excellence */}
              <div className="relative">
                <div className="flex flex-col items-center md:items-start  text-left">
                  <div className="flex items-center">
                    <div className="hidden md:block w-16 h-px bg-gray-300 mr-4 -ml-12"></div>
                    <h5 className="text-xl font-semibold text-gray-900 font-heading">
                      Academic Excellence
                    </h5>
                  </div>
                  <p className="text-[#737477] mt-2 text-center md:text-left text-[15px]   ml-8">
                    Our commitment to academic excellence is reflected in the
                    diverse range
                  </p>
                </div>
                <div className="mt-6 relative w-full md:w-[calc(100%-2rem)] mx-auto mr-auto  h-80  md:ml-8">
                  <Image
                    src="/our-story6.webp"
                    alt="Academic Excellence"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
