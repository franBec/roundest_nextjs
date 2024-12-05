"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDownIcon, XIcon, ExternalLinkIcon } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/sidebar-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface InternalLink {
  label: string;
  href: string;
}

interface ExternalLink {
  label: string;
  url: string;
}

interface NavItem {
  label: string;
  options: (InternalLink | ExternalLink)[];
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

export const Sidebar = () => {
  const pathname = usePathname();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const navItems: NavGroup[] = [
    {
      group: "Backends",
      items: [
        {
          label: "Java",
          options: [
            { label: "Home", href: "/java" },
            { label: "Vote", href: "/java/vote" },
            { label: "Results", href: "/java/results" },
          ],
        },
        {
          label: "Kotlin",
          options: [
            { label: "Home", href: "/kotlin" },
            { label: "Vote", href: "/kotlin/vote" },
            { label: "Results", href: "/kotlin/results" },
          ],
        },
        {
          label: "Groovy",
          options: [
            { label: "Home", href: "/groovy" },
            { label: "Vote", href: "/groovy/vote" },
            { label: "Results", href: "/groovy/results" },
          ],
        }
      ]
    },
    {
      group: "About",
      items: [
        {
          label: "Author",
          options: [
            { label: "Blog", url: "https://pollito.dev/en/page/about/" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/franco-becvort/" },
            { label: "GitHub", url: "https://github.com/franBec" },
          ],
        },
        {
          label: "Code",
          options: [
            { label: "Java", url: "https://github.com/franBec/roundest_java" },
            { label: "Kotlin", url: "https://github.com/franBec/roundest_kotlin" },
            { label: "Groovy", url: "https://github.com/franBec/roundest_groovy" },
            { label: "Next.js", url: "https://github.com/franBec/roundest_nextjs" },
          ],
        }
      ]
    }
  ];

  const isExternalLink = (option: InternalLink | ExternalLink): option is ExternalLink => {
    return 'url' in option;
  };


  return (
    <aside
      className={`text-secondary-foreground w-64 flex-shrink-0 transition-all duration-300 ease-in-out border-r border-border ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static fixed inset-y-0 left-0 z-50 flex flex-col`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        <Link href="/" className="text-xl font-bold">
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
        <nav className="p-4 space-y-4">
          {navItems.map((group) => (
            <div key={group.group}>
              <h2 className="mb-2 text-sm font-semibold text-muted-foreground">{group.group}</h2>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                      >
                        {item.label}
                        <ChevronDownIcon className="h-4 w-4 ml-auto" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.options.map((option) => (
                        isExternalLink(option) ? (
                          <DropdownMenuItem key={option.url} asChild>
                            <a
                              href={option.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center py-2 px-4 text-sm hover:bg-primary/10 rounded-sm"
                            >
                              {option.label}
                              <ExternalLinkIcon className="h-4 w-4 ml-auto" />
                            </a>
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem key={option.href} asChild>
                            <Link
                              href={option.href}
                              className={`block py-2 px-4 text-sm hover:bg-primary/10 rounded-sm ${
                                pathname === option.href ? "bg-primary/10" : ""
                              }`}
                            >
                              {option.label}
                            </Link>
                          </DropdownMenuItem>
                        )
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};

