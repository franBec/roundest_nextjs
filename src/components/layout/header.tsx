"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To get the current URI
import { ModeToggle } from "@/components/dark-mode/mode-toogle";

export const Header = () => {
  const pathname = usePathname(); // Fetch the current path

  return (
    <header className="p-4 border-b border-gray-200">
      <nav className="container mx-auto flex justify-between items-end">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            &lt;Roundest Pokémon/&gt;
          </Link>
        </h1>
        <ul className="flex space-x-4 items-end">
          {[
            { href: "/vote", label: "Vote" },
            { href: "/results", label: "Results" },
            { href: "/code", label: "Code" },
            { href: "/author", label: "Author" },
          ].map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:underline transition-colors duration-200 ${
                  !pathname.startsWith(link.href) && "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
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
