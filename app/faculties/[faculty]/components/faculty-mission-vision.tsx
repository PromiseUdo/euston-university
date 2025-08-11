// import React from "react";
// import MaxWidthWrapper from "@/components/max-width-wrapper";

// const FacultyMissionVision: React.FC = () => {
//   return (
//     <section className="py-20 bg-card">
//       <MaxWidthWrapper>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           {/* Text Section */}
//           <div className="pr-0 md:pr-5">
//             <h2 className="text-3xl font-semibold text-foreground font-heading mb-4">
//               Mission
//             </h2>
//             <p className="text-foreground font-body">
//               Create innovative knowledge through intellectual practice,
//               critical engagement, and creative endeavor. It is dedicated to
//               providing students with enriched curriculum that fosters deeper
//               understanding and appreciation of societies, cultures, languages,
//               literatures, and artistic trends to address the contemporary
//               global and local challenges.
//             </p>
//             <h2 className="text-3xl font-semibold text-foreground font-heading mb-4 mt-5">
//               Vision
//             </h2>
//             <p className="text-foreground font-body">
//               Create innovative knowledge through intellectual practice,
//               critical engagement, and creative endeavor. It is dedicated to
//               providing students with enriched curriculum that fosters deeper
//               understanding and appreciation of societies, cultures, languages,
//               literatures, and artistic trends to address the contemporary
//               global and local challenges.
//             </p>
//           </div>
//           {/* Image Section */}
//           <figure className="mt-5 md:mt-0">
//             <img
//               src="https://html.themewant.com/unipix/assets/images/faculty/09.jpg"
//               alt="Faculty mission and vision illustration"
//               className="w-full max-w-full h-auto rounded-md"
//             />
//           </figure>
//         </div>
//       </MaxWidthWrapper>
//     </section>
//   );
// };

// export default FacultyMissionVision;

// app/faculties/[...slug]/components/faculty-mission-vision.tsx
import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";

interface FacultyMissionVisionProps {
  mission: string;
  vision: string;
}

const FacultyMissionVision: React.FC<FacultyMissionVisionProps> = ({
  mission,
  vision,
}) => {
  return (
    <section className="py-20 bg-card">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text Section */}
          <div className="pr-0 md:pr-5">
            <h2 className="text-3xl font-semibold text-foreground font-heading mb-4">
              Mission
            </h2>
            <p className="text-foreground font-body">{mission}</p>
            <h2 className="text-3xl font-semibold text-foreground font-heading mb-4 mt-5">
              Vision
            </h2>
            <p className="text-foreground font-body">{vision}</p>
          </div>
          {/* Image Section */}
          <figure className="mt-5 md:mt-0">
            <img
              src="https://html.themewant.com/unipix/assets/images/faculty/09.jpg"
              alt="Faculty mission and vision illustration"
              className="w-full max-w-full h-auto rounded-md"
            />
          </figure>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FacultyMissionVision;
