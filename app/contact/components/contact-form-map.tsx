"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface ContactFormData {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

const ContactFormMap: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your API or form submission logic
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", subject: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 ">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6">
          {/* Contact Form */}
        <div className="shadow   p-[20px]  pt-[50px]  lg:p-[50px] flex flex-col gap-[1.25rem]">
              <h3 className="text-[30px] leading-[30px] font-heading ">
                Leave A Message
              </h3>
              <div className="pb-[20px] leading-[22.5px] text-[15px]">
                <p>Fill the form bellow to send us a message</p>
              </div>
              <form className="flex flex-col gap-[20px]">
                <div className="grid grid-cols-2 gap-[20px]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-[#EAEAEA] outline-none h-[53px] placeholder:text-[#C2C2C2] pt-[17px] pr-[16px] pb-[16px] pl-[21px]"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border border-[#EAEAEA] outline-none h-[53px] placeholder:text-[#C2C2C2] pt-[17px] pr-[16px] pb-[16px] pl-[21px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-[20px]">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-[#EAEAEA] outline-none h-[53px] placeholder:text-[#C2C2C2] pt-[17px] pr-[16px] pb-[16px] pl-[21px]"
                  />
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="border border-[#EAEAEA] outline-none h-[53px] placeholder:text-[#C2C2C2] pt-[17px] pr-[16px] pb-[16px] pl-[21px]"
                  />
                </div>
                <div className="w-full">
                  <textarea
                    placeholder="Your Comment"
                    className="border border-[#EAEAEA] outline-none w-full h-[150px] placeholder:text-[#C2C2C2] p-[16px] pl-[21px]"
                  ></textarea>
                </div>

                <div className="w-full">
                  <button className="bg-[#890c25] text-white w-full py-[10px] tracking-[2px] text-[14px] uppercase">
                    Send message
                  </button>
                </div>
              </form>
            </div>

          {/* Map */}
          <div className="bg-white border border-gray-300 overflow-hidden h-full transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.520103287784!2d8.113497314769484!3d6.324961995409463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknMjkuOSJOIDjCsDA2JzQ4LjEiRQ!5e0!3m2!1sen!2sng!4v1698765432101!5m2!1sen!2sng"
              width="100%"
              height="100%"
              className="border-0 w-full h-[400px] md:h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Kilometer 10 Abakaliki-Enugu Expressway, Ebonyi State"
              aria-label="Map of Kilometer 10 Abakaliki-Enugu Expressway, Ebonyi State"
            ></iframe>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactFormMap;