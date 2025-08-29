import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import CategoryMenu from "@/app/news/[slug]/components/category-menu";
import DepartmentContactInfo from "@/app/news/[slug]/components/department-contact-info";
import OtherFaculties from "@/app/news/[slug]/components/other-faculties";
import FAQAccordion from "./faq-accordion";

// export const faqItems = [
//   {
//     question: "Where is Euston University located?",
//     answer:
//       "Euston University is located in Abakaliki, the capital city of Ebonyi State, Nigeria. The serene and accessible environment offers a conducive atmosphere for academic pursuits and personal development.",
//   },
//   {
//     question:
//       "Is Euston University approved by the National Universities Commission (NUC)?",
//     answer:
//       "Yes. Euston University has been officially approved and licensed by the National Universities Commission (NUC) to operate as a private university in Nigeria. All our programmes are designed to meet the academic standards set by the NUC.",
//   },
//   {
//     question: "What academic programmes are offered at Euston University?",
//     answer: [
//       "Faculty of Allied Health Sciences – BNSc Nursing Science",
//       "Faculty of Natural and Applied Sciences – BSc Biology, BSc Microbiology, BSc Chemistry, BSc Biochemistry, BSc Mathematics, BSc Statistics, BSc Physics, BSc Physics with Electronics, BSc Forensic Science",
//       "Faculty of Computing – BSc Computer Science, BSc Cybersecurity, BSc Data Science, BSc Information and Communications Technology (ICT), BSc Information Systems, BSc Information Technology, BSc Software Engineering, BSc Artificial Intelligence",
//       "Faculty of Arts, Management and Social Sciences – BSc Accounting, BSc Economics, BSc Finance, BSc Entrepreneurship and Innovation, BSc Business Administration, BSc Public Administration, BSc Procurement Management, BSc Logistics and Supply Chain Management, BSc Criminology and Security Studies, BSc Hospitality and Tourism Management, BA History and International Studies, BA French",
//     ],
//   },
//   {
//     question: "What makes Euston University unique?",
//     answer:
//       "Our uniqueness lies in our vision-driven leadership, innovative curriculum, global partnerships, and deep commitment to social impact. Inspired by the humanitarian legacy of our founder, we are a university that fuses academic excellence with empathy, purpose, and action.",
//   },
//   {
//     question: "What are the facilities on campus like?",
//     answer: [
//       "State-of-the-art classrooms and ICT-enabled lecture halls",
//       "A modern library with physical and digital resources",
//       "Health and wellness facilities",
//       "Fully equipped science and tech laboratories",
//       "Student hostels",
//       "Entrepreneurial and vocational centres",
//       "A chapel and multipurpose hall",
//     ],
//   },
//   {
//     question: "How can I contact the university for inquiries?",
//     answer: [
//       "Email: info@eustonuniversity.edu.ng",
//       "Phone: +234 (0)813 886 3143",
//       "Visit: Euston University Campus, km 10, Abakaliki–Enugu Expressway, Ebonyi State",
//     ],
//   },
//   {
//     question: "What security measures are in place on campus?",
//     answer: [
//       "24/7 security surveillance",
//       "Secure campus access control",
//       "Trained security personnel",
//       "Emergency response systems",
//     ],
//   },
// ];

