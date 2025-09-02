"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

type MenuItem = { title: string; href: string; externalLink?: boolean };
type MenuColumn = { title?: string; items: MenuItem[] };

type MenuSection = {
  title: string;
  href?: string;
  items?: MenuItem[];
  columns?: MenuColumn[];
  submenuTitle?: string;
};

type Cta = {
  label: string;
  href: string;
  externalLink?: boolean;
  variant?:
    | "ghost"
    | "secondary"
    | "default"
    | "outline"
    | "destructive"
    | "link";
};

interface HeaderProps {
  minimal?: boolean;
  menu?: MenuSection[];
  ctas?: Cta[];
  logoSrc?: string;
  brand?: string;
}

const defaultMenu: MenuSection[] = [
  {
    title: "For Companies",
    items: [{ title: "How it works", href: "/for-developers" }],
  },
  {
    title: "For Developers",
    items: [{ title: "How to join us", href: "/for-developers" }],
  },
];

const defaultCtas: Cta[] = [
  {
    label: "Be Hired",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfK_M8uJ7t8Dt5RguEJm-u4XNGzznIoniMoiJjRRxA6tO6ozA/viewform",
    externalLink: true,
    variant: "ghost",
  },
  { label: "Start Hiring", href: "/client-form", variant: "secondary" },
];
function ListItem({
  title,
  href,
  externalLink,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & MenuItem) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        {externalLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="flex gap-2 items-center">
              <ChevronRight className="h-4 w-4 text-neuronhire-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
          </a>
        ) : (
          <Link
            href={href}
            className="group block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            <div className="flex gap-2 items-center">
              <ChevronRight className="h-4 w-4 text-neuronhire-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
          </Link>
        )}
      </NavigationMenuLink>
    </li>
  );
}

