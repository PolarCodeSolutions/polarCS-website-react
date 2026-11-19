import TagButton from "@/components/Blog/TagButton";
import React from "react";
import { Metadata } from "next";
import SliderComponent from "@/components/Portfolio/SliderComponent";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Polarsirkelen Dynamiske Sportsskyttere – nettside | PolarCode Solutions",
  description:
    "Les om nettsiden vi laget for Polarsirkelen Dynamiske Sportsskyttere, med nyheter, galleri, kurspåmelding og oversikt over bane- og treningstider.",
  keywords:
    "Polarsirkelen Dynamiske Sportsskyttere, pdss, sportsskyting, nettside, klubb, PolarCode Solutions, Mo i Rana",
  openGraph: {
    type: "website",
    title: "Polarsirkelen Dynamiske Sportsskyttere – nettside | PolarCode Solutions",
    description:
      "Les om nettsiden vi laget for Polarsirkelen Dynamiske Sportsskyttere, med nyheter, galleri, kurs og treningstider.",
    url: "https://polarcode.solutions/portfolio/polarsirkelen-sportsskyttere",
    images: [
      {
        url: "https://polarcode.solutions/images/kunder/pdss/0.png",
        width: 800,
        height: 600,
        alt: "Polarsirkelen Dynamiske Sportsskyttere nettside utviklet av PolarCode Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://polarcode.solutions/portfolio/polarsirkelen-sportsskyttere",
  },
};

const PdssProject: React.FC = () => {
  const shareUrl = "https://polarcode.solutions/portfolio/polarsirkelen-sportsskyttere";
  const title = "Polarsirkelen Dynamiske Sportsskyttere – nettside | PolarCode Solutions";

  const images = [
    { src: "/images/kunder/pdss/0.png", alt: "pdss nettside – forside" },
    { src: "/images/kunder/pdss/1.png", alt: "pdss nettside – nyheter" },
    { src: "/images/kunder/pdss/2.png", alt: "pdss nettside – innhold" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description:
      "Les om nettsiden vi laget for Polarsirkelen Dynamiske Sportsskyttere, med nyheter, galleri, kurs og treningstider.",
    image: "https://polarcode.solutions/images/kunder/pdss/0.png",
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
              Nettside for Polarsirkelen Dynamiske Sportsskyttere
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
              <a href="https://pdss.no" target="_blank" rel="noopener noreferrer" className="mb-5 inline-flex items-center justify-center rounded-full bg-aurora-gradient px-4 py-2 text-sm font-semibold text-night-900">
                Besøk pdss.no →
              </a>
            </div>

            <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">Hvem er Polarsirkelen Dynamiske Sportsskyttere?</h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
              Polarsirkelen Dynamiske Sportsskyttere er en sportsskytterklubb ved polarsirkelen. Klubben samler skyttere på alle nivåer, arrangerer kurs og trening, og trenger en enkel måte å holde medlemmer og nye interesserte oppdatert på. Utforsk klubben nærmere <a href="https://pdss.no" target="_blank" rel="noopener noreferrer" className="text-primary">her</a>.
            </p>

            <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">Prosjektbeskrivelse</h3>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
              Vi laget en moderne, responsiv nettside med et stemningsfullt nordlys-uttrykk som passer klubbens navn. Alt det viktige er samlet på ett sted: nyheter, bildegalleri, kurspåmelding, og en tydelig oversikt over bane- og treningstider – slik at både faste medlemmer og nye skyttere raskt finner det de trenger.
            </p>

            <div className="mb-10 w-full overflow-hidden rounded">
              <SliderComponent images={images} />
            </div>

            <h3 className="mb-6 text-2xl font-bold leading-tight text-black dark:text-white">Hva nettsiden inneholder</h3>
            <ul className="mb-10 list-inside list-disc text-body-color dark:text-body-color-dark">
              <li className="mb-2 list-none text-base font-medium sm:text-lg"><strong className="text-black dark:text-white">Nyheter</strong> – klubben holder medlemmene oppdatert med egne innlegg.</li>
              <li className="mb-2 list-none text-base font-medium sm:text-lg"><strong className="text-black dark:text-white">Bane og treningstid</strong> – oversikt over når det er trening og hvor.</li>
              <li className="mb-2 list-none text-base font-medium sm:text-lg"><strong className="text-black dark:text-white">Kurs</strong> – informasjon og påmelding for nye skyttere.</li>
              <li className="mb-2 list-none text-base font-medium sm:text-lg"><strong className="text-black dark:text-white">Galleri og kontakt</strong> – bilder fra klubben og enkel veien til å ta kontakt.</li>
            </ul>

            <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8">
              <p className="text-center text-base font-medium italic text-body-color dark:text-body-color-dark">
                En oversiktlig nettside som gjør det enkelt for klubben å dele nyheter og for nye skyttere å finne veien inn.
              </p>
            </div>

            <h4 className="mb-3 text-sm font-medium text-body-color dark:text-body-color-dark">Tags:</h4>
            <div className="flex items-center">
              <TagButton text="Klubb" />
              <TagButton text="Nettside" />
              <TagButton text="Nyheter" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdssProject;
