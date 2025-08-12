import PageHeader from "@/components/page-hero";
import React from "react";
import Main from "./components/main";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Article", href: "/contact", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="Article"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="https://html.themewant.com/unipix/assets/images/banner/breadcrumb.jpg"
      />
      <Main />
    </div>
  );
};

export default page;
