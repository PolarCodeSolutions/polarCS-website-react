"use strict";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Kontakt Oss for tilbud og info | PolarCode Solutions",
  description: "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
  keywords: "kontakt, webdesign, programvareutvikling, PolarCode Solutions, tilbud, informasjon",
  openGraph: {
    type: "website",
    title: "Kontakt Oss for tilbud og info | PolarCode Solutions",
    description: "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
    url: "https://polarcode.solutions/kontakt",
    images: [
      {
        url: "https://polarcode.solutions/images/logo/croppedPolarLogo.png",
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
  const shareUrl = "https://polarcode.solutions/kontakt";
  const title = "Kontakt oss for tilbud og info | PolarCode Solutions";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "headline": title,
    "description": "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
    "image": "https://polarcode.solutions/images/logo/croppedPolarLogo.png",
    "author": {
      "@type": "Organization",
      "name": "PolarCode Solutions",
      "logo": "https://polarcode.solutions/images/logo/croppedPolarLogo.png"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PolarCode Solutions",
      "logo": "https://polarcode.solutions/images/logo/croppedPolarLogo.png"
    },
    "url": shareUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Kontakt oss for tilbud og informasjon"
        description="Send oss en melding, e-post eller ring oss. Vi er her for å hjelpe deg."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
