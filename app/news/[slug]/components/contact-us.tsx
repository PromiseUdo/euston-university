import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="shadow-md bg-[#ffffff] mt-[30px] pb-[30px]">
      <div className="w-full flex flex-col">
        <div className="p-[5px] pt-0 mb:p-0 mb-[30px]">
          <img
            src="/news-photo.jpg"
            alt="Our Story Image"
            className="h-[242.8px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-[20px] px-[30px]">
          <div className="grid grid-cols-[auto_1fr] items-start gap-4">
            <div className="w-[51px] h-[51px] bg-[#007123] rounded-full flex items-center justify-center">
              <Image
                src={"/phone.png"}
                alt="Vision and Mission Icon"
                width={24.8}
                height={19.8}
                className="w-[24.8px] h-[19.8px] object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#292929] font-bold text-[24px] font-heading">
                Call Us
              </h4>
              <p className="text-[#292929] text-[15px] leading-[22.5px]">
                +234 (0)813 886 3143
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] items-start gap-4">
            <div className="w-[51px] h-[51px] bg-[#FFC53A] rounded-full flex items-center justify-center">
              <Image
                src={"/email.png"}
                alt="Vision and Mission Icon"
                width={23.75}
                height={15}
                className="w-[23.75px] h-[15px] object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#292929] font-bold text-[24px] font-heading">
                Email us
              </h4>
              <p className="text-[#292929] text-[15px] leading-[22.5px]">
                info@eustonuniversity.edu.ng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
