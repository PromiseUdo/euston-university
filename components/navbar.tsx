// "use client";

// import clsx from "clsx";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import MaxWidthWrapper from "./max-width-wrapper";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-[#890c25] py-[15px]">
//       <MaxWidthWrapper>
//         <div className=" flex items-center justify-between">
//           <div className="flex-shrink-0">
//             <Link href="/" passHref>
//               <Image
//                 src="/logo.png"
//                 alt="Euston University Logo"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{ width: "205.42px", height: "49.69px" }}
//                 unoptimized
//                 className="object-contain max-w-[150px] sm:max-w-full"
//               />
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               href="/"
//               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
//             >
//               Home
//             </Link>
//             <a
//               href="#"
//               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
//             >
//               Academics
//             </a>
//             <a
//               href="#"
//               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
//             >
//               Faculty{" "}
//             </a>
//             <Link
//               href="/about-us"
//               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
//             >
//               About Us
//             </Link>
//             <Link
//               href="/faqs"
//               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
//             >
//               FAQ
//             </Link>
//             <Link
//               href="/news-and-articles"
//               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
//             >
//               News
//             </Link>
//             <Link
//               href="/contact-us"
//               className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
//             >
//               Contact
//             </Link>
//           </div>

//           <div className="flex items-center gap-[32px]">
//             <div className="flex-shrink-0">
//               <a href="#" aria-label="Search">
//                 <Image
//                   src="/search-icon.png" // Replace with your search icon path
//                   alt="Search"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </a>
//             </div>

//             <div className="md:hidden">
//               <button
//                 className={clsx(
//                   "relative z-50 flex flex-col items-center justify-center w-10 h-10 group",
//                   isOpen === true && "hidden"
//                 )}
//                 onClick={toggleMenu}
//                 aria-label="Toggle menu"
//               >
//                 {/* Line 1 */}
//                 <motion.span
//                   className="block w-6 h-0.5 bg-[#ffffff] transition-transform"
//                   animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//                   transition={{ duration: 0.1 }}
//                 />
//                 {/* Line 2 */}
//                 <motion.span
//                   className="block w-6 h-0.5 bg-[#ffffff] mt-1.5 transition-transform"
//                   animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                 />
//                 {/* Line 3 */}
//                 <motion.span
//                   className="block w-6 h-0.5 bg-[#ffffff] mt-1.5 transition-transform"
//                   animate={
//                     isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }
//                   }
//                   transition={{ duration: 0.1 }}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default Navbar;

// "use client";

// import clsx from "clsx";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Menu,
//   X,
//   Phone,
//   Mail,
//   Instagram,
//   Twitter,
//   Facebook,
//   Linkedin,
// } from "lucide-react";
// import MaxWidthWrapper from "./max-width-wrapper";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "#", label: "Academics" },
//     { href: "#", label: "Faculty" },
//     { href: "/about-us", label: "About Us" },
//     { href: "/faqs", label: "FAQ" },
//     { href: "/news-and-articles", label: "News" },
//     { href: "/contact-us", label: "Contact" },
//   ];

//   const socialLinks = [
//     {
//       href: "https://instagram.com",
//       label: "Instagram",
//       icon: <Instagram className="h-5 w-5" />,
//     },
//     {
//       href: "https://twitter.com",
//       label: "Twitter",
//       icon: <Twitter className="h-5 w-5" />,
//     },
//     {
//       href: "https://facebook.com",
//       label: "Facebook",
//       icon: <Facebook className="h-5 w-5" />,
//     },
//     {
//       href: "https://linkedin.com",
//       label: "LinkedIn",
//       icon: <Linkedin className="h-5 w-5" />,
//     },
//   ];

//   return (
//     <div className="bg-[#890c25] py-[15px]">
//       <MaxWidthWrapper>
//         <div className="flex items-center justify-between">
//           <div className="flex-shrink-0">
//             <Link href="/" passHref>
//               <Image
//                 src="/logo.png"
//                 alt="Euston University Logo"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{ width: "205.42px", height: "49.69px" }}
//                 unoptimized
//                 className="object-contain max-w-[150px] sm:max-w-full"
//               />
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-[32px]">
//             <div className="flex-shrink-0">
//               <a href="#" aria-label="Search">
//                 <Image
//                   src="/search-icon.png"
//                   alt="Search"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </a>
//             </div>

//             <div className="md:hidden">
//               <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                 <SheetTrigger asChild>
//                   <button
//                     className="relative z-50 flex flex-col items-center justify-center w-10 h-10"
//                     onClick={toggleMenu}
//                     aria-label="Toggle menu"
//                   >
//                     {isOpen ? (
//                       <X className="h-6 w-6 text-white" />
//                     ) : (
//                       <Menu className="h-6 w-6 text-white" />
//                     )}
//                   </button>
//                 </SheetTrigger>
//                 <SheetContent
//                   side="right"
//                   className="bg-[#ffffff] text-[#292929] w-[280px] sm:w-[320px] p-6"
//                 >
//                   <div className="flex flex-col h-full">
//                     {/* Navigation Links */}
//                     <nav className="flex flex-col gap-4 mt-8">
//                       {navLinks.map((link) => (
//                         <Link
//                           key={link.label}
//                           href={link.href}
//                           className="text-lg font-medium hover:text-gray-300 transition-colors"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {link.label}
//                         </Link>
//                       ))}
//                     </nav>

//                     {/* Contact Information */}
//                     <div className="mt-8 border-t border-gray-300 pt-6">
//                       <h3 className="text-sm font-semibold uppercase tracking-wide">
//                         Contact Us
//                       </h3>
//                       <div className="mt-4 flex flex-col gap-3">
//                         <a
//                           href="tel:+1234567890"
//                           className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
//                         >
//                           <Phone className="h-5 w-5" />
//                           +1 (234) 567-890
//                         </a>
//                         <a
//                           href="mailto:info@eustonuniversity.edu"
//                           className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
//                         >
//                           <Mail className="h-5 w-5" />
//                           info@eustonuniversity.edu
//                         </a>
//                       </div>
//                     </div>

