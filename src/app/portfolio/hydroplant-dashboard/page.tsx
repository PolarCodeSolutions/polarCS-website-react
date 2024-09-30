"use strict";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import React from 'react';
import { Metadata } from "next";
import Head from 'next/head';
import dynamic from "next/dynamic"; // Dynamisk import for Slider
import SliderComponent from "@/components/Portfolio/SliderComponent"; // Import the client-side Slider component

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Hydroplant Dashboard Prosjekt | PolarCode Solutions",
  description: "Les om vårt prosjekt for Hydroplant Technologies AS, hvor vi utviklet et tilpasset dashboard med React, Node.js og en Django-backend.",
  keywords: "Hydroplant Technologies, React, Node.js, Django, dashboard, PolarCode Solutions",
  openGraph: {
    type: "website",
    title: "Hydroplant Dashboard Prosjekt | PolarCode Solutions",
    description: "Les om vårt prosjekt for Hydroplant Technologies AS, hvor vi utviklet et tilpasset dashboard med React, Node.js og en Django-backend.",
    url: "https://polarcode.solutions/portfolio/hydroplant-dashboard",
    images: [
      {
        url: "https://polarcode.solutions/images/kunder/hydroplant/2.png",
        width: 800,
        height: 600,
        alt: "Hydroplant Dashboard utviklet av PolarCode Solutions"
      }
    ]
  },
  alternates: {
    canonical: "https://polarcode.solutions/portfolio/hydroplant-dashboard"
  }
};

const BlogDetailsPage: React.FC = () => {
  const shareUrl = "https://polarcode.solutions/portfolio/hydroplant-dashboard";
  const title = "Hydroplant Dashboard Prosjekt | PolarCode Solutions";

  // List of images for the slider
  const images = [
    { src: "/images/kunder/hydroplant/0.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/0_1.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/1.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/2.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/3_1.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/3_2.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/3_3.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/3.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/4.png", alt: "Hydroplant Dashboard - Bilde 1" },
    { src: "/images/kunder/hydroplant/5.png", alt: "Hydroplant Dashboard - Bilde 1" },
  ];


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": "Les om vårt prosjekt for Hydroplant Technologies AS, hvor vi utviklet et tilpasset dashboard med React, Node.js og en Django-backend.",
    "image": "https://polarcode.solutions/images/logo/croppedPolarLogo.png",
    "author": {
      "@type": "Organization",
      "name": "PolarCode Solutions",
      "logo": "https://polarcode.solutions/logo.png"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PolarCode Solutions",
      "logo": "https://polarcode.solutions/logo.png"
    },
    "url": shareUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="https://polarcode.solutions/images/logo/croppedPolarLogo.png" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hydroplant Dashboard Prosjekt | PolarCode Solutions" />
        <meta
          property="og:description"
          content="Les om vårt prosjekt for Hydroplant Technologies AS, hvor vi utviklet et tilpasset dashboard med React, Node.js og en Django-backend."
        />
        <meta property="og:url" content="https://polarcode.solutions/portfolio/hydroplant-dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://polarcode.solutions/images/kunder/hydroplant/2.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Hydroplant Dashboard utviklet av PolarCode Solutions" />
        <meta property="fb:app_id" content="1345767586400332" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-76N1PJZ11X"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-76N1PJZ11X');
            `,
          }}
        />
      </Head>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Utvikling av Hydroplant Dashboard
                </h1>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <img
                            src="/images/blog/asgeir.jpg"
                            alt="author"
                            width={70}
                            height={70}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          Av <span>Asgeir Bjørgen Huskebakk</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                          </svg>
                        </span>
                        2024
                      </p>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                          <FacebookIcon size={32} round />
                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`} target="_blank" rel="noopener noreferrer">
                          <TwitterIcon size={32} round />
                        </a>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`} target="_blank" rel="noopener noreferrer">
                          <LinkedinIcon size={32} round />
                        </a>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      Hydroplant Dashboard
                    </a>
                  </div>
                </div>
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Hvem er Hydroplant?
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Hydroplant utvikler helautomatiske, vertikale landbrukssystemer som muliggjør effektiv og kostnadseffektiv dyrking året rundt. Selskapets løsninger inkluderer avansert programvare, robotikk og LED-belysning for å sikre optimal vekst av planter fra frø til ferdig produkt. Med mål om å redusere kostnadene for vertikalt landbruk med opptil 10 ganger, fokuserer de på bærekraftige løsninger som skalerer for industriell produksjon, med minimal manuell arbeidskraft og full automatisering. Utforsk Hydroplant nærmere <a href="https://www.hydroplant.no" target="_blank" rel="noopener noreferrer" className="text-primary">her</a>.
                  </p>


                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Prosjektbeskrivelse
                  </h3>
                
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Vi ble engasjert av Hydroplant Technologies AS for å utvikle et dashboard som gir dem sanntidskontroll og oversikt over deres vertikale landbrukssystemer. Prosjektet inkluderte design og utvikling av et brukervennlig grensesnitt i React, som kommuniserte med en Node.js-basert backend for å håndtere API-forespørsler og sanntidsdata. Django ble benyttet som API-leverandør og for backend-logikk, noe som sikret en skalerbar og sikker løsning. 
                  </p>

                  {/* Slider Section */}
                  <div className="mb-10 w-full overflow-hidden rounded">
                  <SliderComponent images={images} />
                  </div>
                  
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Prosjektets teknologier og løsninger
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Trykk på overskriftene for å lese mer om de tekniske løsningene vi brukte i utviklingen av dashboardet.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>React for brukergrensesnitt</strong></summary>
                        React er et verktøy som hjelper oss å bygge nettsider. Det gjør det lettere å lage funksjoner som brukerne ser og bruker, for eksempel knapper og grafer. React gjør det enkelt å oppdatere data i sanntid, noe som er perfekt for å vise oppdatert informasjon på Hydroplant sitt dashboard.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Node.js for backend-logikk</strong></summary>
                        Node.js hjelper datamaskiner å behandle informasjon raskt og effektivt i bakgrunnen. Det gjør at nettsiden kan hente og sende data mellom brukerne og Hydroplants systemer, uten at brukeren merker noen forsinkelser.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Django for sikker API-håndtering</strong></summary>
                        Django er en programvare som hjelper med å beskytte dataene som sendes frem og tilbake på nettsiden. Vi bruker det for å sørge for at all informasjon er trygg og at systemet kan vokse og tilpasses fremtidige behov.
                      </details>
                    </li>
                  </ul>


                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                    Hydroplant Technologies er nå i stand til å overvåke og styre sine vannbehandlingssystemer i sanntid, noe som gir dem full kontroll over sine operasjoner.
                    </p>
                  </div>
                  
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Hydroplant" />
                        <TagButton text="React" />
                        <TagButton text="Django" />
                      </div>
                    </div>
                    <div className="mb-5">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
