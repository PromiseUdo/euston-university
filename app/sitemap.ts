import { MetadataRoute } from "next";
import { faculties } from "@/data/faculties";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

async function getAllBlogSlugs(): Promise<string[]> {
  const entries = await client.getEntries({
    content_type: "blogPost", 
    select: ["fields.slug"], 
  });

  return entries.items.map((item: any) => item.fields.slug);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.eustonuniversity.org";

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/admissions",
    "/contact",
    "/faculties",
    "/faq",
    "/our-story",
    "/why-choose-us",
    "/news",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const facultyPages: MetadataRoute.Sitemap = faculties.map((faculty) => ({
    url: `${baseUrl}${faculty.href}`,
    lastModified: new Date(),
  }));

  const blogSlugs = await getAllBlogSlugs();
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...facultyPages, ...blogPages];
}