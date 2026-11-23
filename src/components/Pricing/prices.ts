// Alle priser på nettsiden samlet ett sted. Beløpene er i kroner INKLUDERT 25 % mva.
// Endre her, så oppdateres både pakkekortene og priskalkulatoren.

export type Package = {
  id: string;
  name: string;
  tagline: string;
  setup: number; // oppstart (engangs)
  monthly: number; // per måned
  features: string[];
  highlight?: boolean;
};

export type AddOn = {
  id: string;
  name: string;
  description: string;
  setup?: number; // engangs
  monthly?: number; // per måned
  onlyFor?: string[]; // pakke-id-er tillegget gjelder for (tom = alle)
};

export const PACKAGES: Package[] = [
  {
    id: "nettside",
    name: "Nettside",
    tagline: "For håndverkere, butikker og små bedrifter som vil bli funnet og kontaktet.",
    setup: 1990,
    monthly: 249,
    features: [
      "Ferdig, moderne design tilpasset din bedrift",
      "Rediger tekst, bilder og sider selv i portalen",
      "Kontaktskjema rett til e-posten din",
      "Fungerer på mobil, nettbrett og PC",
      "Drift på to datasentre og løpende oppdateringer",
    ],
  },
  {
    id: "forening",
    name: "Forening og arrangement",
    tagline: "For lag, foreninger og arrangører som har mye å fortelle og noe å selge billetter til.",
    setup: 2990,
    monthly: 449,
    highlight: true,
    features: [
      "Alt i Nettside",
      "Nyheter og blogg",
      "Arrangementer med påmelding og billettsalg",
      "Nyhetsbrev til medlemmer og publikum",
      "Sponsorer og samarbeidspartnere",
    ],
  },
  {
    id: "nettbutikk",
    name: "Nettbutikk",
    tagline: "For deg som vil selge varer på nett med Vipps, kort og Klarna.",
    setup: 4990,
    monthly: 699,
    features: [
      "Alt i Nettside",
      "Produkter med varianter, lager og frakt",
      "Kasse med Vipps, kort og Klarna",
      "Rabattkoder, ordrer, fraktvarsel og salgsstatistikk",
    ],
  },
];

export const CUSTOM = {
  name: "Skreddersydd",
  tagline: "Eget design fra bunnen av, egne funksjoner eller kobling mot systemene dere allerede bruker.",
  from: 25000,
  features: [
    "Alt fra pakkene etter behov",
    "Design laget kun for dere",
    "Egne funksjoner og integrasjoner",
    "Fast pris etter en gratis gjennomgang",
  ],
};

export const ADDONS: AddOn[] = [
  {
    id: "design",
    name: "Tilpasset design",
    description: "Vi tilpasser farger, typografi og oppsett til logoen og profilen deres.",
    setup: 4990,
  },
  {
    id: "flytting",
    name: "Flytting av innhold",
    description: "Vi flytter tekst og bilder fra den gamle nettsiden, så dere slipper.",
    setup: 1990,
  },
  {
    id: "opplaering",
    name: "Opplæring",
    description: "En times gjennomgang av portalen med oss, på video eller hos dere.",
    setup: 990,
  },
  {
    id: "innholdshjelp",
    name: "Innholdshjelp",
    description: "Send oss endringene, så legger vi dem inn. Inntil 1 time per måned.",
    monthly: 690,
  },
];

export const formatKr = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
