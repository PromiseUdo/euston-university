"use client";

import React from "react";
import { Linkedin, Facebook, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface SpeakerItem {
  thumbnail: string;
  name: string;
  designation: string;
  href: string;
  socialLinks: { icon: React.ReactNode; href: string }[];
}

const speakerItems: SpeakerItem[] = [
  {
    thumbnail: "/testifier2.jpg",
    name: "Rick Zonson",
    designation: "Assistant Teacher",
    href: "/faculty-details",
    socialLinks: [
      //   { icon: <Skype className="w-5 h-5 text-primary" />, href: "#" },
      { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
      { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
    ],
  },
  {
    thumbnail: "/testifier2.jpg",
    name: "Thomas Fred",
    designation: "Teacher",
    href: "/faculty-details",
    socialLinks: [
      //   { icon: <Skype className="w-5 h-5 text-primary" />, href: "#" },
      { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
      { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
    ],
  },
  {
    thumbnail: "/testifier2.jpg",
    name: "Albert Mack",
    designation: "Head Teacher",
    href: "/faculty-details",
    socialLinks: [
      //   { icon: <Skype className="w-5 h-5 text-primary" />, href: "#" },
      { icon: <Linkedin className="w-5 h-5 text-primary" />, href: "#" },
      { icon: <Facebook className="w-5 h-5 text-primary" />, href: "#" },
    ],
  },
];

const EventSpeakersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading capitalize">
            Faculty Teaching Lecturers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
          {speakerItems.map((item, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full">
                  <Image
                    src={item.thumbnail}
                    alt={`${item.name} thumbnail`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-300 z-10">
                  {item.socialLinks.map((social, sIndex) => (
                    <Link
                      key={sIndex}
                      href={social.href}
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      aria-label={`Connect with ${item.name} on social media`}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>

              <h5 className="text-xl font-semibold text-gray-900 font-heading mb-1">
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors"
                  aria-label={`View details for ${item.name}`}
                >
                  {item.name}
                </Link>
              </h5>
              <span className="text-base text-gray-600">
                {item.designation}
              </span>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default EventSpeakersSection;
