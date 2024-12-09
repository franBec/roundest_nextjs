"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/dark-mode/mode-toogle";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/vote", label: "Vote" },
    { href: "/results", label: "Results" },
    { href: "/code", label: "Code" },
    { href: "/author", label: "Author" },
  ];

  return (
    <header className="p-4 border-b border-gray-200">
      <nav className="container mx-auto flex justify-between items-end">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            &lt;Roundest Pokémon/&gt;
          </Link>
        </h1>
        <ul className="flex space-x-4 items-end">
          {navLinks.map(link => (
            <li key={link.href}>
              <Button
                asChild
                variant="link"
                className={`${
                  !pathname.startsWith(link.href) && "text-gray-500"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            </li>
          ))}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};
