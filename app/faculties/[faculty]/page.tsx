// import PageHeader from "@/components/page-hero";
// import React from "react";
// import FacultyMissionVision from "./components/faculty-mission-vision";
// import DepartmentListSection from "./components/deparment-list-section";
// import LecturerSection from "./components/lecturer";

// const page = () => {
//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     { label: "Faculties", href: "/faculties", isActive: true },
//     {
//       label: "Faculty of Computing",
//       href: "/faculty-of-computing",
//       isActive: true,
//     },
//   ];

//   return (
//     <div>
//       <PageHeader
//         title="Faculty of Computing"
//         breadcrumbItems={breadcrumbItems}
//         backgroundImage="https://html.themewant.com/unipix/assets/images/banner/breadcrumb.jpg"
//       />
//       <FacultyMissionVision />
//       <DepartmentListSection />
//       <LecturerSection />
//     </div>
//   );
// };

// export default page;

// // app/faculties/[...slug]/page.tsx
// import PageHeader from "@/components/page-hero";
// import React from "react";
// import FacultyMissionVision from "./components/faculty-mission-vision";
// import LecturerSection from "./components/lecturer";
// import { notFound } from "next/navigation";
// import { Linkedin, Facebook } from "lucide-react";
// import DepartmentListSection from "./components/deparment-list-section";

// interface FacultyData {
//   slug: string;
//   title: string;
//   mission: string;
//   vision: string;
//   departments: { thumbnail: string; title: string; href: string }[];
//   lecturers: {
//     thumbnail: string;
//     name: string;
//     designation: string;
//     href: string;
//     socialLinks: { icon: React.ReactNode; href: string }[];
//   }[];
// }

// const faculties: FacultyData[] = [
//   {
//     slug: "faculty-of-allied-health-sciences",
//     title: "Faculty of Allied Health Sciences",
//     mission:
//       "To advance healthcare education through innovative teaching, research, and clinical practice, preparing students to address global health challenges with compassion and expertise.",
//     vision:
//       "To be a global leader in allied health sciences, fostering interdisciplinary collaboration and transformative healthcare solutions.",
//     departments: [
//       {
//         thumbnail:
//           "https://html.themewant.com/unipix/assets/images/course/09.jpg",
//         title: "Department of Nursing",
//         href: "/department/nursing",
//       },
//       {
//         thumbnail:
//           "https://html.themewant.com/unipix/assets/images/course/10.jpg",
//         title: "Department of Physiotherapy",
//         href: "/department/physiotherapy",
//       },
//       {
//         thumbnail:
//           "https://html.themewant.com/unipix/assets/images/course/11.jpg",
//         title: "Department of Medical Laboratory Science",
//         href: "/department/medical-laboratory-science",
//       },
//     ],
//     lecturers: [
//       {
//         thumbnail: "/testifier1.jpg",
//         name: "Dr. Sarah Johnson",
//         designation: "Head of Nursing",
//         href: "/faculty-details/sarah-johnson",
//         socialLinks: [
//           { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
//           { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
//         ],
//       },
//       {
//         thumbnail: "/testifier2.jpg",
//         name: "Prof. Michael Lee",
//         designation: "Physiotherapy Lecturer",
//         href: "/faculty-details/michael-lee",
//         socialLinks: [
//           { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
//           { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
//         ],
//       },
//     ],
//   },
//   {
//     slug: "faculty-of-computing",
//     title: "Faculty of Computing",
//     mission:
//       "To empower students with cutting-edge computational skills and innovative thinking to solve real-world problems through technology.",
//     vision:
//       "To be a hub of technological innovation, producing leaders in computing who drive digital transformation globally.",
//     departments: [
//       {
//         thumbnail:
//           "https://html.themewant.com/unipix/assets/images/course/09.jpg",
//         title: "Department of Computer Science",
//         href: "/department/computer-science",
//       },
//       {
//         thumbnail:
//           "https://html.themewant.com/unipix/assets/images/course/10.jpg",
//         title: "Department of Information Technology",
//         href: "/department/information-technology",
//       },
//       {
//         thumbnail:
//           "https://html.themewant.com/unipix/assets/images/course/11.jpg",
//         title: "Department of Cybersecurity",
//         href: "/department/cybersecurity",
//       },
//       {
//         thumbnail:
//           "https://html.themewant.com/unipix/assets/images/course/12.jpg",
//         title: "Department of Data Science",
//         href: "/department/data-science",
//       },
//     ],
//     lecturers: [
//       {
//         thumbnail: "/testifier2.jpg",
//         name: "Rick Zonson",
//         designation: "Assistant Teacher",
//         href: "/faculty-details/rick-zonson",
//         socialLinks: [
//           { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
//           { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
//         ],
//       },
//       {
//         thumbnail: "/testifier2.jpg",
//         name: "Thomas Fred",
//         designation: "Teacher",
//         href: "/faculty-details/thomas-fred",
//         socialLinks: [
//           { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
//           { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
//         ],
//       },
//       {
//         thumbnail: "/testifier2.jpg",
//         name: "Albert Mack",
//         designation: "Head Teacher",
//         href: "/faculty-details/albert-mack",
//         socialLinks: [
//           { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
//           { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
//         ],
//       },
//     ],
//   },
//   // Add more faculties as needed
// ];

