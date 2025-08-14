import PageHeader from "@/components/page-hero";
import React from "react";
import Main from "./components/main";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/contactus.avif"
      />
      <Main />
    </div>
  );
};

export default page;
