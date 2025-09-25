import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { cormorant, dmSans } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import Head from "next/head";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });




export const metadata: Metadata = {
  title:
    "Euston University",
  description:
    "Official website of Euston University, supporting education and innovation.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Euston University",

    description:
      "Official website of Euston University, supporting education and innovation.",
    images: ["/favicon.png"],
    url: "https://www.eustonuniversity.org/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <Head>
        <link rel="preload" href="/slide11.webp" as="image" />
        <link rel="preload" href="/slide22.webp" as="image" />
        <link rel="preload" href="/slide3.webp" as="image" />
      </Head>

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
