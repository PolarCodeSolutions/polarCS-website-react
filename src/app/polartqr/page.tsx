import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { PLAY_URL, isLaunched } from "@/lib/polartqr";
import { FeatureRow, Feature } from "@/components/Showcase";

const URL_ = "https://polarcode.solutions/polartqr";
const TITLE = "PolarTQR – billetter og billettkontroll | PolarCode Solutions";
const DESCRIPTION =
  "Selg billetter på nettsiden med Vipps eller kort, og sjekk inn gjestene i døra med appen PolarTQR. QR-billett på e-post, flere innganger, fribilletter og billetter gjestene kan gi videre.";

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: "billettsystem, billettkontroll, QR-billett, billetter forening, billettsalg Vipps, skanne billetter app, PolarTQR, PolarCode",
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: URL_,
    images: [{ url: "https://polarcode.solutions/images/tjenester/polartqr.webp", width: 800, height: 600, alt: "PolarTQR" }],
  },
  alternates: { canonical: URL_ },
};

const STEPS = [
  { n: "1", title: "Lag arrangementet", text: "I PolarCode-portalen velger du om folk skal melde seg på eller kjøpe billett, og lager billettypene – gratis eller betalt." },
  { n: "2", title: "Gjestene får billetten", text: "Billetten kjøpes på nettsiden med Vipps eller kort, og kommer på e-post med QR-kode og som PDF – med deres logo og farger." },
  { n: "3", title: "Skann i døra", text: "Vaktene logger inn i PolarTQR og skanner QR-koden. Grønt slipper inn, rødt stopper – og telleren viser hvor mange som er inne." },
];

const FEATURES = [
  { icon: "🎫", title: "Billettsalg på nettsiden", text: "Vipps og kort, gratisbilletter og flere billettyper med eget antall og salgsperiode." },
  { icon: "🎨", title: "Deres eget billettdesign", text: "Logo, farger, praktisk informasjon og kontaktinfo på e-posten og PDF-billetten." },
  { icon: "📱", title: "Skanning med telefonen", text: "Vaktene bruker sin egen Android-telefon. Tydelig grønt og rødt resultat, også i mørket." },
  { icon: "🚪", title: "Flere innganger", text: "Bestem hvilke billettyper som slipper inn hvor. Feil inngang? Appen sier hvor gjesten skal gå." },
  { icon: "🔁", title: "Billetter som byttes trygt", text: "Gjester kan gi billetten videre. Den nye eieren får ny QR-kode – gamle skjermbilder slipper ikke inn." },
  { icon: "🎁", title: "Fribilletter og sponsorer", text: "Del ut billetter til sponsorer, gjester og frivillige rett fra portalen." },
  { icon: "📝", title: "Påmelding med billett", text: "Still spørsmål i påmeldingsskjemaet og sjekk inn de påmeldte i døra med QR-kode." },
  { icon: "📊", title: "Oversikt i sanntid", text: "Se hvor mange som er sjekket inn, per billettype, mens dørene er åpne." },
];


const PORTAL_FEATURES: Feature[] = [
  {
    eyebrow: "I portalen",
    title: "Følg med mens dørene er åpne",
    text: "Billettoversikten viser hvor mange som er sjekket inn, per billettype, og oppdateres automatisk. Herfra deler du også ut fribilletter, sender billetter på nytt og bytter innehaver.",
    points: ["Innsjekket, utstedt og ikke kommet – i sanntid", "Fribilletter til sponsorer, gjester og frivillige", "Endre innehaver eller billettype – med historikk"],
    image: "/images/portalen/arrangement-billetter.webp", alt: "Billettoversikten i PolarCode-portalen",
  },
  {
    eyebrow: "Billettdesign",
    title: "Billetter som ser ut som dere",
    text: "Velg farge og logo, skriv praktisk informasjon og kontaktinfo – og se e-posten mens du skriver. Gjestene får billetten med QR-kode i e-posten og som PDF.",
    points: ["Logo, farger og egne tekster", "PDF-billett som kan skrives ut", "«Min billett»-side der gjesten kan gi billetten videre"],
    image: "/images/portalen/billettdesign.webp", alt: "Billettdesign i PolarCode-portalen",
  },
  {
    eyebrow: "Påmelding med billett",
    title: "Spør om det du trenger – og sjekk inn i døra",
    text: "Bruk påmeldingsskjema med egne spørsmål, og gi de påmeldte en billett med QR-kode. Perfekt for årsmøter, cuper og kurs der dere vil vite hvem som kom.",
    points: ["Påmeldte får billett på e-post automatisk", "Send billett til de som meldte seg på før", "Fjerner du en påmeldt, kanselleres billetten"],
    image: "/images/portalen/arrangement-pameldte.webp", alt: "Påmeldte med billett i PolarCode-portalen",
  },
];

