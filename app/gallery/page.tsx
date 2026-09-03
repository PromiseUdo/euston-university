'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// ✅ Thumbnails plugin
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import CTA from './components/cta';
import PageHeader from '@/components/page-hero';

// 3 columns × 6 rows per page
const IMAGES_PER_PAGE = 18;

// All gallery images (single category)
const images = [
  { src: '/gallery/B2B_7693.jpg', alt: 'Campus life at Euston University' },
  { src: '/gallery/B2B_7702.jpg', alt: 'Students on campus' },
  { src: '/gallery/B2B_7714.jpg', alt: 'University event' },
  { src: '/gallery/B2B_7718.jpg', alt: 'Campus gathering' },
  { src: '/gallery/B2B_7721.jpg', alt: 'Students together' },
  { src: '/gallery/B2B_7906.jpg', alt: 'Campus activity' },
  { src: '/gallery/B2B_7908.jpg', alt: 'University community' },
  { src: '/gallery/B2B_7913.jpg', alt: 'Students at Euston University' },
  { src: '/gallery/B2B_7915.jpg', alt: 'Campus moment' },
  { src: '/gallery/B2B_7927.jpg', alt: 'University life' },
  { src: '/gallery/B2B_7934.jpg', alt: 'Students on campus' },
  { src: '/gallery/wa-01.jpg', alt: 'Anatomy demonstration room' },
  { src: '/gallery/wa-03.jpg', alt: 'Library and reading lounge' },
  { src: '/gallery/wa-04.jpg', alt: 'Student study lounge' },
  { src: '/gallery/wa-11.jpg', alt: 'Nursing skills lecture room' },
  { src: '/gallery/wa-12.jpg', alt: 'Clinical practice room' },
  { src: '/gallery/wa-14.jpg', alt: 'Nursing practical ward' },
  { src: '/gallery/wa-10.jpg', alt: 'Multipurpose hall' },
  { src: '/gallery/wa-13.jpg', alt: 'University assembly hall' },
  { src: '/IMG_0001.webp', alt: 'Campus Building' },
  { src: '/IMG_0040.webp', alt: 'Students on Campus' },
  { src: '/IMG_0093.webp', alt: 'University Library' },
  { src: '/IMG_0071.webp', alt: 'Graduation Ceremony' },
  { src: '/IMG_0173.webp', alt: 'Sports Festival' },
  { src: '/IMG_0129.webp', alt: 'Lecture Hall' },
  { src: '/bus2.webp', alt: 'University Bus' },
  { src: '/euston-lab.webp', alt: 'University Laboratory' },
  { src: '/euston-lab2.webp', alt: 'Science Laboratory' },
];

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery', isActive: true },
  ];

  const totalPages = Math.max(1, Math.ceil(images.length / IMAGES_PER_PAGE));
  const pageStart = (currentPage - 1) * IMAGES_PER_PAGE;
  const pageImages = images.slice(pageStart, pageStart + IMAGES_PER_PAGE);

  // Lightbox shows every image regardless of page
  const slides: SlideImage[] = useMemo(
    () => images.map((img) => ({ src: img.src, alt: img.alt })),
    []
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader
        title="Our Gallery"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/news.webp"
      />

      {/* 3-Column Grid Gallery */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageImages.map((img, idx) => {
            const globalIndex = pageStart + idx;
            return (
              <div
                key={img.src}
                className="group relative cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
                onClick={() => {
                  setPhotoIndex(globalIndex);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition ${
                  page === currentPage
                    ? 'bg-[#890c25] text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Lightbox with Thumbnails */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
          plugins={[Thumbnails]}
          styles={{
            container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
          }}
          render={{
            slide: ({ slide }) => (
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt || ''}
                  fill
                  className="object-contain"
                />
              </div>
            ),
          }}
        />
      )}

      {/* Call to Action */}
      <CTA />
    </div>
  );
}
