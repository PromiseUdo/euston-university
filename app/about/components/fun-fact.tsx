import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const FunFactSection = () => {
  return (
    <MaxWidthWrapper>
      <section className="py-16 md:py-20 bg-[#890c25] w-full md:w-10/12  mx-auto">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Stat 1 */}
              <div className="flex-1 text-center text-white relative">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  90%
                </h2>
                <p className="text-[15px] ">post-graduation success rate</p>
                <div className="hidden md:block absolute right-0 top-1/2 bottom-1/2 w-px bg-gray-300/50 h-16 transform -translate-y-1/2"></div>
              </div>

              {/* Stat 2 */}
              <div className="flex-1 text-center text-white relative">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  Top 10
                </h2>
                <p className="text-[15px]">Colleges that Create Futures</p>
                <div className="hidden md:block absolute right-0 top-1/2 bottom-1/2 w-px bg-gray-300/50 h-16 transform -translate-y-1/2"></div>
              </div>

              {/* Stat 3 */}
              <div className="flex-1 text-center text-white">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  No. 1
                </h2>
                <p className="text-[15px]">in the nation for materials R&D</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default FunFactSection;
