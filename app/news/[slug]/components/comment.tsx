import React from "react";

const CommentForm = () => {
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
        </form>
      </div>
    </>
  );
};

export default CommentForm;
