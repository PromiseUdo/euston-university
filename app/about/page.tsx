import PageHeader from "@/components/page-hero";
import React from "react";
import Main from "./components/main";
import AboutUniversity from "./components/main";
import HistorySection from "./components/history";
import FunFactSection from "./components/fun-fact";
import MissionSection from "./components/mission-section";

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
      {/* <Main /> */}
      <AboutUniversity />
      <HistorySection />
      <FunFactSection />
      <MissionSection />
    </div>
  );
};

export default page;
