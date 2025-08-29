"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import Link from "next/link";
import CTA from "./components/cta";
import PageHeader from "@/components/page-hero";

// Sample categories
const categories = [
  "All",
  "Campus & Facilities",
  //   "Student Life",
  //   "Academic Events",
  //   "Sports & Culture",
  //   "Convocation",
];

// Local images stored inside /public/gallery/
const images = [
  {
    src: "/IMG_0173.webp",
    category: "Campus & Facilities",
    alt: "Campus Building",
  },
  {
    src: "/IMG_0173.webp",
    category: "Campus & Facilities",
    alt: "Students on Campus",
  },
  {
    src: "/IMG_0173.webp",
    category: "Campus & Facilities",
    alt: "University Library",
  },
  {
    src: "/IMG_0173.webp",
    category: "Campus & Facilities",
    alt: "Graduation Ceremony",
  },
  {
    src: "/IMG_0173.webp",
    category: "Campus & Facilities",
    alt: "Sports Festival",
  },
  {
    src: "/IMG_0173.webp",
    category: "Campus & Facilities",
    alt: "Lecture Hall",
  },
  // Add more local images as needed
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery", isActive: true },
  ];
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="relative h-72 flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/gallery/hero.jpg"
            alt="Gallery Hero"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative text-center">
          <h1 className="text-4xl font-bold">Our Gallery</h1>
          <p className="mt-2 text-lg">
            Discover life at Euston University – a blend of learning, culture,
            and innovation.
          </p>
        </div>
      </section> */}

      <PageHeader
        title="Our Gallery"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/news.webp"
      />

      {/* Category Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-[#890c25] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-6xl mx-auto px-4">
        <Masonry
          breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
          className="flex gap-4"
          columnClassName=""
        >
          {filteredImages.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden  shadow-lg mb-4">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="object-cover w-full transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-sm p-2">
                {img.category}
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {/* CTA */}
      {/* <section className="mt-16 py-12 bg-blue-600 text-center text-white">
        <h2 className="text-2xl font-semibold mb-3">
          Be Part of the Euston Experience
        </h2>
        <p className="mb-6">
          Join a vibrant academic community built to excel and shine.
        </p>
        <Link
          href="/admissions"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition"
        >
          Apply Now
        </Link>
      </section> */}

      <CTA />
    </div>
  );
}
