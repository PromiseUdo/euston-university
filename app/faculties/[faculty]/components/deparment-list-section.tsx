// "use client";

// import React from "react";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import MaxWidthWrapper from "@/components/max-width-wrapper";

// interface DepartmentItem {
//   thumbnail: string;
//   title: string;
//   href: string;
// }

// const departmentItems: DepartmentItem[] = [
//   {
//     thumbnail: "https://html.themewant.com/unipix/assets/images/course/09.jpg",
//     title: "Department of English",
//     href: "/department/english",
//   },
//   {
//     thumbnail: "https://html.themewant.com/unipix/assets/images/course/10.jpg",
//     title: "Department of Music",
//     href: "/department/music",
//   },
//   {
//     thumbnail: "https://html.themewant.com/unipix/assets/images/course/11.jpg",
//     title: "Department of History",
//     href: "/department/history",
//   },
//   {
//     thumbnail: "https://html.themewant.com/unipix/assets/images/course/12.jpg",
//     title: "Department of Philosophy",
//     href: "/department/philosophy",
//   },
// ];

// const DepartmentListSection: React.FC = () => {
//   return (
//     <section className="py-20 bg-white">
//       <MaxWidthWrapper>
//         <div className="text-center mb-10">
//           <h3 className="text-3xl font-semibold text-gray-900 font-heading">
//             Faculty Programmes
//           </h3>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {departmentItems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="relative">
//                 <Link
//                   href={item.href}
//                   aria-label={`View ${item.title} details`}
//                 >
//                   <img
//                     src={item.thumbnail}
//                     alt={`${item.title} thumbnail`}
//                     className="w-full h-48 object-cover"
//                   />
//                 </Link>
//               </div>
//               <div className="p-4 flex justify-between items-center">
//                 <h5 className="text-lg font-medium text-gray-900 font-heading">
//                   <Link
//                     href={item.href}
//                     className="hover:text-blue-600 transition-colors"
//                     aria-label={`View ${item.title} details`}
//                   >
//                     {item.title}
//                   </Link>
//                 </h5>
//                 <Link
//                   href={item.href}
//                   className="text-gray-600 hover:text-blue-600 transition-colors"
//                   aria-label={`View ${item.title} details`}
//                 >
//                   <ArrowRight className="w-5 h-5" />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </MaxWidthWrapper>
//     </section>
//   );
// };

// export default DepartmentListSection;

// app/faculties/[...slug]/components/department-list-section.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface DepartmentItem {
  thumbnail: string;
  title: string;
  href: string;
}

interface DepartmentListSectionProps {
  departments: DepartmentItem[];
}

const DepartmentListSection: React.FC<DepartmentListSectionProps> = ({
  departments,
}) => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        <div className="text-center mb-10">
          <h3 className="text-[33px] leading-[33px] font-semibold text-gray-900 font-heading">
            Faculty Programmes
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
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
              </div>
              <div className="p-4 flex justify-between items-center">
                <h5 className="text-lg font-medium text-gray-900 font-heading">
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors"
                    aria-label={`View ${item.title} details`}
                  >
                    {item.title}
                  </Link>
                </h5>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={`View ${item.title} details`}
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DepartmentListSection;
