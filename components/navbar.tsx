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

// "use client";

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
//   Search,
// } from "lucide-react";
// import MaxWidthWrapper from "./max-width-wrapper";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/", label: "Portal" },
//     { href: "/admissions", label: "Admissions" },
//     { href: "/faculties", label: "Faculty" },
//     { href: "/about", label: "About Us" },
//     { href: "/faq", label: "FAQ" },
//     { href: "/news", label: "News" },
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
//     <>
//       <div className="fixed top-0 left-0 right-0 z-50 bg-[#890c25] py-[15px]">
//         <MaxWidthWrapper>
//           <div className="flex items-center justify-between">
//             <div className="flex-shrink-0">
//               <Link href="/" passHref>
//                 <Image
//                   src="/logo.png"
//                   alt="Euston University Logo"
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   style={{ width: "205.42px", height: "49.69px" }}
//                   unoptimized
//                   className="object-contain max-w-[150px] sm:max-w-full"
//                 />
//               </Link>
//             </div>

//             <div className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="font-medium text-white text-[15px] leading-[15px] hover:text-gray-300 transition-colors duration-200"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             <div className="flex items-center gap-[32px]">
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="flex-shrink-0"
//                 aria-label="Search"
//               >
//                 <Image
//                   src="/search-icon.png"
//                   alt="Search"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </button>

//               <div className="md:hidden">
//                 <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                   <SheetTrigger asChild>
//                     <button
//                       className="relative z-50 flex flex-col items-center justify-center w-10 h-10"
//                       onClick={toggleMenu}
//                       aria-label="Toggle menu"
//                     >
//                       {isOpen ? (
//                         <X className="h-6 w-6 text-white" />
//                       ) : (
//                         <Menu className="h-6 w-6 text-white" />
//                       )}
//                     </button>
//                   </SheetTrigger>
//                   <SheetContent
//                     side="right"
//                     className="bg-[#890c25] text-white w-[280px] sm:w-[320px] p-6 overflow-y-auto"
//                   >
//                     <div className="flex flex-col min-h-full">
//                       {/* Logo at Top Center */}
//                       <div className="flex justify-center mb-6">
//                         <Link href="/" passHref>
//                           <Image
//                             src="/logo.png"
//                             alt="Euston University Logo"
//                             width={0}
//                             height={0}
//                             sizes="100vw"
//                             style={{ width: "150px", height: "36.35px" }}
//                             unoptimized
//                             className="object-contain"
//                           />
//                         </Link>
//                       </div>

//                       {/* Navigation Links */}
//                       <nav className="flex flex-col gap-4">
//                         {navLinks.map((link) => (
//                           <Link
//                             key={link.label}
//                             href={link.href}
//                             className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-2 py-1 hover:bg-[#a1122f]/50"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {link.label}
//                           </Link>
//                         ))}
//                       </nav>

//                       {/* Contact Information */}
//                       <div className="mt-8 border-t border-gray-400/50 pt-6">
//                         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
//                           Contact Us
//                         </h3>
//                         <div className="mt-4 flex flex-col gap-3">
//                           <a
//                             href="tel:+1234567890"
//                             className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                           >
//                             <Phone className="h-5 w-5" />
//                             +1 (234) 567-890
//                           </a>
//                           <a
//                             href="mailto:info@eustonuniversity.edu"
//                             className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                           >
//                             <Mail className="h-5 w-5" />
//                             info@eustonuniversity.edu
//                           </a>
//                         </div>
//                       </div>

//                       {/* Social Media Links */}
//                       <div className="mt-6 border-t border-gray-400/50 pt-6 pb-6">
//                         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
//                           Follow Us
//                         </h3>
//                         <div className="mt-4 flex gap-4">
//                           {socialLinks.map((link) => (
//                             <a
//                               key={link.label}
//                               href={link.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="hover:text-gray-200 transition-colors duration-200"
//                               aria-label={link.label}
//                             >
//                               {link.icon}
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </SheetContent>
//                 </Sheet>
//               </div>
//             </div>
//           </div>
//         </MaxWidthWrapper>
//       </div>

