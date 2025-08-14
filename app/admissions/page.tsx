import PageHeader from "@/components/page-hero";
import React from "react";
import Main from "./components/main";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Admissions", href: "/admissions", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="Admissions"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/slide3.webp"
      />

      <Main />
    </div>
  );
};

export default page;