const SHOTS = [
  { src: "/images/polartqr/s1-innlogging.webp", alt: "Innlogging i PolarTQR" },
  { src: "/images/polartqr/s2-velg-arrangement.webp", alt: "Velg arrangement" },
  { src: "/images/polartqr/s3-skanning.webp", alt: "Skanning av QR-billett" },
  { src: "/images/polartqr/s5-velkommen.webp", alt: "Grønt resultat: Velkommen!" },
  { src: "/images/polartqr/s4-gjestesok.webp", alt: "Søk etter gjest" },
];

const FAQ = [
  { q: "Hva trenger vi for å komme i gang?", a: "En nettside fra PolarCode med arrangementer og tillegget «Billetter og billettkontroll». Skal dere selge betalte billetter, kobler dere til Vipps og/eller Stripe i portalen. Ta kontakt, så hjelper vi dere i gang." },
  { q: "Hva koster det?", a: "Billetter og billettkontroll er et tillegg til nettsiden. Ta kontakt for pris – den avhenger av hva dere trenger." },
  { q: "Finnes appen for iPhone?", a: "PolarTQR finnes foreløpig for Android. Vaktene trenger bare en vanlig Android-telefon med kamera og nett." },
  { q: "Hvordan får vaktene tilgang?", a: "Arrangøren inviterer vaktene fra portalen og velger hvilke arrangementer de skal jobbe på. Vakten får en kode på e-post, velger sitt eget passord i appen, og kan bare se arrangementene de har fått tilgang til." },
  { q: "Kan vi selge billetter i døra?", a: "Nei. PolarCode er laget for forhåndssalg på nett. Billetter kjøpes på nettsiden før arrangementet, og appen brukes bare til å sjekke inn." },
  { q: "Hva skjer hvis en gjest har mistet billetten?", a: "Vakten kan søke opp gjesten på navn eller e-post i appen. Gjesten kan også få billetten tilsendt på nytt fra «Min billett»." },
  { q: "Hva med personvern?", a: "Kameraet brukes bare til å lese QR-koder, og bilder lagres ikke. Appen har ingen reklame eller sporing. Les mer i personvernerklæringen." },
];

