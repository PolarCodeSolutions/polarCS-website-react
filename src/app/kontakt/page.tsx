import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Head from 'next/head';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt Oss for tilbud og info | PolarCode Solutions",
  description: "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
  // other metadata
};

const ContactPage: React.FC = () => {
  return (
    <>
    <Head>
    <title>Kontakt Oss for tilbud og info | PolarCode Solutions</title>
    <meta name="description" content="Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg." />
    <meta name="keywords" content="kontakt, webdesign, programvareutvikling, PolarCode Solutions, tilbud, informasjon" />
    <meta property="og:title" content="Kontakt Oss for tilbud og info | PolarCode Solutions" />
    <meta property="og:description" content="Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg." />
    <meta property="og:image" content="URL til bilde" />
    <meta property="og:url" content="https://polarcode.solutions/kontakt" />
  </Head>
      <Breadcrumb
        pageName="      "
        description="Send oss en melding, e-post eller ring oss. Vi er her for å hjelpe deg."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