//       {isSearchOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-[#252424] h-screen w-full flex items-center justify-center"
//         >
//           <button
//             onClick={() => setIsSearchOpen(false)}
//             className="absolute top-6 right-6 text-white p-1.5 aspect-square rounded-full border border-[#cccccc]"
//             aria-label="Close search"
//           >
//             <X className="h-4 w-4" />
//           </button>
//           <div className="relative w-full max-w-2xl px-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full py-4 pr-16 pl-6 text-white bg-transparent border border-[#cccccc] rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
//                 autoFocus
//               />
//               <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white" />
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// };

// export default Navbar;

// view new

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect } from "react";
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
//   Search,
// } from "lucide-react";
// import MaxWidthWrapper from "./max-width-wrapper";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   // Check if current route is /home2
//   const isHome2 = pathname === "/";

//   // Handle scroll effect
//   useEffect(() => {
//     if (!isHome2) {
//       setHasScrolled(true); // Always show solid background for non-home2 routes
//       return;
//     }

//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setHasScrolled(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHome2]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/", label: "Portal" },
//     { href: "/admissions", label: "Admissions" },
//     { href: "/faculties", label: "Faculty" },
//     { href: "/about", label: "About Us" },
//     { href: "/faq", label: "FAQ" },
//     { href: "/news", label: "News" },
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
//     <>
//       {/* Navbar */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 py-[15px] transition-all duration-300 ${
//           hasScrolled ? "bg-[#890c25]" : "bg-transparent"
//         }`}
//       >
//         <MaxWidthWrapper>
//           <div className="flex items-center justify-between">
//             <div className="flex-shrink-0">
//               <Link href="/" passHref>
//                 <Image
//                   src="/logo.png"
//                   alt="Euston University Logo"
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   style={{ width: "205.42px", height: "49.69px" }}
//                   unoptimized
//                   className="object-contain max-w-[150px] sm:max-w-full"
//                 />
//               </Link>
//             </div>

//             <div className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="font-medium text-[15px] leading-[15px] text-white hover:text-gray-300 transition-colors duration-200"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             <div className="flex items-center gap-[32px]">
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="flex-shrink-0"
//                 aria-label="Search"
//               >
//                 <Image
//                   src="/search-icon.png"
//                   alt="Search"
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//               </button>

//               <div className="md:hidden">
//                 <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                   <SheetTrigger asChild>
//                     <button
//                       className="relative z-50 flex flex-col items-center justify-center w-10 h-10"
//                       onClick={toggleMenu}
//                       aria-label="Toggle menu"
//                     >
//                       {isOpen ? (
//                         <X className="h-6 w-6 text-white" />
//                       ) : (
//                         <Menu className="h-6 w-6 text-white" />
//                       )}
//                     </button>
//                   </SheetTrigger>
//                   <SheetContent
//                     side="right"
//                     className="bg-[#890c25] text-white w-[280px] sm:w-[320px] p-6 overflow-y-auto"
//                   >
//                     <div className="flex flex-col min-h-full">
//                       <div className="flex justify-center mb-6">
//                         <Link href="/" passHref>
//                           <Image
//                             src="/logo.png"
//                             alt="Euston University Logo"
//                             width={0}
//                             height={0}
//                             sizes="100vw"
//                             style={{ width: "150px", height: "36.35px" }}
//                             unoptimized
//                             className="object-contain"
//                           />
//                         </Link>
//                       </div>

//                       <nav className="flex flex-col gap-4">
//                         {navLinks.map((link) => (
//                           <Link
//                             key={link.label}
//                             href={link.href}
//                             className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-2 py-1 hover:bg-[#a1122f]/50"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {link.label}
//                           </Link>
//                         ))}
//                       </nav>

//                       <div className="mt-8 border-t border-gray-400/50 pt-6">
//                         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
//                           Contact Us
//                         </h3>
//                         <div className="mt-4 flex flex-col gap-3">
//                           <a
//                             href="tel:+1234567890"
//                             className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                           >
//                             <Phone className="h-5 w-5" />
//                             +1 (234) 567-890
//                           </a>
//                           <a
//                             href="mailto:info@eustonuniversity.edu"
//                             className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                           >
//                             <Mail className="h-5 w-5" />
//                             info@eustonuniversity.edu
//                           </a>
//                         </div>
//                       </div>

