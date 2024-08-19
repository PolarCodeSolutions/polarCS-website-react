"use strict";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Head from 'next/head';

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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="https://polarcode.solutions/images/favicon.png" />
        <link rel="apple-touch-icon" href="https://polarcode.solutions/images/logo/croppedPolarLogo.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Om Oss | PolarCode Solutions" />
        <meta
          property="og:description"
          content="Lær mer om PolarCode Solutions, vårt team, og vår ekspertise innen webdesign og programvareutvikling. Utforsk vår historie og verdier."
        />
        <meta property="og:url" content="https://polarcode.solutions/om" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://polarcode.solutions/images/about/barekraft.webp" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="PolarCode Solutions bærekraft og teknologi image" />
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
        pageName="Innovativ Teknologi og Bærekraftige Løsninger gjennom Åpen Kildekode"
        description="Vi ser for oss en verden hvor teknologi er tilgjengelig, åpen og tilpasset alles behov. Vår visjon er å være en sterk bidragsyter innen utvikling av innovative og brukervennlige teknologiske løsninger som forbedrer menneskers liv og virksomheter. Vi jobber mot å skape en fremtid hvor samarbeid og åpen kildekode fremmer bærekraftig utvikling og gir alle muligheten til å bidra og dra nytte av teknologiske fremskritt."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