export const faqItems = [
  {
    question: "Where is Euston University located?",
    answer:
      "Euston University is located in Abakaliki, the capital city of Ebonyi State, Nigeria. The serene and accessible environment offers a conducive atmosphere for academic pursuits and personal development.",
  },
  {
    question:
      "Is Euston University approved by the National Universities Commission (NUC)?",
    answer:
      "Yes. Euston University has been officially approved and licensed by the National Universities Commission (NUC) to operate as a private university in Nigeria. All our programmes are designed to meet the academic standards set by the NUC.",
  },
  {
    question: "What academic programmes are offered at Euston University?",
    answer: [
      "Faculty of Allied Health Sciences – BNSc Nursing Science",
      "Faculty of Natural and Applied Sciences – BSc Biology, BSc Microbiology, BSc Chemistry, BSc Biochemistry, BSc Mathematics, BSc Statistics, BSc Physics, BSc Physics with Electronics, BSc Forensic Science",
      "Faculty of Computing – BSc Computer Science, BSc Cybersecurity, BSc Data Science, BSc Information and Communications Technology (ICT), BSc Information Systems, BSc Information Technology, BSc Software Engineering, BSc Artificial Intelligence",
      "Faculty of Arts, Management and Social Sciences – BSc Accounting, BSc Economics, BSc Finance, BSc Entrepreneurship and Innovation, BSc Business Administration, BSc Public Administration, BSc Procurement Management, BSc Logistics and Supply Chain Management, BSc Criminology and Security Studies, BSc Hospitality and Tourism Management, BA History and International Studies, BA French",
    ],
  },
  {
    question: "What makes Euston University unique?",
    answer:
      "Our uniqueness lies in our vision-driven leadership, innovative curriculum, global partnerships, and deep commitment to social impact. Inspired by the humanitarian legacy of our founder, we are a university that fuses academic excellence with empathy, purpose, and action.",
  },
  {
    question: "What are the facilities on campus like?",
    answer: [
      "State-of-the-art classrooms and ICT-enabled lecture halls",
      "A modern library with physical and digital resources",
      "Health and wellness facilities",
      "Fully equipped science and tech laboratories",
      "Student hostels",
      "Entrepreneurial and vocational centres",
      "A chapel and multipurpose hall",
    ],
  },
  {
    question: "How can I contact the university for inquiries?",
    answer: [
      "Email: info@eustonuniversity.edu.ng",
      "Phone: +234 (0)813 886 3143",
      "Visit: Euston University Campus, km 10, Abakaliki–Enugu Expressway, Ebonyi State",
    ],
  },
  {
    question: "What security measures are in place on campus?",
    answer: [
      "24/7 security surveillance",
      "Secure campus access control",
      "Trained security personnel",
      "Emergency response systems",
    ],
  },
  {
    question: "What is the motto of the university?",
    answer:
      "Our motto is: “Built to Excel and Shine.” It reflects our unwavering commitment to shaping individuals who not only thrive academically but also serve as beacons of positive change in society.",
  },
  {
    question: "What is the vision of Euston University?",
    answer:
      "Our vision is to create a nurturing and motivating environment needed for sustainable growth in all aspects of learning resulting in measurable achievements in our world.",
  },
  {
    question: "What is the mission of Euston University?",
    answer:
      "Our mission is to build a future where knowledge knows no borders and education empowers individuals to transform their immediate environment and the world. We aim to become a leading research-intensive, socially responsible academic institution known for innovation, inclusivity, and impact.",
  },
  {
    question: "Who founded Euston University?",
    answer:
      "Euston University is founded by Mrs. Eunice Ukamaka Egwu, a visionary philanthropist and the founder of Widowcare Foundation, a widely respected NGO in Ebonyi State. Her work in education, gender empowerment, and widow advocacy has shaped the values and mission of the university.",
  },
  {
    question: "When does admissions begin?",
    answer:
      "For admissions inquiry, please contact us through our email: info@eustonuniversity.edu.ng or give us a call on: +234(0)8138863143.",
  },
  {
    question: "Are there scholarship opportunities for students?",
    answer:
      "Yes. Euston University is committed to inclusion and accessibility. Scholarship schemes are available to academically excellent students.",
  },
  {
    question: "Does the university offer accommodation for students?",
    answer:
      "Yes. Euston University has hostel accommodation for both male and female students.",
  },
  {
    question: "Is the university faith-based or secular?",
    answer:
      "Euston University is non-denominational and open to students of all faiths. However, the institution upholds strong moral values, discipline, and character-building, with opportunities for interfaith dialogue and personal spiritual development.",
  },
  {
    question:
      "Does Euston University offer entrepreneurial or vocational training?",
    answer:
      "Absolutely. The university incorporates entrepreneurship education and practical skills acquisition into every programme to ensure that graduates are self-reliant, innovative, and employable.",
  },
  {
    question: "Are international students welcome?",
    answer:
      "Yes. Euston University welcomes international students and is actively building global academic partnerships. Support services are available to help international students transition and thrive.",
  },
  {
    question: "Does the university have blended learning models?",
    answer:
      "As part of our commitment to digital innovation, Euston University offers blended learning models.",
  },
  {
    question: "How does Euston University support community development?",
    answer:
      "The university integrates community service, social impact, and gender equity programmes into its philosophy. This includes continuing support for the Widowcare Foundation and outreach to rural communities through literacy and health missions.",
  },
  {
    question: "Can I apply to work at Euston University?",
    answer:
      "Yes. As we expand, Euston University seeks qualified, passionate academics and administrative professionals. Openings are usually advertised via our website and national media platforms.",
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
            <div className="sticky top-[85px] flex flex-col gap-[30px]">
              <CategoryMenu />
              <DepartmentContactInfo
                department="B.A. in Africana Studies"
                email="info@eustonuniversity.edu.ng"
                phone="+2348138863143"
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
