"use strict";
import ServiceList from "@/components/Services/ServiceList";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Design eksempler | PolarCode Solutions",
  description: "Se gjennom våre eksempelsider innen webdesign og apputvikling. Vi tilbyr løsninger skreddersydd til din bedrifts behov.",
  keywords: "webdesign, apputvikling, PolarCode Solutions",
  openGraph: {
    type: "website",
    title: "Design eksempler | PolarCode Solutions",
    description: "Vi tilbyr innovative løsninger innen webutvikling, design og programvareutvikling.",
    url: "https://polarcode.solutions/eksempler",
    images: [
      {
        url: "https://polarcode.solutions/images/eksempler/preview.webp",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions eksempler"
      }
    ]
  },
  alternates: {
    canonical: "https://polarcode.solutions/eksempler",
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
        pageName="Ta en titt på våre eksempel sider"
        description="Bla gjennom og se om du finner noe som kan passe for din bedrift"
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
