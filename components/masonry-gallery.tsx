// "use client";
// import React from "react";
// import Masonry from "react-masonry-css";
// import MaxWidthWrapper from "./max-width-wrapper";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// // Define your gallery items with explicit aspect ratios
// const galleryItems = [
//   {
//     id: 1,
//     src: "/IMG_0173.webp",

//     alt: "Gallery image 1",
//     title: "Project 1",
//     aspectRatio: "600/400", // width/height
//   },
//   {
//     id: 2,
//     src: "/IMG_0060.webp",
//     alt: "Gallery image 2",
//     title: "Project 2",
//     aspectRatio: "600/800",
//   },
//   {
//     id: 3,
//     src: "/IMG_0098.webp",
//     alt: "Gallery image 3",
//     title: "Project 3",
//     aspectRatio: "600/600",
//   },
//   {
//     id: 4,
//     src: "/IMG_0135.webp",
//     alt: "Gallery image 4",
//     title: "Project 4",
//     aspectRatio: "600/900",
//   },
//   {
//     id: 5,
//     src: "/IMG_0014.webp",
//     alt: "Gallery image 5",
//     title: "Project 5",
//     aspectRatio: "600/500",
//   },
//   {
//     id: 6,
//     src: "/IMG_0216.webp",
//     alt: "Gallery image 6",
//     title: "Project 6",
//     aspectRatio: "600/700",
//   },
// ];

// const MasonryGallery = () => {
//   const breakpointCols = {
//     default: 3,
//     1100: 3,
//     700: 2,
//     500: 2,
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <MaxWidthWrapper>
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
//           <div className="text-center sm:text-left mb-4 sm:mb-0">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
//               Gallery
//             </h2>
//             <p className="text-base md:text-lg text-gray-600">
//               Moments That Define Our Legacy
//             </p>
//           </div>
//           <Link
//             href="/gallery"
//             className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white uppercase tracking-wider transition-colors"
//           >
//             <span className="relative z-10">View All</span>
//             <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
//             <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
//           </Link>
//         </div>

//         <Masonry
//           breakpointCols={breakpointCols}
//           className="flex -ml-4 w-auto"
//           columnClassName="pl-4"
//         >
//           {galleryItems.map((item) => (
//             <div key={item.id} className="mb-4 group">
//               {/* ✅ Aspect ratio container */}
//               <div
//                 className="relative w-full overflow-hidden  shadow-lg group-hover:shadow-2xl transition-all duration-300"
//                 style={{ aspectRatio: item.aspectRatio }}
//               >
//                 <img
//                   src={item.src}
//                   alt={item.alt}
//                   loading="lazy"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {/* <h3 className="text-white text-lg md:text-xl font-medium text-center">
//                     {item.title}
//                   </h3> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Masonry>
//       </MaxWidthWrapper>
//     </section>
//   );
// };

// export default MasonryGallery;

"use client";
import React from "react";
import Masonry from "react-masonry-css";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "/IMG_0173.webp",
    alt: "Gallery image 1",
    title: "Project 1",
    aspectRatio: "600/400",
  },
  {
    id: 2,
    src: "/IMG_0060.webp",
    alt: "Gallery image 2",
    title: "Project 2",
    aspectRatio: "600/800",
  },
  {
    id: 3,
    src: "/IMG_0098.webp",
    alt: "Gallery image 3",
    title: "Project 3",
    aspectRatio: "600/600",
  },
  {
    id: 4,
    src: "/IMG_0135.webp",
    alt: "Gallery image 4",
    title: "Project 4",
    aspectRatio: "600/900",
  },
  {
    id: 5,
    src: "/IMG_0014.webp",
    alt: "Gallery image 5",
    title: "Project 5",
    aspectRatio: "600/500",
  },
  {
    id: 6,
    src: "/IMG_0216.webp",
    alt: "Gallery image 6",
    title: "Project 6",
    aspectRatio: "600/700",
  },
];

const MasonryGallery = () => {
  const breakpointCols = {
    default: 3,
    1100: 3,
    700: 2,
  };

  return (
    <section className="py-16 bg-gray-50">
      <MaxWidthWrapper>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
              Gallery
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Moments That Define Our Legacy
            </p>
          </div>
          <Link
            href="/gallery"
            className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white uppercase tracking-wider transition-colors"
          >
            <span className="relative z-10">View All</span>
            <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
          </Link>
        </div>

        {/* ✅ Masonry for tablet+ */}
        <div className="hidden sm:block">
          <Masonry
            breakpointCols={breakpointCols}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4"
          >
            {galleryItems.map((item) => (
              <div key={item.id} className="mb-4 group">
                <div
                  className="relative w-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  style={{ aspectRatio: item.aspectRatio }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </Masonry>
        </div>

        {/* ✅ Simple 2-col grid for mobile */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden shadow-md"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MasonryGallery;
