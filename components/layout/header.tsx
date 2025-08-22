"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  minimal?: boolean;
}

export function Header({ minimal = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  //const [howItWorksOpen, setHowItWorksOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (minimal) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-5xl z-50 px-4 sm:px-12 h-16 flex items-center transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center space-x-3">
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
        </Link>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 px-4 sm:px-12 h-16 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <div className="md:hidden flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo.svg"
              alt="NeuronHire Logo"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="text-lg font-bold text-gray-900">NeuronHire</span>
          </Link>
        </div>

        <div
          className={`hidden md:flex items-center rounded-full px-3 py-2 space-x-6 bg-white`}
        >
          <Link href="/">
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
              href="/for-companies"
              className="body-satoshi text-neuronhire-black-100 hover:text-gray-700 text-base font-medium cursor-pointer"
            >
              For Companies
            </Link>
            <Link
              href="/client-form"
              className="body-satoshi text-neuronhire-black-100 hover:text-gray-700 text-base font-medium cursor-pointer"
            >
              For Developers
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfK_M8uJ7t8Dt5RguEJm-u4XNGzznIoniMoiJjRRxA6tO6ozA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="ghost"
            className="body-satoshi text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-9 text-black font-bold cursor-pointer"
          >
            Be Hired
          </Button>
        </Link>

        <Link href="/client-form">
          <Button
            variant="secondary"
            className="body-satoshi text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-9 text-black font-bold cursor-pointer"
          >
            Start Hiring
          </Button>
        </Link>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="p-2 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center py-6 border-b">
                <Image
                  src="/assets/logo.svg"
                  alt="NeuronHire Logo"
                  className="w-8 h-8 mr-2"
                  width={32}
                  height={32}
                />
                <span className="text-xl font-bold text-gray-900">
                  NeuronHire
                </span>
              </div>

              {/* <div className="flex-1 py-6">
                <Collapsible
                  open={howItWorksOpen}
                  onOpenChange={setHowItWorksOpen}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50">
                    <span className="text-lg font-semibold text-gray-900">
                      How It Works
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-pink-500 transition-transform ${
                        howItWorksOpen ? "rotate-180" : ""
                      }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-4">
                    <div className="space-y-3 ml-4">
                      <Link
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 py-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        Subpage
                      </Link>
                      <Link
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 py-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        Subpage
                      </Link>
                      <Link
                        href="#"
                        className="block text-gray-600 hover:text-gray-900 py-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        Subpage
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  href="#"
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    For Companies
                  </span>
                  <ChevronRight className="h-5 w-5 text-pink-500" />
                </Link>

                <Link
                  href="#"
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    For Talent
                  </span>
                  <ChevronRight className="h-5 w-5 text-pink-500" />
                </Link>
              </div> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
