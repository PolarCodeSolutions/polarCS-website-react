import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BrowserFrame, FeatureRow, Feature } from "@/components/Showcase";

const PORTAL_URL = "https://portal.polarcode.solutions";
const URL_ = "https://polarcode.solutions/portalen";
const TITLE = "PolarCode-portalen – styr nettsiden, arrangementer og nettbutikken selv";
const DESCRIPTION =
  "Logg inn i PolarCode-portalen, eller se hva den kan: sider og innlegg, arrangementer med påmelding og billetter, nyhetsbrev, sponsorer, nettbutikk med Vipps og kort, statistikk og personvern – alt på ett sted.";

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: "PolarCode portal, logg inn PolarCode, publiseringsløsning, CMS, nettside forening, nettbutikk Vipps, billettsystem, nyhetsbrev, PolarCode",
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: URL_,
    images: [{ url: "https://polarcode.solutions/images/portalen/oversikt.webp", width: 1440, height: 900, alt: "PolarCode-portalen" }],
  },
  alternates: { canonical: URL_ },
};

const HIGHLIGHTS = [
  { icon: "🧭", title: "Enkel å bruke", text: "Laget for folk uten teknisk bakgrunn. Skriv, last opp og publiser – ferdig." },
  { icon: "📱", title: "Fungerer på mobil", text: "Svar på en påmelding eller send en ordre fra telefonen." },
  { icon: "🌐", title: "Norsk og engelsk", text: "Hele portalen på norsk eller engelsk – du velger." },
  { icon: "🔒", title: "Personvern innebygd", text: "Databehandleravtale, innsyn og sletting for kundene dine." },
];

