"use client";

import { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
