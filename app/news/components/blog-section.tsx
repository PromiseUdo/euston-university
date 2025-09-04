// "use client";

// import React, { useState } from "react";
// import { BookOpen, RefreshCw } from "lucide-react";
// import Link from "next/link";
// import MaxWidthWrapper from "@/components/max-width-wrapper";
// import PostCard from "./post-card";
// import { extractTextFromPostBody } from "@/components/blog";
// import readingTime from "reading-time";
// import { cn } from "@/lib/utils";

// const BlogSection = ({
//   posts,
//   searchQuery,
// }: {
//   posts: any;
//   searchQuery: string;
// }) => {
//   // 🔹 Extract unique categories dynamically
//   const categories: string[] = [
//     "All",
//     ...Array.from(
//       new Set<string>(
//         posts
//           .map((post: any) => String(post?.fields?.category || ""))
//           .filter((cat: string) => cat.length > 0)
//       )
//     ),
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // 🔹 Filter posts by selected category
//   const filteredPosts =
//     selectedCategory === "All"
//       ? posts
//       : posts.filter(
//           (post: any) => post?.fields?.category === selectedCategory
//         );

//   return (
//     <section className="py-10 pb-20 bg-white">
//       <MaxWidthWrapper>
//         {/* Category Filters */}
//         <div className="flex flex-wrap gap-3 justify-center mb-10">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 capitalize rounded-full text-sm font-medium transition duration-300 ${
//                 selectedCategory === cat
//                   ? "bg-[#890c25] text-white"
//                   : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Posts Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
//           {filteredPosts.length > 0 ? (
//             filteredPosts.map((post: any, idx: number) => {
//               const postBodyText = extractTextFromPostBody(
//                 post?.fields?.postBody
//               );
//               const readTime = readingTime(postBodyText).text;

//               return (
//                 <div key={idx} className="snap-center">
//                   <PostCard
//                     readTime={readTime}
//                     post={post}
//                     className={cn("w-full")}
//                   />
//                 </div>
//               );
//             })
//           ) : (
//             <div className="col-span-full flex flex-col items-center justify-center py-12 border-b border-gray-300">
//               <BookOpen className="w-12 h-12 text-[#04306e] mb-4" />
//               <h3 className="text-lg font-semibold text-[#1e1e1e] mb-2">
//                 No posts found
//               </h3>
//               <p className="text-sm text-gray-600 text-center max-w-md">
//                 Try selecting another category or explore other posts.
//               </p>
//               <a
//                 href="/blog"
//                 className="mt-4 flex items-center text-sm text-[#04306e] hover:text-[#05418f] transition-colors"
//               >
//                 <RefreshCw className="w-4 h-4 mr-2" />
//                 Explore Other Posts
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Load More Button */}
//         <div className="text-center mt-12">
//           <Link
//             href="/news"
//             className="bg-[#890c25] text-white font-semibold py-3 px-6 transition-colors duration-300"
//             aria-label="Load more blog posts"
//           >
//             Load More
//           </Link>
//         </div>
//       </MaxWidthWrapper>
//     </section>
//   );
// };

// export default BlogSection;

// "use client";

// import React, { useState } from "react";
// import { BookOpen, RefreshCw, LoaderCircle } from "lucide-react";
// import MaxWidthWrapper from "@/components/max-width-wrapper";
// import PostCard from "./post-card";
// import { extractTextFromPostBody } from "@/components/blog";
// import readingTime from "reading-time";
// import { cn } from "@/lib/utils";

// const BlogSection = ({
//   posts,
//   searchQuery,
// }: {
//   posts: any;
//   searchQuery: string;
// }) => {
//   // 🔹 Extract unique categories dynamically
//   const categories: string[] = [
//     "All",
//     ...Array.from(
//       new Set<string>(
//         posts
//           .map((post: any) => String(post?.fields?.category || ""))
//           .filter((cat: string) => cat.length > 0)
//       )
//     ),
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // 🔹 Load more state
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [loadingMore, setLoadingMore] = useState(false);

//   // 🔹 Filter posts by selected category
//   const filteredPosts =
//     selectedCategory === "All"
//       ? posts
//       : posts.filter(
//           (post: any) => post?.fields?.category === selectedCategory
//         );

//   // 🔹 Slice posts for load more
//   const visiblePosts = filteredPosts.slice(0, visibleCount);

//   // 🔹 Handle load more
//   const handleLoadMore = () => {
//     setLoadingMore(true);
//     setTimeout(() => {
//       setVisibleCount((prev) => prev + 6);
//       setLoadingMore(false);
//     }, 500); // simulate small delay
//   };

//   return (
//     <section className="py-10 pb-20 bg-white">
//       <MaxWidthWrapper>
//         {/* Category Filters */}
//         <div className="flex flex-wrap gap-3 justify-center mb-10">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => {
//                 setSelectedCategory(cat);
//                 setVisibleCount(6); // reset when changing category
//               }}
//               className={`px-4 py-2 capitalize rounded-full text-sm font-medium transition duration-300 ${
//                 selectedCategory === cat
//                   ? "bg-[#890c25] text-white"
//                   : "bg-gray-200 hover:bg-gray-300 text-gray-800"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Posts Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
//           {visiblePosts.length > 0 ? (
//             visiblePosts.map((post: any, idx: number) => {
//               const postBodyText = extractTextFromPostBody(
//                 post?.fields?.postBody
//               );
//               const readTime = readingTime(postBodyText).text;

