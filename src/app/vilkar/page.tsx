import { Metadata } from "next";
import { A, CompanyLine, H2, LegalPage, P, UL } from "@/components/Legal/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Vilkår for bruk | PolarCode Solutions",
  description:
    "Vilkårene for PolarCode Solutions sine tjenester: nettsider, kundeportalen, nettbutikk, arrangementer og appen PolarTQR.",
  alternates: { canonical: "https://polarcode.solutions/vilkar" },
};

const VilkarPage = () => (
  <LegalPage
    title="Vilkår for bruk"
    intro="Disse vilkårene gjelder når du bruker tjenestene til PolarCode Solutions: nettsider og nettbutikker vi lager og drifter, kundeportalen og appen PolarTQR. Har vi inngått en egen skriftlig avtale med deg, går den foran disse vilkårene der de er forskjellige."
  >
    <H2 id="parter">1. Hvem vi er</H2>
    <CompanyLine />

    <H2 id="tjenesten">2. Tjenestene</H2>
    <UL>
      <li>
        <strong>Nettside, nettbutikk og arrangement:</strong> vi setter opp og drifter nettsiden din. Du redigerer
        innholdet selv i kundeportalen. Hva som er inkludert, står i pakken du har valgt eller i avtalen vår.
      </li>
      <li>
        <strong>Kundeportalen:</strong> der du administrerer innhold, produkter, ordrer, arrangementer, billetter,
        nyhetsbrev og innstillinger.
      </li>
      <li>
        <strong>PolarTQR:</strong> en gratis app for arrangører og vakter som bruker PolarCode, til å skanne og sjekke
        inn billetter. Appen har ingen kjøp. Den kan bare brukes med en gyldig konto eller skannernøkkel fra en
        arrangør.
      </li>
    </UL>

    <H2 id="konto">3. Konto og tilgang</H2>
    <UL>
      <li>Du må oppgi riktige opplysninger og holde dem oppdatert.</li>
      <li>
        Du er ansvarlig for å holde passord og nøkler hemmelige, og for det som gjøres med kontoen din. Gi beskjed
        til oss med en gang hvis du tror noen andre har fått tilgang.
      </li>
      <li>
        Arrangører er ansvarlige for vaktene de gir tilgang til PolarTQR, og for å fjerne tilgangen når den ikke
        lenger trengs.
      </li>
    </UL>

    <H2 id="pris">4. Pris og betaling</H2>
    <UL>
      <li>
        Prisene står på <A href="/#pricing">nettsiden vår</A> eller i tilbudet du har fått. Oppstartsprisen
        faktureres når nettsiden er satt opp. Månedsprisen faktureres forskuddsvis.
      </li>
      <li>
        Ved forsinket betaling kan vi kreve forsinkelsesrente etter forsinkelsesrenteloven. Er en faktura ubetalt
        mer enn 30 dager etter forfall, kan vi stenge tilgangen etter skriftlig varsel.
      </li>
      <li>Vi varsler prisendringer minst 30 dager før de gjelder.</li>
      <li>
        Gebyrer fra betalingsleverandører (Vipps MobilePay, Stripe) og eventuelle domener kommer i tillegg og
        betales etter leverandørens priser.
      </li>
    </UL>

    <H2 id="ansvar">5. Ditt innhold og ditt ansvar</H2>
    <UL>
      <li>
        Innholdet du legger ut (tekst, bilder, produkter, priser) er ditt. Du må ha rett til å bruke det, og det må
        være lovlig.
      </li>
      <li>
        Selger du varer eller billetter, er det du som er selger overfor kundene dine. Du er ansvarlig for egne
        salgsvilkår, angrerett, reklamasjoner, mva og regnskap. Avtalen med Vipps MobilePay eller Stripe inngår du
        selv.
      </li>
      <li>
        Du er behandlingsansvarlig for personopplysninger om kundene, medlemmene og deltakerne dine. Vi behandler dem
        som databehandler etter <A href="/databehandleravtale">databehandleravtalen</A>, som er en del av avtalen
        mellom oss. Se også <A href="/personvern">personvernerklæringen</A>.
      </li>
      <li>
        Tjenestene kan ikke brukes til ulovlig innhold, svindel, spam eller til å angripe eller belaste systemene. Da
        kan vi fjerne innholdet eller stenge tilgangen.
      </li>
    </UL>

    <H2 id="drift">6. Drift og tilgjengelighet</H2>
    <P>
      Vi drifter tjenestene fra to datasentre i Norge og gjør vårt beste for at de skal være tilgjengelige hele
      tiden. Vi kan likevel ikke garantere at de aldri er nede. Planlagt vedlikehold gjør vi så langt det går når
      trafikken er lav. Vi oppdaterer og forbedrer tjenestene løpende, og kan endre eller fjerne funksjoner. Vesentlige
      endringer som påvirker deg, varsler vi om på forhånd.
    </P>

    <H2 id="rettigheter">7. Rettigheter</H2>
    <P>
      Plattformen, kundeportalen, PolarTQR og designmalene tilhører PolarCode Solutions. Du får bruke dem så lenge
      kundeforholdet varer. Innholdet ditt tilhører deg, og du kan når som helst be om å få det utlevert.
    </P>

    <H2 id="ansvarsbegrensning">8. Ansvarsbegrensning</H2>
    <P>
      Vi er ikke ansvarlige for indirekte tap, som tapt omsetning eller fortjeneste, eller for feil hos
      betalingsleverandører og andre tjenester vi ikke kontrollerer. Vårt samlede ansvar er begrenset til det du har
      betalt oss de siste 12 månedene. Begrensningene gjelder ikke ved forsett eller grov uaktsomhet.
    </P>

    <H2 id="oppsigelse">9. Oppsigelse</H2>
    <UL>
      <li>
        Du kan si opp når som helst med én måneds varsel til slutten av en måned, med mindre annet er avtalt.
        Oppstartsprisen refunderes ikke.
      </li>
      <li>
        Vi kan si opp med tre måneders varsel, eller straks hvis vilkårene brytes vesentlig.
      </li>
      <li>
        Når kundeforholdet avsluttes, kan du få utlevert innholdet og dataene dine. Vi sletter dem senest 90 dager
        etter avslutning, bortsett fra det vi må ta vare på etter loven.
      </li>
    </UL>

    <H2 id="forbruker">10. Forbrukere</H2>
    <P>
      Tjenestene er laget for bedrifter, lag og foreninger. Er du forbruker, gjelder ufravikelige regler i
      forbrukerlovgivningen (blant annet angrerettloven) i tillegg til disse vilkårene.
    </P>

    <H2 id="endringer">11. Endringer i vilkårene</H2>
    <P>
      Vi kan endre vilkårene. Vesentlige endringer varsler vi kundene om på e-post minst 30 dager før de gjelder.
    </P>

    <H2 id="tvister">12. Lovvalg og tvister</H2>
    <P>
      Vilkårene følger norsk rett. Vi prøver alltid å løse uenigheter i minnelighet først. Hvis det ikke lykkes, er{" "}
      {COMPANY.venue} avtalt verneting, så langt loven tillater det.
    </P>
    <P>
      Spørsmål om vilkårene? Kontakt oss på <A href={`mailto:${COMPANY.email}`}>{COMPANY.email}</A>.
    </P>
  </LegalPage>
);

export default VilkarPage;
