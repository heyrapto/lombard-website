"use client"

import { useEffect, useState } from "react";
import { navItems } from "@/constants";
import Button from "../ui/button";
import Image from "next/image";
import Banner from "../ui/banner";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex flex-col w-full">
      <Banner />

      <nav
        className={`fixed top-0 left-0 right-0 mx-auto z-9999 transition-all duration-300 ${
          scrolled
            ? "bg-black text-white shadow-lg py-4 mt-5 rounded-lg w-[98%]"
            : "bg-transparent text-white py-6 mt-35 w-full"
        }`}
      >
        <div className="flex justify-between items-center mx-auto max-w-[1440px] px-6">
          {/* Logo + Nav Links */}
          <div className="flex items-center gap-10">
            <Image
              src="/lombard-logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="transition-all duration-300"
            />

            <ul className="flex items-center gap-5">
              {navItems.map((n, i) => (
                <li
                  key={i}
                  className={`text-[1.15rem] transition-colors duration-300 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                >
                  <a href="">{n.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <Button variant={"primary"} hasIcon>
            Launch app
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;