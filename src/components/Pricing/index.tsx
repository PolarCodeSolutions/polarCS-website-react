"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import DynamicPricingBox from "./DynamicPricingBox";
import OfferList from "./OfferList";
import React, { useState } from 'react';

type Service = {
  question: string;
  explanation: string;  // Forklaring for spørsmålet
  options: { text: string; price: number; disabled?: boolean }[];
};

const Pricing = () => {
  // Tjenester for spørsmål i DynamicPricingBox, med forklaringer
  const questionServices: Service[] = [
    {
      question: "Hva slags type nettside trenger du?",
      explanation: "Velg hva slags nettside du trenger. En enkel nettside har én side, en flersidig nettside har flere undersider, mens en kompleks webapplikasjon tilbyr avanserte funksjoner som krever backend-integrasjon.",
      options: [
        { text: "Enkel nettside (1 side)", price: 3995 },
        { text: "Flersidig nettside (3-10 sider)", price: 8449 },
        { text: "Kompleks webapplikasjon", price: 14499 }
      ]
    },
    {
      question: "Trenger du responsivt design?",
      explanation: "Responsivt design gjør at nettsiden fungerer godt på alle enheter, inkludert mobiltelefoner og nettbrett. Hvis du bare trenger en desktop-versjon, kan du velge bort dette.",
      options: [
        { text: "Ja, mobil og nettbrettoptimalisert", price: 1200 },
        { text: "Nei, kun desktop", price: 0 }
      ]
    },
    {
      question: "Vil du ha SEO-optimalisering?",
      explanation: "SEO (søkemotoroptimalisering) hjelper nettsiden din med å bli funnet i søkemotorer som Google, ved å forbedre synligheten din på nettet.",
      options: [
        { text: "Ja", price: 1800 },
        { text: "Nei", price: 0 }
      ]
    },
    {
      question: "Skal nettsiden ha sosiale medier-integrering?",
      explanation: "Integrering med sosiale medier gjør det enkelt for brukerne dine å dele og interagere med innhold fra nettsiden direkte på sosiale plattformer.",
      options: [
        { text: "Ja, med full integrasjon", price: 1200 },
        { text: "Nei", price: 0 }
      ]
    },
    {
      question: "Trenger du skreddersydd design og brukeropplevelse (UI/UX)?",
      explanation: "Skreddersydd design og brukeropplevelse gir deg en unik og personlig tilpasset nettside, designet spesielt for din merkevare og målgruppe.",
      options: [
        { text: "Ja, med tilpasset design", price: 2500 },
        { text: "Nei, en enkel mal", price: 0 }
      ]
    },
    {
      question: "Vil du ha vedlikehold og support etter lansering?",
      explanation: "Vedlikehold og support sørger for at nettsiden din holdes oppdatert, sikker, og får hjelp ved eventuelle problemer i opptil 12 måneder etter lansering.",
      options: [
        { text: "Ja, med 12 måneders support", price: 2200 },
        { text: "Nei, bare utvikling", price: 0 }
      ]
    },
    {
      question: "Trenger du spesifikke funksjoner på nettsiden?",
      explanation: "Noen nettsider krever spesialfunksjoner som e-handelsløsninger, bookingsystemer, blogger, eller brukerautentisering. Velg det du trenger her.",
      options: [
        { text: "E-handel", price: 10000 },
        { text: "Kalender- og bookingsystem", price: 8000 },
        { text: "Blogg", price: 3000 },
        { text: "Brukerautentisering", price: 6000 },
        { text: "Nei", price: 0 }
      ]
    },
  ];

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Se hvor mye din nettside vil koste"
          paragraph="Velg grunnpakken for din nettside, og tilpass med tilleggstjenester etter behov. Dette er et estimat, og en nøyaktig pris vil bli gitt når vi gjennomgår hele prosjektet."
          center
          width="665px"
        />

        {/* Grunnpakker */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Nettsted (Enkeltside)"
            price="3995"
            subtitle="En enkel nettside (1 side), perfekt for små prosjekter."
          >
            <OfferList text="Grunnleggende utvikling av 1 side" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Flersidig nettside"
            price="8449"
            subtitle="Perfekt for bedrifter med behov for flere sider."
          >
            <OfferList text="Flersidig nettsideutvikling (3-10 sider)" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Kompleks webapplikasjon"
            price="14499"
            subtitle="En komplett webapplikasjon med backend og avansert funksjonalitet."
          >
            <OfferList text="Utvikling av fullverdig webapplikasjon" status="active" />
            <OfferList text="Backend og databaseintegrasjon" status="active" />
          </PricingBox>
        </div>

        {/* Dynamic Pricing Box - Tilpasning av tilleggstjenester */}
        <div className="mt-16">
          <DynamicPricingBox
            basePrice={0}
            packageName="Tilpasset utvikling"
            subtitle="Legg til tjenester som passer dine behov."
            services={questionServices} // Bruker questionServices for DynamicPricingBox
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
