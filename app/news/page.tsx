import React from "react";
import PageHeader from "@/components/page-hero";
import BlogSection from "./components/blog-section";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="University News"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="https://html.themewant.com/unipix/assets/images/banner/breadcrumb.jpg"
      />
      <BlogSection />
    </div>
  );
};

export default page;
