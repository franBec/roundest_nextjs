"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/dark-mode/mode-toogle";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/vote", label: "Vote" },
  { href: "/results", label: "Results" },
  { href: "/code", label: "Code" },
  { href: "/author", label: "Author" },
];

export const Header = () => {
  const pathname = usePathname();

  const NavLinks = ({ mobile = false }) => (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.href}
          asChild
          variant="link"
          className={`${
            !pathname.startsWith(link.href) && "text-muted-foreground"
          } ${mobile ? "w-full justify-start" : ""}`}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="p-4 border-b">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold sm:text-xl">
          <Link href="/" className="hover:underline">
            &lt;Roundest Pokémon/&gt;
          </Link>
        </h1>
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-4 items-center">
            <NavLinks />
          </ul>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                  <NavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

