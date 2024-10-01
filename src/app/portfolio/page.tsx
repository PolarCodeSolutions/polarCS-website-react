"use strict";
import ServiceList from "@/components/Portfolio/PortfolioList";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Vår portfolio | PolarCode Solutions",
  description: "Se gjennom våre eksempelsider innen webdesign og apputvikling. Vi tilbyr løsninger skreddersydd til din bedrifts behov.",
  keywords: "webdesign, apputvikling, PolarCode Solutions",
  openGraph: {
    type: "website",
    title: "Vår portefølje | PolarCode Solutions",
    description: "Vi tilbyr innovative løsninger innen webutvikling, design og programvareutvikling.",
    url: "https://polarcode.solutions/portfolio",
    images: [
      {
        url: "https://polarcode.solutions/images/portfolio/portfolio_preview.webp",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions portfolio"
      }
    ]
  },
  alternates: {
    canonical: "https://polarcode.solutions/portfolio",
  }
};

const ServicesPage: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PolarCode Solutions",
    "url": "https://polarcode.solutions",
    "logo": "https://polarcode.solutions/images/logo/croppedPolarLogo.png",
    "description": "Vi leverer tjenester innen webdesign, utvikling og vedlikehold.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+47 95 04 45 86",
      "contactType": "Customer Service"
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="/images/favicon.png" />
        <meta property="og:title" content="portfolio | PolarCode Solutions" />
        <meta property="og:description" content="Utforsk hvordan vi kan hjelpe din bedrift med webutvikling og digitale løsninger." />
        <meta property="og:url" content="https://polarcode.solutions/portfolio" />
        <meta property="og:image" content="https://polarcode.solutions/images/portfolio/portfolio_preview.webp" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Breadcrumb
        pageName="Utforsk våre tidligere prosjekter"
        description="På denne siden finner du eksempler på tidligere prosjekter vi har jobbet med. Utforsk våre tjenester og se hva vi kan tilby din bedrift."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <ServiceList />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
