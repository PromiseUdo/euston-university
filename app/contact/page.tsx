import PageHeader from "@/components/page-hero";
import React from "react";
import ContactInfo from "./components/contact-info";
import ContactFormMap from "./components/contact-form-map";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="Contact Us"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/contactus.avif"
      />
      <ContactFormMap />
      <ContactInfo />
    </div>
  );
};

export default page;
