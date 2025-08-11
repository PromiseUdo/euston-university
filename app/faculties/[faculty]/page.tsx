import PageHeader from "@/components/page-hero";
import React from "react";
import FacultyMissionVision from "./components/faculty-mission-vision";
import DepartmentListSection from "./components/deparment-list-section";
import EventSpeakersSection from "./components/lecturer";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Faculties", href: "/faculties", isActive: true },
    {
      label: "Faculty of Computing",
      href: "/faculty-of-computing",
      isActive: true,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Faculty of Computing"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="https://html.themewant.com/unipix/assets/images/banner/breadcrumb.jpg"
      />
      <FacultyMissionVision />
      <DepartmentListSection />
      <EventSpeakersSection />
    </div>
  );
};

export default page;