//                     {/* Social Media Links */}
//                     <div className="mt-6 border-t border-gray-300 pt-6">
//                       <h3 className="text-sm font-semibold uppercase tracking-wide">
//                         Follow Us
//                       </h3>
//                       <div className="mt-4 flex gap-4">
//                         {socialLinks.map((link) => (
//                           <a
//                             key={link.label}
//                             href={link.href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-gray-300 transition-colors"
//                             aria-label={link.label}
//                           >
//                             {link.icon}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </SheetContent>
//               </Sheet>
//             </div>
//           </div>
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default Navbar;

// "use client";

// import clsx from "clsx";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Menu,
//   X,
//   Phone,
//   Mail,
//   Instagram,
//   Twitter,
//   Facebook,
//   Linkedin,
// } from "lucide-react";
// import MaxWidthWrapper from "./max-width-wrapper";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/", label: "Academics" },
//     { href: "/faculties", label: "Faculty" },
//     { href: "/", label: "About Us" },
//     { href: "/", label: "FAQ" },
//     { href: "/blogs", label: "Blogs" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const socialLinks = [
//     {
//       href: "https://instagram.com",
//       label: "Instagram",
//       icon: <Instagram className="h-5 w-5" />,
//     },
//     {
//       href: "https://twitter.com",
//       label: "Twitter",
//       icon: <Twitter className="h-5 w-5" />,
//     },
//     {
//       href: "https://facebook.com",
//       label: "Facebook",
//       icon: <Facebook className="h-5 w-5" />,
//     },
//     {
//       href: "https://linkedin.com",
//       label: "LinkedIn",
//       icon: <Linkedin className="h-5 w-5" />,
//     },
//   ];

//   return (
//     <div className="bg-[#890c25] py-[15px]">
//       <MaxWidthWrapper>
//         <div className="flex items-center justify-between">
//           <div className="flex-shrink-0">
//             <Link href="/" passHref>
//               <Image
//                 src="/logo.png"
//                 alt="Euston University Logo"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{ width: "205.42px", height: "49.69px" }}
//                 unoptimized
//                 className="object-contain max-w-[150px] sm:max-w-full"
//               />
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors duration-200"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-[32px]">
//             <div className="flex-shrink-0">
//               <a href="#" aria-label="Search">
//                 <Image
//                   src="/search-icon.png"
//                   alt="Search"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </a>
//             </div>

//             <div className="md:hidden">
//               <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                 <SheetTrigger asChild>
//                   <button
//                     className="relative z-50 flex flex-col items-center justify-center w-10 h-10"
//                     onClick={toggleMenu}
//                     aria-label="Toggle menu"
//                   >
//                     {isOpen ? (
//                       <X className="h-6 w-6 text-white" />
//                     ) : (
//                       <Menu className="h-6 w-6 text-white" />
//                     )}
//                   </button>
//                 </SheetTrigger>
//                 <SheetContent
//                   side="right"
//                   className="bg-[#890c25] text-white w-[280px] sm:w-[320px] p-6 overflow-y-auto"
//                 >
//                   <div className="flex flex-col min-h-full">
//                     {/* Logo at Top Center */}
//                     <div className="flex justify-center mb-6">
//                       <Link href="/" passHref>
//                         <Image
//                           src="/logo.png"
//                           alt="Euston University Logo"
//                           width={0}
//                           height={0}
//                           sizes="100vw"
//                           style={{ width: "150px", height: "36.35px" }}
//                           unoptimized
//                           className="object-contain"
//                         />
//                       </Link>
//                     </div>

//                     {/* Navigation Links */}
//                     <nav className="flex flex-col gap-4">
//                       {navLinks.map((link) => (
//                         <Link
//                           key={link.label}
//                           href={link.href}
//                           className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-2 py-1 hover:bg-[#a1122f]/50"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {link.label}
//                         </Link>
//                       ))}
//                     </nav>

//                     {/* Contact Information */}
//                     <div className="mt-8 border-t border-gray-400/50 pt-6">
//                       <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
//                         Contact Us
//                       </h3>
//                       <div className="mt-4 flex flex-col gap-3">
//                         <a
//                           href="tel:+1234567890"
//                           className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                         >
//                           <Phone className="h-5 w-5" />
//                           +1 (234) 567-890
//                         </a>
//                         <a
//                           href="mailto:info@eustonuniversity.edu"
//                           className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                         >
//                           <Mail className="h-5 w-5" />
//                           info@eustonuniversity.edu
//                         </a>
//                       </div>
//                     </div>

//                     {/* Social Media Links */}
//                     <div className="mt-6 border-t border-gray-400/50 pt-6 pb-6">
//                       <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
//                         Follow Us
//                       </h3>
//                       <div className="mt-4 flex gap-4">
//                         {socialLinks.map((link) => (
//                           <a
//                             key={link.label}
//                             href={link.href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-gray-200 transition-colors duration-200"
//                             aria-label={link.label}
//                           >
//                             {link.icon}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </SheetContent>
//               </Sheet>
//             </div>
//           </div>
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default Navbar;

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
} from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "Academics" },
    { href: "/faculties", label: "Faculty" },
    { href: "/", label: "About Us" },
    { href: "/", label: "FAQ" },
    { href: "/blogs", label: "News" },
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
            <div className="flex-shrink-0">
              <a href="#" aria-label="Search">
                <Image
                  src="/search-icon.png"
                  alt="Search"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            </div>

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
  );
};

export default Navbar;
