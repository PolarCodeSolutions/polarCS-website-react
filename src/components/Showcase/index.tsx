import React from "react";
import Link from "next/link";

/** Skjermbilde av portalen i en enkel nettleserramme. */
export function BrowserFrame({ src, alt, url = "portal.polarcode.solutions", priority = false }: { src: string; alt: string; url?: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg border border-body-color/10 bg-white shadow-two dark:border-white/10 dark:bg-gray-dark">
      <div className="flex items-center gap-2 border-b border-body-color/10 px-4 py-2.5 dark:border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 truncate rounded bg-gray-light px-3 py-0.5 text-xs text-body-color dark:bg-dark dark:text-body-color-dark">{url}</span>
      </div>
      <img src={src} alt={alt} width={1440} height={900} loading={priority ? "eager" : "lazy"} className="block h-auto w-full" />
    </div>
  );
}

/** Mobilskjermbilde i en enkel telefonramme. */
export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} width={216} height={480} loading="lazy" className={`rounded-[22px] border-4 border-black shadow-xl ${className}`} />;
}

export type Feature = {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  image: string;
  alt: string;
  link?: { href: string; label: string };
};

/** Bilde og tekst side om side, annenhver vei. */
export function FeatureRow({ f, flip }: { f: Feature; flip: boolean }) {
  return (
    <div className="-mx-4 flex flex-wrap items-center py-10 md:py-14">
      <div className={`w-full px-4 lg:w-5/12 ${flip ? "lg:order-2" : ""}`}>
        <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-primary">{f.eyebrow}</span>
        <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl">{f.title}</h3>
        <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">{f.text}</p>
        <ul className="mb-6 space-y-2.5">
          {f.points.map((p) => (
            <li key={p} className="flex gap-3 text-base text-body-color dark:text-body-color-dark">
              <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden="true"><path fill="currentColor" d="M8 13.6 4.4 10l-1.4 1.4L8 16.4 17 7.4 15.6 6z" /></svg>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        {f.link && (
          <Link href={f.link.href} className="font-semibold text-primary hover:underline">{f.link.label} →</Link>
        )}
      </div>
      <div className={`mt-8 w-full px-4 lg:mt-0 lg:w-7/12 ${flip ? "lg:order-1" : ""}`}>
        <BrowserFrame src={f.image} alt={f.alt} />
      </div>
    </div>
  );
}