const FEATURES: Feature[] = [
  {
    eyebrow: "Innhold",
    title: "Sider, innlegg og bilder – rett på nettsiden",
    text: "Endre teksten på forsiden, legg ut en nyhet eller bytt bildet i toppen. Det du publiserer i portalen, vises på nettsiden med en gang.",
    points: ["Bygg sider med overskrifter, tekst, bilder og lenker", "Blogger og nyheter med utkast og publisering", "Bildebibliotek for alt du laster opp"],
    image: "/images/portalen/sider.webp", alt: "Sider i PolarCode-portalen",
  },
  {
    eyebrow: "Arrangementer",
    title: "Påmelding uten regneark",
    text: "Lag et arrangement, velg om folk skal melde seg på, kjøpe billett eller bare møte opp – og la nettsiden gjøre resten. Påmeldingene havner rett i oversikten.",
    points: ["Påmeldingsskjema med dine egne spørsmål", "Maks antall deltakere og automatisk stengt når det er fullt", "Bekreftelse og e-post til alle påmeldte", "Last ned deltakerlisten som CSV"],
    image: "/images/portalen/arrangement-pameldte.webp", alt: "Påmeldte til et arrangement",
  },
  {
    eyebrow: "Billetter",
    title: "Selg billetter og sjekk inn i døra",
    text: "Billetter med QR-kode selges på nettsiden med Vipps eller kort, og vaktene skanner dem med appen PolarTQR. Du følger med på hvor mange som er inne, mens dørene er åpne.",
    points: ["Gratis og betalte billettyper, fribilletter til sponsorer", "Eget billettdesign med logo og farger, PDF-billett", "Flere innganger og billetter gjestene kan gi videre trygt"],
    image: "/images/portalen/arrangement-billetter.webp", alt: "Billettoversikt for et arrangement",
    link: { href: "/polartqr", label: "Les mer om billetter og PolarTQR" },
  },
  {
    eyebrow: "Nyhetsbrev",
    title: "Nå medlemmene og kundene dine direkte",
    text: "Folk melder seg på nyhetsbrevet fra nettsiden, og du skriver og sender fra portalen. Avmelding håndteres automatisk.",
    points: ["Abonnentliste du kan søke i og laste ned", "Velkomst-e-post til nye abonnenter", "Sendes fra din egen e-postadresse"],
    image: "/images/portalen/nyhetsbrev.webp", alt: "Nyhetsbrev i PolarCode-portalen",
  },
  {
    eyebrow: "Sponsorer",
    title: "Vis fram sponsorene – i riktig rekkefølge",
    text: "Legg inn sponsorer med logo, nivå og avtaleperiode. Nettsiden viser dem automatisk, og de forsvinner av seg selv når avtalen er slutt.",
    points: ["Hovedsponsor, gull, sølv, bronse og samarbeidspartnere", "Avtaleperiode med start og slutt", "Bestem rekkefølgen selv"],
    image: "/images/portalen/sponsorer.webp", alt: "Sponsorer i PolarCode-portalen",
  },
  {
    eyebrow: "Nettbutikk",
    title: "En komplett nettbutikk du styrer selv",
    text: "Produkter med varianter, bilder og lager, og ordrer som kommer rett inn i portalen. Registrer sendinger, returer og refusjoner på ett sted.",
    points: ["Produkter, varianter, kategorier og anbefalte produkter", "Ordrer, kunder og forlatte handlekurver", "Frakt, returer, fakturaer og refusjoner", "Rabattkoder og affiliate-salg"],
    image: "/images/portalen/produkt.webp", alt: "Produkt i nettbutikken",
  },
  {
    eyebrow: "Betaling",
    title: "Vipps, kort og Klarna – koblet til på minutter",
    text: "Lim inn nøklene fra Vipps og Stripe, så tester vi dem og setter opp resten automatisk. Pengene går rett til din konto.",
    points: ["Vipps MobilePay og Stripe (kort, Klarna, Apple Pay, Google Pay)", "Testmodus før du går live", "Betalte ordrer kan sendes automatisk til Fiken"],
    image: "/images/portalen/betaling.webp", alt: "Betalingsløsninger i PolarCode-portalen",
  },
  {
    eyebrow: "Statistikk",
    title: "Se hvordan det går",
    text: "Omsetning, ordrer, bestselgere og betalingsmåter for de siste 7 dagene, 30 dagene eller året – uten å eksportere noe.",
    points: ["Omsetning over tid", "Bestselgende produkter", "Fordeling på betalingsmåter og rabattkoder"],
    image: "/images/portalen/statistikk.webp", alt: "Salgsstatistikk",
  },
  {
    eyebrow: "Personvern",
    title: "GDPR uten hodebry",
    text: "Personvernerklæring og salgsvilkår bygges av firmaopplysningene dine, og du kan svare på innsyn og sletting med noen få trykk.",
    points: ["Databehandleravtale med PolarCode", "Finn og eksporter alt om en person", "Slett opplysninger med kvittering"],
    image: "/images/portalen/personvern.webp", alt: "Personvernverktøy i PolarCode-portalen",
  },
];

const FAQ = [
  { q: "Hvordan logger jeg inn?", a: "Gå til portal.polarcode.solutions og logg inn med e-postadressen og passordet du fikk da du ble kunde. Lagre siden som bokmerke, så finner du den lett igjen." },
  { q: "Jeg har glemt passordet", a: "Trykk «Glemt passordet?» på innloggingssiden, så får du en lenke på e-post for å lage et nytt." },
  { q: "Kan jeg ha flere nettsider i samme portal?", a: "Ja. Alle nettstedene dine ligger under samme innlogging, og du bytter mellom dem øverst i portalen." },
  { q: "Finnes det en brukermanual?", a: "Ja. Brukermanualen ligger i portalen (også som PDF), med bilder og steg-for-steg-forklaringer. Finner du ikke svaret, sender du en sak under «Hjelp og support»." },
  { q: "Kan vi bruke portalen med en nettside vi har laget selv?", a: "Ja. Nettsiden henter innholdet fra PolarCode sitt API, så utviklere kan lage sin egen nettside og la portalen styre innholdet." },
  { q: "Hva koster det?", a: "Det avhenger av hvilken nettside og hvilke tillegg dere trenger. Ta kontakt, så finner vi en løsning som passer." },
];

