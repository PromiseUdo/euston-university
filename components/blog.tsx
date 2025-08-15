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
//     category: "Technology",
//     title: "Nigerian Researchers Discover Sustainable Energy Solution",
//     excerpt:
//       "A team young physics students has developed a solar-hybrid system that reduces energy costs by 60% for rural communities...",
//     author: "John Patrick",
//     date: "Oct 29, 2024",
//     image: "/public-admin.webp",
//     link: "/news/1",
//   },
//   {
//     category: "TechEducation",
//     title: "University Partners with Google for Digital Skills Program",
//     excerpt: "500 students will receive free certification in data analytics and AI through this groundbreaking industry collaboration",
//     author: "Desmond Edem",
//     date: "Oct 29, 2025",
//     image: "/blog2.webp",
//     link: "/news/2",
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
//             href="/news"
//             className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white  uppercase tracking-wider  transition-colors"
//           >
//             <span className="relative z-10">View All</span>

//             <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

//             <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
//           </Link>
//         </div>

//         {/* Blog Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {blogs.map((blog, index) => (
//             // make it row layout on large screen , should only be column on small screens
//             <div
//               key={index}
//               className="group bg-white  shadow-md overflow-hidden"
//             >
//               {/* col 1 */}
//               <Link href={blog.link} className="block">
//                 <div className="relative h-64">
//                   <Image
//                     src={blog.image}
//                     alt={`${blog.title} thumbnail`}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//               </Link>
//               {/* col 2 */}
//               <div className="p-6">
//                 <Link
//                   href="/news/abc"
//                   className="inline-block text-sm font-medium bg-blue-100 text-blue-600 px-3 hover:text-blue-800 uppercase tracking-wider mb-2"
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
    category: "Technology",
    title: "Nigerian Researchers Discover Sustainable Energy Solution",
    excerpt:
      "A team young physics students has developed a solar-hybrid system that reduces energy costs by 60% for rural communities...",
    author: "John Patrick",
    date: "Oct 29, 2024",
    image: "/public-admin.webp",
    link: "/news/1",
  },
  {
    category: "Tech Education",
    title: "University Partners with Google for Digital Skills Program",
    excerpt:
      "500 students will receive free certification in data analytics and AI through this groundbreaking industry collaboration",
    author: "Desmond Edem",
    date: "Oct 29, 2025",
    image: "/public-admin.webp",
    link: "/news/2",
  },
];

const BlogSection: React.FC = () => {
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
            className="group overflow-hidden inline-flex relative items-center gap-2 px-6 py-3 text-sm bg-[#890c25] font-semibold text-white uppercase tracking-wider transition-colors"
          >
            <span className="relative z-10">View All</span>
            <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <ArrowRight className="-rotate-45 w-4 h-4 relative z-10" />
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-full"
            >
              {/* Image Column */}
              <div className="relative lg:w-5/12 h-64 lg:h-auto">
                <Link href={blog.link} className="block h-full">
                  <Image
                    src={blog.image}
                    alt={`${blog.title} thumbnail`}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </Link>
              </div>

              {/* Content Column */}
              <div className="lg:w-7/12 p-6 flex flex-col justify-between">
                <div>
                  <Link
                    href={`/news/category/${blog.category.toLowerCase()}`}
                    className="inline-block text-xs font-medium bg-red-200 text-[#890c25] px-3 py-1  uppercase tracking-wider mb-3"
                  >
                    {blog.category}
                  </Link>
                  <h3 className="text-xl font-semibold text-gray-900 font-heading mb-3 line-clamp-2">
                    <Link
                      href={blog.link}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-2 sm:mb-0">
                    <User className="w-4 h-4 text-gray-400" />
                    <Link
                      href={`/authors/${blog.author
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {blog.author}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <time dateTime={new Date(blog.date).toISOString()}>
                      {blog.date}
                    </time>
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
