"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";

const FunFact: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <MaxWidthWrapper>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12">
              {/* Fact 1 */}
              <div className="flex-1 text-center border-r border-gray-300 sm:last:border-r-0">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                  100%
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Graduation success rate
                </p>
              </div>

              {/* Fact 2 */}
              <div className="flex-1 text-center border-r border-gray-300 sm:last:border-r-0">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                  Top 10
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  Universities that Create Futures
                </p>
              </div>

              {/* Fact 3 */}
              <div className="flex-1 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading">
                  No. 1
                </h2>
                <p className="mt-2 text-base text-gray-600">
                  in the nation for materials R&D
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FunFact;
