

import React from "react";
import PageHeader from "@/components/page-hero";
import BlogSection from "./components/blog-section";
import { getData } from "@/components/blog";
import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";

const Page = async ({
  searchParams,
}: {
  searchParams: { search?: string; category?: string };
}) => {
  const searchQuery = searchParams.search || "";
  const categoryQuery = searchParams.category || "All";

  const [blogPosts] = await getData(searchQuery);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="University News"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/news.webp"
      />

      <Suspense
        fallback={
          <div className="py-8 flex flex-col items-center gap-4">
            <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
            <p className="text-lg font-medium text-foreground">
              Loading posts...
            </p>
            <p className="text-sm text-muted-foreground">
              Please wait while we fetch the latest posts.
            </p>
          </div>
        }
      >
        <BlogSection
          posts={blogPosts.items}
          searchQuery={searchQuery}
          categoryQuery={categoryQuery}
        />
      </Suspense>
    </div>
  );
};

export const revalidate = 60;
export default Page;