export function Header({
  minimal = true,
  menu = defaultMenu,
  ctas,
  logoSrc = "/assets/logo.svg",
  brand = "NeuronHire",
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState<Record<number, boolean>>({});

  const ctasToUse = useMemo(() => ctas ?? defaultCtas, [ctas]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgCls = isScrolled ? "bg-white shadow-sm" : "bg-transparent";

  const getColumnsForSection = (
    section: MenuSection,
    singleColumn: boolean
  ): MenuColumn[] => {
    if (section.columns?.length) {
      if (singleColumn) {
        const merged: MenuItem[] = section.columns.flatMap((c) => c.items);
        return [
          { title: section.submenuTitle ?? section.title, items: merged },
        ];
      }
      return section.columns;
    }
    if (section.items?.length) {
      return [
        { title: section.submenuTitle ?? section.title, items: section.items },
      ];
    }
    return [];
  };

  const renderDesktopSection = (section: MenuSection, idx: number) => {
    const hasSubmenu = Boolean(
      section.items?.length || section.columns?.length
    );

    if (!hasSubmenu && section.href) {
      return (
        <NavigationMenuItem key={`${section.title}-${idx}`}>
          <NavigationMenuLink asChild>
            <Link
              href={section.href}
              className="body-satoshi text-neuronhire-black-100 hover:text-gray-700 text-base font-medium px-2 py-2 rounded-md hover:bg-gray-50"
            >
              {section.title}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      );
    }

    const cols = getColumnsForSection(section, minimal);
    const gridColsClass =
      cols.length >= 4
        ? "grid-cols-4"
        : cols.length === 3
        ? "grid-cols-3"
        : "grid-cols-2";

    return (
      <NavigationMenuItem key={`${section.title}-${idx}`}>
        <NavigationMenuTrigger className="body-satoshi text-neuronhire-black-100 hover:text-gray-700 text-base font-medium bg-transparent hover:bg-gray-50">
          {section.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className={`p-4 ${minimal ? "w-[320px]" : "w-[720px]"}`}>
            {cols.length > 0 && (
              <>
                {section.submenuTitle && (
                  <div className="border-b border-gray-100 pb-3 mb-4">
                    <h3 className="text-2xl font-extrabold text-neuronhire-black-100 body-satoshi">
                      {section.submenuTitle}
                    </h3>
                  </div>
                )}

                <div
                  className={
                    minimal
                      ? "grid grid-cols-1 gap-6"
                      : `grid ${gridColsClass} gap-8`
                  }
                >
                  {cols.map((col, cIdx) => (
                    <div key={`${section.title}-col-${cIdx}`}>
                      {!minimal && col.title && (
                        <div className="text-sm font-semibold mb-3">
                          {col.title}
                        </div>
                      )}
                      <ul className="grid gap-1">
                        {col.items.map((item) => (
                          <ListItem
                            key={`${section.title}-${col.title ?? "col"}-${
                              item.title
                            }`}
                            title={item.title}
                            href={item.href}
                          />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  };

  const renderMobileSection = (section: MenuSection, idx: number) => {
    const hasSubmenu = Boolean(
      section.items?.length || section.columns?.length
    );

    if (!hasSubmenu && section.href) {
      return (
        <Link
          key={`${section.title}-${idx}`}
          href={section.href}
          className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-lg font-semibold body-mackinac text-neuronhire-black-100">
            {section.title}
          </span>
          <ChevronRight className="h-5 w-5 text-neuronhire-primary" />
        </Link>
      );
    }

    const opened = !!openMobile[idx];
    const mobileItems: MenuItem[] =
      section.columns?.flatMap((c) => c.items) ?? section.items ?? [];

    return (
      <Collapsible
        key={`${section.title}-${idx}`}
        open={opened}
        onOpenChange={(o) => setOpenMobile((prev) => ({ ...prev, [idx]: o }))}
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50">
          <span className="text-lg font-semibold body-mackinac text-neuronhire-black-100">
            {section.title}
          </span>
          <ChevronDown
            className={`h-5 w-5 text-neuronhire-primary transition-transform ${
              opened ? "rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4">
          <div className="space-y-3 ml-4">
            {mobileItems.map((item) =>
              item.externalLink ? (
                <a
                  key={`${section.title}-${item.title}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neuronhire-gray-80 body-mackinac py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={`${section.title}-${item.title}`}
                  href={item.href}
                  className="block text-neuronhire-gray-80 body-mackinac py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 px-4 sm:px-12 h-16 flex items-center justify-between transition-all duration-300 ${bgCls}`}
    >
      <div className="flex items-center">
        <div className="md:hidden flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logoSrc}
              alt={`${brand} Logo`}
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span className="text-lg font-bold text-gray-900">{brand}</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center rounded-full px-3 py-2 space-x-6 bg-white">
          <Link href="/">
            <div className="flex items-center space-x-2 pr-4">
              <Image
                src={logoSrc}
                alt={`${brand} Logo`}
                className="w-8 h-8"
                width={32}
                height={32}
              />
              <span className="text-2xl font-bold text-neuronhire-black-100">
                {brand}
              </span>
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((section, idx) => renderDesktopSection(section, idx))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="flex items-center space-x-1 sm:space-x-2">
        {ctasToUse.map((cta) => {
          const btn = (
            <Button
              key={cta.label}
              variant={cta.variant ?? "ghost"}
              className="body-satoshi text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-2 h-8 sm:h-9 text-black font-bold cursor-pointer"
            >
              {cta.label}
            </Button>
          );
          return cta.externalLink ? (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {btn}
            </a>
          ) : (
            <Link key={cta.label} href={cta.href}>
              {btn}
            </Link>
          );
        })}

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
                  src={logoSrc}
                  alt={`${brand} Logo`}
                  className="w-8 h-8 mr-2"
                  width={32}
                  height={32}
                />
                <span className="text-xl font-bold text-gray-900">{brand}</span>
              </div>

              <div className="flex-1 py-2">
                {menu.map((section, idx) => renderMobileSection(section, idx))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
