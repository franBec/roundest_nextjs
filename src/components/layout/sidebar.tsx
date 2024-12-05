"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {ChevronDownIcon, XIcon} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/sidebar-context";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/java",
      label: "Java",
      icon: "/svgs/java-icon.svg",
      options: [
        { label: "Home", href: "/java" },
        { label: "Vote", href: "/java/vote" },
        { label: "Results", href: "/java/results" },
      ],
    },
    {
      href: "/kotlin",
      label: "Kotlin",
      icon: "/svgs/kotlin-icon.svg",
      options: [
        { label: "Home", href: "/kotlin" },
        { label: "Vote", href: "/kotlin/vote" },
        { label: "Results", href: "/kotlin/results" },
      ],
    },
    {
      href: "/groovy",
      label: "Groovy",
      icon: "/svgs/groovy-icon.svg",
      options: [
        { label: "Home", href: "/groovy" },
        { label: "Vote", href: "/groovy/vote" },
        { label: "Results", href: "/groovy/results" },
      ],
    }
  ];

  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`text-secondary-foreground w-64 flex-shrink-0 transition-all duration-300 ease-in-out border-r border-border ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static fixed inset-y-0 left-0 z-50 flex flex-col`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        <Link href={"/"} className="text-xl font-bold">
          {"<PollitoDev/> 🐤"}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <XIcon className="h-6 w-6" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="p-4 space-y-2">
          {navItems.map(item => (
            <DropdownMenu key={item.href}>
              <DropdownMenuTrigger asChild>
                <div className={`block py-2 px-4 rounded hover:bg-primary/10 ${pathname.startsWith(item.href) ? "bg-primary/10" : ""} flex items-center justify-between`}>
                  <div className="flex items-center">
                    <Image src={item.icon} alt={item.label} width={22} height={22} className="mr-2" />
                    {item.label}
                  </div>
                  <ChevronDownIcon className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {item.options.map(option => (
                  <Link
                    key={option.href}
                    href={option.href}
                    className="block py-2 px-4 rounded hover:bg-primary/10"
                  >
                    {option.label}
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};
