import { COMPANY, LEGAL_UPDATED } from "@/lib/company";

// Felles oppsett for juridiske sider (personvern, vilkår): lesbar tekstbredde, tydelige overskrifter.
export const LegalPage = ({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) => (
  <section className="pb-20 pt-32 md:pt-40">
    <div className="container">
      <article className="legal mx-auto max-w-[780px]">
        <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">{title}</h1>
        <p className="mb-2 text-lg leading-relaxed text-body-color dark:text-body-color-dark">{intro}</p>
        <p className="mb-12 text-sm text-body-color dark:text-body-color-dark">Sist oppdatert {LEGAL_UPDATED}</p>
        {children}
      </article>
    </div>
  </section>
);

export const H2 = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <h2 id={id} className="mb-4 mt-12 scroll-mt-28 text-2xl font-bold text-black dark:text-white">
    {children}
  </h2>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-3 mt-8 text-lg font-semibold text-black dark:text-white">{children}</h3>
);

export const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-base leading-relaxed text-body-color dark:text-body-color-dark">{children}</p>
);

export const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-body-color marker:text-primary dark:text-body-color-dark">
    {children}
  </ul>
);

export const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="font-medium text-primary underline-offset-2 hover:underline">
    {children}
  </a>
);

/** Tabell over behandlinger / underleverandører. Rulles sideveis på mobil i stedet for å sprenge layouten. */
export const Table = ({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) => (
  <div className="mb-6 overflow-x-auto rounded-lg border border-stroke-stroke dark:border-stroke-dark">
    <table className="w-full min-w-[560px] text-left text-sm">
      <thead className="bg-gray-light dark:bg-gray-dark">
        <tr>
          {head.map((h) => (
            <th key={h} className="px-4 py-3 font-semibold text-black dark:text-white">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-stroke-stroke align-top dark:border-stroke-dark">
            {r.map((c, j) => (
              <td key={j} className="px-4 py-3 text-body-color dark:text-body-color-dark">
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** Firmaopplysninger som avsnitt. Org.nr. vises bare når det er fylt inn i lib/company.ts. */
export const CompanyLine = () => (
  <P>
    <strong className="text-black dark:text-white">{COMPANY.legalName}</strong>
    {COMPANY.orgNr ? `, org.nr. ${COMPANY.orgNr}` : ""}, {COMPANY.address}. E-post{" "}
    <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A>, telefon {COMPANY.phone}.
  </P>
);
