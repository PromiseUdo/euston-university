"use client";

import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface BlogItem {
  thumbnail: string;
  date: string;
  author: string;
  title: string;
  href: string;
}

const blogItems: BlogItem[] = [
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/blog/01.jpg",
    date: "November 28, 2023",
    author: "Maria Coli",
    title: "Classroom community-building It’s ok to try something new feature!",
    href: "/blog/classroom-community",
  },
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/blog/02.jpg",
    date: "November 28, 2023",
    author: "Samira Khan",
    title: "Those inequalities are inequalities that occur within households",
    href: "/blog/household-inequalities",
  },
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/blog/03.jpg",
    date: "November 28, 2023",
    author: "Samira Khan",
    title: "After decades of improvement, cardiovascular health rates",
    href: "/blog/cardiovascular-health",
  },
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/blog/01.jpg",
    date: "November 28, 2023",
    author: "Maria Coli",
    title: "Classroom community-building It’s ok to try something new feature!",
    href: "/blog/classroom-community-2",
  },
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/blog/02.jpg",
    date: "November 28, 2023",
    author: "Samira Khan",
    title: "Those inequalities are inequalities that occur within households",
    href: "/blog/household-inequalities-2",
  },
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/blog/03.jpg",
    date: "November 28, 2023",
    author: "Samira Khan",
    title: "After decades of improvement, cardiovascular health rates",
    href: "/blog/cardiovascular-health-2",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {blogItems.map((item, index) => (
            <article
              key={index}
              className="bg-white border border-gray-300 hover:border-none  max-w-sm w-full overflow-hidden hover:shadow-md transition duration-500"
            >
              <div className="blog-card">
                {/* Thumbnail */}
                <Link href={item.href} aria-label={`Read more about ${item.title}`}>
                  <img
                    src={item.thumbnail}
                    alt={`${item.title} thumbnail`}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                {/* Meta and Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 text-gray-600 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#890c25]" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-[#890c25]" />
                      <Link
                        href="/blog"
                        className="hover:text-blue-600 transition-colors"
                        aria-label={`Posts by ${item.author}`}
                      >
                        {item.author}
                      </Link>
                    </div>
                  </div>
                  <h5 className="text-xl font-medium text-gray-900 font-heading mb-4">
                    <Link
                      href={item.href}
                      className="hover:text-blue-600 transition-colors"
                      aria-label={`Read more about ${item.title}`}
                    >
                      {item.title}
                    </Link>
                  </h5>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white  uppercase tracking-wider  transition-colors"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                    <ArrowRight className="-rotate-45 w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-[#890c25]  text-white font-semibold py-3 px-6  transition-colors duration-300"
            aria-label="Load more blog posts"
          >
            Load More
          </Link>

         
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogSection;