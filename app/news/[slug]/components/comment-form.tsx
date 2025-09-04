"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCommentContext } from "@/context/comment-context";
import { CommentSchema, CommentSchemaType } from "@/types/comment-schema";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
interface CommentsAndShareProps {
  postId: string;
}

export default function CommentForm({ postId }: { postId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { dispatchComment } = useCommentContext();

  const form = useForm<CommentSchemaType>({
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      id: undefined,
      name: "",
      email: "",
      comment: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: CommentSchemaType) => {
    setIsSubmitting(true);
    const tempId = `temp-${Date.now()}`;
    const clientTimestamp = new Date().toISOString();
    const tempComment = {
      id: tempId,
      author: data.name,
      comment: data.comment,
      timestamp: clientTimestamp,
    };

    dispatchComment({ type: "ADD", comment: tempComment });
    // toast.info("Submitting your comment...");

    try {
      const response = await fetch("/api/submit-comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          comment: data.comment,
          postId,
          timestamp: clientTimestamp,
        }),
      });

      if (response.ok) {
        const { comment } = await response.json();
        console.log("API response comment:", comment);
        dispatchComment({
          type: "UPDATE",
          comment: {
            id: tempId,
            author: comment.author,
            comment: comment.comment,
            timestamp: comment.timestamp,
          },
        });
        // toast.success("Comment submitted successfully!");
        form.reset();
      } else {
        const error = await response.json();
        // toast.error(error.error || "Failed to submit comment");
        dispatchComment({ type: "REMOVE", id: tempId });
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      // toast.error("An unexpected error occurred");
      dispatchComment({ type: "REMOVE", id: tempId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <hr className="py-[20px]" />
      <div className="flex flex-col gap-[16px]  text-[#292929]">
        <h4 className="text-[32px] font-heading leading-[38.4px] font-bold text-[#292929]">
          Share your opinion here!
        </h4>
        {/* <p className="text-[15px] leading-[22.5px]">
          Your email address will not be published. Required fields are marked *
        </p> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none"
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-none"
                        type="email"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Comment"
                        className="rounded-none resize-none h-[144px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex items-center justify-start">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-none bg-[#890c25] py-[15px] px-[25px]  leading-[14px] text-center  text-white"
              >
                {isSubmitting ? "Posting..." : "Post"}
              </Button>
            </div>
          </form>
        </Form>

        {/* 
        <form className="flex flex-col gap-[16px]">
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="Enter your name"
              type="text"
              className=" px-4 p-1 w-full border h-[40.5px] border-[#EAEAEA] outline-none"
            />
            <input
              placeholder="Enter your email"
              type="email"
              className="px-4 p-1 w-full border h-[40.5px] border-[#EAEAEA] outline-none"
            />
          </div>
          <input
            placeholder="Enter your subject"
            type="text"
            className="px-4 p-1 w-full border h-[40.5px] border-[#EAEAEA] outline-none"
          />
          <textarea
            placeholder="Enter your message"
            className="px-4 p-1 h-[198px] w-full border border-[#EAEAEA] outline-none"
          />

          <div>
            <button className="bg-[#890c25] py-[15px] px-[25px]  leading-[14px] text-center  text-white">
              Submit Review
            </button>
          </div>
        </form> */}
      </div>
    </>
  );
}
