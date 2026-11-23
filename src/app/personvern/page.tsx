import { Metadata } from "next";
import { A, CompanyLine, H2, H3, LegalPage, P, Table, UL } from "@/components/Legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Personvernerklæring | PolarCode Solutions",
  description:
    "Hvordan PolarCode Solutions behandler personopplysninger på nettsiden, i kundeportalen, i appen PolarTQR og på nettsidene vi drifter for kundene våre.",
  alternates: { canonical: "https://polarcode.solutions/personvern" },
};

const PersonvernPage = () => (
  <LegalPage
    title="Personvernerklæring"
    intro="Her forklarer vi hvilke personopplysninger vi behandler, hvorfor, hvor de lagres og hvilke rettigheter du har. Erklæringen gjelder nettsiden polarcode.solutions, kundeportalen, appen PolarTQR og nettsidene vi drifter for kundene våre."
  >
    <H2 id="hvem">1. Hvem er ansvarlig</H2>
    <CompanyLine />
    <P>Vi har to roller, avhengig av hvem opplysningene gjelder:</P>
    <UL>
      <li>
        <strong>Behandlingsansvarlig</strong> for opplysninger om våre egne kunder, besøkende på polarcode.solutions og
        brukere av kundeportalen og PolarTQR.
      </li>
      <li>
        <strong>Databehandler</strong> for opplysninger som samles inn på nettsidene og nettbutikkene vi drifter for
        kundene våre (for eksempel ordrer, billetter, påmeldinger og nyhetsbrev). Da er det kunden – butikken,
        foreningen eller arrangøren – som er behandlingsansvarlig. Vi behandler opplysningene bare etter deres
        instruks. Har du spørsmål om slike opplysninger, kontakt nettstedet du handlet eller meldte deg på hos.
      </li>
    </UL>

    <H2 id="nettside">2. Besøkende på polarcode.solutions</H2>
    <P>
      Vi bruker ikke analyseverktøy, sporing eller reklame, og vi setter ingen informasjonskapsler (cookies) for
      sporing. Skrifttyper og bilder lastes fra våre egne servere, ikke fra Google eller andre tredjeparter.
    </P>
    <Table
      head={["Hva", "Hvorfor", "Grunnlag"]}
      rows={[
        [
          "IP-adresse, tidspunkt, side og nettleser i tekniske logger",
          "Levere nettsiden, oppdage feil og stoppe angrep",
          "Berettiget interesse (GDPR art. 6 nr. 1 f)",
        ],
        [
          "Navn, e-post, telefon og melding når du bruker kontakt- eller tilbakemeldingsskjemaet",
          "Svare deg og eventuelt lage et tilbud",
          "Tiltak før avtale / berettiget interesse (art. 6 nr. 1 b og f)",
        ],
        [
          "Valg av lyst eller mørkt tema, lagret i nettleseren din",
          "Huske innstillingen din",
          "Nødvendig for funksjonen du ba om",
        ],
      ]}
    />

    <H2 id="kunder">3. Kunder og brukere av kundeportalen</H2>
    <Table
      head={["Hva", "Hvorfor", "Grunnlag"]}
      rows={[
        [
          "Navn, e-post, firma og kontaktopplysninger",
          "Opprette og drifte kontoen, gi support og sende viktige meldinger om tjenesten",
          "Avtale (art. 6 nr. 1 b)",
        ],
        [
          "Passord",
          "Innlogging. Lagres bare som en kryptografisk hash (bcrypt) – vi kan ikke se passordet ditt",
          "Avtale",
        ],
        [
          "Innloggingsnøkkel lagret i nettleseren din",
          "Holde deg innlogget",
          "Nødvendig for tjenesten",
        ],
        [
          "Faktura- og betalingsopplysninger",
          "Fakturering og regnskap",
          "Rettslig plikt (bokføringsloven) og avtale",
        ],
        [
          "Tekniske logger (IP-adresse, tidspunkt, handling)",
          "Sikkerhet, feilsøking og misbruk",
          "Berettiget interesse",
        ],
      ]}
    />

    <H2 id="polartqr">4. Appen PolarTQR</H2>
    <P>
      PolarTQR brukes av arrangører og vakter til å skanne og sjekke inn billetter. Appen inneholder ingen reklame,
      analyse eller sporing, og deler ingen opplysninger med tredjeparter.
    </P>
    <UL>
      <li>
        <strong>Innlogging:</strong> e-post og passord sendes kryptert (HTTPS) til våre servere. Innloggingsnøkkelen
        lagres kryptert på enheten (Android Keystore / iOS Keychain). Sist brukte e-postadresse huskes på enheten for
        å gjøre neste innlogging enklere.
      </li>
      <li>
        <strong>Kamera:</strong> brukes bare til å lese QR-koder på billetter mens du skanner. Bilder lagres ikke og
        sendes ikke noe sted – bare innholdet i QR-koden sendes til serveren for innsjekk.
      </li>
      <li>
        <strong>Billettinformasjon:</strong> ved innsjekk og søk viser appen billettinnehaverens navn, e-post og
        billettype, slik at vakten kan kontrollere billetten. Opplysningene hentes fra arrangørens nettsted og lagres
        ikke på telefonen.
      </li>
      <li>
        <strong>Slette data:</strong> logg ut eller avinstaller appen for å fjerne alt som er lagret på enheten. Vil
        du slette vaktkontoen din, kontakt arrangøren eller oss på{" "}
        <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A>.
      </li>
    </UL>

    <H2 id="kundesider">5. Nettsider og nettbutikker vi drifter for kunder</H2>
    <P>
      Når du handler, kjøper billett, melder deg på et arrangement eller et nyhetsbrev på en nettside som driftes av
      oss, lagres opplysningene du oppgir (for eksempel navn, e-post, telefon, adresse og hva du har kjøpt) på våre
      servere på vegne av nettstedet. Nettstedet er behandlingsansvarlig og bestemmer hva opplysningene brukes til.
    </P>
    <P>
      Betaling skjer direkte hos betalingsleverandøren (Vipps MobilePay eller Stripe). Vi mottar og lagrer aldri
      kortnummer. Vi får bare beskjed om at betalingen er gjennomført.
    </P>

    <H2 id="lagring">6. Hvor opplysningene lagres</H2>
    <P>
      Opplysningene lagres på servere vi drifter selv i to datasentre i Norge, slik at tjenesten fortsetter å virke
      hvis det ene får problemer. Vi bruker disse underleverandørene:
    </P>
    <Table
      head={["Leverandør", "Hva de gjør", "Hvor"]}
      rows={[
        [
          "Cloudflare",
          "DNS, beskyttelse mot angrep og levering av nettsidene. Ser IP-adressen til besøkende.",
          "Globalt (EU-standardkontrakter og EU–US Data Privacy Framework)",
        ],
        ["Web3Forms", "Videresender meldinger fra skjemaene på polarcode.solutions til vår e-post", "Utenfor EØS (EU-standardkontrakter)"],
        ["Namecheap (Private Email)", "Sender e-post fra plattformen, for eksempel ordrebekreftelser og billetter", "USA / EU"],
        ["Vipps MobilePay", "Betaling i nettbutikker og billettsalg", "Norge / EØS"],
        ["Stripe", "Kortbetaling og Klarna i nettbutikker og billettsalg", "EØS / USA (Data Privacy Framework)"],
        ["Fiken", "Regnskap – bare hvis kunden selv kobler til", "Norge"],
      ]}
    />
    <P>
      Vi selger aldri personopplysninger og deler dem ikke med andre enn leverandørene over, med mindre vi er pålagt
      det ved lov.
    </P>

    <H2 id="tid">7. Hvor lenge vi lagrer</H2>
    <UL>
      <li>Kontoopplysninger: så lenge kundeforholdet varer, og slettes senest 90 dager etter at det er avsluttet.</li>
      <li>Regnskapsopplysninger: 5 år etter regnskapsårets slutt, slik bokføringsloven krever.</li>
      <li>Henvendelser via skjema og e-post: inntil 12 måneder etter at saken er avsluttet.</li>
      <li>Tekniske logger: inntil 90 dager.</li>
      <li>Opplysninger på kundenes nettsider: så lenge kunden bestemmer, og slettes når kundeforholdet avsluttes.</li>
    </UL>

    <H2 id="rettigheter">8. Dine rettigheter</H2>
    <P>Du har rett til å:</P>
    <UL>
      <li>få innsyn i hvilke opplysninger vi har om deg</li>
      <li>få rettet feil og få slettet opplysninger</li>
      <li>be om at behandlingen begrenses, eller protestere mot den</li>
      <li>få utlevert opplysningene dine i et maskinlesbart format (dataportabilitet)</li>
    </UL>
    <P>
      Send en e-post til <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A>, så svarer vi innen 30 dager. Gjelder
      det opplysninger på en kundes nettside, sender vi henvendelsen videre til kunden og hjelper dem med å svare.
    </P>
    <P>
      Mener du at vi behandler opplysninger i strid med regelverket, kan du klage til{" "}
      <A href="https://www.datatilsynet.no">Datatilsynet</A>.
    </P>

    <H2 id="sikkerhet">9. Sikkerhet</H2>
    <P>
      All trafikk er kryptert (HTTPS). Passord lagres som hash, betalingsnøkler og andre hemmeligheter lagres kryptert,
      og bare de som trenger det har tilgang til systemene. Kundenes data er skilt fra hverandre i egne databaser.
    </P>

    <H2 id="endringer">10. Endringer</H2>
    <P>
      Vi oppdaterer erklæringen når vi endrer hvordan vi behandler opplysninger. Større endringer varsler vi kundene
      om på e-post. Datoen øverst viser når den sist ble endret.
    </P>

    <H3>Se også</H3>
    <P>
      <A href="/vilkar">Vilkår for bruk</A>
    </P>
  </LegalPage>
);

export default PersonvernPage;
