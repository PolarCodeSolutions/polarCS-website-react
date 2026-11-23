// Leverandører som behandler personopplysninger. Brukes i personvernerklæringen og databehandleravtalen,
// så listene er like begge steder. Endringer i SUBPROCESSORS skal varsles kundene 30 dager i forveien
// (databehandleravtalen pkt. 7).
export type Vendor = { name: string; purpose: string; location: string };

/** Våre underleverandører (underdatabehandlere) for plattformen og kundenes nettsider. */
export const SUBPROCESSORS: Vendor[] = [
  {
    name: "Cloudflare",
    purpose: "DNS, beskyttelse mot angrep og levering av nettsidene. Ser IP-adressen til besøkende.",
    location: "Globalt (EU-standardkontrakter og EU–US Data Privacy Framework)",
  },
  {
    name: "Namecheap (Private Email)",
    purpose: "Sender e-post fra plattformen når kunden ikke har egen e-postprofil, for eksempel ordrebekreftelser og billetter",
    location: "USA (databehandleravtale og EU-standardkontrakter)",
  },
];

/** Tjenester kunden selv inngår avtale med. Kunden får data direkte fra dem; de er ikke våre underleverandører. */
export const CUSTOMER_VENDORS: Vendor[] = [
  { name: "Vipps MobilePay", purpose: "Betaling i nettbutikker og billettsalg", location: "Norge / EØS" },
  { name: "Stripe", purpose: "Kortbetaling og Klarna i nettbutikker og billettsalg", location: "EØS / USA (Data Privacy Framework)" },
  { name: "Fiken", purpose: "Regnskap", location: "Norge" },
];

/** Leverandører bare for polarcode.solutions (der vi selv er behandlingsansvarlig). */
export const OWN_SITE_VENDORS: Vendor[] = [
  {
    name: "Web3Forms",
    purpose: "Videresender meldinger fra kontakt- og tilbakemeldingsskjemaet på polarcode.solutions til vår e-post",
    location: "India / utenfor EØS (databehandleravtale og EU-standardkontrakter)",
  },
];

const rows = (list: Vendor[]) => list.map((s) => [s.name, s.purpose, s.location]);
export const SUBPROCESSOR_ROWS = rows(SUBPROCESSORS);
export const CUSTOMER_VENDOR_ROWS = rows(CUSTOMER_VENDORS);
export const OWN_SITE_VENDOR_ROWS = rows(OWN_SITE_VENDORS);
