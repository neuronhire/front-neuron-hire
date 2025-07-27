"use client";

import { Instagram, Linkedin, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/logo.svg"
              alt="NeuronHire Logo"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="text-xl font-bold">NeuronHire</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            NeuronHire connects LATAM tech talent to global companies fast,
            risk-free, scalable, and with zero overhead.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <Link
              href="#"
              aria-label="X"
              className="hover:text-white text-gray-400"
            >
              <X size={18} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white text-gray-400"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-white text-gray-400"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="hover:text-white text-gray-400"
            >
              <Youtube size={18} />
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-white">Links</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-white">Social</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>
              <Link href="#">Twitter</Link>
            </li>
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Tiktok</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-white">Legal</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>
              <Link href="#">Terms of Use</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-sm flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-2 text-gray-500">
        <span>
          Designed by{" "}
          <Link href="#" className="underline font-medium">
            HumanMade™ Club
          </Link>
        </span>
        <span className="mt-2 md:mt-0">
          © 2025 NeuronHire. All rights reserved
        </span>
      </div>
    </footer>
  );
}
