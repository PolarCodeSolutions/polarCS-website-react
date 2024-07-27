import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions"),
  title: "Om Oss | PolarCode Solutions",
  description: "Lær mer om PolarCode Solutions, vårt team, og vår ekspertise innen webdesign og programvareutvikling. Utforsk vår historie og verdier.",
  keywords: "Om oss, PolarCode Solutions, webdesign, programvareutvikling, team, ekspertise, historie, verdier",
  openGraph: {
    type: "website",
    title: "Om Oss | PolarCode Solutions",
    description: "Lær mer om PolarCode Solutions, vårt team, og vår ekspertise innen webdesign og programvareutvikling. Utforsk vår historie og verdier.",
    url: "https://polarcode.solutions/om-oss",
    images: [
      {
        url: "URL til bilde",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions logo"
      }
    ]
  },
  alternates: {
    canonical: "https://polarcode.solutions/om-oss"
  }
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hvem er PolarCode Solutions?"
        description="Vi ser for oss en verden hvor teknologi er tilgjengelig, åpen og tilpasset alles behov. Vår visjon er å være en sterk bidragsyter innen utvikling av innovative og brukervennlige teknologiske løsninger som forbedrer menneskers liv og virksomheter. Vi jobber mot å skape en fremtid hvor samarbeid og åpen kildekode fremmer bærekraftig utvikling og gir alle muligheten til å bidra og dra nytte av teknologiske fremskritt."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
