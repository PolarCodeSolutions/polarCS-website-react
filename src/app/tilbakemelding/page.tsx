"use strict";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ReviewForm from "@/components/ReviewForm";
import { Metadata } from "next";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Gi oss din tilbakemelding | PolarCode Solutions",
  description: "Del din opplevelse med oss hos PolarCode Solutions. Din tilbakemelding hjelper oss med å forbedre våre tjenester og produkter.",
  keywords: "tilbakemelding, kundeomtaler, referanser, PolarCode Solutions, kvalitet, kundeservice",
  openGraph: {
    type: "website",
    title: "Gi oss din tilbakemelding | PolarCode Solutions",
    description: "Del din opplevelse med oss hos PolarCode Solutions. Din tilbakemelding hjelper oss med å forbedre våre tjenester og produkter.",
    url: "https://polarcode.solutions/tilbakemelding",
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
    canonical: "https://polarcode.solutions/tilbakemelding"
  }
};

const FeedbackPage: React.FC = () => {
  const shareUrl = "https://polarcode.solutions/tilbakemelding";
  const title = "Gi oss din tilbakemelding | PolarCode Solutions";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ReviewAction",
    "headline": title,
    "description": "Del din opplevelse med oss hos PolarCode Solutions. Din tilbakemelding hjelper oss med å forbedre våre tjenester og produkter.",
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
        pageName="Gi oss din tilbakemelding og hjelp oss å bli bedre"
        description="Del din opplevelse med oss. Din tilbakemelding hjelper oss med å forbedre våre produkter og tjenester."
      />


      {/* Bruk ReviewForm for å samle inn kundeomtaler */}
      <ReviewForm
        formTitle="Din tilbakemelding betyr mye for oss!"
        formDescription="Vi setter stor pris på din tilbakemelding om din opplevelse med oss. Vennligst fyll ut skjemaet nedenfor."
        fields={[
          { label: "Hvordan var din opplevelse med oss?", type: "textarea", name: "productQuality" },
          { label: "Vil du anbefale oss til andre?", type: "radio", name: "recommend", options: ["Ja", "Nei"] },
          { label: "Navn/Bedrift", type: "text", name: "company" },
          { label: "Deres Nettside", type: "text", name: "website" }
        ]}
        submitButtonText="Send tilbakemelding"
      />
    </>
  );
};

export default FeedbackPage;
