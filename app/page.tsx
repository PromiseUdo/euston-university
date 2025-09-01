// import About from "@/components/about";
// import FunFact from "./fun-fact";
// import Feedback from "./student-feedback";
// import BlogSection from "@/components/blog";
// import ScholarshipSection from "@/components/scholarship-section";
// import ParallaxImageSection from "@/components/parallax-image";
// import ProgramSection from "@/components/program-section";
// import CampusHistorySection from "@/components/campus-history-section";
// import CampusLifeSection from "@/components/why-us";
// import HeroSlider from "@/components/hero-slider";
// import MasonryGallery from "@/components/masonry-gallery";

// export default function Home() {
//   return (
//     <main className="">
//       <HeroSlider />
//       <About />
//       <FunFact />

//       <CampusHistorySection />

//       {/* <AcademicPrograms /> */}
//       <CampusLifeSection />
//       <ParallaxImageSection />
//       <ProgramSection />

//       <Feedback />
//       <ScholarshipSection />
//       {/* insert a parallax image section */}
//       <BlogSection />

//       <MasonryGallery />
//     </main>
//   );
// }

import About from "@/components/about";
import BlogSection from "@/components/blog";
import ScholarshipSection from "@/components/scholarship-section";
import ParallaxImageSection from "@/components/parallax-image";
import ProgramSection from "@/components/program-section";
import CampusHistorySection from "@/components/campus-history-section";
import CampusLifeSection from "@/components/why-us";
import Hero from "@/components/hero";
import FunFact from "./fun-fact";
import Feedback from "./student-feedback";
import MasonryGallery from "@/components/masonry-gallery";
import AdmissionModal from "@/components/admissional-modal";
import PreloadHeroImage from "@/components/preload-hero-slides";

export default function Home() {
  return (
    <main className="">
      <PreloadHeroImage />
      <Hero />
      <About />
      <FunFact />

      <CampusHistorySection />

      {/* <AcademicPrograms /> */}
      <CampusLifeSection />
      <ParallaxImageSection />
      <ProgramSection />

      <Feedback />
      <ScholarshipSection />
      {/* insert a parallax image section */}
      <MasonryGallery />
      <BlogSection />
      <AdmissionModal />
    </main>
  );
}
