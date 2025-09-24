import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Breadcrumb from "./breadcrumb";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface PageHeaderProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbItems,
  backgroundImage = "https://html.themewant.com/unipix/assets/images/banner/breadcrumb.jpg",
}) => {
  return (
    <section
      className="py-20 bg-cover h-[400px] flex items-center justify-center bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <MaxWidthWrapper className="">
        <div className="relative z-10 flex  flex-col items-center justify-center">
          <Breadcrumb items={breadcrumbItems} />
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
            {title}
          </h2>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PageHeader;
