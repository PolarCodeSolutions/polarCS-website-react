"use client";
import { ADDONS, PACKAGES, formatKr } from "./prices";

// Priskalkulator: velg pakke og tillegg, og se oppstart og månedspris (inkl. mva).
const DynamicPricingBox = ({
  packageId,
  onPackageChange,
  addOns,
  onAddOnsChange,
}: {
  packageId: string;
  onPackageChange: (id: string) => void;
  addOns: string[];
  onAddOnsChange: (ids: string[]) => void;
}) => {
  const pkg = PACKAGES.find((p) => p.id === packageId) ?? PACKAGES[0];
  const available = ADDONS.filter((a) => !a.onlyFor?.length || a.onlyFor.includes(pkg.id));
  const chosen = available.filter((a) => addOns.includes(a.id));
  const setup = pkg.setup + chosen.reduce((s, a) => s + (a.setup ?? 0), 0);
  const monthly = pkg.monthly + chosen.reduce((s, a) => s + (a.monthly ?? 0), 0);

  const toggle = (id: string) =>
    onAddOnsChange(addOns.includes(id) ? addOns.filter((x) => x !== id) : [...addOns, id]);

  const addOnPrice = (a: (typeof ADDONS)[number]) =>
    [a.setup ? `${formatKr(a.setup)} kr engangs` : "", a.monthly ? `${formatKr(a.monthly)} kr/mnd` : ""]
      .filter(Boolean)
      .join(" + ");

  const contactHref = () => {
    const lines = [`Pakke: ${pkg.name} (${formatKr(pkg.setup)} kr oppstart + ${formatKr(pkg.monthly)} kr/mnd)`];
    chosen.forEach((a) => lines.push(`Tillegg: ${a.name} (${addOnPrice(a)})`));
    const total = `${formatKr(setup)} kr i oppstart + ${formatKr(monthly)} kr/mnd (inkl. mva)`;
    return `/kontakt?summary=${encodeURIComponent(lines.join("\n"))}&total=${encodeURIComponent(total)}`;
  };

  return (
    <div className="rounded-lg bg-white px-6 py-10 shadow-three dark:bg-gray-dark dark:shadow-two sm:px-10">
      <h3 className="mb-2 text-center text-2xl font-bold text-dark dark:text-white">Regn ut din pris</h3>
      <p className="mb-10 text-center text-body-color">Velg pakke og det du vil ha i tillegg.</p>

      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          <p className="mb-3 font-semibold text-dark dark:text-white">1. Pakke</p>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {PACKAGES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onPackageChange(p.id)}
                aria-pressed={p.id === pkg.id}
                className={`rounded-lg border-2 px-4 py-3 text-left transition ${
                  p.id === pkg.id
                    ? "border-primary bg-primary/10"
                    : "border-gray-200 hover:border-primary/60 dark:border-gray-600"
                }`}
              >
                <span className="block font-semibold text-dark dark:text-white">{p.name}</span>
                <span className="text-sm text-body-color">{formatKr(p.monthly)} kr/mnd</span>
              </button>
            ))}
          </div>

          <p className="mb-3 font-semibold text-dark dark:text-white">2. Tillegg</p>
          <div className="space-y-3">
            {available.map((a) => (
              <label
                key={a.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border-2 px-4 py-3 transition ${
                  addOns.includes(a.id) ? "border-primary bg-primary/10" : "border-gray-200 dark:border-gray-600"
                }`}
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-primary"
                  checked={addOns.includes(a.id)}
                  onChange={() => toggle(a.id)}
                />
                <span className="flex-1">
                  <span className="flex flex-wrap justify-between gap-x-4">
                    <span className="font-semibold text-dark dark:text-white">{a.name}</span>
                    <span className="text-sm font-medium text-body-color">{addOnPrice(a)}</span>
                  </span>
                  <span className="block text-sm text-body-color">{a.description}</span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="h-fit rounded-lg bg-gray-light p-6 dark:bg-black/30 lg:sticky lg:top-28">
          <p className="mb-4 font-semibold text-dark dark:text-white">Din pris</p>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-body-color">Per måned</span>
            <span className="text-3xl font-bold text-dark dark:text-white">{formatKr(monthly)} kr</span>
          </div>
          <div className="mb-6 flex items-baseline justify-between">
            <span className="text-body-color">Oppstart (engangs)</span>
            <span className="text-xl font-semibold text-dark dark:text-white">{formatKr(setup)} kr</span>
          </div>
          <p className="mb-6 text-xs text-body-color">
            Alle priser inkl. 25 % mva. Domene kommer i tillegg til kostpris. Endelig pris får du etter en
            gratis gjennomgang.
          </p>
          <a
            href={contactHref()}
            className="block w-full rounded-lg bg-primary px-6 py-3 text-center font-semibold text-night-900 transition hover:bg-primary/90"
          >
            Send forespørsel
          </a>
        </div>
      </div>
    </div>
  );
};

export default DynamicPricingBox;
