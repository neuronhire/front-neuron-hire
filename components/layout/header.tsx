"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-10 h-16 flex items-center justify-between bg-transparent md:mx-4">
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
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Recruiting
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Job Openings
            </Link>
          </PopoverContent>
        </Popover>

        <div className="hidden md:flex items-center bg-white rounded-full px-5 py-2 space-x-6 ml-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/logo.svg"
              alt="NeuronHire Logo"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-gray-900">NeuronHire</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Recruiting
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Job Openings
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="rounded-full px-4 text-sm md:px-6">
          Be Hired
        </Button>
        <Button className="bg-white text-black rounded-full px-4 text-sm md:px-6">
          Start Hiring
        </Button>
      </div>
    </header>
  );
}
