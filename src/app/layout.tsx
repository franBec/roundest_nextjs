import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "@/components/dark-mode/theme-provider";
import ClientProvider from "@/components/react-query/client-provider";
import { ReactNode, Suspense } from "react";
import Loading from "@/components/v0/loading";
import { Toaster } from "@/components/ui/toaster";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { BackendLanguageProvider } from "@/components/backend-language/backend-language-context";

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
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <ClientProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NuqsAdapter>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <BackendLanguageProvider>
                <Layout>
                  <Suspense fallback={<Loading />}>
                    {modal}
                    {children}
                  </Suspense>
                </Layout>
              </BackendLanguageProvider>
              <Toaster />
            </ThemeProvider>
          </NuqsAdapter>
        </body>
      </html>
    </ClientProvider>
  );
}
