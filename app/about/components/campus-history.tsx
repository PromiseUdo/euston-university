"use client";

import React from "react";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CampusTourSection = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section className="rts-campus-tour py-20 bg-[#f6f6f6]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="section-title text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Our Campus Tour
            </h2>
            <div className="w-full">
              <div className="rts-video-section relative h-[500px] mb-12">
                <Image
                  src="/our-story6.webp"
                  alt="video-bg"
                  fill
                  className="object-cover"
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
            <div className="w-full max-w-4xl">
              <div className="rts-video-section-text text-center mx-4">
                <p className="text-base text-[#737477] mb-8">
                  Embark on a journey of knowledge, discovery, and growth at
                  Unipix University. Our admissions process is designed to
                  identify bright, motivated individuals who are eager to
                  contribute to our dynamic academic community. Whether you're a
                  recent high school graduate or a transfer student seeking a
                  new academic home, we invite you to explore the possibilities
                  that await you.
                </p>
                <Link
                  href="/campus-life"
                  className="inline-flex relative w-fit items-center gap-2 text-center bg-[#890c25] h-[44px] px-6 py-3 text-[14px] text-[#ffffff] font-medium overflow-hidden group"
                >
                  <span className="relative z-10">Visit Campus</span>
                  <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <ArrowRight className="-rotate-45 w-4 h-4 text-white relative z-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <LiteYoutubeEmbed
              id="Uwq1uiuM_9w"
              noCookie={true}
              imageAltText="Campus tour video thumbnail"
              iframeTitle="Unipix University Campus Tour Video"
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

export default CampusTourSection;
