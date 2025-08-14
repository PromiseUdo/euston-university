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
  header: string;
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
    header: "/health-sciences.webp",

    mission:
      "To advance healthcare education through innovative teaching, research, and clinical practice, preparing students to address global health challenges with compassion and expertise.",
    vision:
      "To be a global leader in allied health sciences, fostering interdisciplinary collaboration and transformative healthcare solutions.",
    departments: [
      {
        thumbnail: "/nursing.webp",
        title: "BNSc Nursing Science",
        href: "/faculties/faculty-of-allied-health-sciences",
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
    header: "/computing.webp",

    mission:
      "To empower students with cutting-edge computational skills and innovative thinking to solve real-world problems through technology.",
    vision:
      "To be a hub of technological innovation, producing leaders in computing who drive digital transformation globally.",
    departments: [
      {
        thumbnail: "/computing.webp",
        title: "BSc Computer Science",
        href: "/faculties/faculty-of-computing",
      },
      {
        thumbnail:
          "https://html.themewant.com/unipix/assets/images/course/10.jpg",
        title: "BSc Cybersecurity",
        href: "/faculties/faculty-of-computing",
      },
      {
        thumbnail: "/data-science.webp",
        title: "BSc Data Science",
        href: "/faculties/faculty-of-computing",
      },
      {
        thumbnail: "/ict.webp",
        title: "BSc Information and Communication Technology (ICT)",
        href: "/faculties/faculty-of-computing",
      },
      {
        thumbnail: "/it.webp",
        title: "BSc Information Systems",
        href: "/faculties/faculty-of-computing",
      },
      {
        thumbnail: "/is.webp",
        title: "BSc Information Technology",
        href: "/faculties/faculty-of-computing",
      },
      {
        thumbnail: "/software.webp",
        title: "BSc Software Engineering",
        href: "/faculties/faculty-of-computing",
      },
      {
        thumbnail: "/ai.webp",
        title: "BSc Artificial Intelligence",
        href: "/faculties/faculty-of-computing",
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
    header: "/applied-sciences.webp",

    mission:
      "To empower students with cutting-edge computational skills and innovative thinking to solve real-world problems through technology.",
    vision:
      "To be a hub of technological innovation, producing leaders in computing who drive digital transformation globally.",
    departments: [
      {
        thumbnail: "/biology.webp",
        title: "BSc Biology",
        href: "/faculties/faculty-of-natural-and-applied-sciences",
      },
      {
        thumbnail: "/health-sciences.webp",
        title: "BSc Microbiology",
        href: "/faculties/faculty-of-natural-and-applied-sciences",
      },
      {
        thumbnail: "/chemistry.webp",
        title: "BSc Chemistry",
        href: "/faculties/faculty-of-natural-and-applied-sciences",
      },
      {
        thumbnail: "/maths.webp",
        title: "BSc Mathematics",
        href: "/faculties/faculty-of-natural-and-applied-sciences",
      },
      {
        thumbnail: "/statistics.webp",
        title: "BSc Statistics",
        href: "/faculties/faculty-of-natural-and-applied-sciences",
      },
      {
        thumbnail: "/physics.webp",
        title: "BSc Physics",
        href: "/faculties/faculty-of-natural-and-applied-sciences",
      },
      {
        thumbnail: "/physics-electronics.webp",
        title: "BSc Physics with Electronics",
        href: "/faculties/faculty-of-natural-and-applied-sciences",
      },
      {
        thumbnail: "/forensic.webp",
        title: "BSc Forensic Science",
        href: "/faculties/faculty-of-natural-and-applied-sciences",
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
    header: "/business.webp",

    mission:
      "To empower students with cutting-edge computational skills and innovative thinking to solve real-world problems through technology.",
    vision:
      "To be a hub of technological innovation, producing leaders in computing who drive digital transformation globally.",
    departments: [
      {
        thumbnail: "/accountant.webp",
        title: "BSc Accounting",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/economics.webp",
        title: "BSc Economics",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/finance.webp",
        title: "BSc Finance",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/boss.webp",
        title: "BSc Entrepreneurship and Innovation",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/business-admin.webp",
        title: "BSc Business Administration",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/public-admin.webp",
        title: "BSc Public Administration",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/procure.webp",
        title: "BSc Procurement Management",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/logistics.webp",
        title: "BSc Logistics and Supply Chain Management",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/criminology.webp",
        title: "BSc Criminology and Security Studies",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/tourism.webp",
        title: "BSc Hospitality and Tourism Management",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/international-studies.webp",
        title: "BA History and International Studies",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
      },
      {
        thumbnail: "/french.webp",
        title: "BA French",
        href: "/faculties/faculty-of-arts-management-and-social-sciences",
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
        name: "Albert Mackss",
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
        backgroundImage={faculty.header}
      />
      <FacultyMissionVision mission={faculty.mission} vision={faculty.vision} />
      <DepartmentListSection departments={faculty.departments} />
      <LecturerSection lecturers={faculty.lecturers} />
    </div>
  );
};

export default FacultyPage;
