"use client";

import { ArrowUp, Instagram, Linkedin, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/background/footer-background.png')",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-12 text-center md:text-left md:[grid-template-columns:6fr_1fr_1fr]">
          <div className="space-y-4">
            <div
              onClick={scrollToTop}
              className="flex items-center justify-center gap-3 md:justify-start"
            >
              <Image
                src="/assets/logos/neurohire-white-logo.png"
                alt="NeuronHire"
                width={600}
                height={200}
                className="h-8 w-auto"
                priority
              />
            </div>

            <p className="mx-auto max-w-sm text-sm leading-5 text-white/70 text-center md:mx-0 md:text-left">
              NeuronHire connects LATAM tech talent to global companies fast,
              risk-free, scalable and with zero overhead.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2 md:justify-start">
              {[
                {
                  Icon: X,
                  label: "X",
                  href: "https://www.linkedin.com/company/neuronhire/",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/neuronhire/",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://www.linkedin.com/company/neuronhire/",
                },
                {
                  Icon: Youtube,
                  label: "YouTube",
                  href: "https://www.youtube.com/@NeuronHire",
                },
              ].map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full  text-white/80 hover:bg-white/10 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* <div className="space-y-3">
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
          </div> */}

          <div className="flex items-start justify-center md:justify-end">
            <Button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="flex items-center gap-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition cursor-pointer"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>

        <div className="mt-10 pt-4 text-xs text-white/60 md:flex md:items-center md:justify-between">
          <span className="block text-center md:text-left">
            Designed by{" "}
            <Link href="#" className="underline hover:text-white">
              HumanMade™ Club
            </Link>
          </span>
          <span className="mt-2 block text-center md:mt-0 md:text-right md:pe-12">
            © 2025 NeuronHire. Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}
