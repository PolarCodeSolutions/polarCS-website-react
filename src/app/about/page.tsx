import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss | Informasjon om selskapet",
  description: "Denne siden inneholder informasjon om selskapet",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="  "
        description="Visjon: Vi ser for oss en verden hvor teknologi er tilgjengelig, åpen og tilpasset alles behov. Vår visjon er å være en sterk bidragsyter innen utvikling av innovative og brukervennlige teknologiske løsninger som forbedrer menneskers liv og virksomheter. Vi jobber mot å skape en fremtid hvor samarbeid og åpen kildekode fremmer bærekraftig utvikling og gir alle muligheten til å bidra og dra nytte av teknologiske fremskritt."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
