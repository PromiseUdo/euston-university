"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";

const CampusHistorySection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section className="py-20 bg-[#f6f6f6]">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Section */}
            <div className="relative">
              <div className="border-gray-900 border-l pl-6 md:pl-10 max-[576px]:border:none">
                <h2 className="text-[33px] md:text-[55px] mb-4 font-bold text-gray-900 font-heading ">
                  Our <span className="text-[#890c25]  ">Story</span>
                </h2>
                <div>
                  <p className="text-base text-[#737477]   mb-8">
                    Euston University is not just another institution of higher
                    learning—it is a living expression of a noble vision, shaped
                    by compassion, rooted in service, and destined for impact.
                    Our story begins not in the lecture halls or boardrooms, but
                    in the heart of a woman who has spent her life empowering
                    the forgotten, uplifting the vulnerable, and transforming
                    communities through selfless action. That woman is Mrs.
                    Eunice Ukamaka Egwu, the founder and promoter of Euston
                    University and the compassionate force behind the renowned
                    Widowcare Foundation.
                  </p>
                  {/* <Link
                    href="/"
                    className="overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#890c25]   tracking-wider  transition-colors"
                  >
                    <span className="relative z-10">Read More</span>
                    <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

                    <ArrowRight className="w-4 h-4 -rotate-45" />
                  </Link> */}

                  <Link
                    href="/faculties"
                    className="inline-flex relative w-fit items-center gap-2 text-center  rounded-[25px] shadow-md bg-[linear-gradient(135deg,#890c25_0%,#b71c1c_100%)] h-[44px] px-6 py-3 text-[14px] text-[#ffffff]  font-medium overflow-hidden group"
                  >
                    <span className="relative z-10">Read More</span>
                    <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    <ArrowRight className="-rotate-45 w-4 h-4 text-white relative z-10" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative">
                <Image
                  src="/our-story1.webp"
                  alt="Campus video thumbnail"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 md:h-96 "
                />
                <div className="absolute inset-0 bg-black/20" />
                <button
                  onClick={handlePlayButtonClick}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="relative">
                    <Image
                      src="/play-round.svg"
                      alt="Play round"
                      width={126}
                      height={126}
                      className="animate-spin-slow lg:w-[80px] lg:h-[80px]"
                    />
                    <Image
                      src="/play-icon.svg"
                      alt="Play icon"
                      width={50}
                      height={50}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[30px] lg:h-[30px]"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Commented-out Shape Images */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/01.png"
              alt="Shape 1"
              width={50}
              height={50}
              className="absolute top-10 left-10 opacity-50"
            />
            <Image
              src="/02.png"
              alt="Shape 2"
              width={50}
              height={50}
              className="absolute bottom-10 left-20 opacity-50"
            />
            <Image
              src="/03.png"
              alt="Shape 3"
              width={50}
              height={50}
              className="absolute top-20 right-10 opacity-50"
            />
            <Image
              src="/04.png"
              alt="Shape 4"
              width={50}
              height={50}
              className="absolute bottom-20 right-20 opacity-50"
            />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center z-50 hover:bg-black/75 transition-colors"
              onClick={handleCloseModal}
              aria-label="Close video modal"
            >
              <X className="w-6 h-6" />
            </button>
            <LiteYoutubeEmbed
              id="wTDU71RhjHE"
              noCookie={true}
              imageAltText="Campus video thumbnail"
              iframeTitle="Unipix University Campus History Video"
            />
          </div>
        </div>
      )}

      {/* Custom Animation for Play Button */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </>
  );
};

export default CampusHistorySection;
