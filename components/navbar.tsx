// // "use client";

// // import clsx from "clsx";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useState } from "react";
// // import { AnimatePresence, motion } from "framer-motion";
// // import MaxWidthWrapper from "./max-width-wrapper";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="bg-[#890c25] py-[15px]">
// //       <MaxWidthWrapper>
// //         <div className=" flex items-center justify-between">
// //           <div className="flex-shrink-0">
// //             <Link href="/" passHref>
// //               <Image
// //                 src="/logo.png"
// //                 alt="Euston University Logo"
// //                 width={0}
// //                 height={0}
// //                 sizes="100vw"
// //                 style={{ width: "205.42px", height: "49.69px" }}
// //                 unoptimized
// //                 className="object-contain max-w-[150px] sm:max-w-full"
// //               />
// //             </Link>
// //           </div>

// //           <div className="hidden md:flex items-center gap-8">
// //             <Link
// //               href="/"
// //               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
// //             >
// //               Home
// //             </Link>
// //             <a
// //               href="#"
// //               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
// //             >
// //               Academics
// //             </a>
// //             <a
// //               href="#"
// //               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
// //             >
// //               Faculty{" "}
// //             </a>
// //             <Link
// //               href="/about-us"
// //               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
// //             >
// //               About Us
// //             </Link>
// //             <Link
// //               href="/faqs"
// //               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
// //             >
// //               FAQ
// //             </Link>
// //             <Link
// //               href="/news-and-articles"
// //               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
// //             >
// //               News
// //             </Link>
// //             <Link
// //               href="/contact-us"
// //               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
// //             >
// //               Contact
// //             </Link>
// //           </div>

// //           <div className="flex items-center gap-[32px]">
// //             <div className="flex-shrink-0">
// //               <a href="#" aria-label="Search">
// //                 <Image
// //                   src="/search-icon.png" // Replace with your search icon path
// //                   alt="Search"
// //                   width={20}
// //                   height={20}
// //                   className="object-contain"
// //                 />
// //               </a>
// //             </div>

// //             <div className="md:hidden">
// //               <button
// //                 className={clsx(
// //                   "relative z-50 flex flex-col items-center justify-center w-10 h-10 group",
// //                   isOpen === true && "hidden"
// //                 )}
// //                 onClick={toggleMenu}
// //                 aria-label="Toggle menu"
// //               >
// //                 {/* Line 1 */}
// //                 <motion.span
// //                   className="block w-6 h-0.5 bg-[#ffffff] transition-transform"
// //                   animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
// //                   transition={{ duration: 0.1 }}
// //                 />
// //                 {/* Line 2 */}
// //                 <motion.span
// //                   className="block w-6 h-0.5 bg-[#ffffff] mt-1.5 transition-transform"
// //                   animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
// //                   transition={{ duration: 0.4 }}
// //                 />
// //                 {/* Line 3 */}
// //                 <motion.span
// //                   className="block w-6 h-0.5 bg-[#ffffff] mt-1.5 transition-transform"
// //                   animate={
// //                     isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
// //                   }
// //                   transition={{ duration: 0.1 }}
// //                 />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </MaxWidthWrapper>
// //     </div>
// //   );
// // };

// // export default Navbar;

// // "use client";

// // import clsx from "clsx";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useState } from "react";
// // import { AnimatePresence, motion } from "framer-motion";
// // import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// // import {
// //   Menu,
// //   X,
// //   Phone,
// //   Mail,
// //   Instagram,
// //   Twitter,
// //   Facebook,
// //   Linkedin,
// // } from "lucide-react";
// // import MaxWidthWrapper from "./max-width-wrapper";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const navLinks = [
// //     { href: "/", label: "Home" },
// //     { href: "#", label: "Academics" },
// //     { href: "#", label: "Faculty" },
// //     { href: "/about-us", label: "About Us" },
// //     { href: "/faqs", label: "FAQ" },
// //     { href: "/news-and-articles", label: "News" },
// //     { href: "/contact-us", label: "Contact" },
// //   ];

// //   const socialLinks = [
// //     {
// //       href: "https://instagram.com",
// //       label: "Instagram",
// //       icon: <Instagram className="h-5 w-5" />,
// //     },
// //     {
// //       href: "https://twitter.com",
// //       label: "Twitter",
// //       icon: <Twitter className="h-5 w-5" />,
// //     },
// //     {
// //       href: "https://facebook.com",
// //       label: "Facebook",
// //       icon: <Facebook className="h-5 w-5" />,
// //     },
// //     {
// //       href: "https://linkedin.com",
// //       label: "LinkedIn",
// //       icon: <Linkedin className="h-5 w-5" />,
// //     },
// //   ];

