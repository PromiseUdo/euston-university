import { extractTextFromPostBody } from "@/components/blog";
import { format } from "date-fns";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  post: any;
  readTime?: string;
  className?: string;
}

const PostCard = ({ post, className, readTime }: PostCardProps) => {
  // Normalize image URL
  const imageUrl = post?.fields?.featuredImage?.fields?.file?.url
    ? `https:${post.fields.featuredImage.fields.file.url}`
    : "/default-image.jpg"; // Fallback image

  // Extract snippet from post body
  const postBodyText =
    extractTextFromPostBody(post?.fields?.postBody) || "No content available";

  // Safely access slug, fallback to a default or disable link
  const slug = post?.fields?.slug || null;
  const href = slug ? `/news/${slug}` : "#"; // Fallback to "#" if no slug

  return (
    <article
      className={`bg-white border border-gray-300 hover:border-none max-w-sm w-full overflow-hidden hover:shadow-md transition duration-500 flex flex-col h-full ${className}`}
    >
      {/* Thumbnail */}
      <Link href={href} aria-label={`Read more about ${post?.fields?.title}`}>
        <img
          src={imageUrl}
          alt={
            post?.fields?.title
              ? `${post.fields.title} thumbnail`
              : "Post thumbnail"
          }
          className="w-full h-48 object-cover"
        />
      </Link>

      {/* Meta and Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4 text-gray-600 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#890c25]" />
            <span>{format(post?.sys?.createdAt, "d MMM yyy")}</span>
          </div>

          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Clock className="w-4 h-4 text-[#890c25]" />
            <p>{readTime}</p>
          </div>
        </div>

        <h5 className="text-[15px] font-medium text-gray-900 font-body mb-4 flex-grow">
          <Link
            href={href}
            className="hover:text-[#890c25] transition-colors line-clamp-2"
            aria-label={`Read more about ${post?.fields?.title}`}
          >
            {post?.fields?.title}
          </Link>
        </h5>

        {/* 👇 Stick button to the bottom */}
        <div className="mt-auto">
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm rounded-[25px] shadow-md bg-[linear-gradient(135deg,#890c25_0%,#b71c1c_100%)] font-semibold text-white uppercase tracking-wider transition-colors"
            aria-label={`Read more about ${post?.fields?.title}`}
          >
            Read More
            <ArrowRight className="-rotate-45 w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
