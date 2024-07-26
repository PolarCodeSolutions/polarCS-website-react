import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Head from 'next/head';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Om Oss | PolarCode Solutions</title>
        <meta name="description" content="Lær mer om PolarCode Solutions, vårt team, og vår ekspertise innen webdesign og programvareutvikling. Utforsk vår historie og verdier." />
        <meta name="keywords" content="Om oss, PolarCode Solutions, webdesign, programvareutvikling, team, ekspertise, historie, verdier" />
        <meta property="og:title" content="Om Oss | PolarCode Solutions" />
        <meta property="og:description" content="Lær mer om PolarCode Solutions, vårt team, og vår ekspertise innen webdesign og programvareutvikling. Utforsk vår historie og verdier." />
        <meta property="og:image" content="URL til bilde" />
        <meta property="og:url" content="https://polarcode.solutions/om-oss" />
      </Head>
      <Breadcrumb
        pageName=""
        description="Vi ser for oss en verden hvor teknologi er tilgjengelig, åpen og tilpasset alles behov. Vår visjon er å være en sterk bidragsyter innen utvikling av innovative og brukervennlige teknologiske løsninger som forbedrer menneskers liv og virksomheter. Vi jobber mot å skape en fremtid hvor samarbeid og åpen kildekode fremmer bærekraftig utvikling og gir alle muligheten til å bidra og dra nytte av teknologiske fremskritt."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
