// import PageHeader from "@/components/page-hero";
// import React from "react";
// import Main from "./components/main";
// import AdmissionModal from "@/components/admissional-modal";

// const page = () => {
//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     { label: "Admissions", href: "/admissions", isActive: true },
//   ];

//   return (
//     <div>
//       <PageHeader
//         title="Admissions"
//         breadcrumbItems={breadcrumbItems}
//         backgroundImage="/slide3.webp"
//       />
//       <AdmissionModal />
//       <Main />
//     </div>
//   );
// };

// export default page;

import PageHeader from "@/components/page-hero";
import React from "react";
import Main from "./components/main";
import AdmissionModal from "@/components/admissional-modal";
import { createClient } from "contentful";

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

const page = async () => {
  const [blogPosts] = await getData(); // Fetch data server-side
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Admissions", href: "/admissions", isActive: true },
  ];

  return (
    <div>
      <PageHeader
        title="Admissions"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/slide3.webp"
      />
      <AdmissionModal />
      <Main blogPosts={blogPosts} /> {/* Pass data to Main */}
    </div>
  );
};

export default page;
