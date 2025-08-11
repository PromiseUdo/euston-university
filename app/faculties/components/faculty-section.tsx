"use client";

import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface FacultyItem {
  thumbnail: string;
  title: string;
  href: string;
  badge?: string; // For "Online Education" badge
}

const facultyItems: FacultyItem[] = [
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/course/01.jpg",
    title: "Faculty of Allied Health Sciences",
    href: "/faculty/arts",
  },
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/course/02.jpg",
    title: "Faculty of Natural and Applied Sciences",
    href: "/faculty/science",
  },
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/course/03.jpg",
    title: "Faculty of Computing",
    href: "/faculty/law",
  },
  {
    thumbnail: "https://html.themewant.com/unipix/assets/images/course/03.jpg",
    title: "Faculty of Arts, Management and Social Sciences",
    href: "/faculty/social-sciences",
  },
];

const FacultySection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your search logic (e.g., filter facultyItems or API call)
    console.log("Search query:", searchQuery);
  };

  return (
    <section className="py-20 bg-card">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-5 justify-between items-start mb-12 pb-5 ">
          <div>
            <h3 className="text-3xl font-semibold text-foreground font-heading">
              Our Faculties
            </h3>
          </div>
          <form onSubmit={handleSearch} className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search Faculties"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2 border border-input rounded-md bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Search faculty or staff"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-accent"
              aria-label="Submit search"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyItems.map((item, index) => (
            <article
              key={index}
              className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative">
                <Link
                  href={item.href}
                  aria-label={`View ${item.title} details`}
                >
                  <img
                    src={item.thumbnail}
                    alt={`${item.title} thumbnail`}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                {item.badge && (
                  <Link
                    href={item.href}
                    className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-xs font-semibold font-body uppercase tracking-wider px-3 py-1 rounded-md"
                    aria-label={`${item.badge} for ${item.title}`}
                  >
                    {item.badge}
                  </Link>
                )}
              </div>
              <div className="p-4 flex justify-between items-center">
                <h5 className="text-lg font-medium text-foreground font-heading">
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors"
                    aria-label={`View ${item.title} details`}
                  >
                    {item.title}
                  </Link>
                </h5>
                <Link
                  href={item.href}
                  className="text-primary hover:text-accent transition-colors"
                  aria-label={`View ${item.title} details`}
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Link
            href="/faculty"
            className="inline-flex items-center px-6 py-3 bg-[#890c25] text-primary-foreground font-semibold font-body fill-from-left "
            aria-label="Load more faculty and staff"
          >
            Load More
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FacultySection;
