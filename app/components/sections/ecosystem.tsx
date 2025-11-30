'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ecosystemData } from '@/constants';

const Ecosystem = () => {
    const slides = ecosystemData;
    const slidesLen = slides.length;

    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Start at the first card (index 0)
    const [index, setIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    console.log(containerWidth)

    // Configurable sizing (you can tweak these)
    const slideWidth = 320; // px (card logical width)
    const gap = 32; // px
    const totalSlideSpace = slideWidth + gap;
    const transitionMs = 800;

    // update container width so we can center properly (responsive)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const update = () => setContainerWidth(el.clientWidth);
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    // compute translate value to center active card
    const initialOffset = 0;
    const translateX = initialOffset - index * totalSlideSpace;

    // apply transform to track (reactively)
    useEffect(() => {
        if (!trackRef.current) return;
        trackRef.current.style.transition = `transform ${transitionMs}ms cubic-bezier(0.22,1,0.36,1)`;
        trackRef.current.style.transform = `translateX(${translateX}px)`;
    }, [translateX, transitionMs]);

    // helpers
    const handleNext = () => setIndex((i) => Math.min(i + 1, slidesLen - 1));
    const handlePrev = () => setIndex((i) => Math.max(i - 1, 0));

    // clicking a card: center it
    const handleCardClick = (clickedIdx: number) => {
        setIndex(clickedIdx);
    };

    // For UI counter: show 1..slidesLen
    const displayCount = index + 1;

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
                    <div ref={containerRef} className="relative mt-20 pt-10 pb-24 h-[450px] flex items-start">
                        {/* Track */}
                        <div
                            ref={trackRef}
                            className="flex will-change-transform"
                            style={{
                                gap: `${gap}px`,
                            }}
                        >
                            {slides.map((card, i) => {
                                const relative = i - index;
                                const dist = Math.abs(relative);
                                const isActive = dist === 0;

                                // Scale logic: center is large, immediate neighbors slightly smaller, farther are compact
                                // const scale = isActive ? 1.12 : dist === 1 ? 0.9 : 0.78;
                                return (
                                    <div
                                        key={`${card.title}-${i}`}
                                        onClick={() => handleCardClick(i)}
                                        className="shrink-0 w-[320px] cursor-pointer transition-transform duration-700"
                                        style={{
                                            //   transform: `scale(${scale})`,
                                        }}
                                    >
                                        <div
                                            className={`rounded-lg p-6 transition-all duration-700 ${isActive ? 'bg-white min-h-[380px] shadow-2xl' : 'bg-black/80 min-h-[200px] hover:bg-[#00E676]'
                                                }`}
                                        >
                                            <div className="mb-4">
                                                <Image
                                                    src={card.icon}
                                                    alt={card.title}
                                                    width={48}
                                                    height={48}
                                                    className={`w-12 h-12 transition-opacity`}
                                                />
                                            </div>

                                            <h3 className={`text-lg font-bold mb-3 transition-colors ${isActive ? 'text-black' : 'text-white'}`}>
                                                {card.title}
                                            </h3>

                                            {isActive && (
                                                <div className="transition-opacity duration-500">
                                                    <p className="text-gray-700 text-sm leading-relaxed mb-6">{card.desc}</p>

                                                    {card.brandImages?.length > 0 && (
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
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                                aria-label="Previous"
                            >
                                <FiChevronLeft className="text-white text-xl" />
                            </button>

                            <span className="text-white font-medium">
                                {displayCount} / {slidesLen}
                            </span>

                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
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
