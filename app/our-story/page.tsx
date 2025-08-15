import PageHeader from "@/components/page-hero";
import React from "react";
import Main from "./components/main";
// import AboutUniversity from "./components/main";
// import HistorySection from "./components/history";
// import FunFactSection from "./components/fun-fact";
// import MissionSection from "./components/mission-section";
// import CampusTourSection from "./components/campus-history";
// import TestimonialSection from "./components/testimonial";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="Our Story"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/contactus.avif"
      />
      <Main />
      {/* <AboutUniversity />
      <HistorySection />
      <FunFactSection />
      <MissionSection />
      <CampusTourSection />
      <TestimonialSection /> */}
    </div>
  );
};

export default page;
