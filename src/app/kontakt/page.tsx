import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt oss",
  description: "Kontakt oss informasjon",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kontakt side"
        description="Send oss en melding, e-post eller ring oss. Vi er her for å hjelpe deg."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
