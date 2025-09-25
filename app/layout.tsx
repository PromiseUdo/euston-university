import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { cormorant, dmSans } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });




// export const metadata: Metadata = {
//   title:
//     "Euston University",
//   description:
//     "Official website of Euston University, supporting education and innovation.",
//   icons: {
//     icon: "/favicon.png",
//   },
//   openGraph: {
//     title: "Euston University",

//     description:
//       "Official website of Euston University, supporting education and innovation.",
//     images: ["/favicon.png"],
//     url: "https://www.eustonuniversity.org/",
//   },
// };


export const metadata: Metadata = {
  title: "Euston University",
  description: "Official website of Euston University, supporting education and innovation.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Euston University",
    description: "Official website of Euston University, supporting education and innovation.",
    url: "https://www.eustonuniversity.org/",
    siteName: "Euston University",
    images: [
      {
        url: "/slide11.webp", // ✅ big preview image
        width: 1200,
        height: 630,
        alt: "Euston University Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // ✅ ensures big preview on Twitter/WhatsApp
    title: "Euston University",
    description: "Official website of Euston University, supporting education and innovation.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
   


       <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://img.youtube.com" />
<link rel="preload" href="/slide11.webp" as="image" />
        <link rel="preload" href="/slide22.webp" as="image" />
        <link rel="preload" href="/slide3.webp" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
      "@type": "CollegeOrUniversity", // ✅ correct type
              name: "Euston University",
              description:
                "Official website of Euston University, supporting education and innovation.",
              url: "https://eustonuniversity.org/",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abakaliki",
                addressRegion: "South East",
                addressCountry: "Nigeria",
              },
              telephone: "+2348138863143", // Replace with actual phone
              serviceType: [
                "Tertiary Education",
                "University",
                "Technology",
                "Undergraduate Degree in Nigeria",
              ],
            }),
          }}
        />
      </head>

      <body className="font-dm-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex-1">{children}</main>
        <Toaster />
        <Footer />
        <ScrollToTop /> {/* Add ScrollToTop here */}
      </body>
    </html>
  );
}
