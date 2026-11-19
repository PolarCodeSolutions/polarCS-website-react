import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hjem"
      className="relative z-10 overflow-hidden bg-white pb-20 pt-[130px] dark:bg-night-900 md:pb-28 md:pt-[180px] lg:pt-[210px]"
    >
      {/* Nordlys-bakgrunn */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-night-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-aurora-gradient opacity-25 blur-[120px] animate-aurora-shift dark:opacity-40" />
        <div className="absolute right-[-10%] top-10 h-[360px] w-[520px] rounded-full bg-gradient-to-br from-aurora-teal to-aurora-blue opacity-20 blur-[120px] animate-aurora-shift-2 dark:opacity-30" />
        <div className="absolute bottom-[-20%] left-[-5%] h-[380px] w-[560px] rounded-full bg-gradient-to-tr from-aurora-purple to-aurora-green opacity-20 blur-[120px] animate-aurora-shift dark:opacity-25" />
        {/* Stjerner */}
        <span className="absolute left-[12%] top-[22%] h-1 w-1 rounded-full bg-white animate-twinkle" />
        <span className="absolute left-[82%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80 animate-twinkle [animation-delay:1s]" />
        <span className="absolute left-[68%] top-[40%] h-1 w-1 rounded-full bg-white animate-twinkle [animation-delay:2s]" />
        <span className="absolute left-[28%] top-[52%] h-1 w-1 rounded-full bg-white/70 animate-twinkle [animation-delay:3s]" />
        <span className="absolute left-[46%] top-[12%] h-1 w-1 rounded-full bg-white/80 animate-twinkle [animation-delay:1.5s]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-[840px] text-center animate-fade-up">
          {/* Merke-pille */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-stroke-stroke bg-white/70 px-4 py-1.5 text-sm font-medium text-body-color shadow-btn-light backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-body-color-dark">
            <span className="h-2 w-2 rounded-full bg-aurora-green shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]" />
            Din lokale web- og programvarepartner
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-black dark:text-white sm:text-5xl md:text-6xl">
            Webapplikasjoner og programvare,{" "}
            <span className="aurora-text">rett fra nordlysets kilde</span>
          </h1>

          <p className="mx-auto mb-10 max-w-[620px] text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
            <b className="font-semibold text-black dark:text-white">PolarCode Solutions</b>{" "}
            bygger moderne nettsider, nettbutikker og skreddersydde systemer — med
            egen kundeportal, nettbetaling og drift, levert lokalt.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-lg bg-aurora-gradient px-7 py-3.5 text-base font-semibold text-night-900 shadow-glow transition hover:shadow-glow-soft"
            >
              Få et tilbud
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/tjenester"
              className="inline-flex items-center gap-2 rounded-lg border border-stroke-stroke bg-white px-7 py-3.5 text-base font-semibold text-black transition hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-primary dark:hover:text-primary"
            >
              Se tjenestene
            </Link>
          </div>

          {/* Verdilinje */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-body-color dark:text-body-color-dark">
            <span className="inline-flex items-center gap-2">
              <CheckDot /> Lokal og personlig
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckDot /> Egen kundeportal
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckDot /> Vipps, kort og Klarna
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckDot /> Åpen kildekode
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckDot = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

export default Hero;
