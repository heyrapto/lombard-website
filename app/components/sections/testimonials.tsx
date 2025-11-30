'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  logo: string;
  logoAlt: string;
  author: string;
  position: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      quote: "Bitcoin DeFi is the largest opportunity of the decade and close collaboration between thought and technology leaders like Lombard and BOB is exactly what the industry needs. Lombard's $1.5B LBTC LST is just the start. With BOB as the Gateway to Bitcoin DeFi and Lombard introducing new sustainable yield platforms, it's a question of when, not if, BTC DeFi will flip ETH DeFi.",
      logo: '/images/okx.svg',
      logoAlt: 'BOB',
      author: 'Alexei Zamyatin',
      position: 'Co-founder, BOB'
    },
    {
      quote: "BTC has always been the cornerstone of crypto, but until now, it's been largely passive. Lombard marks a turning point—not just in how BTC is held, but how it moves.",
      logo: '/images/bybit.svg',
      logoAlt: 'BYBIT',
      author: 'Emily Bao',
      position: 'Head of Web3, Bybit'
    },
    {
      quote: "With Lombard, Bitcoin holders can benefit from the best parts of the onchain economy — both staking and access to DeFi.",
      logo: '/images/aave.svg',
      logoAlt: 'Figment',
      author: 'Lorien Gabel',
      position: 'Co-Founder & CEO, Figment'
    },
    {
      quote: "Our partnership with Lombard signifies a shared vision for the future of BTCFi. Integrating Chainlink CCIP, Proof of Reserve, and Price Feeds will help enable Lombard to create a robust, scalable platform that helps ensure the security of LBTC.",
      logo: '/images/chainlink.svg',
      logoAlt: 'Chainlink',
      author: 'Johann Eid',
      position: 'Chief Business Officer, Chainlink Labs'
    },
    {
      quote: "Lombard's cross-chain LBTC product taps into the vast pool of parked Bitcoin liquidity, enhancing the supply-side into Babylon's Bitcoin staking protocol.",
      logo: '/images/ether.svg',
      logoAlt: 'Babylon',
      author: 'David Tse',
      position: 'Co-Founder, Babylon'
    }
  ];

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 5000); // Change slide every 5 seconds
    
        return () => clearInterval(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [activeIndex]);

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="bg-[#EF6C3B] py-20 px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Testimonial Content */}
        <div 
          className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Quote */}
          <blockquote className="text-white text-2xl lg:text-4xl font-bold text-center mb-12 leading-relaxed max-w-5xl mx-auto">
            &#34;{testimonials[activeIndex].quote}&#34;
          </blockquote>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="h-16 flex items-center">
              <Image
                src={testimonials[activeIndex].logo}
                alt={testimonials[activeIndex].logoAlt}
                width={200}
                height={60}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="text-center text-white mb-12">
            <p className="text-xl font-bold mb-1">
              {testimonials[activeIndex].author}
            </p>
            <p className="text-lg opacity-90">
              {testimonials[activeIndex].position}
            </p>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-transparent hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;