import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import CategoryMenu from "@/app/news/[slug]/components/category-menu";
import DepartmentContactInfo from "@/app/news/[slug]/components/department-contact-info";
import OtherFaculties from "@/app/news/[slug]/components/other-faculties";

const Main = () => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="text-[#292929] w-full grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-9  pr-0 md:pr-[20px]">
            <div className="text-[#292929] w-full flex flex-col gap-[20px] p-[10px] pt-0">
              <div className="pb-[20px]">
                <img
                  src="/students-celebratng.webp"
                  alt="Our Story Image"
                  className="h-[563px] w-full object-cover"
                />
              </div>

              <div
                className="flex flex-col gap-[20px]
         "
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  About Us
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University is a private, non-profit institution
                  committed to redefining higher education in Nigeria through a
                  strong emphasis on academic excellence, character development,
                  innovation, and social impact. Founded on the belief that
                  education must be transformative, Euston University stands as
                  a forward-thinking institution where future leaders are
                  equipped with the skills, mindset, and ethical grounding to
                  shape the world around them. Located in the vibrant city of
                  Abakaliki, Ebonyi State, the University was established to
                  close the gap between academic theory and practical impact. In
                  a rapidly evolving global society, Euston University is
                  dedicated to cultivating not just scholars, but
                  change-makers—men and women with the courage and competence to
                  address complex challenges and lead lives of purpose.{" "}
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
         "
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  A Vision Rooted in Growth and Global Impact
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  At Euston University, our Vision is to create a nurturing and
                  motivating environment needed for sustainable growth in all
                  aspects of learning, resulting in measurable achievements in
                  our world. This vision drives every aspect of our
                  operations—from curriculum design and student engagement to
                  faculty development and community outreach.
                </p>

                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Our Mission goes further: We envision a future where knowledge
                  knows no borders and education empowers individuals to
                  transform their immediate environment and the world. Our aim
                  is to become a pillar of academic excellence, engendering a
                  culture of innovation, inclusivity, and social responsibility.
                  We aim to be a leading research-intensive academic
                  institution, renowned for excellence.
                </p>

                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Our Motto, “Built to Excel and Shine,” captures the heart of
                  our purpose: we are committed to excellence, not as an
                  abstract ideal, but as a lived experience of daily growth,
                  integrity, and leadership.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
         "
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Designed for the 21st Century Learner
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University offers a bold departure from the traditional
                  university model. We understand that education must evolve to
                  meet the demands of today’s interconnected and technologically
                  driven world. Our approach integrates the liberal arts and
                  sciences with practical skills development, entrepreneurial
                  thinking, and ethical leadership.
                </p>

                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  From the outset, our programmes are designed to inspire
                  creativity and critical thinking while cultivating emotional
                  intelligence, communication skills, and the ability to work
                  across cultures and disciplines. Students are encouraged to
                  take ownership of their learning journey and to view education
                  not as a means to an end, but as a lifelong calling.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
         "
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  A Community of Innovators, Dreamers, and Doers
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University fosters a tight-knit and inclusive academic
                  community where collaboration thrives. Our students, faculty,
                  and staff are united by shared values—integrity, excellence,
                  curiosity, service, and resilience. We strive to build a
                  campus culture where every individual is seen, heard, and
                  empowered to contribute meaningfully.
                </p>

                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Beyond academics, Euston is a hub for innovation and
                  entrepreneurship. Through incubation hubs, student-led
                  ventures, internships, and research opportunities, learners
                  are challenged to turn ideas into actionable solutions.
                  Whether tackling issues in healthcare, agriculture, education,
                  or environmental sustainability, our students are taught to be
                  bold thinkers and socially conscious actors.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
         "
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  World-Class Faculty and Learning Infrastructure
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University prides itself on attracting seasoned
                  academics and industry professionals who are passionate about
                  teaching and mentoring. Our faculty members are selected not
                  just for their academic credentials, but also for their
                  ability to inspire, challenge, and guide students toward
                  excellence.
                </p>

                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Our infrastructure is designed to facilitate active learning.
                  Smart classrooms, technology-enabled labs, fully equipped
                  studios, modern lecture halls, and serene green spaces all
                  contribute to a vibrant and interactive educational
                  atmosphere. In addition, the university offers robust support
                  services, including academic advising, mental health
                  counselling, career guidance, and leadership coaching.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
         "
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Ethical Leadership and Community Engagement
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  We believe education without integrity is incomplete.
                  Therefore, ethical leadership is woven into every layer of the
                  Euston experience. Our students are trained to think not just
                  about profit, but about impact; not just about careers, but
                  about calling. They graduate with a strong sense of
                  responsibility to themselves, their communities, and their
                  world. Through partnerships with local communities, NGOs, and
                  industries, Euston University ensures that its impact extends
                  far beyond the campus walls. Students engage in
                  service-learning initiatives, policy dialogues, and advocacy
                  campaigns that sharpen their civic awareness and foster a
                  heart for social justice.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
         "
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Global Connections, Local Relevance
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  While Euston University maintains strong roots in Nigeria, our
                  outlook is unapologetically global. We foster academic
                  partnerships, faculty exchanges, research collaborations, and
                  virtual exchanges with institutions across Africa, Europe, and
                  North America. Our students are prepared to thrive in diverse
                  cultural and professional settings, whether in their local
                  communities or on international platforms.
                </p>
                <p className="text-[0.9375rem] leading-[1.4063rem] text-[#292929]">
                  Despite our global orientation, we never lose sight of our
                  responsibility to local relevance. Every programme, every
                  course, every initiative is anchored in the needs and
                  aspirations of our host communities. We prepare students not
                  just for global careers, but for meaningful local impact.{" "}
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
         "
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  A Growing Legacy
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  While Euston University maintains strong roots in Nigeria, our
                  outlook is unapologetically global. We foster academic
                  partnerships, faculty exchanges, research collaborations, and
                  virtual exchanges with institutions across Africa, Europe, and
                  North America. Our students are prepared to thrive in diverse
                  cultural and professional settings, whether in their local
                  communities or on international platforms.
                </p>
                <p className="text-[0.9375rem] leading-[1.4063rem] text-[#292929]">
                  Despite our global orientation, we never lose sight of our
                  responsibility to local relevance. Everyprogramme, every
                  course, every initiative is anchored in the needs and
                  aspirations of our hostcommunities. We prepare students not
                  just for global careers, but for meaningful local impact.
                </p>
              </div>
            </div>
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
