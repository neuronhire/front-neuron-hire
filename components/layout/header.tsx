"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 px-4 sm:px-12 h-16 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <Popover open={menuOpen} onOpenChange={setMenuOpen}>
          <PopoverTrigger asChild>
            <button className="flex items-center space-x-2 md:hidden focus:outline-none">
              <Image
                src="/assets/logo.svg"
                alt="NeuronHire Logo"
                className="w-8 h-8"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold text-gray-900">
                NeuronHire
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-48 p-2 space-y-2">
            <Link
              href="#"
              className="body-satoshi block text-neuronhire-black-100 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              For Companies
            </Link>
            <Link
              href="#"
              className="body-satoshi block text-neuronhire-black-100 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              For Developers
            </Link>
          </PopoverContent>
        </Popover>

        <div
          className={`hidden md:flex items-center rounded-full px-3 py-2 space-x-6 ml-4 bg-white`}
        >
          <Link href="#">
            <div className="flex items-center space-x-2 pr-4">
              <Image
                src="/assets/logo.svg"
                alt="NeuronHire Logo"
                className="w-8 h-8"
                width={32}
                height={32}
              />
              <span className="text-2xl font-bold text-neuronhire-black-100">
                NeuronHire
              </span>
            </div>
          </Link>
          <nav className="flex items-center space-x-5 pr-3">
            <Link
              href="#"
              className="body-satoshi text-neuronhire-black-100 hover:text-gray-700 text-base font-medium"
            >
              For Companies
            </Link>
            <Link
              href="#"
              className="body-satoshi text-neuronhire-black-100 hover:text-gray-700 text-base font-medium"
            >
              For Developers
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2">
        <Button
          variant="ghost"
          className="body-satoshi text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-9 text-black font-bold"
        >
          Be Hired
        </Button>
        <Button
          variant="secondary"
          className="body-satoshi text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-9 text-black font-bold"
        >
          Start Hiring
        </Button>
      </div>
    </header>
  );
}