//                       <div className="mt-6 border-t border-gray-400/50 pt-6 pb-6">
//                         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100">
//                           Follow Us
//                         </h3>
//                         <div className="mt-4 flex gap-4">
//                           {socialLinks.map((link) => (
//                             <a
//                               key={link.label}
//                               href={link.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="hover:text-gray-200 transition-colors duration-200"
//                               aria-label={link.label}
//                             >
//                               {link.icon}
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </SheetContent>
//                 </Sheet>
//               </div>
//             </div>
//           </div>
//         </MaxWidthWrapper>
//       </div>

//       {/* Search Modal */}
//       <AnimatePresence>
//         {isSearchOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-[#252424] h-screen w-full flex items-center justify-center"
//           >
//             <button
//               onClick={() => setIsSearchOpen(false)}
//               className="absolute top-6 right-6 text-white p-1.5 aspect-square rounded-full border border-[#cccccc]"
//               aria-label="Close search"
//             >
//               <X className="h-4 w-4" />
//             </button>
//             <div className="relative w-full max-w-2xl px-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full py-4 pr-16 pl-6 text-white bg-transparent border border-[#cccccc] rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
//                   autoFocus
//                 />
//                 <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white" />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;

// with dropdown

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect, useRef } from "react";
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
//   Search,
//   ChevronDown,
// } from "lucide-react";
// import MaxWidthWrapper from "./max-width-wrapper";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Check if current route is home
//   const isHome = pathname === "/";

//   // Handle scroll effect
//   useEffect(() => {
//     if (!isHome) {
//       setHasScrolled(true);
//       return;
//     }

//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setHasScrolled(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHome]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setAboutOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleAbout = () => setAboutOpen(!aboutOpen);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/portal", label: "Portal" },
//     { href: "/admissions", label: "Admissions" },
//     { href: "/faculties", label: "Faculty" },
//     { href: "/news", label: "News" },
//     { href: "/contact", label: "Contact" },
//     { href: "/faq", label: "FAQ" },
//   ];

//   const aboutLinks = [
//     { href: "/about", label: "About Us" },
//     { href: "/our-story", label: "Our Story" },
//     { href: "/why-choose-us", label: "Why Choose Us" },
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
//     <>
//       {/* Navbar */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
//           hasScrolled ? "bg-[#890c25] shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <MaxWidthWrapper>
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/" passHref>
//                 <Image
//                   src="/logo.png"
//                   alt="Euston University Logo"
//                   width={205}
//                   height={50}
//                   className="object-contain w-auto h-12"
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-6">
//               {navLinks.slice(0, 4).map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
//                 >
//                   {link.label}
//                 </Link>
//               ))}

//               {/* About Us Dropdown - Positioned in original location */}
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={toggleAbout}
//                   className="flex items-center gap-1 font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
//                 >
//                   About Us
//                   <motion.span
//                     animate={{ rotate: aboutOpen ? 180 : 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <ChevronDown className="h-4 w-4" />
//                   </motion.span>
//                 </button>

//                 <AnimatePresence>
//                   {aboutOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-full left-0 mt-2 w-48 bg-white  shadow-xl z-50 overflow-hidden"
//                     >
//                       {aboutLinks.map((link) => (
//                         <Link
//                           key={link.label}
//                           href={link.href}
//                           className="block px-4 py-2 text-sm text-gray-800 hover:text-[#890c25] hover:bg-gray-100 transition-colors duration-200"
//                           onClick={() => setAboutOpen(false)}
//                         >
//                           {link.label}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {navLinks.slice(4).map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Right Side (Search + Mobile Menu) */}
//             <div className="flex items-center gap-6">
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="flex-shrink-0"
//                 aria-label="Search"
//               >
//                 <Search className="h-5 w-5 text-white" />
//               </button>

//               {/* Mobile Menu Button */}
//               <div className="md:hidden">
//                 <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                   <SheetTrigger asChild>
//                     <button
//                       className="relative z-50 flex items-center justify-center w-10 h-10"
//                       onClick={toggleMenu}
//                       aria-label="Toggle menu"
//                     >
//                       {isOpen ? (
//                         <X className="h-6 w-6 text-white" />
//                       ) : (
//                         <Menu className="h-6 w-6 text-white" />
//                       )}
//                     </button>
//                   </SheetTrigger>
//                   <SheetContent
//                     side="right"
//                     className="bg-[#890c25] text-white w-full sm:w-96 p-6 overflow-y-auto"
//                   >
//                     <div className="flex flex-col h-full">
//                       <div className="flex justify-center mb-8">
//                         <Link href="/" passHref>
//                           <Image
//                             src="/logo.png"
//                             alt="Euston University Logo"
//                             width={150}
//                             height={36}
//                             className="object-contain"
//                           />
//                         </Link>
//                       </div>

