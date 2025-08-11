import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-20 bg-[#181818] pt-[30px] pb-[40px]  lg:pb-[10px] ">
        <MaxWidthWrapper>
          <div className="relative py-[10px] pt-[20px] pb-[50px]  flex items-center justify-center">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full">
              <h2 className="leading-[30px] mb-4 md:md-0 text-center md:text-left lg:leading-[35px] font-heading font-bold text-[30px] lg:text-[35px] text-[#ffffff]">
                Subscribe To Newsletter
              </h2>
              <div className="p-[10px]">
                <form className="flex flex-col md:flex-row justify-center items-center gap-[20px]">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="placeholder:text-[#C2C2C2]  w-full outline-[#E53945] py-[10px]  text-[15px] px-4   bg-[#181818] text-[#292929] outline-none"
                  />
                  <button
                    type="submit"
                    className=" px-[30px] py-[15px] font-medium  bg-[#ffffff] text-[#181818]  uppercase tracking-[2px] text-[14px]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-full pb-[80px] pt-[50px] grid grid-cols-1 md:grid-cols-4 gap-[40px]">
            {/* First Column */}
            <div className="flex flex-col gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png" // Replace with your logo path
                  alt="Euston University Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "205.42px", height: "49.69px" }}
                  unoptimized
                  className="object-contain max-w-[150px] sm:max-w-full"
                />
              </div>
              <p className="text-gray-400 text-[14px] leading-[21px] mb-2">
                Address: Euston University Campus, km 10, Abakaliki–Enugu
                Expressway, Ebonyi State
              </p>

              <p className="text-gray-400  text-[14px] leading-[21px] mb-2">
                <span className="font-bold">Phone:</span>+234 (0)813 886 3143
              </p>
              <p className="text-gray-400 text-[14px] leading-[21px] mb-2">
                <span className="font-bold">Email:</span>{" "}
                info@eustonuniversity.edu.ng
              </p>
            </div>
            {/* Second Column */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white text-[30px] underline leading-[30px] font-heading font-bold  pb-[20px]">
                Our Campus
              </h4>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Academic
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Planning & Administration
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Campus Safety
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Office Chancellor
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Facility Services
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Human Resources
              </a>
            </div>
            {/* Third Column */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white underline text-[30px] leading-[30px] font-heading font-bold  pb-[20px]">
                Academics
              </h4>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Canvas
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Catalyst
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Library
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Time Schedule
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Apply For Admissions
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Pay My Tuition
              </a>
            </div>
            {/* Fourth Column */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white underline text-[30px] leading-[30px] font-heading font-bold  pb-[20px]">
                Campus Life
              </h4>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Financial Aid
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Food Services
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Housing
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-gray-400 text-[14px] leading-[21px] hover:underline"
              >
                Student Life
              </a>
            </div>
          </div>

          <div className="pt-[20px] w-full flex flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between">
            <div>
              <p className="text-[#cccccc] text-[14px] leading-[21px] hover:underline">
                Copyright © 2025 Euston University. All rights reserved. -
                Developed by{" "}
                <a href="/" className="underline text-[#890c25]">
                  CodersTriangle
                </a>
              </p>
            </div>

            <div>
              {/* social media icon pngs in a row */}
              <div className="flex items-center gap-4">
                {/* <a href="#" className="text-white">
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={8.12}
                    height={15}
                  />
                </a> */}
                <a href="#" className="text-white">
                  <Image
                    src="/twitter.png"
                    alt="Twitter"
                    width={15}
                    height={15}
                  />
                </a>
                <a href="#" className="text-white">
                  <Image
                    src="/linkedin.png"
                    alt="Instagram"
                    width={15}
                    height={14.9}
                  />
                </a>
                <a href="#" className="text-white">
                  <Image
                    src="/youtube.png"
                    alt="Instagram"
                    width={17}
                    height={15}
                  />
                </a>
                <a href="#" className="text-white">
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={15}
                    height={15}
                  />
                </a>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Footer;
