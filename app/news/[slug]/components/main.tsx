import React from "react";

import CommentForm from "./comment-form";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import CategoryList from "./category-list";
import ContactUs from "./contact-us";
import CategoryMenu from "./category-menu";
import DepartmentContactInfo from "./department-contact-info";
import OtherFaculties from "./other-faculties";
import Link from "next/link";
import { Clock, Tags, User } from "lucide-react";
import Image from "next/image";
import BlogTagsShareWrapper from "./blog-tags-share";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CommentsAndList from "./comments";

const downloads = [
  "Brochure Department",
  "Department Details",
  "Journals Departments",
  "Alumni Departments",
];
interface BlogPostClientProps {
  items: any;
}

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node?.data?.target?.fields;

      const { url, contentType } = file;
      const mimeGroup = contentType?.split("/")[0];

      switch (mimeGroup) {
        case "image":
          return (
            <div className="w-full md:w-[50%] my-4 mx-auto h-[20rem] relative aspect-square">
              <Image
                title={title ? title : "ll"}
                alt={"lkkl"}
                src={"https:" + url}
                fill
                className=" object-cover"
              />
            </div>
          );
        default:
          return (
            <span style={{ backgroundColor: "red", color: "white" }}>
              {" "}
              {contentType} embedded asset{" "}
            </span>
          );
      }
    },

    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      return (
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold">{children}</h2>
      );
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      return (
        <h2 className="mt-4 text-base md:text-lg font-semibold">{children}</h2>
      );
    },
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      return (
        <p className="mt-2 text-base leading-relaxed font-normal">{children}</p>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <a className="hover:underline font-semibold text-voks-secondary">
          {children}
        </a>
      );
    },
  },
};

const Main: React.FC<BlogPostClientProps> = ({ items }) => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="text-[#292929] w-full grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 pr-[20px]">
            <div className="w-full flex flex-col p-[10px] gap-[20px] pt-0">
              <div className="w-full !text-[15px]">
                {documentToReactComponents(
                  items[0]?.fields?.postBody,
                  richTextOptions
                )}
              </div>
              <BlogTagsShareWrapper
                slug={items[0]?.fields?.slug}
                title={items[0]?.fields?.title}
                tags={items[0]?.fields?.tags}
                category={items[0]?.fields?.category}
              />
            </div>
            <CommentsAndList postId={items[0]?.sys?.id} />

            {/* <CommentForm postId={items[0]?.sys?.id} /> */}
            {/* <LatestNews /> */}
          </div>
          {/* Keep col 2 fixed on the screen in such a way that column 1 will completly to the end before this column 2 scroll togehter with it again*/}
          <div className="col-span-12 md:col-span-3 p-[10px] pt-0 pb-[127.09px] flex flex-col">
            <div className="sticky top-[20px] flex flex-col gap-[30px]">
              <CategoryMenu />
              <DepartmentContactInfo
                department="B.A. in Africana Studies"
                email="info@eustonuniversity.edu.ng"
                phone="+2348138863143"
                socials={{
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                  pinterest: "#",
                  youtube: "#",
                }}
              />
              <OtherFaculties />
              {/* <ContactUs /> */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Main;
