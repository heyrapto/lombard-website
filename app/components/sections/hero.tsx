"use client"

import { useEffect, useState } from "react";
import Button from "../ui/button";

const words = ["Build", "Grow", "Innovate", "Move"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); 
      }, 300); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/lombard-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative max-w-[1440px] mx-auto px-6 h-full flex flex-col justify-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          It’s Time for <br /> Bitcoin to{" "}
          <span
            className={`text-green-400 inline-block transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {words[index]}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl font-light">
          Lombard brings Bitcoin to life onchain, for people, protocols, and platforms.
        </p>

        <div className="mt-8 flex gap-6 items-center">
          <Button variant="primary">Launch app</Button>
          <Button variant="secondary">Our vision</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
