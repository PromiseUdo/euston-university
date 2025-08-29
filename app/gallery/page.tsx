// "use client";

// import React, { useState } from "react";
// import Masonry from "react-masonry-css";
// import Image from "next/image";
// import Link from "next/link";
// import CTA from "./components/cta";
// import PageHeader from "@/components/page-hero";

// // Sample categories
// const categories = [
//   "All",
//   "Campus & Facilities",
//   //   "Student Life",
//   //   "Academic Events",
//   //   "Sports & Culture",
//   //   "Convocation",
// ];

// // Local images stored inside /public/gallery/
// const images = [
//   {
//     src: "/IMG_0001.webp",
//     category: "Campus & Facilities",
//     alt: "Campus Building",
//   },
//   {
//     src: "/IMG_0040.webp",
//     category: "Campus & Facilities",
//     alt: "Students on Campus",
//   },
//   {
//     src: "/IMG_0093.webp",
//     category: "Campus & Facilities",
//     alt: "University Library",
//   },
//   {
//     src: "/IMG_0071.webp",
//     category: "Campus & Facilities",
//     alt: "Graduation Ceremony",
//   },
//   {
//     src: "/IMG_0173.webp",
//     category: "Campus & Facilities",
//     alt: "Sports Festival",
//   },
//   {
//     src: "/IMG_0129.webp",
//     category: "Campus & Facilities",
//     alt: "Lecture Hall",
//   },
//   // Add more local images as needed
// ];

// export default function GalleryPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     { label: "Gallery", href: "/gallery", isActive: true },
//   ];
//   const filteredImages =
//     selectedCategory === "All"
//       ? images
//       : images.filter((img) => img.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <PageHeader
//         title="Our Gallery"
//         breadcrumbItems={breadcrumbItems}
//         backgroundImage="/news.webp"
//       />

//       {/* Category Filters */}
//       <div className="max-w-6xl mx-auto px-4 py-8 text-center">
//         <div className="flex flex-wrap gap-3 justify-center">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//                 selectedCategory === cat
//                   ? "bg-[#890c25] text-white"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Masonry Gallery */}
//       <div className="max-w-6xl mx-auto px-4">
//         <Masonry
//           breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
//           className="flex gap-4"
//           columnClassName=""
//         >
//           {filteredImages.map((img, idx) => (
//             <div key={idx} className="relative overflow-hidden  shadow-lg mb-4">
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 width={600}
//                 height={800}
//                 className="object-cover w-full transition-transform duration-300 hover:scale-105"
//               />
//               <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-sm p-2">
//                 {img.category}
//               </div>
//             </div>
//           ))}
//         </Masonry>
//       </div>

//       <CTA />
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import CTA from "./components/cta";
import PageHeader from "@/components/page-hero";

// Categories
const categories = [
  "All",
  "Campus & Facilities",
  // "Student Life",
  // "Academic Events",
  // "Sports & Culture",
  // "Convocation",
];

// Local images with explicit aspect ratios
const images = [
  {
    src: "/IMG_0001.webp",
    category: "Campus & Facilities",
    alt: "Campus Building",
    aspectRatio: "600/800", // portrait
  },
  {
    src: "/IMG_0040.webp",
    category: "Campus & Facilities",
    alt: "Students on Campus",
    aspectRatio: "600/700",
  },
  {
    src: "/IMG_0093.webp",
    category: "Campus & Facilities",
    alt: "University Library",
    aspectRatio: "600/900", // tall portrait
  },
  {
    src: "/IMG_0071.webp",
    category: "Campus & Facilities",
    alt: "Graduation Ceremony",
    aspectRatio: "600/750",
  },
  {
    src: "/IMG_0173.webp",
    category: "Campus & Facilities",
    alt: "Sports Festival",
    aspectRatio: "600/650",
  },
  {
    src: "/IMG_0129.webp",
    category: "Campus & Facilities",
    alt: "Lecture Hall",
    aspectRatio: "600/720",
  },
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
      {/* ✅ Page Header */}
      <PageHeader
        title="Our Gallery"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/news.webp"
      />

      {/* ✅ Category Filters */}
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

      {/* ✅ Masonry Gallery with Aspect Ratios */}
      <div className="max-w-6xl mx-auto px-4">
        <Masonry
          breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4"
        >
          {filteredImages.map((img, idx) => (
            <div key={idx} className="mb-4 group">
              <div
                className="relative w-full overflow-hidden  shadow-lg group-hover:shadow-2xl transition-all duration-300"
                style={{ aspectRatio: img.aspectRatio }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-sm p-2">
                  {img.category}
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {/* ✅ Call to Action */}
      <CTA />
    </div>
  );
}