//               return (
//                 <div key={idx} className="snap-center">
//                   <PostCard
//                     readTime={readTime}
//                     post={post}
//                     className={cn("w-full")}
//                   />
//                 </div>
//               );
//             })
//           ) : (
//             <div className="col-span-full flex flex-col items-center justify-center py-12 border-b border-gray-300">
//               <BookOpen className="w-12 h-12 text-[#04306e] mb-4" />
//               <h3 className="text-lg font-semibold text-[#1e1e1e] mb-2">
//                 No posts found
//               </h3>
//               <p className="text-sm text-gray-600 text-center max-w-md">
//                 Try selecting another category or explore other posts.
//               </p>
//               <a
//                 href="/blog"
//                 className="mt-4 flex items-center text-sm text-[#04306e] hover:text-[#05418f] transition-colors"
//               >
//                 <RefreshCw className="w-4 h-4 mr-2" />
//                 Explore Other Posts
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Load More Button */}
//         {visibleCount < filteredPosts.length && (
//           <div className="text-center mt-12">
//             <button
//               onClick={handleLoadMore}
//               disabled={loadingMore}
//               className="flex items-center justify-center gap-2 bg-[#890c25] text-white font-semibold py-3 px-6 rounded transition-colors duration-300 disabled:opacity-50"
//               aria-label="Load more blog posts"
//             >
//               {loadingMore ? (
//                 <>
//                   <LoaderCircle className="w-5 h-5 animate-spin" />
//                   Loading...
//                 </>
//               ) : (
//                 "Load More"
//               )}
//             </button>
//           </div>
//         )}
//       </MaxWidthWrapper>
//     </section>
//   );
// };

// export default BlogSection;

"use client";

import React, { useState } from "react";
import { BookOpen, RefreshCw, LoaderCircle, Search } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import PostCard from "./post-card";
import { extractTextFromPostBody } from "@/components/blog";
import readingTime from "reading-time";
import { cn } from "@/lib/utils";

const BlogSection = ({
  posts,
  searchQuery,
}: {
  posts: any;
  searchQuery: string;
}) => {
  // 🔹 Extract unique categories dynamically
  const categories: string[] = [
    "All",
    ...Array.from(
      new Set<string>(
        posts
          .map((post: any) => String(post?.fields?.category || ""))
          .filter((cat: string) => cat.length > 0)
      )
    ),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState(searchQuery || "");

  // 🔹 Load more state
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  // 🔹 Filter posts by category
  const categoryFiltered =
    selectedCategory === "All"
      ? posts
      : posts.filter(
          (post: any) => post?.fields?.category === selectedCategory
        );

  // 🔹 Apply search filter
  const searchedPosts = categoryFiltered.filter((post: any) => {
    const title = post?.fields?.title?.toLowerCase() || "";
    const body = extractTextFromPostBody(post?.fields?.postBody).toLowerCase();
    return (
      title.includes(query.toLowerCase()) || body.includes(query.toLowerCase())
    );
  });

  // 🔹 Slice posts for load more
  const visiblePosts = searchedPosts.slice(0, visibleCount);

  // 🔹 Handle load more
  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 500); // simulate small delay
  };

  return (
    <section className="py-10 pb-20 bg-white">
      <MaxWidthWrapper>
        {/* 🔎 Search Bar */}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6); // reset when changing category
              }}
              className={`px-4 py-2 capitalize rounded-full text-sm font-medium transition duration-300 ${
                selectedCategory === cat
                  ? "bg-[#890c25] text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(6); // reset pagination when searching
              }}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#890c25] focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {visiblePosts.length > 0 ? (
            visiblePosts.map((post: any, idx: number) => {
              const postBodyText = extractTextFromPostBody(
                post?.fields?.postBody
              );
              const readTime = readingTime(postBodyText).text;

              return (
                <div key={idx} className="snap-center">
                  <PostCard
                    readTime={readTime}
                    post={post}
                    className={cn("w-full")}
                  />
                </div>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12 border-b border-gray-300">
              <BookOpen className="w-12 h-12 text-[#04306e] mb-4" />
              <h3 className="text-lg font-semibold text-[#1e1e1e] mb-2">
                No posts found
              </h3>
              <p className="text-sm text-gray-600 text-center max-w-md">
                Try adjusting your search or selecting another category.
              </p>
              <a
                href="/news"
                className="mt-4 flex items-center text-sm text-[#04306e] hover:text-[#05418f] transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Explore All Posts
              </a>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < searchedPosts.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="flex items-center justify-center gap-2 bg-[#890c25] text-white font-semibold py-3 px-6 rounded transition-colors duration-300 disabled:opacity-50"
              aria-label="Load more blog posts"
            >
              {loadingMore ? (
                <>
                  <LoaderCircle className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More"
              )}
            </button>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogSection;
