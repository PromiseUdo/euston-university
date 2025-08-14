import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import CategoryMenu from "@/app/news/[slug]/components/category-menu";
import DepartmentContactInfo from "@/app/news/[slug]/components/department-contact-info";
import OtherFaculties from "@/app/news/[slug]/components/other-faculties";
import FAQAccordion from "./faq-accordion";

const faqItems = [
  {
    question: "What is the duration of the Africana Studies program?",
    answer:
      "The B.A. in Africana Studies is typically a 4-year undergraduate program.",
  },
  {
    question: "What are the admission requirements?",
    answer:
      "Admission requires a high school diploma or equivalent with a minimum GPA of 2.5. Additional requirements may include letters of recommendation and a personal statement.",
  },
  {
    question: "Are there any study abroad opportunities?",
    answer:
      "Yes, we offer study abroad programs in several African countries as well as locations significant to the African diaspora.",
  },
  {
    question: "What career paths can I pursue with this degree?",
    answer:
      "Graduates pursue careers in education, public policy, community development, international relations, and cultural institutions, among others.",
  },
  {
    question: "Is financial aid available for this program?",
    answer:
      "Yes, we offer various scholarships, grants, and work-study opportunities specifically for Africana Studies students.",
  },
];

const Main = () => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="text-[#292929] w-full grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-9  pr-0 md:pr-[20px]">
            <h1 className="text-3xl font-bold mb-8 font-heading">
              Frequently Asked Questions
            </h1>
            <FAQAccordion items={faqItems} />
          </div>
          <div className="mt-12 md:mt-0 col-span-12 md:col-span-3 p-[10px] pt-0 pb-[127.09px] flex flex-col">
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
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Main;
