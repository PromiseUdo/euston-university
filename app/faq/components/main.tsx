import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import CategoryMenu from "@/app/news/[slug]/components/category-menu";
import DepartmentContactInfo from "@/app/news/[slug]/components/department-contact-info";
import OtherFaculties from "@/app/news/[slug]/components/other-faculties";
import FAQAccordion from "./faq-accordion";

const faqItems = [
  {
    question: "When does admissions begin?",
    answer:
      "You can apply online through our admissions portal. Visit the Admissions page for more details and requirements.",
  },
  {
    question: "Where is Euston University located?",
    answer:
      "We offer undergraduate, postgraduate, and professional programs across various disciplines. Check our Programs page for the full list.",
  },
  {
    question:
      "Is Euston University approved by the National Universities Commision (NUC)",
    answer:
      "Yes, we offer scholarships and financial aid to eligible students. Visit our Financial Aid page for more information.",
  },
  {
    question: "What academic programmes are offered at Euston University?",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "What are the facilities on campus like?",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "Does the university offer accomodation for students?",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "Are there scholarship opportunities for students?",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "What makes Euston University unique?",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "What is the motto of the university?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "What is the vision of Euston University?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "What is the mission of Euston University?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "Who founded Euston University?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "Is the university faith-based or secular?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question:
      "Does Euston University offer entrepreneurial or vocational training?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "Are international students welcome?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "Does the university have blended learning models?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "How can I contact the university for inquiries?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "How does Euston University support community development?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "Can I apply to work at Euston University?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
  {
    question: "What security measures are in place on campus?  ",
    answer:
      "You can reach our support team via the Contact Us page or by emailing support@euston.edu.",
  },
];

const Main = () => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="text-[#292929] w-full grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-9  pr-0 md:pr-[20px]">
            <h2 className="text-3xl font-bold mb-8 font-heading">
              Frequently Asked Questions
            </h2>
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
