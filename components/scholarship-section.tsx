"use client";

import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ScholarshipSection = () => {
  const router = useRouter();
  return (
    <div
      className="relative mt-20  items-center justify-center  flex py-[70px]"
      style={{
        backgroundImage: "url('/scholarship-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000] opacity-80"></div>
      <MaxWidthWrapper>
        <div className=" mx-auto max-w-3xl relative w-full p-[10px] z-10 flex flex-col justify-center items-center  h-full">
          <div className="pb-[20px]">
            <h2 className="leading-[35px] text-center lg:leading-[55px] font-heading font-bold text-[35px] lg:text-[3.4175rem] text-[#ffffff]">
              Join Us For Information About New Student Admissions
            </h2>
          </div>
          <div className="pb-[34.39px]">
            <p className="text-[15px] text-center leading-[22.5px] text-white">
              Euston University prides itself on attracting seasoned academics
              and industry professionals who are passionate about teaching and
              mentoring.{" "}
            </p>
          </div>
          <div className="">
            <Link
              href="/contact"
              className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white  uppercase tracking-wider  transition-colors"
            >
              <span className="relative z-10">Contact Us</span>

              <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ScholarshipSection;
