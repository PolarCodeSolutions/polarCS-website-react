"use strict";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Head from 'next/head';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polarcode.solutions/"),
  title: "Kontakt Oss for tilbud og info | PolarCode Solutions",
  description: "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
  keywords: "kontakt, webdesign, programvareutvikling, PolarCode Solutions, tilbud, informasjon",
  openGraph: {
    type: "website",
    title: "Kontakt Oss for tilbud og info | PolarCode Solutions",
    description: "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
    url: "https://www.polarcode.solutions/kontakt",
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
    canonical: "https://polarcode.solutions/kontakt"
  }
};

const ContactPage: React.FC = () => {
  const shareUrl = "https://www.polarcode.solutions/kontakt";
  const title = "Kontakt oss for tilbud og info | PolarCode Solutions";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "headline": title,
    "description": "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
    "image": "https://www.polarcode.solutions/images/logo/croppedPolarLogo.png",
    "author": {
      "@type": "Organization",
      "name": "PolarCode Solutions",
      "logo": "https://www.polarcode.solutions/images/logo/croppedPolarLogo.png"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PolarCode Solutions",
      "logo": "https://www.polarcode.solutions/images/logo/croppedPolarLogo.png"
    },
    "url": shareUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    }
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
        <meta property="og:title" content="Kontakt Oss for tilbud og info | PolarCode Solutions" />
        <meta
          property="og:description"
          content="Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg."
        />
        <meta property="og:url" content="https://www.polarcode.solutions/kontakt" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.polarcode.solutions/images/logo/croppedPolarLogo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="PolarCode Solutions logo" />
        <meta property="fb:app_id" content="1345767586400332" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
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
      </Head>

      <Breadcrumb
        pageName="Kontakt oss for tilbud og informasjon"
        description="Send oss en melding, e-post eller ring oss. Vi er her for å hjelpe deg."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
