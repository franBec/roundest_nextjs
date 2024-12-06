import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import ClientProvider from "@/components/react-query/client-provider";
import React, { Suspense } from "react";
import Loading from "@/components/v0/loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "<Roundest Pokémon/>",
  description:
    "A fun way to show how different computer systems can work together!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClientProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
    </ClientProvider>
  );
}
