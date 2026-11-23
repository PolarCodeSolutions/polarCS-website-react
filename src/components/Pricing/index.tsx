"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import DynamicPricingBox from "./DynamicPricingBox";
import { CUSTOM, PACKAGES, formatKr } from "./prices";

const Pricing = () => {
  const [packageId, setPackageId] = useState(PACKAGES.find((p) => p.highlight)?.id ?? PACKAGES[0].id);
  const [addOns, setAddOns] = useState<string[]>([]);

  const choose = (id: string) => {
    setPackageId(id);
    document.getElementById("priskalkulator")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Hva koster det?"
          paragraph="Du får en ferdig nettside som du styrer selv i PolarCode-portalen. Lav oppstart og fast pris per måned, med drift, oppdateringer og hjelp når du trenger det."
          center
          width="700px"
          mb="70px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((p) => (
            <PricingBox
              key={p.id}
              packageName={p.name}
              tagline={p.tagline}
              price={formatKr(p.monthly)}
              unit="kr/mnd"
              note={`+ ${formatKr(p.setup)} kr i oppstart`}
              features={p.features}
              highlight={p.highlight}
              cta="Regn ut pris"
              onSelect={() => choose(p.id)}
            />
          ))}
          <PricingBox
            packageName={CUSTOM.name}
            tagline={CUSTOM.tagline}
            price={<span className="text-[32px]">Fra {formatKr(CUSTOM.from)}</span>}
            unit="kr"
            note="Drift og support etter avtale"
            features={CUSTOM.features}
            cta="Ta kontakt"
            onSelect={() => {
              window.location.href = `/kontakt?summary=${encodeURIComponent(
                "Pakke: Skreddersydd",
              )}&total=${encodeURIComponent(`fra ${formatKr(CUSTOM.from)} kr (inkl. mva)`)}`;
            }}
          />
        </div>
        <p className="mt-6 text-center text-sm text-body-color">
          Alle priser er inkludert 25 % mva. Domene kommer i tillegg til kostpris.
        </p>

        <div id="priskalkulator" className="mt-16 scroll-mt-28">
          <DynamicPricingBox
            packageId={packageId}
            onPackageChange={setPackageId}
            addOns={addOns}
            onAddOnsChange={setAddOns}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
