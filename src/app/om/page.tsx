"use strict";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Om Oss | PolarCode Solutions",
  description: "Lær mer om PolarCode Solutions, vårt team, og vår ekspertise innen webdesign og programvareutvikling. Utforsk vår historie og verdier.",
  keywords: "Om oss, PolarCode Solutions, webdesign, programvareutvikling, team, ekspertise, historie, verdier",
  openGraph: {
    type: "website",
    title: "Om Oss | PolarCode Solutions",
    description: "Lær mer om PolarCode Solutions, vårt team, og vår ekspertise innen webdesign og programvareutvikling. Utforsk vår historie og verdier.",
    url: "https://polarcode.solutions/om",
    images: [
      {
        url: "https://polarcode.solutions/images/about/barekraft.webp",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions bærekraft og teknologi image",
      }
    ]
  },
  alternates: {
    canonical: "https://polarcode.solutions/om"
  }
};

const AboutPage: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PolarCode Solutions",
    "url": "https://polarcode.solutions",
    "logo": "https://polarcode.solutions/logo.png",
    "description": "Lær mer om PolarCode Solutions, vårt team, og vår ekspertise innen webdesign og programvareutvikling. Utforsk vår historie og verdier.",
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
      <Breadcrumb
        pageName="Innovativ Teknologi og Bærekraftige Løsninger gjennom Åpen Kildekode"
        description="Vi ser for oss en verden hvor teknologi er tilgjengelig, åpen og tilpasset alles behov. Vår visjon er å være en sterk bidragsyter innen utvikling av innovative og brukervennlige teknologiske løsninger som forbedrer menneskers liv og virksomheter. Vi jobber mot å skape en fremtid hvor samarbeid og åpen kildekode fremmer bærekraftig utvikling og gir alle muligheten til å bidra og dra nytte av teknologiske fremskritt."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      
    </>
  );
};

export default AboutPage;
