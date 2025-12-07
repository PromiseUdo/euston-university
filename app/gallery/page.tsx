'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// ✅ Thumbnails plugin
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import CTA from './components/cta';
import PageHeader from '@/components/page-hero';

// Extend SlideImage to include category
interface CustomSlide extends SlideImage {
  category: string;
}

// Categories
const categories = ['All', 'Campus & Facilities'];

// Local images with explicit aspect ratios
const images = [
  {
    src: '/IMG_0001.webp',
    category: 'Campus & Facilities',
    alt: 'Campus Building',
    aspectRatio: '600/800',
  },
  {
    src: '/IMG_0040.webp',
    category: 'Campus & Facilities',
    alt: 'Students on Campus',
    aspectRatio: '600/700',
  },
  {
    src: '/IMG_0093.webp',
    category: 'Campus & Facilities',
    alt: 'University Library',
    aspectRatio: '600/900',
  },
  {
    src: '/IMG_0071.webp',
    category: 'Campus & Facilities',
    alt: 'Graduation Ceremony',
    aspectRatio: '600/750',
  },
  {
    src: '/IMG_0173.webp',
    category: 'Campus & Facilities',
    alt: 'Sports Festival',
    aspectRatio: '600/650',
  },
  {
    src: '/IMG_0129.webp',
    category: 'Campus & Facilities',
    alt: 'Lecture Hall',
    aspectRatio: '600/720',
  },
  {
    src: '/euston-bus1.webp',
    category: 'Campus & Facilities',
    alt: 'Graduation Ceremony',
    aspectRatio: '600/750',
  },
  {
    src: '/euston-lab.webp',
    category: 'Campus & Facilities',
    alt: 'Sports Festival',
    aspectRatio: '600/650',
  },
  {
    src: '/euston-lab2.webp',
    category: 'Campus & Facilities',
    alt: 'Lecture Hall',
    aspectRatio: '600/720',
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery', isActive: true },
  ];

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // Prepare slides for lightbox with CustomSlide type
  const slides: CustomSlide[] = filteredImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    category: img.category,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader
        title="Our Gallery"
        breadcrumbItems={breadcrumbItems}
        backgroundImage="/news.webp"
      />

      {/* Category Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#890c25] text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Grid Gallery */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              onClick={() => {
                setPhotoIndex(idx);
                setIsOpen(true);
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </div>
            </div>
          ))}
        </div>
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
                  style={{ aspectRatio: images[photoIndex].aspectRatio }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-3 text-center">
                  {(slide as CustomSlide).category}
                </div>
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
