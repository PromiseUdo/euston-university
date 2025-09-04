"use client";

import React from "react";
import CommentForm from "./comment-form";
import CommentsList from "./comment-list";
import { CommentProvider } from "@/context/comment-context";

interface CommentsAndShareProps {
  postId: string;
}

const CommentsAndList: React.FC<CommentsAndShareProps> = ({ postId }) => {
  return (
    <CommentProvider>
      <div className="mt-16 max-w-5xl w-full flex flex-col gap-[40px]">
        <CommentForm postId={postId} />
        <CommentsList postId={postId} />
      </div>
    </CommentProvider>
  );
};

export default CommentsAndList;