export default function PortalPage() {
  return (
    <>
      {/* Toppen */}
      <section className="overflow-hidden pb-14 pt-[140px] md:pb-20 md:pt-[160px]">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">PolarCode-portalen</span>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl md:leading-tight">
              Hele nettsiden din.<br />Ett sted å styre den.
            </h1>
            <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
              Sider, arrangementer, billetter, nyhetsbrev, sponsorer og nettbutikk – alt endres i portalen, og nettsiden oppdateres med en gang.
              Ingen koding, ingen venting på oss.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={PORTAL_URL} className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-primary/90">
                Logg inn i portalen
              </a>
              <Link href="/kontakt" className="rounded-md border border-body-color/30 px-8 py-4 text-base font-semibold text-black transition hover:border-primary hover:text-primary dark:border-white/20 dark:text-white">
                Bli kunde
              </Link>
            </div>
            <p className="mt-4 text-sm text-body-color dark:text-body-color-dark">Allerede kunde? Lagre <a href={PORTAL_URL} className="text-primary underline">portal.polarcode.solutions</a> som bokmerke.</p>
          </div>
          <div className="mx-auto max-w-[1100px]">
            <BrowserFrame src="/images/portalen/oversikt.webp" alt="Oversikten for et nettsted i PolarCode-portalen" priority />
          </div>
        </div>
      </section>

      {/* Høydepunkter */}
      <section className="bg-gray-light py-14 dark:bg-bg-color-dark">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="text-center">
                <div className="mb-3 text-4xl" aria-hidden="true">{h.icon}</div>
                <h2 className="mb-2 text-lg font-bold text-black dark:text-white">{h.title}</h2>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funksjoner */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mx-auto mb-6 max-w-[700px] text-center">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">Dette kan du gjøre i portalen</h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Du får bare det nettsiden din trenger – en forening får arrangementer og sponsorer, en butikk får kasse og ordrer. Her er et utvalg.
            </p>
          </div>
          {FEATURES.map((f, i) => <FeatureRow key={f.title} f={f} flip={i % 2 === 1} />)}
        </div>
      </section>

      {/* Flere nettsteder + hjelp */}
      <section className="bg-gray-light py-14 dark:bg-bg-color-dark md:py-20">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <BrowserFrame src="/images/portalen/dashboard.webp" alt="Alle nettstedene samlet i portalen" />
            </div>
            <div className="mt-10 w-full px-4 lg:mt-0 lg:w-1/2 lg:pl-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">Alt samlet – og hjelp når du trenger det</h2>
              <ul className="space-y-5">
                <li><h3 className="text-lg font-bold text-black dark:text-white">Alle nettstedene på ett sted</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">Har du både nettside og nettbutikk, bytter du mellom dem med ett trykk.</p></li>
                <li><h3 className="text-lg font-bold text-black dark:text-white">Brukermanual med bilder</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">Steg-for-steg for alt portalen kan, rett i portalen og som PDF. Du får beskjed når den er oppdatert.</p></li>
                <li><h3 className="text-lg font-bold text-black dark:text-white">Support fra folk du kjenner</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">Send en sak fra portalen, så svarer vi – og du får beskjed på e-post.</p></li>
                <li><h3 className="text-lg font-bold text-black dark:text-white">Driftet på to steder</h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">Nettsiden og portalen kjører på to driftssteder med automatisk omkobling hvis det ene får problemer.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spørsmål og svar */}
      <section className="py-14 md:py-20">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">Spørsmål og svar</h2>
          <div className="mx-auto max-w-[800px] divide-y divide-body-color/10 dark:divide-white/10">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-black dark:text-white">
                  {f.q}<span className="ml-4 text-primary transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-body-color dark:text-body-color-dark">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Avslutning */}
      <section className="pb-20">
        <div className="container">
          <div className="mx-auto max-w-[900px] rounded-lg bg-primary px-8 py-12 text-center text-white shadow-two md:px-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Klar til å ta styringen over nettsiden?</h2>
            <p className="mx-auto mb-8 max-w-[600px] text-base text-white/90">Vi setter opp nettsiden og portalen for dere, og viser dere hvordan alt fungerer.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="rounded-md bg-white px-8 py-4 text-base font-semibold text-primary shadow-md transition hover:bg-white/90">Ta kontakt</Link>
              <a href={PORTAL_URL} className="rounded-md border border-white/60 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">Logg inn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
