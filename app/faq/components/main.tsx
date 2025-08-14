import React from "react";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import CategoryMenu from "@/app/news/[slug]/components/category-menu";
import DepartmentContactInfo from "@/app/news/[slug]/components/department-contact-info";
import OtherFaculties from "@/app/news/[slug]/components/other-faculties";

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
            {/* Insert FAQ component */}
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
