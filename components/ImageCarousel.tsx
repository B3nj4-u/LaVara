'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://source.unsplash.com/random/800x400?school',
  'https://source.unsplash.com/random/800x400?education',
  'https://source.unsplash.com/random/800x400?learning',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-xl">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-green-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-green-800" />
      </button>
    </div>
  );
}