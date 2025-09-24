"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getData } from "@/components/blog";

const CategoryMenu: React.FC = async () => {
  const [blogPosts] = await getData();

  // 🔹 Categories list from posts
  const categories: string[] = [
    ...Array.from(
      new Set<string>(
        blogPosts?.items
          .map((post: any) => String(post?.fields?.category || ""))
          .filter((cat: string) => cat.length > 0)
      )
    ),
  ];

  return (
    <div className="bg-white border border-gray-300 overflow-hidden">
      <h6 className="bg-[#890c25] text-white text-center py-3 mb-0 font-semibold text-base font-heading">
        News Category
      </h6>
      <div className="border-t border-gray-300">
        <ul className="p-0 m-0 list-unstyled">
          {categories.map((cat, index) => (
            <li
              key={index}
              className="py-3 px-5 border-b border-gray-300 last:border-b-0"
            >
              <Link
                href={
                  cat === "All"
                    ? "/news"
                    : `/news?category=${encodeURIComponent(cat)}`
                }
                className="flex capitalize items-center text-gray-600 hover:text-[#890c25] transition-colors duration-300"
                aria-label={cat}
              >
                <span className="mr-2.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
