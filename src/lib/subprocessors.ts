// Underleverandører (underdatabehandlere). Brukes i personvernerklæringen og databehandleravtalen,
// så listen er lik begge steder. Endringer skal varsles kundene 30 dager i forveien (databehandleravtalen pkt. 7).
export type Subprocessor = { name: string; purpose: string; location: string };

export const SUBPROCESSORS: Subprocessor[] = [
  {
    name: "Cloudflare",
    purpose: "DNS, beskyttelse mot angrep og levering av nettsidene. Ser IP-adressen til besøkende.",
    location: "Globalt (EU-standardkontrakter og EU–US Data Privacy Framework)",
  },
  {
    name: "Web3Forms",
    purpose: "Videresender meldinger fra skjemaene på polarcode.solutions til vår e-post",
    location: "Utenfor EØS (EU-standardkontrakter)",
  },
  {
    name: "Namecheap (Private Email)",
    purpose: "Sender e-post fra plattformen, for eksempel ordrebekreftelser og billetter",
    location: "USA / EU",
  },
  { name: "Vipps MobilePay", purpose: "Betaling i nettbutikker og billettsalg", location: "Norge / EØS" },
  {
    name: "Stripe",
    purpose: "Kortbetaling og Klarna i nettbutikker og billettsalg",
    location: "EØS / USA (Data Privacy Framework)",
  },
  { name: "Fiken", purpose: "Regnskap – bare hvis kunden selv kobler til", location: "Norge" },
];

export const SUBPROCESSOR_ROWS = SUBPROCESSORS.map((s) => [s.name, s.purpose, s.location]);
