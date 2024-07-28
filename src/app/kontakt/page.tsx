"use strict";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polarcode.solutions/"),
  title: "Kontakt Oss for tilbud og info | PolarCode Solutions",
  description: "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
  keywords: "kontakt, webdesign, programvareutvikling, PolarCode Solutions, tilbud, informasjon",
  openGraph: {
    type: "website",
    title: "Kontakt Oss for tilbud og info | PolarCode Solutions",
    description: "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
    url: "https://www.polarcode.solutions/kontakt",
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
    canonical: "https://www.polarcode.solutions/kontakt"
  }
};

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="https://polarcode.solutions/images/favicon.png" />

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
        pageName="Kontakt oss for tilbud og informasjon"
        description="Send oss en melding, e-post eller ring oss. Vi er her for å hjelpe deg."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
