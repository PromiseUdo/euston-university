import PageHeader from "@/components/page-hero";
import React from "react";
import FacultySection from "./components/faculty-section";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Faculties", href: "/faculties", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="Our Faculties"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/health-sciences.webp"
      />
      <FacultySection />
    </div>
  );
};

export default page;