function PlayButton() {
  if (isLaunched) {
    return (
      <a href={PLAY_URL} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-md bg-black px-6 py-3 text-white shadow-md transition hover:bg-black/80">
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fill="#34A853" d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Z" /><path fill="#FBBC04" d="m16.9 8.5-3.5 3.5 3.5 3.5 4-2.3c.9-.5.9-1.9 0-2.4l-4-2.3Z" /><path fill="#4285F4" d="M13.4 12 3.6 22.2c.3.2.8.2 1.2 0l12.1-6.7-3.5-3.5Z" /><path fill="#EA4335" d="M13.4 12 16.9 8.5 4.8 1.8c-.4-.2-.9-.2-1.2 0L13.4 12Z" /></svg>
        <span className="text-left leading-tight"><span className="block text-xs">Last ned på</span><span className="block text-lg font-semibold">Google Play</span></span>
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-3 rounded-md border border-body-color/30 px-6 py-3 text-body-color dark:border-white/20 dark:text-body-color-dark">
      <span className="text-left leading-tight"><span className="block text-xs">Kommer snart på</span><span className="block text-lg font-semibold">Google Play</span></span>
    </span>
  );
}

export default function PolarTQRPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PolarTQR",
    operatingSystem: "Android",
    applicationCategory: "BusinessApplication",
    description: DESCRIPTION,
    url: URL_,
    publisher: { "@type": "Organization", name: "PolarCode Solutions", url: "https://polarcode.solutions" },
    ...(isLaunched ? { downloadUrl: PLAY_URL } : {}),
    offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" },
  };

  return (
    <>
      {/* Toppen */}
      <section className="pb-16 pt-[140px] md:pb-20 md:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12">
              <div className="mb-6 flex items-center gap-4">
                <img src="/images/polartqr/ikon.png" alt="" width={72} height={72} className="rounded-2xl shadow-md" />
                <span className="text-base font-semibold uppercase tracking-widest text-primary">PolarTQR</span>
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl md:leading-tight">
                Billetter på nettsiden.<br />Kontroll i døra.
              </h1>
              <p className="mb-8 max-w-[600px] text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                Selg billetter på nettsiden med Vipps eller kort, send dem på e-post med QR-kode, og sjekk inn gjestene med appen
                PolarTQR. Alt styres fra PolarCode-portalen – laget for lag, foreninger og arrangører.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PlayButton />
                <Link href="/kontakt" className="rounded-md bg-primary px-7 py-[14px] text-base font-semibold text-white shadow-md transition hover:bg-primary/90">
                  Ta kontakt
                </Link>
              </div>
            </div>
            <div className="mt-12 w-full px-4 lg:mt-0 lg:w-5/12">
              <div className="mx-auto flex max-w-[420px] items-end justify-center gap-4">
                <img src="/images/polartqr/s3-skanning.webp" alt="Skanning av QR-billett i PolarTQR" width={216} height={480}
                  className="w-1/2 rounded-[22px] border-4 border-black shadow-xl" />
                <img src="/images/polartqr/s5-velkommen.webp" alt="Grønt resultat: Velkommen!" width={216} height={480}
                  className="mb-10 w-1/2 rounded-[22px] border-4 border-black shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slik fungerer det */}
      <section className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">Slik fungerer det</h2>
          <div className="-mx-4 flex flex-wrap">
            {STEPS.map((s) => (
              <div key={s.n} className="w-full px-4 md:w-1/3">
                <div className="mb-8 rounded-sm bg-white p-8 shadow-one dark:bg-dark">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">{s.n}</div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{s.title}</h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funksjoner */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">Alt dere trenger til billettene</h2>
          <p className="mx-auto mb-12 max-w-[640px] text-center text-base text-body-color dark:text-body-color-dark">
            Fra første billett er solgt til siste gjest er sjekket inn.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-sm border border-body-color/10 p-6 dark:border-white/10">
                <div className="mb-4 text-3xl" aria-hidden="true">{f.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skjermbilder */}
      <section className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">Appen for vaktene</h2>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 md:justify-center">
            {SHOTS.map((s) => (
              <figure key={s.src} className="w-[200px] flex-none snap-center">
                <img src={s.src} alt={s.alt} width={200} height={444} loading="lazy" className="rounded-[20px] border-4 border-black shadow-lg" />
                <figcaption className="mt-3 text-center text-sm text-body-color dark:text-body-color-dark">{s.alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center"><PlayButton /></div>
        </div>
      </section>

      {/* Portalen */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto mb-4 max-w-[700px] text-center">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">Arrangøren styrer alt i portalen</h2>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Billettyper, vakter, innganger og billettdesign settes opp i PolarCode-portalen – samme sted som resten av nettsiden.{" "}
              <Link href="/portalen" className="text-primary underline">Se hele portalen</Link>.
            </p>
          </div>
          {PORTAL_FEATURES.map((f, i) => <FeatureRow key={f.title} f={f} flip={i % 2 === 1} />)}
        </div>
      </section>

      {/* Spørsmål og svar */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">Spørsmål og svar</h2>
          <div className="mx-auto max-w-[800px] divide-y divide-body-color/10 dark:divide-white/10">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-black dark:text-white">
                  {f.q}<span className="ml-4 text-primary transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {f.a}
                  {f.q.startsWith("Hva med personvern") && <> <Link href="/personvern#polartqr" className="text-primary underline">Personvern for PolarTQR</Link>.</>}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-5 text-base text-body-color dark:text-body-color-dark">Vil dere selge billetter på neste arrangement?</p>
            <Link href="/kontakt" className="rounded-md bg-primary px-7 py-[14px] text-base font-semibold text-white shadow-md transition hover:bg-primary/90">
              Ta kontakt med oss
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
