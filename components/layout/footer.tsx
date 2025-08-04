"use client";

import { Instagram, Linkedin, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/background/footer-background.png')",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-12 md:[grid-template-columns:4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logos/neurohire-white-logo.png"
                alt="NeuronHire"
                width={600}
                height={200}
                className="h-8 w-auto"
                priority
              />
            </div>

            <p className="max-w-sm text-sm leading-5 text-white/70">
              NeuronHire connects LATAM tech talent to global companies fast,
              risk-free, scalable and with zero overhead.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: X, label: "X", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Youtube, label: "YouTube", href: "#" },
              ].map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full  text-white/80 hover:bg-white/10 hover:text-white transition"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Tiktok
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10  pt-4 text-xs text-white/60 md:flex md items-center md:justify-between">
          <span className="block">
            Designed by{" "}
            <Link href="#" className="underline hover:text-white">
              HumanMade™ Club
            </Link>
          </span>
          <span className="mt-2 block md:mt-0">
            © 2025 NeuronHire. Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}
