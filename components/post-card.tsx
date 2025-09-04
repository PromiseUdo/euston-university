"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { extractTextFromPostBody } from "./blog";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import readingTime from "reading-time";
import { format } from "date-fns";

interface PostCardProps {
  post: any;
  //   readTime?: string;
  //   className?: string;
}

const PostCard = ({ post }: PostCardProps) => {
  // Normalize image URL
  const imageUrl = post?.fields?.featuredImage?.fields?.file?.url
    ? `https:${post.fields.featuredImage.fields.file.url}`
    : "/default-image.jpg"; // Fallback image

  // Extract snippet from post body
  const postBodyText =
    extractTextFromPostBody(post?.fields?.postBody) || "No content available";

  // Safely access slug, fallback to a default or disable link
  const slug = post?.fields?.slug || null;
  const href = slug ? `/blog/${slug}` : "#"; // Fallback to "#" if no slug

  const readTime = readingTime(postBodyText).text;

  return (
    <div className="group bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-full">
      {/* Image Column */}
      <div className="relative lg:w-5/12 h-64 lg:h-auto">
        <Link
          href={href}
          aria-disabled={!slug}
          className={cn(!slug && "pointer-events-none", "block h-full")}
        >
          <Image
            src={imageUrl}
            alt={
              post?.fields?.title
                ? `${post.fields.title} thumbnail`
                : "Post thumbnail"
            }
            fill
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            // priority={index === 0}
          />
        </Link>
      </div>

      {/* Content Column */}
      <div className="lg:w-7/12 p-6 flex flex-col justify-between">
        <div>
          <p className="inline-block text-xs font-medium bg-red-200 text-[#890c25] px-3 py-1  uppercase tracking-wider mb-3">
            {post.fields.category}
          </p>
          <h3 className="text-xl font-semibold text-gray-900 font-heading mb-3 line-clamp-2">
            <Link
              href={href}
              className="hover:text-[#890c25] transition-colors"
            >
              {post?.fields?.title}
            </Link>
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3"> {postBodyText}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Clock className="w-4 h-4 text-gray-400" />
            <p className=" ">{readTime}</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <time dateTime={new Date(post?.sys?.createdAt).toISOString()}>
              {format(post?.sys?.createdAt, "d MMM yyy")}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
