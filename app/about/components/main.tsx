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
            {/* Main About us */}
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