// interface FacultyPageProps {
//   params: { slug: string[] };
// }

// const FacultyPage = ({ params }: FacultyPageProps) => {
//   const slug = params.slug.join("/"); // e.g., "faculty-of-allied-health-sciences"
//   const faculty = faculties.find((f) => f.slug === slug);

//   if (!faculty) {
//     notFound(); // Handle invalid slugs
//   }

//   const breadcrumbItems = [
//     { label: "Home", href: "/" },
//     { label: "Faculties", href: "/faculties" },
//     {
//       label: faculty.title,
//       href: `/faculties/${faculty.slug}`,
//       isActive: true,
//     },
//   ];

//   return (
//     <div>
//       <PageHeader
//         title={faculty.title}
//         breadcrumbItems={breadcrumbItems}
//         backgroundImage="https://html.themewant.com/unipix/assets/images/banner/breadcrumb.jpg"
//       />
//       <FacultyMissionVision mission={faculty.mission} vision={faculty.vision} />
//       <DepartmentListSection departments={faculty.departments} />
//       <LecturerSection lecturers={faculty.lecturers} />
//     </div>
//   );
// };

// export default FacultyPage;

// app/faculties/[faculty]/page.tsx
import PageHeader from "@/components/page-hero";
import React from "react";
import FacultyMissionVision from "./components/faculty-mission-vision";
import LecturerSection from "./components/lecturer";
import { notFound } from "next/navigation";
import { Linkedin, Facebook } from "lucide-react";
import DepartmentListSection from "./components/deparment-list-section";

interface FacultyData {
  slug: string;
  title: string;
  mission: string;
  vision: string;
  departments: { thumbnail: string; title: string; href: string }[];
  lecturers: {
    thumbnail: string;
    name: string;
    designation: string;
    href: string;
    socialLinks: { icon: React.ReactNode; href: string }[];
  }[];
}

