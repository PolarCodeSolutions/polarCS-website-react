"use strict";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polarcode.solutions/"),
  title: "Webdesign & Programvareutvikling | PolarCode Solutions",
  description: "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
  keywords: "webdesign, programvareutvikling, webutvikling, vedlikehold, PolarCode Solutions, polarcode, software, software solutions, nettside bedrift, nettside, mo i rana, helgeland, nordland",
  openGraph: {
    type: "website",
    title: "Webdesign & Programvareutvikling | PolarCode Solutions",
    description: "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
    url: "https://www.polarcode.solutions/",
    images: [
      {
        url: "https://www.polarcode.solutions/images/logo/croppedPolarLogo.png",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions logo"
      }
    ]
  },
  alternates: {
    canonical: "https://www.polarcode.solutions/"
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="https://www.polarcode.solutions/images/favicon.png" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-76N1PJZ11X"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-76N1PJZ11X');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PolarCode Solutions",
              "url": "https://polarcode.solutions",
              "logo": "https://polarcode.solutions/logo.png",
              "description": "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+47 95 04 45 86",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61560407736033",
                "https://discord.gg/hUAksuANZ4"
              ]
            })
          }}
        />
      </Head>
      <ScrollUp />
      <Hero />
      <Blog />
      <Features />
      <Brands />
      <Pricing />
      <Contact />
    </>
  );
}
