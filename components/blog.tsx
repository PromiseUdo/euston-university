import React from "react";
import { ArrowRight, User, Calendar } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";
import PostCard from "./post-card";

export async function getData(searchQuery: string = "") {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const query: any = {
    content_type: "blogPost",
  };

  // Add search filter if query exists
  if (searchQuery.trim()) {
    query["query"] = searchQuery.trim();
  }

  const blogPosts = await client.getEntries(query);

  // Sort all posts by createdAt (newest first)
  blogPosts.items.sort(
    (a, b) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt)
  );

  return [blogPosts];
}

export function extractTextFromPostBody(postBody: any): string {
  let textContent = "";

  function extractContent(content: any[]) {
    content.forEach((node) => {
      if (node.nodeType === "text") {
        textContent += node.value + " ";
      } else if (node.content && Array.isArray(node.content)) {
        extractContent(node.content);
      }
    });
  }

  if (postBody && postBody.content) {
    extractContent(postBody.content);
  }

  return textContent.trim();
}
const BlogSection: React.FC = async () => {
  const [blogPosts] = await getData();

  // console.dir(blogPosts, { depth: null });

  const featuredPosts = blogPosts.items.slice(0, 2);

  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        {/* Title Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
              Read Our Latest News
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Our mission is to provide you with valuable insights
            </p>
          </div>
          <Link
            href="/news"
            className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm rounded-[25px] shadow-md bg-[linear-gradient(135deg,#890c25_0%,#b71c1c_100%)] font-semibold text-white uppercase tracking-wider transition-colors"
          >
            <span className="relative z-10">View All</span>
            <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogSection;
