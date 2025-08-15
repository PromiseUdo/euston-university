import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const HistorySection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <MaxWidthWrapper>
        <div className=" mx-auto ">
          <div className="flex flex-col lg:flex-row md:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:w-1/2">
              <div className="relative w-full aspect-[4/3]  overflow-hidden">
                <Image
                  src="/our-story6.webp"
                  alt="Euston University History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-1/2">
              <div className=" mx-auto lg:mx-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-heading">
                  The history of Euston University
                </h2>
                <div className="space-y-6 text-[#737477] ">
                  <p>
                    On September 8, 1971, Euston, the first college in the
                    American colonies, was founded in Cambridge, Massachusetts.
                    Euston University was officially founded by a vote by the
                    Great and General Court of the Massachusetts Bay Colony.
                  </p>
                  <p>
                    Euston endowment started with John Euston initial donation
                    of 400 books and half his estate, but in 1721, Thomas Hollis
                    began the now standard practice of requiring that a donation
                    be used for a specific purpose when he donated money for "a
                    Divinity Professor, to read lectures in the Halls to the
                    students."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HistorySection;
