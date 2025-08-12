import React from "react";

import CommentForm from "./comment";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import CategoryList from "./category-list";
import ContactUs from "./contact-us";
import CategoryMenu from "./category-menu";
import DepartmentContactInfo from "./department-contact-info";
import OtherFaculties from "./other-faculties";
import Link from "next/link";
import { Clock, Tags, User } from "lucide-react";
import Image from "next/image";
import BlogTagsShareWrapper from "./blog-tags-share";

const downloads = [
  "Brochure Department",
  "Department Details",
  "Journals Departments",
  "Alumni Departments",
];

const Main = () => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="text-[#292929] w-full grid grid-cols-12">
          <div className="col-span-9 pr-[20px]">
            <div className="w-full flex flex-col p-[10px] gap-[20px] pt-0">
              <figure className="mb-8">
                <Image
                  src={"/our-story1.jpg"}
                  alt="Blog post featured image"
                  width={1200}
                  height={600}
                  className="w-full h-64 md:h-96 object-cover "
                />
              </figure>

              {/* Article Meta */}
              <div
                className="flex flex-wrap items-center gap-4 text-gray-600 font-body"
                role="contentinfo"
              >
                <Link
                  href={""}
                  className="flex items-center hover:text-blue-600 transition-colors"
                  aria-label={`View posts by Desmond`}
                >
                  <User className="w-4 h-4 mr-2" />
                  Desmond
                </Link>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  12/12/2025
                </span>
                <Link
                  href={""}
                  className="flex items-center hover:text-blue-600 transition-colors"
                  aria-label={`View posts with tag Education`}
                >
                  <Tags className="w-4 h-4 mr-2" />
                  Education
                </Link>
              </div>

              <h2 className=" text-[30px] leading-[30px] font-bold font-heading">
                A Global MBA For The Next Generation Of Business Leaders
              </h2>

              <p className="text-[15px] leading-[22.5px]">
                Quisque consectetur convallis ex, quis tincidunt ligula placerat
                et. Nam quis leo sed tortor blandit commodo. Quisque ultrices,
                justo non convallis accumsan, ante magna ornare sapien, quis
                venenatis diam libero nec orci. Aenean semper interdum odio in
                dictum. Nunc sed augue lorem. Duis nec sollicitudin orci.
                Vivamus lectus metus, efficitur non arcu id, pulvinar
                sollicitudin ipsum. 
              </p>

              <p className="text-[15px] leading-[22.5px]">
                Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam
                massa dolor, imperdiet nec consequat a, congue id sem. Maecenas
                malesuada faucibus finibus. Donec vitae libero porttitor,
                laoreet sapien a, ultrices leo. Duis dictum vestibulum ante
                vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend
                ultricies, lectus orci congue magna vestibulum ante vitaevitae
                eleifend ultricies.
              </p>

              <div className="grid grid-cols-6 gap-[20px] h-[255px]">
                <div className="col-span-4">
                  {/* insert and image  */}
                  <img
                    src="/our-story1.jpg"
                    alt="Description"
                    className="w-full h-[255px] object-cover"
                  />
                </div>
                <div className="col-span-2">
                  <img
                    src="/our-story2.jpg"
                    alt="Description"
                    className="w-full h-[255px] object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 h-[260px]">
                <div className="col-span-1">
                  {/* insert and image  */}
                  <img
                    src="/our-story3.jpg"
                    alt="Description"
                    className="w-full h-[260px] object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="text-[15px] leadng-[22.5px]">
                  Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam
                  massa dolor, imperdiet nec consequat a, congue id sem.
                  Maecenas malesuada faucibus finibus. Donec vitae libero
                  porttitor, laoreet sapien a, ultrices leo. Duis dictum
                  vestibulum ante vitae ullamcorper. Donec vitae libero
                  porttitor, laoreet sapien a, ultrices leo.
                </p>
              </div>

              <h3 className="font-heading text-[30px] leading-[30px] font-bold">
                Latest News Rankings Cap A Strong Year In Academic
              </h3>

              <div className="">
                <img
                  src="/our-story4.jpg"
                  alt="Our Story Image"
                  className="h-[563px] w-full object-cover"
                />
              </div>
              <p className="text-[15px] leadng-[22.5px]">
                Quisque consectetur convallis ex, quis tincidunt ligula placerat
                et. Nam quis leo sed tortor blandit commodo. Quisque ultrices,
                justo non convallis accumsan, ante magna ornare sapien, quis
                venenatis diam libero nec orci. Aenean semper interdum odio in
                dictum. Nunc sed augue lorem. Duis nec sollicitudin orci.
                Vivamus lectus metus, efficitur non arcu id, pulvinar
                sollicitudin ipsum. 
              </p>

              {/* tags */}
              {/* <div className="flex justify-between">
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-heading text-[24px] leading-[28.8px]">
                    Tags:
                  </h3>
                  <p className="text-[15px] leading-[22.5px] text-[#009D47]">
                    Seminar,Student
                  </p>
                </div>

                <div className="flex flex-col gap-[20px] content-between">
                  <h3 className="font-heading text-[24px] leading-[28.8px]">
                    Share:
                  </h3>
                  <div className="flex items-between gap-[10px]">
                    <button className="bg-[#3B5999] text-white  px-4 outline-none flex items-center gap-2">
                      <img
                        src="/facebook-white.png"
                        alt="Facebook"
                        className="w-[15px] h-[15px]"
                      />
                      <span>Facebook</span>
                    </button>
                    <button className="bg-[#55ACEE]  text-white px-4 py-2 outline-none flex items-center gap-2">
                      <img
                        src="/twitter-white.png"
                        alt="Twitter"
                        className="w-[15px] h-[15px]"
                      />
                      <span>Twitter</span>
                    </button>
                    <button className="bg-[#0077B5]  text-white px-4 outline-none flex items-center gap-2">
                      <img
                        src="/linkedin-white.png"
                        alt="Facebook"
                        className="w-[15px] h-[15px]"
                      />
                      <span> Linkedin</span>
                    </button>
                  </div>
                </div>
              </div> */}
              <BlogTagsShareWrapper />
            </div>
            <CommentForm />
            {/* <LatestNews /> */}
          </div>
          {/* Keep col 2 fixed on the screen in such a way that column 1 will completly to the end before this column 2 scroll togehter with it again*/}
          <div className="col-span-3 p-[10px] pt-0 pb-[127.09px] flex flex-col">
            <div className="sticky top-[20px] flex flex-col gap-[30px]">
              <CategoryMenu />
              <DepartmentContactInfo
                department="B.A. in Africana Studies"
                email="barry.Unipix@info.com"
                phone="664-254-251"
                socials={{
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                  pinterest: "#",
                  youtube: "#",
                }}
              />
              <OtherFaculties />
              {/* <ContactUs /> */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Main;
