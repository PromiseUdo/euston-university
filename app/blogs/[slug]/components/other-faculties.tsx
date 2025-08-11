"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Faculty of Allied Health Sciences", href: "/blog-details" },
  { label: "Faculty of Natural and Applied Sciences", href: "/blog-details" },
  { label: "Faculty of Computing", href: "/blog-details" },
  { label: "Scholarship", href: "/blog-details" },
  {
    label: "Faculty of Arts, Management, and Social Sciences",
    href: "/blog-details",
  },
];

const OtherFaculties: React.FC = () => {
  return (
    <div className="bg-white border border-gray-300 overflow-hidden">
      <h6 className="bg-[#890c25] text-white text-center py-3 mb-0 font-semibold text-base font-heading">
        Other Faculties
      </h6>
      <div className="border-t border-gray-300">
        <ul className="p-0 m-0 list-unstyled">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="py-3 px-5 border-b border-gray-300 last:border-b-0"
            >
              <Link
                href={item.href}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label={item.label}
              >
                <span className="mr-2.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtherFaculties;
