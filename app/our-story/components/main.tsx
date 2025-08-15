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
                  src="/our-story2.webp"
                  alt="Our Story Image"
                  className="h-[563px] w-full object-cover"
                />
              </div>

              <div
                className="flex flex-col gap-[20px]
"
              >
                <h3 className="text-[30px] font-bold leading-[30px]  font-heading">
                  Brief Background of the University
                </h3>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University is not just another institution of higher
                  learning—it is a living expression of a noble vision, shaped
                  by compassion, rooted in service, and destined for impact. Our
                  story begins not in the lecture halls or boardrooms, but in
                  the heart of a woman who has spent her life empowering the
                  forgotten, uplifting the vulnerable, and transforming
                  communities through selfless action. That woman is Mrs. Eunice
                  Ukamaka Egwu—the founder and promoter of EustonUniversity and
                  the compassionate force behind the renowned Widowcare
                  Foundation.
                </p>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  From her earliest years, Mrs. Egwu was stirred by the plight
                  of widows and underserved women in her community. Born into a
                  royal family, she carried not just the dignity of tradition
                  but also a deep sense of responsibility for others. As she
                  grew, so did her vision—to build platforms that would bring
                  healing, dignity, and opportunity to women who had been
                  marginalized by loss, poverty, or societal neglect
                </p>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Long before occupying public office, her hands were already
                  reaching out to widows, helping them navigate life’s
                  challenges and encouraging them to rise again. But when
                  destiny placed her in a position of influence as the First
                  Lady of Ebonyi State from 1999 to 2007, she did not hesitate.
                  She expanded her outreach, institutionalized her advocacy, and
                  built enduring structures that would protect the rights and
                  welfare of widows, single mothers, and vulnerable families.It
                  was during this period that the Widowcare Foundation was
                  officially born—an organization that would go on to empower
                  thousands of women across all 13 local government areas of
                  Ebonyi State. The Foundation’s work has become legendary: from
                  vocational training in tailoring, hairdressing, and food
                  processing to the provision of startup grants, from the
                  donation of homes to homeless widows to the payment of
                  hospital bills and school fees for their children. The
                  annualWidows’ Party, attended by over a thousand women, has
                  become a symbol of joy, hope, and resilience. Here, widows are
                  not mourned—they are celebrated, supported, and restored.
                </p>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  In 2008, the Foundation achieved a significant milestone by
                  building and donating 48 homes to widows who had lost
                  everything. In 2016 and 2024, its annual support programs
                  reached over 1,000 widows, distributing cash, food, and
                  household items worth tens of millions of naira. Alongside the
                  Foundation, Mrs. Egwu also played a pivotal role in
                  establishing the Family Law Centre at the Ebonyi State House
                  of Assembly—a legal advocacy body dedicated to protecting
                  widows’ rights and securing automatic employment placements
                  for some.
                </p>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Yet, Mrs. Egwu always believed that true transformation must
                  go beyond charity. She recognized that education is the most
                  powerful engine of change. While the Widowcare Foundation met
                  immediate and pressing needs, she envisioned a legacy that
                  would nurture long-termempowerment, raise ethical leaders, and
                  contribute to national development. Thus, the dream of Euston
                  University was born
                </p>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Euston University was not established merely to award degrees.
                  It was created to transform lives. At Euston, education is not
                  only about intellectual mastery; it is about human
                  development. It is not just about producing employable
                  graduates; it is about nurturing ethical citizens who can
                  think critically, act courageously, lead compassionately, and
                  serve selflessly.
                </p>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  The university’s ethos is shaped by the life and philosophy of
                  its founder. Here, integrity is celebrated, service is
                  honored, and excellence is non-negotiable. These values are
                  deeply embedded in our curriculum, governance, and student
                  life. We believe in a holistic approach to education—one that
                  blends academic rigor with moral character, innovation with
                  responsibility, and ambition with empathy.
                </p>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  Today, Euston University offers an impressive array of
                  undergraduate programmes across four faculties:{" "}
                </p>

                <ul className="list-disc pl-6 space-y-4 text-[15px] text-[#292929]">
                  <li>
                    <strong>The Faculty of Allied Health Sciences</strong>,
                    offering a BNSc in Nursing Science, preparesstudents for
                    compassionate service in healthcare.
                  </li>
                  <li>
                    <strong>The Faculty of Natural and Applied Sciences</strong>{" "}
                    features critical programmes like Biology,Microbiology,
                    Forensic Science, Physics with Electronics, and
                    Biochemistry—laying astrong scientific foundation for
                    research and innovation.
                  </li>
                  <li>
                    <strong>The Faculty of Computing</strong> delivers
                    high-demand tech programmes such as Cybersecurity,Data
                    Science, Software Engineering, Artificial Intelligence, and
                    Information Technology—training future tech leaders.
                  </li>
                  <li>
                    <strong>
                      The Faculty of Arts, Management, and Social Sciences
                    </strong>{" "}
                    develops thinkers, entrepreneurs,and public servants through
                    courses like Accounting, Public Administration,
                    Economics,History and International Studies, and Criminology
                    and Security Studies.
                  </li>
                </ul>
                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  What truly sets Euston apart is its humanitarian DNA.
                  Community service is not an extracurricular activity here—it
                  is a core part of our identity. Our students are encouraged to
                  participate in outreach programmes, volunteer with vulnerable
                  groups, and carry forward the legacy of giving and service
                  initiated by our founder. In every lecture, workshop, and
                  mentoring session, students are reminded that true greatness
                  is measured not by what you accumulate, but bywhat you
                  contribute.
                </p>

                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  The university is strategically located in Abakaliki, Ebonyi
                  State, along the Enugu–Abakaliki Expressway, a location that
                  reflects both our accessibility and our commitment to regional
                  development. Our physical infrastructure is designed for
                  excellence—modern lecture halls, digital learning systems,
                  well-equipped laboratories, and serene spaces for study and
                  reflection. But our greatest strength remains our story—a
                  story of one woman’s vision to empower others, astory of
                  turning tears into triumph, and a story of transforming
                  compassion into an educational movement. That story continues
                  every day in the lives of our students, staff, and graduates
                  who carry the Euston name into the world as beacons of hope
                  and agents of change.
                </p>

                <p className="text-[15px] leading-[22.5px] text-[#292929]">
                  As we grow, we remain anchored in the values that birthed us.
                  And as the future unfolds, we invite you—students, partners,
                  faculty, and communities—to be part of this incredible
                  journey. Because at Euston University, we don’t just teach. We
                  inspire. We don’t just graduate students. We raise leaders.
                  And we don’t just tell a story. We are the story.
                </p>

                <ul className="list-disc pl-6 space-y-4 text-[15px] text-[#292929]">
                  <li>
                    Contact information (Address, email, phone, socials) <br />{" "}
                    Address: kilometer 10 Abakaliki-Enugu Expressway, Abakaliki,
                    <br />
                    Email: registrar@eustonuniversity.edu.ng or
                    info@eustonuniversity.edu.ng (proposed)
                    <br />
                    Phone: 08138863143
                  </li>
                </ul>
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
