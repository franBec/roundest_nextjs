"use client";

import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/dark-mode/mode-toogle";
import { HeaderTitle } from "@/components/layout/header-title";
import { BackendLanguageSelector } from "@/components/backend-language/backend-language-selector";
import { HeaderNavLinks } from "@/components/layout/header-nav-links";
import { HeaderMobileMenu } from "@/components/layout/header-mobile-menu";
import { useBackendLanguage } from "@/components/backend-language/backend-language-context";

const navLinks = [
  { href: "/vote", label: "Vote!" },
  { href: "/pokemons", label: "Pokémons" },
  { href: "/code", label: "Code" },
  { href: "/author", label: "Author" },
];

export const Header = () => {
  const pathname = usePathname();
  const { selectedBackendLanguage } = useBackendLanguage();
  const gradientColors = selectedBackendLanguage.colors;

  return (
    <header className="p-4 relative">
      <div
        className="absolute inset-x-0 bottom-0 h-[4px]"
        style={{
          background: `linear-gradient(to right, #${gradientColors[0]}, #${gradientColors[1]})`,
        }}
      ></div>
      <nav className="container mx-auto flex justify-between items-center relative">
        <div className="hidden md:block">
          <HeaderTitle />
        </div>
        <BackendLanguageSelector />
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-4 items-center">
            <HeaderNavLinks navLinks={navLinks} pathname={pathname} />
          </ul>
          <HeaderMobileMenu navLinks={navLinks} pathname={pathname} />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
