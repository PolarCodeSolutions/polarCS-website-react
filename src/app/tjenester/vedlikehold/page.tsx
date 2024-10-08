"use strict";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";
import Head from 'next/head';
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

export const metadata: Metadata = {
  metadataBase: new URL("https://polarcode.solutions/"),
  title: "Vedlikehold og support-tjenester | PolarCode Solutions",
  description: "Oppdag våre vedlikeholdstjenester hos PolarCode Solutions. Vi tilbyr pålitelig vedlikehold for å sikre at dine nettsider og programvare fungerer optimalt.",
  keywords: "vedlikehold, support-tjenester, PolarCode Solutions, nettsider, programvare, optimal ytelse",
  openGraph: {
    type: "website",
    title: "Vedlikehold og support-tjenester | PolarCode Solutions",
    description: "Oppdag våre vedlikeholdstjenester hos PolarCode Solutions. Vi tilbyr pålitelig vedlikehold for å sikre at dine nettsider og programvare fungerer optimalt.",
    url: "https://polarcode.solutions/tjenester/vedlikehold",
    images: [
      {
        url: "https://polarcode.solutions/images/tjenester/vedlikehold.webp",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions maintenance services preview image"
      }
    ]
  },
  alternates: {
    canonical: "https://polarcode.solutions/tjenester/vedlikehold"
  }
};

const BlogDetailsPage: React.FC = () => {
  const shareUrl = "https://polarcode.solutions/tjenester/vedlikehold";
  const title = "Vedlikehold og support-tjenester | PolarCode Solutions";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": "Oppdag våre vedlikeholdstjenester hos PolarCode Solutions. Vi tilbyr pålitelig vedlikehold for å sikre at dine nettsider og programvare fungerer optimalt.",
    "image": "https://polarcode.solutions/images/logo/croppedPolarLogo.png",
    "author": {
      "@type": "Organization",
      "name": "PolarCode Solutions",
      "logo": "https://polarcode.solutions/logo.png"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PolarCode Solutions",
      "logo": "https://polarcode.solutions/logo.png"
    },
    "url": shareUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="https://polarcode.solutions/images/logo/croppedPolarLogo.png" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Vedlikehold og support-tjenester | PolarCode Solutions" />
        <meta
          property="og:description"
          content="Oppdag våre vedlikeholdstjenester hos PolarCode Solutions. Vi tilbyr pålitelig vedlikehold for å sikre at dine nettsider og programvare fungerer optimalt."
        />
        <meta property="og:url" content="https://polarcode.solutions/tjenester/vedlikehold" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://polarcode.solutions/images/tjenester/vedlikehold.webp" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="PolarCode Solutions maintenance services preview image" />
        <meta property="fb:app_id" content="1345767586400332" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-76N1PJZ11X"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-76N1PJZ11X');
            `,
          }}
        />
      </Head>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Vedlikeholdstjenester
                </h1>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <img
                          src="/images/logo/croppedPolarLogo.png"
                          alt="author"
                          width={70}
                          height={70}
                          style={{ objectFit: 'cover' }}
                        />

                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          Av <span>PolarCode Solutions</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        2024
                      </p>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                          <FacebookIcon size={32} round />
                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`} target="_blank" rel="noopener noreferrer">
                          <TwitterIcon size={32} round />
                        </a>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}&summary=Oppdag%20våre%20skreddersydde%20webdesigntjenester%20hos%20PolarCode%20Solutions.%20Vi%20skaper%20unike,%20brukervennlige%20nettsteder%20som%20hjelper%20din%20bedrift%20å%20skille%20seg%20ut.`} target="_blank" rel="noopener noreferrer">
                          <LinkedinIcon size={32} round />
                        </a>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      Vedlikehold
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Vedlikehold av systemer og programvare begynner med en grundig vurdering av dine eksisterende løsninger og identifikasjon av områder som trenger oppdatering eller forbedring. Vi utarbeider en vedlikeholdsplan som inkluderer regelmessige oppdateringer, sikkerhetskontroller og ytelsesoptimaliseringer. Når planen er på plass, gjennomfører vårt team jevnlige oppgaver som å installere oppdateringer, rette eventuelle feil og overvåke systemets helse. Dette sikrer at alt fungerer effektivt, reduserer risikoen for nedetid og beskytter mot sikkerhetstrusler. Vi gir deg også rapporter og innsikt om systemets tilstand, slik at du alltid er oppdatert om eventuelle behov for videre tiltak. Ved å følge denne prosessen sørger vi for at dine teknologiske løsninger forblir stabile, sikre og effektive, noe som gir deg trygghet og lar deg fokusere på kjernevirksomheten.                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <img
                        src="/images/tjenester-details/vedlikehold.webp"
                        alt="image"
                        width={1200}
                        height={900}
                        style={{ objectFit: 'cover' }}
                      />

                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Hvorfor er vedlikehold viktig for en bedrift?
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Trykk på overskriftene for å lese mer.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Opprettholder driftssikkerhet</strong></summary>
                        Regelmessig vedlikehold sikrer at systemer og programvare fungerer som forventet og reduserer risikoen for nedetid. Dette er avgjørende for å opprettholde en stabil drift og unngå forstyrrelser i virksomheten.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Forhindrer kostbare feil</strong></summary>
                        Ved å oppdage og rette feil tidlig, kan vedlikehold forhindre større problemer som kan føre til dyre reparasjoner eller systemgjenoppretting. Forebygging er ofte langt billigere enn å håndtere konsekvensene av alvorlige feil.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Sikrer sikkerhet</strong></summary>
                        Oppdateringer og sikkerhetsforbedringer er en del av vedlikeholdet, som beskytter mot sårbarheter og trusler. Dette er kritisk for å beskytte sensitive data og forhindre sikkerhetsbrudd som kan skade virksomheten.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Forbedrer ytelse</strong></summary>
                        Regelmessig vedlikehold bidrar til å optimalisere systemets ytelse. Dette kan innebære oppdatering av programvare, rensing av data og justering av systeminnstillinger for å sikre at alt fungerer effektivt og raskt.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Holder programvaren oppdatert</strong></summary>
                        Teknologi utvikler seg raskt, og vedlikehold sikrer at programvaren din er oppdatert med de nyeste funksjonene og forbedringene. Dette gir deg tilgang til de nyeste verktøyene og forbedrer brukeropplevelsen.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Øker levetiden på systemer</strong></summary>
                        Regelmessig vedlikehold kan forlenge levetiden til både programvare og maskinvare. Dette betyr at investeringene dine varer lenger, og du unngår hyppige oppgraderinger og kostnader ved å bytte ut utdaterte systemer.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Overholder forskrifter</strong></summary>
                        Vedlikehold sørger for at systemer og prosesser overholder gjeldende lover og reguleringer, noe som er spesielt viktig for bransjer med strenge krav til datahåndtering og sikkerhet.
                      </details>
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg list-none">
                      <details>
                        <summary><strong>Forbedrer brukeropplevelsen</strong></summary>
                        Når systemer fungerer feilfritt, er brukeropplevelsen mye bedre. Dette gjelder både for interne ansatte og eksterne kunder. En stabil og responsiv plattform bidrar til økt produktivitet og kundetilfredshet.
                      </details>
                    </li>
                  </ul>


                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                    Ved å investere i jevnlig vedlikehold, kan bedrifter sikre at deres teknologi fungerer optimalt, opprettholde sikkerhet, unngå unødvendige kostnader og forbedre både intern og ekstern opplevelse.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Vedlikehold" />
                        <TagButton text="Systemer" />
                        <TagButton text="Info" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
