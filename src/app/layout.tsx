"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";


import Head from 'next/head';
const metadata = {
  title: "Profesjonell Webdesign og Programvareutvikling | PolarCode Solutions",
  description: "Hjemmeside for PolarCode Solutions. Vi tilbyr skreddersydd webdesign og utvikling av programvare.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="no">
      <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
         <link rel="canonical" href="https://polarcode.solutions/" />
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
