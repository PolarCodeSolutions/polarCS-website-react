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
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polarcode.solutions/"),
  title: "Webdesign og Programvare hos PolarCode Solutions",
  description: "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
  keywords: "nettside helgeland, webdesign helgeland, webdesign nordland, hjemmeside, webdesign, programvareutvikling, webutvikling, vedlikehold, PolarCode Solutions, polarcode, software, software solutions, nettside bedrift, nettside, mo i rana, helgeland, nordland",
  openGraph: {
    type: "website",
    title: "Webdesign hos Programvare hos PolarCode Solutions",
    description: "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
    url: "https://www.polarcode.solutions/",
    images: [
      {
        url: "https://www.polarcode.solutions/images/polarPreviewGen.webp",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.polarcode.solutions/",
  },
    icons: [
      { rel: "icon", url: "https://www.polarcode.solutions/images/favicon.png" },
      { rel: "apple-touch-icon", url: "https://www.polarcode.solutions/images/logo/croppedPolarLogo.png" },
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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="https://www.polarcode.solutions/images/favicon.png" />
        <link rel="apple-touch-icon" href="https://www.polarcode.solutions/images/logo/croppedPolarLogo.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Webdesign og Programvareutvikling | PolarCode Solutions" />
        <meta
          property="og:description"
          content="PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt."
        />
        <meta property="og:url" content="https://www.polarcode.solutions/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.polarcode.solutions/images/polarPreviewGen.webp" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="PolarCode Solutions logo" />
        <meta property="fb:app_id" content="1345767586400332" />
      </Head>
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
