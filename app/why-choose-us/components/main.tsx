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
                  src="/our-story4.webp"
                  alt="Our Story Image"
                  className="h-[563px] w-full object-cover"
                />
              </div>

              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Why choose Euston University (What makes the university stand
                  out)
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  At Euston University, choosing us is not just about pursuing a
                  degree; it is about stepping into a transformative journey
                  that shapes the mind, heart, and character. Located in the
                  heart of Abakaliki, Ebonyi State, Nigeria, Euston University
                  was conceived as a beacon of hope, excellence, and innovation.
                  In a world where higher education is often transactional, we
                  stand for something deeper—an education that empowers
                  individuals to thrive, lead, and leave a legacy of impact.
                  With our vision to create a nurturing and motivating
                  environment that fosters sustainable growth and measurable
                  achievements, we have built a unique academic culture that
                  truly sets us apart.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Inspired by Compassion, Founded on Purpose
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University’s roots are grounded in the humanitarian
                  legacy of Mrs. Eunice Ukamaka Egwu, a trailblazer in social
                  impact through the renowned Widowcare Foundation. This
                  university is not just a collection of buildings and books; it
                  is a living embodiment of service to humanity. The university
                  was inspired by a lifelong commitment to empowering the
                  underserved—particularly widows, orphans, and marginalized
                  communities—through education, social reform, and economic
                  empowerment. That same philosophy of care, equity, and purpose
                  is now being woven into every fabric of Euston’s identity. We
                  are more than an institution—we are a mission-driven academic
                  home where empathy meets excellence.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Vision-Driven Leadership for Global Impact
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Our vision to create a nurturing and motivating environment is
                  not a mere statement—it’s a daily lived experience across
                  every college, department, and program. At Euston, we
                  challenge the conventional by integrating compassioninto
                  curriculum design, and leadership into student development. We
                  equip our learners to not only master disciplines but to
                  contribute meaningfully to their communities and global
                  society. Our mission speaks volumes: to become a
                  research-intensive university of excellence, advancing
                  knowledge across borders while fostering innovation,
                  inclusivity, and social responsibility.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  World-Class Academic Programmes Tailored for 21st Century
                  Relevance
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University is structured around forward-thinking
                  faculties and programs that address local, national, and
                  global challenges. We don’t simply replicate what others are
                  doing—we innovate by designing curricula that integrate
                  academic theory with industry relevance. Our programs are
                  tailored to ensure employability, entrepreneurship, global
                  competitiveness, and community engagement.
                </p>

                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  From Computer Science to Nursing Science, Business
                  Administration to Engineering, everyprogramme is built on
                  international best practices and benchmarked to meet National
                  UniversitiesCommission (NUC) standards, while also aligning
                  with global competency models.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  A Culture of Excellence: Built to Excel and Shine{" "}
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Our motto—“Built to Excel and Shine”—is not an empty phrase.
                  It is a declaration of intent, and it drives every student,
                  staff, and partner associated with us. At Euston University,
                  we demand excellence not just in academic performance but in
                  leadership, conduct, creativity, and citizenship. Our students
                  are trained to be outstanding in classrooms and equally
                  competent in boardrooms, laboratories, startups, and global
                  stages. We produce not just graduates but trailblazers who
                  will light up paths in sectors such as medicine, education,
                  business, agriculture, public service, and technology.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Commitment to Innovation and Research{" "}
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  We are deeply committed to being a research intensive
                  university, nurturing a culture of intellectual curiosity,
                  problem-solving, and innovation. Our faculty are encouraged to
                  produce cutting-edge research that contributes to Nigeria’s
                  development goals, Africa’s renaissance, and the global body
                  of knowledge. We offer support systems for undergraduate and
                  postgraduate research, and we foster partnerships with local
                  and international research organizations. Students at Euston
                  don’t just learn existing knowledge—they co-create new
                  knowledge that makes a difference.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Technology-Driven Learning Environment
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  At Euston University, we understand that the future of
                  education is digital and dynamic. Our classrooms, labs,
                  libraries, and administrative systems are powered by modern
                  technologies to ensure flexible, inclusive, and engaging
                  learning experiences. We blend traditional in-person lectures
                  with virtual learning, digital laboratories, and interactive
                  platforms that prepare students for the Fourth Industrial
                  Revolution and beyond. We are intentional about building
                  digital competencies among staff and students as a foundation
                  for
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Entrepreneurship and Employability Focus
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  In response to rising unemployment and economic challenges,
                  Euston University places entrepreneurial development at the
                  core of its philosophy. Our curriculum emphasizes hands-on
                  learning, real-world internships, business incubation, and
                  start-up support. We work with industry partners to ensure our
                  graduates are not just employable but can create jobs and
                  businesses of their own. We aim to raise a new generation of
                  solution providers, not job seekers.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Inclusive, Safe, and Empowering Campus Community{" "}
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  We take pride in creating a welcoming and inclusive
                  environment where diversity is celebrated, and every student
                  feels safe, valued, and empowered. From gender equity to
                  religious tolerance, from disability inclusion to cultural
                  respect, our campus is a model of unity in diversity. This
                  reflects our foundational values from the Widowcare
                  Foundation—compassion, justice, and empowerment.
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Experienced, Purpose-Driven Faculty
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Our team of lecturers, researchers, and administrative staff
                  are carefully selected not just for their academic
                  qualifications but for their passion for impact and integrity.
                  At Euston, teaching is not a job—it’s a calling. Our faculty
                  are accessible, approachable, and invested in the success of
                  every student. They act as mentors, role models, and lifelong
                  guides who support learning far beyond the classroom.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Strategic Location and Global Linkages
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University is located along the Abakaliki– Enugu
                  Expressway, offering easy access and strong regional
                  visibility. But beyond location, we are strategically
                  positioned to build international linkages and partnerships.
                  We are alreadyexploring affiliations, collaborations, and
                  exchange programs with universities and institutions abroad,
                  ensuring that our students benefit from global exposure,
                  international certification, and competitive advantage.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Deep Community Engagement and Social Responsibility{" "}
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  True to our roots, Euston University is deeply engaged with
                  the host community and beyond. We run communitydevelopment
                  programs, literacy campaigns, widow support initiatives,
                  health outreaches, and agricultural extension services. Every
                  student is encouraged to contribute to nation-building through
                  service-learning, volunteering, and civic engagement. We
                  believe that education is incomplete without social
                  responsibility.
                </p>
              </div>
              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Holistic Student Development{" "}
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Education at Euston goes beyond academics. We place emphasis
                  on moral character, leadership development, critical thinking,
                  spirituality, physical wellness, and emotional intelligence.
                  From clubs and societies to sports and religious fellowships,
                  students are supported to grow holistically into well-rounded
                  leaders.When you choose Euston University, you are not just
                  enrolling in a university—you are becoming part of a
                  transformative movement. A movement that blends academic
                  excellence with compassion. A community where the mind is
                  trained, the heart is shaped, and the hands are prepared for
                  service and success. We are Built to Excel and Shine, and we
                  invite you to join us in building a brighter future.
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