//                       <nav className="flex-1 flex flex-col gap-2">
//                         {navLinks.map((link) => (
//                           <Link
//                             key={link.label}
//                             href={link.href}
//                             className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {link.label}
//                           </Link>
//                         ))}

//                         {/* Mobile About Dropdown */}
//                         <div className="mt-2">
//                           <button
//                             onClick={toggleAbout}
//                             className="w-full flex items-center justify-between text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-4 py-3 hover:bg-[#a1122f]/50"
//                           >
//                             About Us
//                             <motion.span
//                               animate={{ rotate: aboutOpen ? 180 : 0 }}
//                               transition={{ duration: 0.2 }}
//                             >
//                               <ChevronDown className="h-5 w-5" />
//                             </motion.span>
//                           </button>

//                           <AnimatePresence>
//                             {aboutOpen && (
//                               <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: "auto" }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 transition={{ duration: 0.2 }}
//                                 className="pl-4 overflow-hidden"
//                               >
//                                 {aboutLinks.map((link) => (
//                                   <Link
//                                     key={link.label}
//                                     href={link.href}
//                                     className="block text-base font-medium hover:text-[#890c25] transition-colors duration-200  px-4 py-2 hover:bg-[#a1122f]/30"
//                                     onClick={() => {
//                                       setIsOpen(false);
//                                       setAboutOpen(false);
//                                     }}
//                                   >
//                                     {link.label}
//                                   </Link>
//                                 ))}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>
//                       </nav>

//                       <div className="mt-8 border-t border-gray-400/50 pt-6">
//                         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100 mb-4">
//                           Contact Us
//                         </h3>
//                         <div className="flex flex-col gap-3">
//                           <a
//                             href="tel:+1234567890"
//                             className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                           >
//                             <Phone className="h-5 w-5" />
//                             +1 (234) 567-890
//                           </a>
//                           <a
//                             href="mailto:info@eustonuniversity.edu"
//                             className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                           >
//                             <Mail className="h-5 w-5" />
//                             info@eustonuniversity.edu
//                           </a>
//                         </div>
//                       </div>

//                       <div className="mt-6 border-t border-gray-400/50 pt-6">
//                         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100 mb-4">
//                           Follow Us
//                         </h3>
//                         <div className="flex gap-4">
//                           {socialLinks.map((link) => (
//                             <a
//                               key={link.label}
//                               href={link.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="hover:text-gray-200 transition-colors duration-200"
//                               aria-label={link.label}
//                             >
//                               {link.icon}
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </SheetContent>
//                 </Sheet>
//               </div>
//             </div>
//           </div>
//         </MaxWidthWrapper>
//       </div>

//       {/* Search Modal */}
//       <AnimatePresence>
//         {isSearchOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center"
//           >
//             <div className="absolute top-8 right-8">
//               <button
//                 onClick={() => setIsSearchOpen(false)}
//                 className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
//                 aria-label="Close search"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="w-full max-w-2xl px-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full py-5 pr-16 pl-8 text-white bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-lg backdrop-blur-sm"
//                   autoFocus
//                 />
//                 <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white" />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// // export default Navbar;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect, useRef } from "react";
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
//   Search,
//   ChevronDown,
// } from "lucide-react";
// import MaxWidthWrapper from "./max-width-wrapper";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Check if current route is home
//   const isHome = pathname === "/";

//   // Handle scroll effect
//   useEffect(() => {
//     if (!isHome) {
//       setHasScrolled(true);
//       return;
//     }

//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setHasScrolled(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHome]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setAboutOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const toggleAbout = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Prevent event bubbling
//     setAboutOpen(!aboutOpen);
//   };
//   const navLinks = [
//     { href: "#", label: "Portal" },
//     { href: "/admissions", label: "Admissions" },
//     { href: "/faculties", label: "Faculty" },
//     { href: "/faq", label: "FAQ" },
//     { href: "/news", label: "News" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const aboutLinks = [
//     { href: "/about", label: "About Us" },
//     { href: "/our-story", label: "Our Story" },
//     { href: "/why-choose-us", label: "Why Choose Us" },
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
//     <>
//       {/* Navbar */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
//           hasScrolled ? "bg-[#890c25] shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <MaxWidthWrapper>
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/" passHref>
//                 <Image
//                   src="/logo.png"
//                   alt="Euston University Logo"
//                   width={205}
//                   height={50}
//                   className="object-contain w-auto h-12"
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-6">
//               <Link
//                 href="/"
//                 className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
//               >
//                 Home
//               </Link>

