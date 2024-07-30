"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import DynamicPricingBox from "./DynamicPricingBox";
import OfferList from "./OfferList";

type Service = {
  text: string;
  price: number;
  status?: "active" | "inactive";
};

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const services: Service[] = [
    { text: "Nettstedshosting", price: 2500, status: "active" }, 
    { text: "Domene administrasjon", price: 500, status: "active" }, 
    { text: "Live support", price: 2000, status: "active" }, 
    { text: "E-post support", price: 1200, status: "active" }, 
    { text: "SEO", price: 1800, status: "active" }, 
    { text: "Dedikert administrator", price: 1000, status: "active" }, 
    { text: "Avansert sikkerhet (DDoS)", price: 1500, status: "active" }, 
    { text: "Sikkerhetskopi av nettside", price: 900, status: "active" }, 
    { text: "Kommersiell bruk", price: 800, status: "active" }, 
    { text: "E-post administrasjon", price: 700, status: "active" }, 
    { text: "Oppsett av hosting og DNS", price: 488, status: "active" } 
  ];

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Enkel og forutsigbar pris på webhosting"
          paragraph="Velg en plan som passer best for deg og dine behov."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Måned
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              År
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "499" : "5495"}
            duration={isMonthly ? "mnd" : "år"}
            subtitle="Support avtale for små bedrifter og enkeltmannsforetak."
          >
            <OfferList text="Nettstedshosting" status="active" />
            <OfferList text="Domene administrasjon" status="active" />
            <OfferList text="Begrenset live support" status="active" />
            <OfferList text="Kommersiell bruk" status="active" />
            <OfferList text="E-postsupport" status="active" />
            <OfferList text="Månedlige sikkerhetskopier" status="active" />
            <OfferList text="1 E-postadresse (5GB)" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "799" : "8499"}
            duration={isMonthly ? "mnd" : "år"}
            subtitle="Support avtale for små og mellomstore bedrifter, inkludert enkel support."
          >
            <OfferList text="Nettstedshosting" status="active" />
            <OfferList text="Domene administrasjon" status="active" />
            <OfferList text="Live support med utvidede åpningstider" status="active" />
            <OfferList text="Kommersiell bruk" status="active" />
            <OfferList text="E-postsupport" status="active" />
            <OfferList text="Ukentlige sikkerhetskopier" status="active" />
            <OfferList text="SEO-optimalisering" status="active" />
            <OfferList text="3 E-postadresser (30GB)" status="active" />
            <OfferList text="Full mobil synkronisering" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "1199" : "12200"}
            duration={isMonthly ? "mnd" : "år"}
            subtitle="Support avtale for store bedrifter og organisasjoner, inkludert prioritert support."
          >
            <OfferList text="Nettstedshosting" status="active" />
            <OfferList text="Domene administrasjon" status="active" />
            <OfferList text="Live support 24/7" status="active" />
            <OfferList text="Kommersiell bruk" status="active" />
            <OfferList text="E-postsupport" status="active" />
            <OfferList text="Daglige sikkerhetskopier" status="active" />
            <OfferList text="Prioritert support" status="active" />
            <OfferList text="Gratis livstidsoppdateringer" status="active" />
            <OfferList text="Avansert sikkerhet (DDoS-beskyttelse)" status="active" />
            <OfferList text="Dedikert kontoadministrator" status="active" />
            <OfferList text="5 E-postadresser (70GB)" status="active" />
            <OfferList text="Full mobil synkronisering" status="active" />
          </PricingBox>
          <DynamicPricingBox
            basePrice={isMonthly ? 0 : 0}
            duration={isMonthly ? "år" : "år"}
            packageName="Custom"
            subtitle="Velg dine egne tjenester og få en skreddersydd plan."
            services={services}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
