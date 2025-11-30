'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { FeatureCard, featuresData } from '@/constants';

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderCard = (feature: FeatureCard, index: number) => {
    const isHovered = hoveredIndex === index;
    const isComingSoon = feature.type === 'coming-soon';
    const hasLink = feature.type === 'has-link';

    const cardContent = (
      <>
        {/* Icon */}
        <div className="mb-6">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={56}
            height={56}
            className="w-14 h-14"
          />
        </div>

        {/* Coming Soon Badge */}
        {isComingSoon && (
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded transition-colors duration-300 ${
              isHovered ? 'bg-[#00E676]/20 text-black' : 'bg-gray-100 text-gray-700'
            }`}>
              Coming soon
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-3xl font-semibold text-black mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-xl leading-relaxed text-gray-700">
          {feature.desc}
        </p>

        {/* Arrow Icon for has-link on hover */}
        {hasLink && isHovered && (
          <div className="absolute bottom-6 left-6">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <FiArrowUpRight className="text-white text-lg" />
            </div>
          </div>
        )}
      </>
    );

    const baseClasses = `
      relative bg-white rounded-xl p-6 w-full h-[400px]
      transition-all duration-300 block
      ${hasLink ? 'cursor-pointer hover:bg-[#00E676]' : ''}
    `;

    if (hasLink && feature.link) {
      return (
        <Link
          href={feature.link}
          className={baseClasses}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {cardContent}
        </Link>
      );
    }

    return (
      <div
        className={baseClasses}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {cardContent}
      </div>
    );
  };

  return (
    <section className="bg-[#0A0F0D] py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            The Lombard Stack Brings<br />Bitcoin to Life
          </h2>
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-[#00E676] text-black font-semibold rounded-full hover:bg-[#00d166] transition-colors text-base"
          >
            Explore products
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex">
              {renderCard(feature, index)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;