// //   return (
// //     <div className="bg-[#890c25] py-[15px]">
// //       <MaxWidthWrapper>
// //         <div className="flex items-center justify-between">
// //           <div className="flex-shrink-0">
// //             <Link href="/" passHref>
// //               <Image
// //                 src="/logo.png"
// //                 alt="Euston University Logo"
// //                 width={0}
// //                 height={0}
// //                 sizes="100vw"
// //                 style={{ width: "205.42px", height: "49.69px" }}
// //                 unoptimized
// //                 className="object-contain max-w-[150px] sm:max-w-full"
// //               />
// //             </Link>
// //           </div>

// //           <div className="hidden md:flex items-center gap-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.label}
// //                 href={link.href}
// //                 className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
// //               >
// //                 {link.label}
// //               </Link>
// //             ))}
// //           </div>

// //           <div className="flex items-center gap-[32px]">
// //             <div className="flex-shrink-0">
// //               <a href="#" aria-label="Search">
// //                 <Image
// //                   src="/search-icon.png"
// //                   alt="Search"
// //                   width={20}
// //                   height={20}
// //                   className="object-contain"
// //                 />
// //               </a>
// //             </div>

// //             <div className="md:hidden">
// //               <Sheet open={isOpen} onOpenChange={setIsOpen}>
// //                 <SheetTrigger asChild>
// //                   <button
// //                     className="relative z-50 flex flex-col items-center justify-center w-10 h-10"
// //                     onClick={toggleMenu}
// //                     aria-label="Toggle menu"
// //                   >
// //                     {isOpen ? (
// //                       <X className="h-6 w-6 text-white" />
// //                     ) : (
// //                       <Menu className="h-6 w-6 text-white" />
// //                     )}
// //                   </button>
// //                 </SheetTrigger>
// //                 <SheetContent
// //                   side="right"
// //                   className="bg-[#ffffff] text-[#292929] w-[280px] sm:w-[320px] p-6"
// //                 >
// //                   <div className="flex flex-col h-full">
// //                     {/* Navigation Links */}
// //                     <nav className="flex flex-col gap-4 mt-8">
// //                       {navLinks.map((link) => (
// //                         <Link
// //                           key={link.label}
// //                           href={link.href}
// //                           className="text-lg font-medium hover:text-gray-300 transition-colors"
// //                           onClick={() => setIsOpen(false)}
// //                         >
// //                           {link.label}
// //                         </Link>
// //                       ))}
// //                     </nav>

// //                     {/* Contact Information */}
// //                     <div className="mt-8 border-t border-gray-300 pt-6">
// //                       <h3 className="text-sm font-semibold uppercase tracking-wide">
// //                         Contact Us
// //                       </h3>
// //                       <div className="mt-4 flex flex-col gap-3">
// //                         <a
// //                           href="tel:+1234567890"
// //                           className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
// //                         >
// //                           <Phone className="h-5 w-5" />
// //                           +1 (234) 567-890
// //                         </a>
// //                         <a
// //                           href="mailto:info@eustonuniversity.edu"
// //                           className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
// //                         >
// //                           <Mail className="h-5 w-5" />
// //                           info@eustonuniversity.edu
// //                         </a>
// //                       </div>
// //                     </div>

// //                     {/* Social Media Links */}
// //                     <div className="mt-6 border-t border-gray-300 pt-6">
// //                       <h3 className="text-sm font-semibold uppercase tracking-wide">
// //                         Follow Us
// //                       </h3>
// //                       <div className="mt-4 flex gap-4">
// //                         {socialLinks.map((link) => (
// //                           <a
// //                             key={link.label}
// //                             href={link.href}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="hover:text-gray-300 transition-colors"
// //                             aria-label={link.label}
// //                           >
// //                             {link.icon}
// //                           </a>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </SheetContent>
// //               </Sheet>
// //             </div>
// //           </div>
// //         </div>
// //       </MaxWidthWrapper>
// //     </div>
// //   );
// // };

// // export default Navbar;

// // "use client";

// // import clsx from "clsx";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useState } from "react";
// // import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// // import {
// //   Menu,
// //   X,
// //   Phone,
// //   Mail,
// //   Instagram,
// //   Twitter,
// //   Facebook,
// //   Linkedin,
// // } from "lucide-react";
// // import MaxWidthWrapper from "./max-width-wrapper";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const navLinks = [
// //     { href: "/", label: "Home" },
// //     { href: "/", label: "Academics" },
// //     { href: "/faculties", label: "Faculty" },
// //     { href: "/", label: "About Us" },
// //     { href: "/", label: "FAQ" },
// //     { href: "/blogs", label: "Blogs" },
// //     { href: "/contact", label: "Contact" },
// //   ];

