"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface Tag {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface BlogTagsShareProps {
  tags: Tag[];
  socialLinks: SocialLink[];
}

const BlogTagsShare: React.FC<BlogTagsShareProps> = ({ tags, socialLinks }) => {
  return (
    <section className="py-10">
      <div
        className="flex flex-col md:flex-row justify-between gap-6"
        role="contentinfo"
      >
        {/* Tags Section */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[24px] font-heading text-gray-900">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Link
                key={index}
                href={tag.href}
                className="text-gray-600 hover:text-[#890c25] bg-gray-100 px-3 py-1  text-sm font-body transition-colors"
                aria-label={`View posts with tag ${tag.label}`}
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[24px] font-heading text-gray-900">Share:</h3>
          <div className="flex gap-2">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="w-9 h-9 bg-gray-100  flex items-center justify-center hover:bg-[#890c25] hover:text-white transition-colors"
                aria-label={`Share on ${social.label}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Default props for static data
const defaultTags: Tag[] = [
  { label: "Education", href: "/blog-details" },
  { label: "Admission", href: "/blog-details" },
  { label: "Study", href: "/blog-details" },
  { label: "Scholarship", href: "/blog-details" },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
];

export default function BlogTagsShareWrapper() {
  return <BlogTagsShare tags={defaultTags} socialLinks={defaultSocialLinks} />;
}