//               {/* About Us Dropdown - Right after Home */}
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={toggleAbout}
//                   className="flex items-center gap-1 font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
//                 >
//                   About Us
//                   <motion.span
//                     animate={{ rotate: aboutOpen ? 180 : 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <ChevronDown className="h-4 w-4" />
//                   </motion.span>
//                 </button>

//                 <AnimatePresence>
//                   {aboutOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-xl z-50 overflow-hidden"
//                     >
//                       {aboutLinks.map((link) => (
//                         <Link
//                           key={link.label}
//                           href={link.href}
//                           className="block px-4 py-2 text-sm text-gray-800 hover:text-[#890c25] hover:bg-gray-100 transition-colors duration-200"
//                           onClick={() => setAboutOpen(false)}
//                         >
//                           {link.label}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {navLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Right Side (Search + Mobile Menu) */}
//             <div className="flex items-center gap-6">
//               <button
//                 onClick={() => setIsSearchOpen(true)}
//                 className="flex-shrink-0"
//                 aria-label="Search"
//               >
//                 <Search className="h-5 w-5 text-white" />
//               </button>

//               {/* Mobile Menu Button */}
//               <div className="md:hidden">
//                 <Sheet open={isOpen} onOpenChange={setIsOpen}>
//                   <SheetTrigger asChild>
//                     <button
//                       className="relative z-50 flex items-center justify-center w-10 h-10"
//                       onClick={toggleMenu}
//                       aria-label="Toggle menu"
//                     >
//                       {isOpen ? (
//                         <X className="h-6 w-6 text-white" />
//                       ) : (
//                         <Menu className="h-6 w-6 text-white" />
//                       )}
//                     </button>
//                   </SheetTrigger>
//                   <SheetContent
//                     side="right"
//                     className="bg-[#890c25] text-white w-[75vw] max-w-sm p-6 overflow-y-auto"
//                   >
//                     <div className="flex flex-col h-full">
//                       {/* ... (keep existing logo and other elements) */}

//                       <div className="flex justify-center mb-8">
//                         <Link href="/" passHref>
//                           <Image
//                             src="/logo.png"
//                             alt="Euston University Logo"
//                             width={150}
//                             height={36}
//                             className="object-contain"
//                           />
//                         </Link>
//                       </div>
//                       <nav className="flex-1 flex flex-col gap-2">
//                         {/* About Us Dropdown - First item on mobile */}

//                         <Link
//                           href="/"
//                           className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           Home
//                         </Link>

//                         <div ref={dropdownRef}>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               toggleAbout(e);
//                             }}
//                             className="w-full flex items-center justify-between text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-4 py-3 hover:bg-[#a1122f]/50"
//                           >
//                             About Us
//                             <motion.span
//                               animate={{ rotate: aboutOpen ? 180 : 0 }}
//                               transition={{ duration: 0.2 }}
//                             >
//                               <ChevronDown className="h-5 w-5" />
//                             </motion.span>
//                           </button>

//                           <AnimatePresence>
//                             {aboutOpen && (
//                               <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: "auto" }}
//                                 exit={{ opacity: 0, height: 0 }}
//                                 transition={{ duration: 0.2 }}
//                                 className="pl-4 overflow-hidden"
//                               >
//                                 {aboutLinks.map((link) => (
//                                   <Link
//                                     key={link.label}
//                                     href={link.href}
//                                     className="block text-base font-medium hover:text-[#890c25] transition-colors duration-200 px-4 py-2 hover:bg-[#a1122f]/30"
//                                     onClick={(e) => {
//                                       e.stopPropagation();
//                                       setIsOpen(false);
//                                       setAboutOpen(false);
//                                     }}
//                                   >
//                                     {link.label}
//                                   </Link>
//                                 ))}
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </div>

//                         {navLinks.map((link) => (
//                           <Link
//                             key={link.label}
//                             href={link.href}
//                             className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {link.label}
//                           </Link>
//                         ))}
//                       </nav>

