import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt Oss for tilbud og info | PolarCode Solutions",
  description: "Kontakt PolarCode Solutions for informasjon om våre tjenester innen webdesign og programvareutvikling. Vi er her for å hjelpe deg.",
  // other metadata
};


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="      "
        description="Send oss en melding, e-post eller ring oss. Vi er her for å hjelpe deg."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