// //   const socialLinks = [
// //     {
// //       href: "https://instagram.com",
// //       label: "Instagram",
// //       icon: <Instagram className="h-5 w-5" />,
// //     },
// //     {
// //       href: "https://twitter.com",
// //       label: "Twitter",
// //       icon: <Twitter className="h-5 w-5" />,
// //     },
// //     {
// //       href: "https://facebook.com",
// //       label: "Facebook",
// //       icon: <Facebook className="h-5 w-5" />,
// //     },
// //     {
// //       href: "https://linkedin.com",
// //       label: "LinkedIn",
// //       icon: <Linkedin className="h-5 w-5" />,
// //     },
// //   ];

// //   return (
// //     <div className="bg-[#890c25] py-[15px]">
// //       <MaxWidthWrapper>
// //         <div className="flex items-center justify-between">
// //           <div className="flex-shrink-0">
// //             <Link href="/" passHref>
// //               <Image
// //                 src="/logo.png"
// //                 alt="Euston University Logo"
// //                 width={0}
// //                 height={0}
// //                 sizes="100vw"
// //                 style={{ width: "205.42px", height: "49.69px" }}
// //                 unoptimized
// //                 className="object-contain max-w-[150px] sm:max-w-full"
// //               />
// //             </Link>
// //           </div>

// //           <div className="hidden md:flex items-center gap-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.label}
// //                 href={link.href}
// //                 className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors duration-200"
// //               >
// //                 {link.label}
// //               </Link>
// //             ))}
// //           </div>

// //           <div className="flex items-center gap-[32px]">
// //             <div className="flex-shrink-0">
// //               <a href="#" aria-label="Search">
// //                 <Image
// //                   src="/search-icon.png"
// //                   alt="Search"
// //                   width={20}
// //                   height={20}
// //                   className="object-contain"
// //                 />
// //               </a>
// //             </div>

// //             <div className="md:hidden">
// //               <Sheet open={isOpen} onOpenChange={setIsOpen}>
// //                 <SheetTrigger asChild>
// //                   <button
// //                     className="relative z-50 flex flex-col items-center justify-center w-10 h-10"
// //                     onClick={toggleMenu}
// //                     aria-label="Toggle menu"
// //                   >
// //                     {isOpen ? (
// //                       <X className="h-6 w-6 text-white" />
// //                     ) : (
// //                       <Menu className="h-6 w-6 text-white" />
// //                     )}
// //                   </button>
// //                 </SheetTrigger>
// //                 <SheetContent
// //                   side="right"
// //                   className="bg-[#890c25] text-white w-[280px] sm:w-[320px] p-6 overflow-y-auto"
// //                 >
// //                   <div className="flex flex-col min-h-full">
// //                     {/* Logo at Top Center */}
// //                     <div className="flex justify-center mb-6">
// //                       <Link href="/" passHref>
// //                         <Image
// //                           src="/logo.png"
// //                           alt="Euston University Logo"
// //                           width={0}
// //                           height={0}
// //                           sizes="100vw"
// //                           style={{ width: "150px", height: "36.35px" }}
// //                           unoptimized
// //                           className="object-contain"
// //                         />
// //                       </Link>
// //                     </div>

// //                     {/* Navigation Links */}
// //                     <nav className="flex flex-col gap-4">
// //                       {navLinks.map((link) => (
// //                         <Link
// //                           key={link.label}
// //                           href={link.href}
// //                           className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-2 py-1 hover:bg-[#a1122f]/50"
// //                           onClick={() => setIsOpen(false)}
// //                         >
// //                           {link.label}
// //                         </Link>
// //                       ))}
// //                     </nav>

// //                     {/* Contact Information */}
// //                     <div className="mt-8 border-t border-gray-400/50 pt-6">
// //                       <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
// //                         Contact Us
// //                       </h3>
// //                       <div className="mt-4 flex flex-col gap-3">
// //                         <a
// //                           href="tel:+1234567890"
// //                           className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
// //                         >
// //                           <Phone className="h-5 w-5" />
// //                           +1 (234) 567-890
// //                         </a>
// //                         <a
// //                           href="mailto:info@eustonuniversity.edu"
// //                           className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
// //                         >
// //                           <Mail className="h-5 w-5" />
// //                           info@eustonuniversity.edu
// //                         </a>
// //                       </div>
// //                     </div>

// //                     {/* Social Media Links */}
// //                     <div className="mt-6 border-t border-gray-400/50 pt-6 pb-6">
// //                       <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
// //                         Follow Us
// //                       </h3>
// //                       <div className="mt-4 flex gap-4">
// //                         {socialLinks.map((link) => (
// //                           <a
// //                             key={link.label}
// //                             href={link.href}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             className="hover:text-gray-200 transition-colors duration-200"
// //                             aria-label={link.label}
// //                           >
// //                             {link.icon}
// //                           </a>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </SheetContent>
// //               </Sheet>
// //             </div>
// //           </div>
// //         </div>
// //       </MaxWidthWrapper>
// //     </div>
// //   );
// // };

