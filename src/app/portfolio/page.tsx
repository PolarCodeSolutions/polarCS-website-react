"use strict";
import ServiceList from "@/components/Portfolio/PortfolioList";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
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