//                       <div className="mt-8 border-t border-gray-400/50 pt-6">
//                         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100 mb-4">
//                           Contact Us
//                         </h3>
//                         <div className="flex flex-col gap-3">
//                           <a
//                             href="tel:+1234567890"
//                             className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                           >
//                             <Phone className="h-5 w-5" />
//                             +2348138863143
//                           </a>
//                           <a
//                             href="mailto:info@eustonuniversity.edu"
//                             className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
//                           >
//                             <Mail className="h-5 w-5" />
//                             info@eustonuniversity.edu
//                           </a>
//                         </div>
//                       </div>

//                       <div className="mt-6 border-t border-gray-400/50 pt-6">
//                         <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100 mb-4">
//                           Follow Us
//                         </h3>
//                         <div className="flex gap-4">
//                           {socialLinks.map((link) => (
//                             <a
//                               key={link.label}
//                               href={link.href}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="hover:text-gray-200 transition-colors duration-200"
//                               aria-label={link.label}
//                             >
//                               {link.icon}
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </SheetContent>
//                 </Sheet>
//               </div>
//             </div>
//           </div>
//         </MaxWidthWrapper>
//       </div>

//       {/* Search Modal */}
//       <AnimatePresence>
//         {isSearchOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center"
//           >
//             <div className="absolute top-8 right-8">
//               <button
//                 onClick={() => setIsSearchOpen(false)}
//                 className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
//                 aria-label="Close search"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="w-full max-w-2xl px-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full py-5 pr-16 pl-8 text-white bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-lg backdrop-blur-sm"
//                   autoFocus
//                 />
//                 <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white" />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
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
  ChevronDown,
} from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [facultyOpen, setFacultyOpen] = useState(false);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const facultyDropdownRef = useRef<HTMLDivElement>(null);

  // Check if current route is home
  const isHome = pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    if (!isHome) {
      setHasScrolled(true);
      return;
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
      }
      if (
        facultyDropdownRef.current &&
        !facultyDropdownRef.current.contains(event.target as Node)
      ) {
        setFacultyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAbout = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAboutOpen(!aboutOpen);
    setFacultyOpen(false); // Close faculty dropdown if open
  };
  const toggleFaculty = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFacultyOpen(!facultyOpen);
    setAboutOpen(false); // Close about dropdown if open
  };

  const navLinks = [
    { href: "#", label: "Portal" },
    { href: "/admissions", label: "Admissions" },
    { href: "#", label: "Faculty" }, // Changed to # since we'll make it a dropdown
    { href: "/faq", label: "FAQ" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  const aboutLinks = [
    { href: "/about", label: "About Us" },
    { href: "/our-story", label: "Our Story" },
    { href: "/why-choose-us", label: "Why Choose Us" },
  ];

  const facultyLinks = [
    { href: "/faculties", label: "Faculties" },
    { href: "/faculties/faculty-of-allied-health-sciences", label: "Allied Health Sciences" },
    { href: "/faculties/faculty-of-natural-and-applied-sciences", label: "Natural and Applied Sciences" },
    { href: "/faculties/faculty-of-computing", label: "Computing" },
    { href: "/faculties/faculty-of-arts-management-and-social-sciences", label: "Arts, Management and Social Sciences" },
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
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          hasScrolled ? "bg-[#890c25] shadow-lg" : "bg-transparent"
        }`}
      >
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" passHref>
                <Image
                  src="/logo.png"
                  alt="Euston University Logo"
                  width={205}
                  height={50}
                  className="object-contain w-auto h-12"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div className="relative" ref={aboutDropdownRef}>
                <button
                  onClick={toggleAbout}
                  className="flex items-center gap-1 font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
                >
                  About Us
                  <motion.span
                    animate={{ rotate: aboutOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-xl z-50 overflow-hidden"
                    >
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:text-[#890c25] hover:bg-gray-100 transition-colors duration-200"
                          onClick={() => setAboutOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Portal Link */}
              <Link
                href="#"
                className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
              >
                Portal
              </Link>

              {/* Admissions Link */}
              <Link
                href="/admissions"
                className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
              >
                Admissions
              </Link>

              {/* Faculty Dropdown */}
              <div className="relative" ref={facultyDropdownRef}>
                <button
                  onClick={toggleFaculty}
                  className="flex items-center gap-1 font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
                >
                  Faculty
                  <motion.span
                    animate={{ rotate: facultyOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {facultyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-xl z-50 overflow-hidden"
                    >
                      {facultyLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:text-[#890c25] hover:bg-gray-100 transition-colors duration-200"
                          onClick={() => setFacultyOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining Links */}
              <Link
                href="/faq"
                className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
              >
                FAQ
              </Link>
              <Link
                href="/news"
                className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="font-medium text-sm text-white hover:text-gray-200 transition-colors duration-200 px-2 py-1"
              >
                Contact
              </Link>
            </div>

            {/* Right Side (Search + Mobile Menu) */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex-shrink-0"
                aria-label="Search"
              >
                <Search className="h-5 w-5 text-white" />
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <button
                      className="relative z-50 flex items-center justify-center w-10 h-10"
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
                    className="bg-[#890c25] text-white w-[75vw] max-w-sm p-6 overflow-y-auto"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex justify-center mb-8">
                        <Link href="/" passHref>
                          <Image
                            src="/logo.png"
                            alt="Euston University Logo"
                            width={150}
                            height={36}
                            className="object-contain"
                          />
                        </Link>
                      </div>
                      <nav className="flex-1 flex flex-col gap-2">
                        <Link
                          href="/"
                          className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
                          onClick={() => setIsOpen(false)}
                        >
                          Home
                        </Link>

                        {/* About Us Dropdown - Mobile */}
                        <div ref={aboutDropdownRef}>
                          <button
                            onClick={toggleAbout}
                            className="w-full flex items-center justify-between text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-4 py-3 hover:bg-[#a1122f]/50"
                          >
                            About Us
                            <motion.span
                              animate={{ rotate: aboutOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {aboutOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 overflow-hidden"
                              >
                                {aboutLinks.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block text-base font-medium hover:text-[#890c25] transition-colors duration-200 px-4 py-2 hover:bg-[#a1122f]/30"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setAboutOpen(false);
                                    }}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <Link
                          href="#"
                          className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
                          onClick={() => setIsOpen(false)}
                        >
                          Portal
                        </Link>

                        <Link
                          href="/admissions"
                          className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
                          onClick={() => setIsOpen(false)}
                        >
                          Admissions
                        </Link>

                        {/* Faculty Dropdown - Mobile */}
                        <div ref={facultyDropdownRef}>
                          <button
                            onClick={toggleFaculty}
                            className="w-full flex items-center justify-between text-lg font-medium hover:text-gray-200 transition-colors duration-200 rounded-md px-4 py-3 hover:bg-[#a1122f]/50"
                          >
                            Faculty
                            <motion.span
                              animate={{ rotate: facultyOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-5 w-5" />
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {facultyOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 overflow-hidden"
                              >
                                {facultyLinks.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block text-base font-medium hover:text-[#890c25] transition-colors duration-200 px-4 py-2 hover:bg-[#a1122f]/30"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setFacultyOpen(false);
                                    }}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <Link
                          href="/faq"
                          className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
                          onClick={() => setIsOpen(false)}
                        >
                          FAQ
                        </Link>

                        <Link
                          href="/news"
                          className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
                          onClick={() => setIsOpen(false)}
                        >
                          News
                        </Link>

                        <Link
                          href="/contact"
                          className="text-lg font-medium hover:text-gray-200 transition-colors duration-200 px-4 py-3 hover:bg-[#a1122f]/50"
                          onClick={() => setIsOpen(false)}
                        >
                          Contact
                        </Link>
                      </nav>

                      <div className="mt-8 border-t border-gray-400/50 pt-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100 mb-4">
                          Contact Us
                        </h3>
                        <div className="flex flex-col gap-3">
                          <a
                            href="tel:+1234567890"
                            className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors duration-200"
                          >
                            <Phone className="h-5 w-5" />
                            +2348138863143
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

                      <div className="mt-6 border-t border-gray-400/50 pt-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-100 mb-4">
                          Follow Us
                        </h3>
                        <div className="flex gap-4">
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

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="absolute top-8 right-8">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
                aria-label="Close search"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="w-full max-w-2xl px-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-5 pr-16 pl-8 text-white bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-lg backdrop-blur-sm"
                  autoFocus
                />
                <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
