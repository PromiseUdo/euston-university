import PageHeader from "@/components/page-hero";
import React from "react";
import Main from "./components/main";
import { createClient } from "contentful";
import { format } from "date-fns";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
});

interface IParams {
  slug?: string;
}

const page = async ({ params }: { params: IParams }) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Article", href: "/contact", isActive: true },
  ];
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  const blogPost = items[0] as any;

  const imageUrl = blogPost?.fields?.featuredImage?.fields?.file?.url
    ? `https:${blogPost.fields.featuredImage.fields.file.url}`
    : "/default-image.jpg"; // Fallback image

  return (
    <div>
      <PageHeader
        title={String(blogPost?.fields?.title ?? "")}
        breadcrumbItems={breadcrumbItems}
        backgroundImage={imageUrl}
      />
      <Main items={items} />
    </div>
  );
};

export default page;
