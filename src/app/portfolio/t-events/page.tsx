import TagButton from "@/components/Blog/TagButton";
import React from "react";
import { Metadata } from "next";
import SliderComponent from "@/components/Portfolio/SliderComponent";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "T-Events – nettside for lyd, lys og event | PolarCode Solutions",
  description:
    "Les om nettsiden vi laget for T-Events, en lokal leverandør av lyd, lys og underholdning til arrangementer, med presentasjon av tjenester og utstyrsutleie.",
  keywords:
    "T-Events, nettside, event, lyd, lys, DJ, utleie, PolarCode Solutions, Mo i Rana",
  openGraph: {
    type: "website",
    title: "T-Events – nettside for lyd, lys og event | PolarCode Solutions",
    description:
      "Les om nettsiden vi laget for T-Events, en lokal leverandør av lyd, lys og underholdning til arrangementer.",
    url: "https://polarcode.solutions/portfolio/t-events",
    images: [
      {
        url: "https://polarcode.solutions/images/kunder/t-event/0.png",
        width: 800,
        height: 600,
        alt: "T-Events nettside utviklet av PolarCode Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://polarcode.solutions/portfolio/t-events",
  },
};

const TEventsProject: React.FC = () => {
  const shareUrl = "https://polarcode.solutions/portfolio/t-events";
  const title = "T-Events – nettside for lyd, lys og event | PolarCode Solutions";

  const images = [
    { src: "/images/kunder/t-event/0.png", alt: "T-Events nettside – forside" },
    { src: "/images/kunder/t-event/1.png", alt: "T-Events nettside – tjenester" },
    { src: "/images/kunder/t-event/2.png", alt: "T-Events nettside – utleie og events" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description:
      "Les om nettsiden vi laget for T-Events, en lokal leverandør av lyd, lys og underholdning til arrangementer.",
    image: "https://polarcode.solutions/images/kunder/t-event/0.png",
    author: { "@type": "Organization", name: "PolarCode Solutions" },
    publisher: { "@type": "Organization", name: "PolarCode Solutions" },
    url: shareUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": shareUrl },
  };

  return (
    <section className="pb-[120px] pt-[150px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              Nettside for T-Events
            </h1>

            <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
              <div className="flex flex-wrap items-center">
                <div className="mb-5 mr-10 flex items-center">
                  <div className="mr-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/blog/asgeir.jpg" alt="forfatter" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </div>
                  </div>
                  <span className="text-base font-medium text-body-color dark:text-body-color-dark">
                    Av <span>Asgeir Bjørgen Huskebakk</span>
                  </span>
                </div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-base font-medium text-body-color dark:text-body-color-dark">2025</span>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer"><FacebookIcon size={32} round /></a>
                  <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`} target="_blank" rel="noopener noreferrer"><TwitterIcon size={32} round /></a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={32} round /></a>
                </div>
              </div>
              <a href="https://t-event.no" target="_blank" rel="noopener noreferrer" className="mb-5 inline-flex items-center justify-center rounded-full bg-aurora-gradient px-4 py-2 text-sm font-semibold text-night-900">
                Besøk t-event.no →
              </a>
            </div>

            <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">Hvem er T-Events?</h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
              T-Events leverer profesjonell lyd, lys og underholdning til alle typer arrangementer – fra intime selskaper til store konserter. I tillegg til utstyrsutleie og DJ-tjenester arrangerer de egne eventer, og har som mål å skape minnerike øyeblikk med riktig stemning. Utforsk T-Events nærmere <a href="https://t-event.no" target="_blank" rel="noopener noreferrer" className="text-primary">her</a>.
            </p>

            <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">Prosjektbeskrivelse</h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
              Vi laget en stemningsfull og responsiv nettside som fanger energien i det T-Events driver med. Forsiden setter tonen med «Lyd. Lys. Stemning.», mens resten av siden presenterer tjenestene, utstyrsutleien og kommende egne arrangementer – og gjør det enkelt for kundene å ta kontakt for et tilbud.
            </p>

            <div className="mb-10 w-full overflow-hidden rounded">
              <SliderComponent images={images} />
            </div>

            <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">Hva nettsiden inneholder</h3>
            <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
              <li className="mb-2 list-none text-base font-medium sm:text-lg"><strong className="text-black dark:text-white">Tjenesteoversikt</strong> – lyd, lys, DJ og underholdning, tydelig presentert.</li>
              <li className="mb-2 list-none text-base font-medium sm:text-lg"><strong className="text-black dark:text-white">Utstyrsutleie</strong> – hva kundene kan leie til sitt eget arrangement.</li>
              <li className="mb-2 list-none text-base font-medium sm:text-lg"><strong className="text-black dark:text-white">Egne arrangementer</strong> – presentasjon av eventene T-Events selv står bak.</li>
              <li className="mb-2 list-none text-base font-medium sm:text-lg"><strong className="text-black dark:text-white">Kontakt</strong> – enkel vei til å be om tilbud.</li>
            </ul>

            <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8">
              <p className="text-center text-base font-medium italic text-body-color dark:text-body-color-dark">
                En nettside som gir publikum en forsmak på stemningen T-Events skaper – før de i det hele tatt har tatt kontakt.
              </p>
            </div>

            <h4 className="mb-3 text-sm font-medium text-body-color dark:text-body-color-dark">Tags:</h4>
            <div className="flex items-center">
              <TagButton text="Event" />
              <TagButton text="Nettside" />
              <TagButton text="Design" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TEventsProject;