const faculties: FacultyData[] = [
  {
    slug: "faculty-of-allied-health-sciences",
    title: "Faculty of Allied Health Sciences",
    mission:
      "To advance healthcare education through innovative teaching, research, and clinical practice, preparing students to address global health challenges with compassion and expertise.",
    vision:
      "To be a global leader in allied health sciences, fostering interdisciplinary collaboration and transformative healthcare solutions.",
    departments: [
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/09.jpg",
        title: "Department of Nursing",
        href: "/department/nursing",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/10.jpg",
        title: "Department of Physiotherapy",
        href: "/department/physiotherapy",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/11.jpg",
        title: "Department of Medical Laboratory Science",
        href: "/department/medical-laboratory-science",
      },
    ],
    lecturers: [
      {
        thumbnail: "/testifier1.jpg",
        name: "Dr. Sarah Johnson",
        designation: "Head of Nursing",
        href: "/faculty-details/sarah-johnson",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
      {
        thumbnail: "/testifier2.jpg",
        name: "Prof. Michael Lee",
        designation: "Physiotherapy Lecturer",
        href: "/faculty-details/michael-lee",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
    ],
  },
  {
    slug: "faculty-of-computing",
    title: "Faculty of Computing",
    mission:
      "To empower students with cutting-edge computational skills and innovative thinking to solve real-world problems through technology.",
    vision:
      "To be a hub of technological innovation, producing leaders in computing who drive digital transformation globally.",
    departments: [
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/09.jpg",
        title: "Department of Computer Science",
        href: "/department/computer-science",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/10.jpg",
        title: "Department of Information Technology",
        href: "/department/information-technology",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/11.jpg",
        title: "Department of Cybersecurity",
        href: "/department/cybersecurity",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/12.jpg",
        title: "Department of Data Science",
        href: "/department/data-science",
      },
    ],
    lecturers: [
      {
        thumbnail: "/testifier2.jpg",
        name: "Rick Zonson",
        designation: "Assistant Teacher",
        href: "/faculty-details/rick-zonson",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
      {
        thumbnail: "/testifier2.jpg",
        name: "Thomas Fred",
        designation: "Teacher",
        href: "/faculty-details/thomas-fred",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
      {
        thumbnail: "/testifier2.jpg",
        name: "Albert Mack",
        designation: "Head Teacher",
        href: "/faculty-details/albert-mack",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
    ],
  },
  {
    slug: "faculty-of-natural-and-applied-sciences",
    title: "Faculty of Natural and Applied Sciences",
    mission:
      "To empower students with cutting-edge computational skills and innovative thinking to solve real-world problems through technology.",
    vision:
      "To be a hub of technological innovation, producing leaders in computing who drive digital transformation globally.",
    departments: [
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/09.jpg",
        title: "Department of Computer Science",
        href: "/department/computer-science",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/10.jpg",
        title: "Department of Information Technology",
        href: "/department/information-technology",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/11.jpg",
        title: "Department of Cybersecurity",
        href: "/department/cybersecurity",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/12.jpg",
        title: "Department of Data Science",
        href: "/department/data-science",
      },
    ],
    lecturers: [
      {
        thumbnail: "/testifier2.jpg",
        name: "Rick Zonson",
        designation: "Assistant Teacher",
        href: "/faculty-details/rick-zonson",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
      {
        thumbnail: "/testifier2.jpg",
        name: "Thomas Fred",
        designation: "Teacher",
        href: "/faculty-details/thomas-fred",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
      {
        thumbnail: "/testifier2.jpg",
        name: "Albert Mack",
        designation: "Head Teacher",
        href: "/faculty-details/albert-mack",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
    ],
  },
  {
    slug: "faculty-of-arts-management-and-social-sciences",
    title: "Faculty of Arts, Management and Social Sciences",
    mission:
      "To empower students with cutting-edge computational skills and innovative thinking to solve real-world problems through technology.",
    vision:
      "To be a hub of technological innovation, producing leaders in computing who drive digital transformation globally.",
    departments: [
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/09.jpg",
        title: "Department of Computer Science",
        href: "/department/computer-science",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/10.jpg",
        title: "Department of Information Technology",
        href: "/department/information-technology",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/11.jpg",
        title: "Department of Cybersecurity",
        href: "/department/cybersecurity",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/12.jpg",
        title: "Department of Data Science",
        href: "/department/data-science",
      },
    ],
    lecturers: [
      {
        thumbnail: "/testifier2.jpg",
        name: "Rick Zonson",
        designation: "Assistant Teacher",
        href: "/faculty-details/rick-zonson",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
      {
        thumbnail: "/testifier2.jpg",
        name: "Thomas Fred",
        designation: "Teacher",
        href: "/faculty-details/thomas-fred",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
      {
        thumbnail: "/testifier2.jpg",
        name: "Albert Mack",
        designation: "Head Teacher",
        href: "/faculty-details/albert-mack",
        socialLinks: [
          { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
          { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
        ],
      },
    ],
  },
  // Add more faculties as needed
];

interface FacultyPageProps {
  params: { faculty: string }; // Updated to use single segment 'faculty'
}

const FacultyPage = ({ params }: FacultyPageProps) => {
  const slug = params.faculty; // Use params.faculty (string) instead of params.slug.join("/")
  const faculty = faculties.find((f) => f.slug === slug);

  if (!faculty) {
    notFound(); // Handle invalid slugs
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Faculties", href: "/faculties" },
    {
      label: faculty.title,
      href: `/faculties/${faculty.slug}`,
      isActive: true,
    },
  ];

  return (
    <div>
      <PageHeader
        title={faculty.title}
        breadcrumbItems={breadcrumbItems}
        backgroundImage="https://html.themewant.com/unipix/assets/images/banner/breadcrumb.jpg"
      />
      <FacultyMissionVision mission={faculty.mission} vision={faculty.vision} />
      <DepartmentListSection departments={faculty.departments} />
      <LecturerSection lecturers={faculty.lecturers} />
    </div>
  );
};

export default FacultyPage;
