'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ecosystemData } from '@/constants';

const Ecosystem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = ecosystemData.length;

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleCardClick = (index: number) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ecosystem-bg.jpg"
          alt="Ecosystem background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-gray-300 text-sm font-medium mb-4 tracking-wide uppercase">
              ECOSYSTEM
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight max-w-3xl">
              Trusted by Bitcoin Holders, Institutions, and Developers Worldwide
            </h2>
            <Link
              href="/ecosystem"
              className="inline-block px-8 py-3 bg-[#00E676] text-black font-semibold rounded-full hover:bg-[#00d166] transition-colors text-base"
            >
              Our ecosystem
            </Link>
          </div>

          {/* Carousel Container */}
          <div className="relative mt-20">
            {/* Cards Wrapper */}
            <div className="flex justify-center gap-4 px-4">
              {ecosystemData.map((card, index) => {
                const isActive = index === currentIndex;
                const distance = Math.abs(index - currentIndex);
                const isVisible = distance <= 3;

                return (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`shrink-0 transition-all duration-500 ease-out cursor-pointer ${
                      !isVisible ? 'hidden' : ''
                    } ${
                      isActive ? 'w-[420px]' : 'w-[260px]'
                    }`}
                    style={{
                      opacity: isVisible ? 1 : 0
                    }}
                  >
                    <div
                      className={`relative rounded-2xl p-6 transition-all duration-500 ${
                        isActive ? 'bg-white min-h-[400px]' : 'bg-black/80 min-h-[180px] hover:bg-[#00E676]'
                      }`}
                    >
                      {/* Icon */}
                      <div className="mb-4">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={48}
                          height={48}
                          className={`w-12 h-12 transition-opacity duration-500 ${
                            !isActive ? 'opacity-50' : ''
                          }`}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg font-bold mb-3 transition-colors duration-500 ${
                          isActive ? 'text-black' : 'text-white'
                        }`}
                      >
                        {card.title}
                      </h3>

                      {/* Description and Brands - Only show on active card */}
                      {isActive && (
                        <div className="transition-opacity duration-500">
                          <p className="text-gray-700 text-sm leading-relaxed mb-6">
                            {card.desc}
                          </p>

                          {/* Brand Images */}
                          {card.brandImages.length > 0 && (
                            <div className="pt-4 border-t border-gray-200">
                              <div className="flex items-center gap-4 flex-wrap">
                                {card.brandImages.map((brand, brandIdx) => (
                                  <div key={brandIdx} className="h-6 flex items-center">
                                    <Image
                                      src={brand}
                                      alt="Brand logo"
                                      width={70}
                                      height={24}
                                      className="max-h-full w-auto object-contain opacity-70"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors disabled:opacity-50"
                aria-label="Previous"
              >
                <FiChevronLeft className="text-white text-xl" />
              </button>

              {/* Counter */}
              <span className="text-white font-medium">
                {currentIndex + 1} / {totalSlides}
              </span>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors disabled:opacity-50"
                aria-label="Next"
              >
                <FiChevronRight className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;