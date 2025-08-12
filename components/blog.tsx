"use client";

import React from "react";
import { ArrowRight, User, Calendar } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  link: string;
}

const blogs: Blog[] = [
  {
    category: "Campus",
    title: "10 from Harvard named Rhodes Scholars",
    excerpt: "You'll find something to spark your curiosity and enhance",
    author: "Jon Adam",
    date: "Oct 29, 2023",
    image: "/blog1.jpg",
    link: "/blog-details",
  },
  {
    category: "Marketing",
    title: "Announcing the winners the 2023 Education",
    excerpt: "You'll find something to spark your curiosity and enhance",
    author: "Jon Adam",
    date: "Oct 29, 2023",
    image: "/blog2.jpg",
    link: "/blog-details",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="pt-20 bg-white">
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
            href="/blogs"
            className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white  uppercase tracking-wider  transition-colors"
          >
            <span className="relative z-10">View All</span>

            <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

            <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            // make it row layout on large screen , should only be column on small screens
            <div
              key={index}
              className="group bg-white  shadow-md overflow-hidden"
            >
              {/* col 1 */}
              <Link href={blog.link} className="block">
                <div className="relative h-64">
                  <Image
                    src={blog.image}
                    alt={`${blog.title} thumbnail`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              {/* col 2 */}
              <div className="p-6">
                <Link
                  href="#"
                  className="inline-block text-sm font-medium bg-blue-100 text-blue-600 px-3 hover:text-blue-800 uppercase tracking-wider mb-2"
                >
                  {blog.category}
                </Link>
                <h5 className="text-xl font-semibold text-gray-900 font-heading mb-2">
                  <Link
                    href={blog.link}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {blog.title}
                  </Link>
                </h5>
                <p className="text-base text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 gap-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <Link
                      href="#"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {blog.author}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <p>{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogSection;

// "use client";

// import React from "react";
// import { ArrowRight, User, Calendar } from "lucide-react";
// import MaxWidthWrapper from "./max-width-wrapper";
// import Image from "next/image";
// import Link from "next/link";

// interface Blog {
//   category: string;
//   title: string;
//   excerpt: string;
//   author: string;
//   date: string;
//   image: string;
//   link: string;
// }

// const blogs: Blog[] = [
//   {
//     category: "Campus",
//     title: "10 from Harvard named Rhodes Scholars",
//     excerpt: "You'll find something to spark your curiosity and enhance",
//     author: "Jon Adam",
//     date: "Oct 29, 2023",
//     image: "/blog1.jpg",
//     link: "/blog-details",
//   },
//   {
//     category: "Marketing",
//     title: "Announcing the winners the 2023 Education",
//     excerpt: "You'll find something to spark your curiosity and enhance",
//     author: "Jon Adam",
//     date: "Oct 29, 2023",
//     image: "/blog2.jpg",
//     link: "/blog-details",
//   },
// ];

// const BlogSection: React.FC = () => {
//   return (
//     <section className="pt-20 bg-white">
//       <MaxWidthWrapper>
//         {/* Title Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
//           <div className="text-center sm:text-left mb-4 sm:mb-0">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4">
//               Read Our Latest News
//             </h2>
//             <p className="text-base md:text-lg text-gray-600">
//               Our mission is to provide you with valuable insights
//             </p>
//           </div>
//           <Link
//             href="/blog"
//             className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white rounded-md uppercase tracking-wider hover:bg-[#6b0920] transition-colors"
//           >
//             View All
//             <ArrowRight className="w-4 h-4" />
//           </Link>
//         </div>

//         {/* Blog Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row"
//             >
//               {/* Image */}
//               <Link href={blog.link} className="block lg:w-1/2">
//                 <div className="relative h-64 lg:h-auto">
//                   <Image
//                     src={blog.image}
//                     alt={`${blog.title} thumbnail`}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//               </Link>
//               {/* Content */}
//               <div className="p-6 lg:w-1/2">
//                 <Link
//                   href="#"
//                   className="inline-block text-sm font-medium bg-blue-100 text-blue-600 px-3 py-1 rounded-md uppercase tracking-wider mb-2 hover:bg-blue-200 transition-colors"
//                 >
//                   {blog.category}
//                 </Link>
//                 <h5 className="text-xl font-semibold text-gray-900 font-heading mb-2">
//                   <Link
//                     href={blog.link}
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     {blog.title}
//                   </Link>
//                 </h5>
//                 <p className="text-base text-gray-600 mb-4">{blog.excerpt}</p>
//                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 gap-4">
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4" />
//                     <Link
//                       href="#"
//                       className="hover:text-blue-600 transition-colors"
//                     >
//                       {blog.author}
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4" />
//                     <p>{blog.date}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </MaxWidthWrapper>
//     </section>
//   );
// };

// export default BlogSection;