// // export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Search,
} from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/admissions", label: "Admissions" },
    { href: "/faculties", label: "Faculty" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#890c25] py-[15px]">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" passHref>
                <Image
                  src="/logo.png"
                  alt="Euston University Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "205.42px", height: "49.69px" }}
                  unoptimized
                  className="object-contain max-w-[150px] sm:max-w-full"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-[32px]">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex-shrink-0"
                aria-label="Search"
              >
                <Image
                  src="/search-icon.png"
                  alt="Search"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>

              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <button
                      className="relative z-50 flex flex-col items-center justify-center w-10 h-10"
                      onClick={toggleMenu}
                      aria-label="Toggle menu"
                    >
                      {isOpen ? (
                        <X className="h-6 w-6 text-white" />
                      ) : (
                        <Menu className="h-6 w-6 text-white" />
                      )}
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="bg-[#890c25] text-white w-[280px] sm:w-[320px] p-6 overflow-y-auto"
                  >
                    <div className="flex flex-col min-h-full">
                      {/* Logo at Top Center */}
                      <div className="flex justify-center mb-6">
                        <Link href="/" passHref>
                          <Image
                            src="/logo.png"
                            alt="Euston University Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "150px", height: "36.35px" }}
                            unoptimized
                            className="object-contain"
                          />
                        </Link>
                      </div>

                      {/* Navigation Links */}
                      <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-2 py-1 hover:bg-[#a1122f]/50"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>

                      {/* Contact Information */}
                      <div className="mt-8 border-t border-gray-400/50 pt-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
                          Contact Us
                        </h3>
                        <div className="mt-4 flex flex-col gap-3">
                          <a
                            href="tel:+1234567890"
                            className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
                          >
                            <Phone className="h-5 w-5" />
                            +1 (234) 567-890
                          </a>
                          <a
                            href="mailto:info@eustonuniversity.edu"
                            className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
                          >
                            <Mail className="h-5 w-5" />
                            info@eustonuniversity.edu
                          </a>
                        </div>
                      </div>

                      {/* Social Media Links */}
                      <div className="mt-6 border-t border-gray-400/50 pt-6 pb-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
                          Follow Us
                        </h3>
                        <div className="mt-4 flex gap-4">
                          {socialLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-gray-200 transition-colors duration-200"
                              aria-label={link.label}
                            >
                              {link.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#252424] h-screen w-full flex items-center justify-center"
        >
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 text-white p-2 aspect-square rounded-full border border-[#cccccc]"
            aria-label="Close search"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-2xl px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-4 pr-16 pl-6 text-white bg-transparent border border-[#cccccc] rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
                autoFocus
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white" />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;

// "use client";

// import { motion, Variants } from "framer-motion";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useState, useEffect, useRef } from "react";
// import { Search, X, Menu, ChevronDown, ChevronUp } from "lucide-react";
// import Image from "next/image";
// import MaxWidthWrapper from "./max-width-wrapper";
// import { useRouter } from "next/navigation";

// const MotionNav = motion.nav;

// interface CourseCategory {
//   title: string;
//   href: string;
// }

// interface MenuSection {
//   heading: string;
//   links: { label: string; href: string }[];
// }

// const coursesCategory: CourseCategory[] = [
//   {
//     title: "Facultiy of Allied Health Sciences",
//     href: "/faculties/faculty-of-allied-health-sciences",
//   },
//   {
//     title: "Faculty of Natural and Applied Sciences",
//     href: "/faculties/faculty-of-natural-and-applied-sciences",
//   },
//   { title: "Faculty of Computing", href: "/faculties/faculty-of-computing" },
//   {
//     title: "Faculty of Arts, Management and Social Sciences",
//     href: "/faculties/faculty-of-arts-management-and-social-sciences",
//   },
// ];

// const popularCourses: MenuSection = {
//   heading: "Popular Programmes",
//   links: [
//     { label: "BSc Computer Science", href: "/" },
//     { label: "BSc Data Science", href: "/" },
//     { label: "BSc Cybersecurity", href: "/" },
//     { label: "BSc Artificial Intelligence", href: "/" },
//     { label: "BSc Accounting", href: "/" },
//     { label: "BSc Business Administration", href: "/" },
//     { label: "BNSc Nursing Science", href: "/" },
//     { label: "BSc Microbiology", href: "/" },
//   ],
// };

// const gustoTrainings: MenuSection = {
//   heading: "Support & Resources",
//   links: [
//     {
//       label: "Library",
//       href: `/courses?category=${encodeURIComponent("Human Resource")}`,
//     },
//     {
//       label: "Apply for Admission",
//       href: `/`,
//     },
//     {
//       label: "Housing",
//       href: `/`,
//     },
//     {
//       label: "Financial Aid",
//       href: `/`,
//     },

//     {
//       label: "Campus Safety",
//       href: `/courses?category=${encodeURIComponent("First Aid Training")}`,
//     },
//     {
//       label: "Pay My Tuition",
//       href: `/courses?category=${encodeURIComponent("Lean & Six Sigma")}`,
//     },
//     {
//       label: "Office Chancellor",
//       href: `/courses?category=${encodeURIComponent("Quality Assurance")}`,
//     },
//   ],
// };

// const Navbar = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState<boolean>(false);
//   const [isLearnOpen, setIsLearnOpen] = useState<boolean>(false);
//   const [openAccordion, setOpenAccordion] = useState<string | null>(null);
//   const [arrowPosition, setArrowPosition] = useState<number>(0);
//   const [megaMenuTop, setMegaMenuTop] = useState<number>(0);
//   const [searchTerm, setSearchTerm] = useState<string>("");

//   const megaMenuRef = useRef<HTMLDivElement>(null);
//   const learnButtonRef = useRef<HTMLButtonElement>(null);
//   const navRef = useRef<HTMLElement>(null);
//   const mobileMenuRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();

//   const TOPBAR_HEIGHT = 0;
//   const recruitmentUrl =
//     "https://docs.google.com/forms/d/e/1FAIpQLScZbeb5WaywS27oMHj6n6vLBBUapSitZup1vUocw3M4kuD24g/viewform?usp=header";
//   const iconVariants: Variants = {
//     closed: { rotate: 0, transition: { duration: 0.3, ease: "easeInOut" } },
//     open: { rotate: 90, transition: { duration: 0.3, ease: "easeInOut" } },
//   };

//   const mobileMenuVariants: Variants = {
//     closed: {
//       opacity: 0,
//       y: -20,
//       pointerEvents: "none" as const,
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//     open: {
//       opacity: 1,
//       y: 0,
//       pointerEvents: "auto" as const,
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//   };

//   const megaMenuVariants: Variants = {
//     closed: {
//       opacity: 0,
//       y: -10,
//       height: 0,
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//     open: {
//       opacity: 1,
//       y: 0,
//       height: "auto",
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//   };

//   const toggleLearn = () => {
//     setIsLearnOpen(!isLearnOpen);
//     if (!isLearnOpen) setOpenAccordion(null);
//   };

//   const toggleAccordion = (section: string) => {
//     setOpenAccordion(openAccordion === section ? null : section);
//   };

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       router.push(`/courses?search=${encodeURIComponent(searchTerm.trim())}`);
//       setSearchTerm("");
//       setIsSearchOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (learnButtonRef.current && isMegaMenuOpen) {
//       const rect = learnButtonRef.current.getBoundingClientRect();
//       const navRect = navRef.current?.getBoundingClientRect();
//       if (navRect) {
//         const position = rect.left + rect.width / 2 - navRect.left;
//         setArrowPosition(position);
//       }
//     }
//   }, [isMegaMenuOpen]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const footer = document.querySelector("footer");
//       if (footer?.contains(event.target as Node)) {
//         return;
//       }
//       if (
//         megaMenuRef.current &&
//         !megaMenuRef.current.contains(event.target as Node) &&
//         !learnButtonRef.current?.contains(event.target as Node)
//       ) {
//         setIsMegaMenuOpen(false);
//       }
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target as Node) &&
//         !navRef.current?.contains(event.target as Node)
//       ) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const updateMegaMenuPosition = () => {
//       if (navRef.current) {
//         const navRect = navRef.current.getBoundingClientRect();
//         const isTopbarVisible = window.scrollY < TOPBAR_HEIGHT;
//         const navbarHeight = navRect.height - 18;
//         const topPosition = isTopbarVisible
//           ? navbarHeight + TOPBAR_HEIGHT
//           : navbarHeight;
//         setMegaMenuTop(topPosition);
//       }
//     };
//     let timeout: NodeJS.Timeout;
//     const debouncedUpdate = () => {
//       clearTimeout(timeout);
//       timeout = setTimeout(updateMegaMenuPosition, 50);
//     };
//     window.addEventListener("scroll", debouncedUpdate);
//     updateMegaMenuPosition();
//     return () => {
//       window.removeEventListener("scroll", debouncedUpdate);
//       clearTimeout(timeout);
//     };
//   }, [isMegaMenuOpen]);

//   const handleLearnClick = () => {
//     setIsMegaMenuOpen(!isMegaMenuOpen);
//   };

//   return (
//     <MotionNav
//       ref={navRef}
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="shadow mt-0  sticky top-0 z-50 w-full bg-[#890c25] text-[#1e1e1e] py-[0.8rem]"
//     >
//       <MaxWidthWrapper>
//         <div className="w-full flex items-center justify-between">
//           {!isSearchOpen ? (
//             <>
//               <div className="flex-shrink-0">
//                 <Link href="/" passHref>
//                   <Image
//                     src="/logo.png"
//                     alt="Euston University Logo"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{ width: "205.42px", height: "49.69px" }}
//                     unoptimized
//                     className="object-contain max-w-[150px] sm:max-w-full"
//                   />
//                 </Link>
//               </div>
//               <div className=" hidden md:flex items-center gap-6">
//                 <Link
//                   href="/"
//                   className="text-white text-[15px] leading-[15px] hover:text-safetyYellow transition-colors duration-200"
//                 >
//                   Home
//                 </Link>
//                 <div className="relative" ref={megaMenuRef}>
//                   <button
//                     ref={learnButtonRef}
//                     onClick={handleLearnClick}
//                     className="text-white text-[15px] leading-[15px] flex items-center gap-1 hover:text-safetyYellow transition-colors duration-200 z-60"
//                     style={{ pointerEvents: "auto" }}
//                   >
//                     Academics
//                     <motion.div
//                       animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <ChevronDown className="h-4 w-4" />
//                     </motion.div>
//                   </button>
//                   <motion.div
//                     variants={megaMenuVariants}
//                     initial="closed"
//                     animate={isMegaMenuOpen ? "open" : "closed"}
//                     className="fixed left-0 mt-6 pt-3 pb-6 border border-gray-300 right-0 bg-white shadow-lg rounded overflow-x-hidden z-30 w-[85%] mega-menu"
//                     style={{
//                       top: `${megaMenuTop}px`,
//                       marginLeft: "auto",
//                       marginRight: "auto",
//                       transition: "top 0.3 ease",
//                     }}
//                   >
//                     <div
//                       className="absolute top-[-10px] border-[10px] border-transparent border-b-white"
//                       style={{
//                         left: `${arrowPosition}px`,
//                         transform: "translateX(-50%)",
//                       }}
//                     ></div>
//                     <div className="max-w-7xl mx-auto grid grid-cols-3 p-8 gap-6">
//                       <div>
//                         <h3 className="font-semibold text-[#6d6d6d] border-b pb-1 border-[#cccccc] text-lg mb-6">
//                           Faculties
//                         </h3>
//                         <ul className="space-y-3">
//                           {coursesCategory.map((category) => (
//                             <li
//                               key={category.title}
//                               className="flex items-center gap-2"
//                             >
//                               <Link
//                                 href={category.href}
//                                 className="text-[#890c25] text-[15px]  font-semibold hover:underline transition-colors duration-200"
//                               >
//                                 {category.title}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-[#6d6d6d] pb-1 border-b border-[#cccccc] text-lg mb-6">
//                           {popularCourses.heading}
//                         </h3>
//                         <ul className="space-y-3">
//                           {popularCourses.links.map((course) => (
//                             <li key={course.label}>
//                               <Link
//                                 href={course.href}
//                                 className="text-[#890c25] text-[15px]  font-semibold hover:bg-[#890c25] hover:text-white transition-colors duration-200"
//                               >
//                                 {course.label}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-[#6d6d6d] pb-1 border-b border-[#cccccc] text-lg mb-6">
//                           {gustoTrainings.heading}
//                         </h3>
//                         <ul className="space-y-3">
//                           {gustoTrainings.links.map((training) => (
//                             <li key={training.label}>
//                               <Link
//                                 href={training.href}
//                                 className="text-[#890c25] text-[15px]  font-semibold hover:bg-[#890c25] hover:text-white transition-colors duration-200"
//                               >
//                                 {training.label}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//                 <Link
//                   href="/faculties"
//                   className="text-white text-[15px] leading-[15px] hover:text-safetyYellow transition-colors duration-200"
//                 >
//                   Faculty
//                 </Link>
//                 {/* <Link
//                   href={`/courses?category=${encodeURIComponent(
//                     "Individuals"
//                   )}`}
//                   className="text-white hover:text-safetyYellow transition-colors duration-200"
//                 >
//                   About
//                 </Link> */}
//                 <Link
//                   href="/about"
//                   className="text-white text-[15px] leading-[15px] hover:text-safetyYellow transition-colors duration-200"
//                 >
//                   About
//                 </Link>
//                 {/* <Link
//                   href="/about-us"
//                   className="hover:text-safetyYellow transition-colors duration-200"
//                 >
//                   Recruitment
//                 </Link> */}
//                 <Link
//                   href="/about"
//                   className="text-white text-[15px] leading-[15px] hover:text-safetyYellow transition-colors duration-200"
//                 >
//                   FAQ
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="text-white text-[15px] leading-[15px] hover:text-safetyYellow transition-colors duration-200"
//                 >
//                   News
//                 </Link>
//                 <button
//                   onClick={() => setIsSearchOpen(true)}
//                   className="text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
//                 >
//                   <Search color="#ffffff" className="h-5 w-5" />
//                 </button>

//                 <Button className="bg-[#ffffff] rounded-none text-[#191919] hover:text-white relative group overflow-hidden">
//                   <span className="relative z-10">Contact</span>
//                   <span className=" absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
//                 </Button>
//               </div>
//               <div className="md:hidden flex items-center gap-4">
//                 <Button
//                   variant="ghost"
//                   className="text-[#1e1e1e] group"
//                   onClick={() => setIsSearchOpen(true)}
//                 >
//                   <Search className="text-[#ffffff] group-hover:text-[#191919] h-5 w-5" />
//                 </Button>
//                   variant="ghost"
//                   className="p-2 group aspect-square hover:bg-gray-100 flex-shrink-0 transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 >
//                   <motion.div
//                     variants={iconVariants}
//                     initial="closed"
//                     animate={isMenuOpen ? "open" : "closed"}
//                   >
//                     {isMenuOpen ? (
//                       <X className="h-6 w-6 text-[#ffffff] group-hover:text-[#1e1e1e]" />
//                     ) : (
//                       <Menu className="h-6 w-6 text-[#ffffff] group-hover:text-[#1e1e1e]" />
//                     )}
//                   </motion.div>
//                 </Button>
//               </div>
//             </>
//           ) : (
//             <motion.form
//               onSubmit={handleSearchSubmit}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//               className="flex w-full items-center gap-4"
//             >
//               <Input
//                 placeholder="Search"
//                 className="flex-1 py-[1.1rem] bg-white text-safetyBlue focus-visible:!ring-[#ffffff] rounded focus-visible:!ring-0"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 autoFocus
//               />
//               <Button
//                 type="submit"
//                 variant="ghost"
//                 className="text-[#1e1e1e] bg-gray-100 hover:text-safetyYellow"
//               >
//                 <Search className="h-5 w-5" />
//               </Button>
//               <Button
//                 variant="ghost"
//                 onClick={() => {
//                   setIsSearchOpen(false);
//                   setSearchTerm("");
//                 }}
//                 className="text-[#1e1e1e] bg-gray-100 hover:text-safetyYellow"
//               >
//                 <X className="h-5 w-5" />
//               </Button>
//             </motion.form>
//           )}
//         </div>
//         <motion.div
//           ref={mobileMenuRef}
//           variants={mobileMenuVariants}
//           initial="closed"
//           animate={isMenuOpen ? "open" : "closed"}
//           className="fixed top-[4.5rem] left-0 right-0 md:hidden bg-white shadow-lg z-50 overflow-y-auto"
//           style={{
//             maxHeight: "calc(100vh - 4rem)",
//           }}
//         >
//           <div className="px-4 py-4 space-y-1">
//             <div className="flex flex-col">
//               <button
//                 onClick={toggleLearn}
//                 className="flex items-center justify-between w-full py-2 text-left focus:outline-none hover:text-safetyYellow transition-colors duration-200"
//                 aria-expanded={isLearnOpen}
//                 aria-controls="learn-content"
//               >
//                 <span className="text-[#1e1e1e] tracking-tight">Academics</span>
//                 <motion.div
//                   animate={{ rotate: isLearnOpen ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
//                 </motion.div>
//               </button>
//               <div
//                 id="learn-content"
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   isLearnOpen ? "max-h-[1000px] pt-2" : "max-h-0"
//                 }`}
//               >
//                 <div className="border border-gray-300 rounded-lg p-4 space-y-4">
//                   <div className="border-b border-gray-600/30">
//                     <button
//                       onClick={() => toggleAccordion("courseCategories")}
//                       className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
//                       aria-expanded={openAccordion === "courseCategories"}
//                       aria-controls="course-categories-content"
//                     >
//                       <span className="text-base font-semibold text-[#1e1e1e] tracking-tight">
//                         Faculties
//                       </span>
//                       {openAccordion === "courseCategories" ? (
//                         <ChevronUp className="h-5 w-5 text-[#1e1e1e]" />
//                       ) : (
//                         <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
//                       )}
//                     </button>
//                     <div
//                       id="course-categories-content"
//                       className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                         openAccordion === "courseCategories"
//                           ? "max-h-96 pb-4"
//                           : "max-h-0"
//                       }`}
//                     >
//                       <ul className="space-y-2">
//                         {coursesCategory.map((category) => (
//                           <li
//                             key={category.title}
//                             className="flex items-center gap-2"
//                           >
//                             {/* <Image
//                               src={category.icon}
//                               width={16}
//                               height={16}
//                               alt={`${category.title} icon`}
//                             /> */}
//                             <Link
//                               href={`/courses?category=${encodeURIComponent(
//                                 category.title
//                               )}`}
//                               className="text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200 text-sm block py-1"
//                               onClick={() => {
//                                 setIsMenuOpen(false);
//                                 setIsLearnOpen(false);
//                                 setOpenAccordion(null);
//                               }}
//                             >
//                               {category.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="border-b border-gray-600/30">
//                     <button
//                       onClick={() => toggleAccordion("popularCourses")}
//                       className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
//                       aria-expanded={openAccordion === "popularCourses"}
//                       aria-controls="popular-courses-content"
//                     >
//                       <span className="text-base font-semibold text-[#1e1e1e] tracking-tight">
//                         {popularCourses.heading}
//                       </span>
//                       {openAccordion === "popularCourses" ? (
//                         <ChevronUp className="h-5 w-5 text-[#1e1e1e]" />
//                       ) : (
//                         <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
//                       )}
//                     </button>
//                     <div
//                       id="popular-courses-content"
//                       className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                         openAccordion === "popularCourses"
//                           ? "max-h-96 pb-4"
//                           : "max-h-0"
//                       }`}
//                     >
//                       <ul className="space-y-2">
//                         {popularCourses.links.map((course) => (
//                           <li key={course.label}>
//                             <Link
//                               href={course.href}
//                               className="text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200 text-sm block py-1"
//                               onClick={() => {
//                                 setIsMenuOpen(false);
//                                 setIsLearnOpen(false);
//                                 setOpenAccordion(null);
//                               }}
//                             >
//                               {course.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="border-b border-gray-600/30 last:border-b-0">
//                     <button
//                       onClick={(e) => {
//                         e.preventDefault();
//                         e.stopPropagation();
//                         toggleAccordion("gustoTrainings");
//                       }}
//                       className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
//                       aria-expanded={openAccordion === "gustoTrainings"}
//                       aria-controls="gusto-trainings-content"
//                     >
//                       <span className="text-base font-semibold text-[#1e1e1e] tracking-tight">
//                         {gustoTrainings.heading}
//                       </span>
//                       {openAccordion === "gustoTrainings" ? (
//                         <ChevronUp className="h-5 w-5 text-[#1e1e1e]" />
//                       ) : (
//                         <ChevronDown className="h-5 w-5 text-[#1e1e1e]" />
//                       )}
//                     </button>
//                     <div
//                       id="gusto-trainings-content"
//                       className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                         openAccordion === "gustoTrainings"
//                           ? "max-h-96 pb-4"
//                           : "max-h-0"
//                       }`}
//                     >
//                       <ul className="space-y-2">
//                         {gustoTrainings.links.map((training) => (
//                           <li key={training.label}>
//                             <Link
//                               href={training.href}
//                               className="text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200 text-sm block py-1"
//                               onClick={() => {
//                                 setIsMenuOpen(false);
//                                 setIsLearnOpen(false);
//                                 setOpenAccordion(null);
//                               }}
//                             >
//                               {training.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-start space-y-1">
//               <Link
//                 href="/courses"
//                 className="py-2 text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Faculty
//               </Link>
//               <Link
//                 href={`/courses?category=${encodeURIComponent("Individuals")}`}
//                 className="py-2 text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/about-us"
//                 className="py-2 text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 FAQ
//               </Link>
//               <a
//                 href={recruitmentUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="py-2 text-[#1e1e1e] hover:text-safetyYellow transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 News
//               </a>

//               {/* <button className="inline-flex  gap-2 items-center relative text-center uppercase bg-[#890c25] h-[44px] px-12 py-2.5 text-[14px] text-[#ffffff] tracking-[2px] font-medium overflow-hidden group">
//                                     <span className="relative z-10">
//                                       {slides[currentSlide].primaryButton}
//                                     </span>
//                                     <span className=" absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
//                                     <ArrowRight className="w-4 h-4 text-white relative z-10" />
//                                   </button> */}

//               <Link
//                 className="w-full"
//                 href="/contact"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <Button
//                   size="lg"
//                   className="relative overflow-hidden group w-full mt-2 text-white rounded-none bg-[#890c25]"
//                 >
//                   <span className="relative z-10">Contact</span>
//                   <span className="absolute inset-0 bg-[#1A0C2D] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </MaxWidthWrapper>
//     </MotionNav>
//   );
// };

// export default Navbar;
