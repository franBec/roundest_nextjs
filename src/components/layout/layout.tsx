"use client";

import React, { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "@/components/layout/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
