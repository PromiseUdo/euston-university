import About from "@/components/about";
import Hero from "@/components/hero";
import FunFact from "./fun-fact";
import CampusLife from "./campus-life";
import Feedback from "./student-feedback";
import BlogSection from "@/components/blog";
import ScholarshipSection from "@/components/scholarship-section";
import ParallaxImageSection from "@/components/parallax-image";
import ProgramSection from "@/components/program-section";
import CampusHistorySection from "@/components/campus-history-section";
import CampusLifeSection from "@/components/why-us";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <FunFact />

      <CampusHistorySection />

      {/* <AcademicPrograms /> */}
      <ProgramSection />
      <CampusLifeSection />

      <ParallaxImageSection />
      <Feedback />
      <ScholarshipSection />
      {/* insert a parallax image section */}
      <BlogSection />
    </main>
  );
}
