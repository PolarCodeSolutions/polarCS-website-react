import { Metadata } from "next";
import { A, CompanyLine, H2, LegalPage, P, Table, UL } from "@/components/Legal/LegalPage";
import { COMPANY } from "@/lib/company";
import { SUBPROCESSOR_ROWS } from "@/lib/subprocessors";

export const metadata: Metadata = {
  title: "Databehandleravtale | PolarCode Solutions",
  description:
    "Databehandleravtalen mellom PolarCode Solutions og kundene våre, etter personvernforordningen (GDPR) artikkel 28.",
  alternates: { canonical: "https://polarcode.solutions/databehandleravtale" },
};

const DatabehandleravtalePage = () => (
  <LegalPage
    title="Databehandleravtale"
    intro="Avtalen gjelder når vi lagrer og behandler personopplysninger på vegne av kundene våre – for eksempel ordrer, billetter, påmeldinger og nyhetsbrev på nettsidene vi drifter. Den er en del av avtalen mellom oss og kunden, og godtas i kundeportalen."
  >
    <H2 id="parter">1. Parter</H2>
    <P>
      <strong>Behandlingsansvarlig</strong> er kunden – virksomheten, laget eller foreningen som har konto i
      PolarCode-portalen og har godtatt denne avtalen.
    </P>
    <P>
      <strong>Databehandler</strong> er:
    </P>
    <CompanyLine />

    <H2 id="formaal">2. Formål og omfang</H2>
    <P>
      Databehandleren behandler personopplysninger bare for å levere tjenestene kunden har bestilt: drift av nettside,
      nettbutikk, arrangementer, billettsalg og billettkontroll (PolarTQR), nyhetsbrev og kundeportal. Behandlingen
      varer så lenge kundeforholdet varer, og til opplysningene er slettet eller levert tilbake etter punkt 10.
    </P>
    <Table
      head={["Hvem opplysningene gjelder", "Hvilke opplysninger"]}
      rows={[
        ["Kjøpere i nettbutikk", "Navn, e-post, telefon, leveringsadresse, ordrer, betalingsstatus (ikke kortnummer)"],
        ["Billettkjøpere og deltakere", "Navn, e-post, billetter, innsjekk, svar i påmeldingsskjema"],
        ["Abonnenter på nyhetsbrev", "E-post, navn, tidspunkt for påmelding og avmelding"],
        ["Besøkende som bruker kontaktskjema", "Navn, e-post, telefon, meldingen"],
        ["Kundens ansatte og vakter", "Navn, e-post, innloggingsopplysninger, hvilke billetter de har sjekket inn"],
        ["Alle besøkende", "IP-adresse og tekniske logger"],
      ]}
    />
    <P>
      Tjenestene er ikke laget for særlige kategorier av personopplysninger (helse, religion o.l.). Kunden skal ikke
      samle inn slike opplysninger, for eksempel i påmeldingsskjemaer, uten å avtale det med oss først.
    </P>

    <H2 id="instruks">3. Instruks</H2>
    <P>
      Databehandleren behandler opplysningene bare etter dokumentert instruks fra kunden. Instruksen er denne avtalen,
      vilkårene for bruk og det kunden selv gjør og stiller inn i portalen. Mener databehandleren at en instruks er i
      strid med personvernregelverket, sier vi fra til kunden med en gang. Opplysningene brukes aldri til egne formål,
      og selges eller deles aldri med andre enn underleverandørene i punkt 7.
    </P>

    <H2 id="taushet">4. Taushetsplikt</H2>
    <P>
      Alle som har tilgang til opplysningene hos databehandleren, har taushetsplikt. Tilgangen er begrenset til dem
      som trenger den for å drifte tjenesten eller gi support. Support med tilgang til kundens konto skjer bare når
      kunden ber om det, er tidsbegrenset og vises tydelig i portalen.
    </P>

    <H2 id="sikkerhet">5. Sikkerhet</H2>
    <P>Databehandleren har blant annet disse tiltakene (GDPR art. 32):</P>
    <UL>
      <li>All trafikk er kryptert (HTTPS/TLS).</li>
      <li>Hver kunde har egen database. Kunder kan ikke se hverandres data.</li>
      <li>Passord lagres som hash (bcrypt). Betalingsnøkler, e-postpassord og andre hemmeligheter lagres kryptert.</li>
      <li>Serverne driftes i to datasentre i Norge med replikert database og automatisk omkobling ved feil.</li>
      <li>Tilgang til serverne er begrenset og krever autentisering. Nøkler byttes når det er mistanke om at de er kjent.</li>
      <li>Programvaren holdes oppdatert, og nye versjoner testes i en egen testcontainer før de tas i bruk.</li>
      <li>Tekniske logger slettes etter 90 dager.</li>
    </UL>

    <H2 id="bistand">6. Bistand til kunden</H2>
    <P>
      Databehandleren hjelper kunden med å oppfylle de registrertes rettigheter. I portalen kan kunden selv søke opp,
      laste ned og slette opplysninger om en person (Personvern). Trenger kunden mer hjelp – for eksempel med
      konsekvensvurderinger, forhåndsdrøftinger eller henvendelser fra Datatilsynet – bistår vi så langt det er
      rimelig ut fra hva vi har tilgang til.
    </P>

    <H2 id="underleverandorer">7. Underleverandører</H2>
    <P>
      Kunden gir generell forhåndsgodkjenning til at databehandleren bruker underleverandørene under. Databehandleren
      inngår avtaler med dem som gir samme beskyttelse som denne avtalen. Nye eller endrede underleverandører varsles
      kunden på e-post minst 30 dager før de tas i bruk. Kunden kan protestere, og hvis vi ikke finner en løsning, kan
      kunden si opp avtalen uten kostnad før endringen gjelder.
    </P>
    <Table head={["Leverandør", "Hva de gjør", "Hvor"]} rows={SUBPROCESSOR_ROWS} />

    <H2 id="tredjeland">8. Overføring utenfor EØS</H2>
    <P>
      Opplysningene lagres i Norge. Noen underleverandører kan behandle opplysninger utenfor EØS. Det skjer bare med
      gyldig overføringsgrunnlag etter GDPR kapittel V, som EU-kommisjonens standardkontrakter eller EU–US Data
      Privacy Framework.
    </P>

    <H2 id="avvik">9. Brudd på personopplysningssikkerheten</H2>
    <P>
      Oppdager databehandleren et brudd som rammer kundens opplysninger, varsler vi kunden uten ugrunnet opphold og
      senest 48 timer etter at vi ble kjent med det. Varselet beskriver hva som har skjedd, hvilke opplysninger og
      personer det gjelder, sannsynlige konsekvenser og hva vi har gjort og vil gjøre. Det er kunden som
      vurderer om bruddet skal meldes til Datatilsynet (innen 72 timer) og til de registrerte. Vi hjelper til med
      det.
    </P>

    <H2 id="opphor">10. Når avtalen opphører</H2>
    <P>
      Når kundeforholdet avsluttes, kan kunden få utlevert opplysningene i et vanlig, maskinlesbart format.
      Databehandleren sletter opplysningene senest 90 dager etter avslutning, også i sikkerhetskopier, med mindre
      lov krever at de oppbevares. Kunden får bekreftelse på at slettingen er gjort.
    </P>

    <H2 id="revisjon">11. Kontroll og revisjon</H2>
    <P>
      Databehandleren gir kunden informasjonen som trengs for å vise at avtalen følges. Kunden kan be om revisjon med
      30 dagers varsel. Revisjonen skal ikke gi tilgang til andre kunders opplysninger, og kunden dekker egne
      kostnader.
    </P>

    <H2 id="annet">12. Varighet, endringer og lovvalg</H2>
    <P>
      Avtalen gjelder så lenge databehandleren behandler personopplysninger for kunden. Endringer varsles minst 30
      dager i forveien, og kunden godtar den nye versjonen i portalen. Ved motstrid går denne avtalen foran vilkårene
      for bruk når det gjelder behandling av personopplysninger. Avtalen følger norsk rett, og {COMPANY.venue} er
      verneting.
    </P>
    <P>
      Spørsmål om avtalen? Kontakt oss på <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A>. Se også{" "}
      <A href="/vilkar">vilkår for bruk</A> og <A href="/personvern">personvernerklæringen</A>.
    </P>
  </LegalPage>
);

export default DatabehandleravtalePage;
