"use strict";
import React from "react";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Webdesign og Programvare hos PolarCode Solutions",
  description: "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
  keywords: "nettside helgeland, webdesign helgeland, webdesign nordland, hjemmeside, webdesign, programvareutvikling, webutvikling, vedlikehold, PolarCode Solutions, polarcode, software, software solutions, nettside bedrift, nettside, mo i rana, helgeland, nordland",
  openGraph: {
    type: "website",
    title: "Webdesign og Programvare hos PolarCode Solutions",
    description: "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
    url: "https://polarcode.solutions/",
    images: [
      {
        url: "https://polarcode.solutions/images/polarPreviewGen.webp",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions logo",
      },
    ],
  },
  alternates: {
    canonical: "https://polarcode.solutions/",
  },
    icons: [
      { rel: "icon", url: "https://polarcode.solutions/images/favicon.png" },
      { rel: "apple-touch-icon", url: "https://polarcode.solutions/images/logo/croppedPolarLogo.png" },
    ],
};

const Home: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PolarCode Solutions",
    "url": "https://polarcode.solutions",
    "logo": "https://polarcode.solutions/logo.png",
    "description": "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+47 95 04 45 86",
      "contactType": "Customer Service",
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61560407736033",
      "https://discord.gg/hUAksuANZ4",
    ],
  };

  return (
    <>
      <div itemScope itemType="https://schema.org/WebPage">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollUp />
        <Hero/>
        <Blog/>
        <Features/>
        <Brands />
        <Pricing />
        <Contact />
      </div>
    </>
  );
};

export default Home;
