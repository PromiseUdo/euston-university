"use client";
import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import CategoryMenu from "@/app/news/[slug]/components/category-menu";
import DepartmentContactInfo from "@/app/news/[slug]/components/department-contact-info";
import OtherFaculties from "@/app/news/[slug]/components/other-faculties";
import Image from "next/image";

const Main = () => {
  const requirements = [
    "₦___ non-refundable application fee or fee waiver request",
    "JAMB UTME result or equivalent (test optional)",
    "Completed School Report Form and letter of recommendation from school counselor/principal",
    "Official secondary school transcript(s) or WAEC/NECO/NABTEB results",
    "Two letters of recommendation from subject teachers",
    "Mid-year transcript or updated academic results (due by 15 February)",
  ];

  const applicationSteps = [
    {
      number: "01",
      title: "Create an Account",
      description:
        "Take the time to explore the diverse range of undergraduate and graduate programs offered at Unipix University",
      image: "/our-story1.webp",
      icon: "/07.svg",
    },
    {
      number: "02",
      title: "Online Application",
      description:
        "Complete and submit your application through our online portal with all required documents",
      image: "/our-story3.webp",
      icon: "/06.svg",
    },
    {
      number: "03",
      title: "Programs & Requirements",
      description:
        "Review specific program requirements and ensure you meet all criteria before applying",
      image: "/our-story2.webp",
      icon: "/06.svg",
    },
  ];

  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="text-[#292929] w-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 pr-0 md:pr-[20px]">
            <h2 className="text-3xl font-bold mb-8 font-heading">
              For First-year Applicants
            </h2>

            <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden mb-8">
              <Image
                src="/our-story6.webp"
                alt="School campus overview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                priority
              />
            </div>

            <h2 className="text-3xl font-bold mb-8 font-heading">
              Requirements and Deadlines
            </h2>

            {/* Requirements List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                {requirements
                  .slice(0, Math.ceil(requirements.length / 2))
                  .map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-[#890c25] flex-shrink-0 mt-1 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
              </ul>
              <ul className="space-y-4">
                {requirements
                  .slice(Math.ceil(requirements.length / 2))
                  .map((item, index) => (
                    <li
                      key={index + Math.ceil(requirements.length / 2)}
                      className="flex items-start"
                    >
                      <svg
                        className="h-5 w-5 text-[#890c25] flex-shrink-0 mt-1 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* How to Apply Section */}
            <section className="py-12">
              <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <h2 className="text-3xl font-bold font-heading max-w-[440px]">
                  How to Apply to Euston University
                </h2>
                <p className="text-gray-600 max-w-[520px]">
                  If you have any questions or need assistance at any step of
                  the application process, our admissions team is here to help.
                  We look forward to welcoming you to Euston University.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {applicationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative group h-full min-h-[360px] bg-[#890c25]  overflow-hidden transition-all duration-300"
                  >
                    {/* Background Image (hidden by default, shown on hover) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                      <Image
                        src={step.image}
                        alt={`Step ${step.number}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50" />
                    </div>

                    {/* Content Container (always visible) */}
                    <div className="relative h-full flex flex-col p-6 z-10">
                      {/* Top Row - Icon and Number */}
                      <div className="flex flex-1 justify-between items-start w-full mb-4">
                        {/* Icon */}
                        <div className="w-10 h-10 relative">
                          <Image
                            src={step.icon}
                            fill
                            alt=""
                            className="text-white"
                          />
                        </div>

                        {/* Clipped Number */}
                        <span className="text-6xl font-bold rt-clip-text">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute top-40 w-[calc(100%-48px)] text-white group-hover:text-white">
                        <h3 className="text-xl font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[15px]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 md:mt-0 col-span-12 md:col-span-3 p-[10px] pt-0 pb-[127.09px] flex flex-col">
            <div className="sticky top-[85px] flex flex-col gap-[30px]">
              <CategoryMenu />
              <DepartmentContactInfo
                department="B.A. in Africana Studies"
                email="info@eustonuniversity.edu.ng"
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
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Global CSS for clipped text effect */}
      <style jsx global>{`
        .rt-clip-text {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-color: rgba(255, 255, 255, 0.5);
          -webkit-text-stroke-width: 1px;
          color: transparent;
          stroke: rgba(255, 255, 255, 0.5);
          stroke-width: 1px;
        }
      `}</style>
    </div>
  );
};

export default Main;
