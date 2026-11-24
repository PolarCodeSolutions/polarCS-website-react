"use client";
import Link from "next/link";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const url = "https://polarcode.solutions/";
const title = "Profesjonell Webdesign og Programvareutvikling | PolarCode Solutions";

const COLUMNS: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Tjenester",
    links: [
      { href: "/tjenester/webdesign", label: "Webdesign" },
      { href: "/tjenester/programvare", label: "Programvareutvikling" },
      { href: "/tjenester/webhosting", label: "Hosting" },
      { href: "/tjenester/vedlikehold", label: "Vedlikehold" },
      { href: "/tjenester", label: "Alle tjenester" },
    ],
  },
  {
    title: "Produkter",
    links: [
      { href: "/portalen", label: "PolarCode-portalen" },
      { href: "/polartqr", label: "Billetter og PolarTQR" },
      { href: "/eksempler", label: "Våre design" },
      { href: "/portfolio", label: "Portefølje" },
      { href: "/om", label: "Om oss" },
    ],
  },
  {
    title: "Hjelp og vilkår",
    links: [
      { href: "/kontakt", label: "Kontakt oss" },
      { href: "/personvern", label: "Personvern" },
      { href: "/vilkar", label: "Vilkår for bruk" },
      { href: "/databehandleravtale", label: "Databehandleravtale" },
    ],
  },
];

const linkClass = "text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-12 md:grid-cols-4 xl:grid-cols-12 lg:pb-16">
            {/* Om PolarCode */}
            <div className="col-span-2 md:col-span-4 xl:col-span-3">
              <Link href="/" className="mb-6 inline-flex items-center gap-3">
                <img src="/images/logo/croppedPolarLogo.png" alt="PolarCode Solutions" width={56} height={56} className="h-14 w-14" />
                <span className="text-xl font-bold text-black dark:text-white">PolarCode Solutions</span>
              </Link>
              <p className="mb-6 max-w-[340px] text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Kode, direkte fra kilden av nordlyset. Nettsider, nettbutikker og billettsystem for bedrifter, lag og foreninger.
              </p>
              <a href="https://portal.polarcode.solutions"
                className="mb-8 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90">
                Logg inn i portalen
              </a>
              <div className="flex items-center gap-5">
                <a href="https://www.facebook.com/profile.php?id=61560407736033" aria-label="PolarCode på Facebook" target="_blank" rel="noopener noreferrer">
                  <img src="/images/icons/metaIcon.png" alt="" width={34} height={18} />
                </a>
                <a href="https://discord.gg/hUAksuANZ4" aria-label="PolarCode på Discord" target="_blank" rel="noopener noreferrer">
                  <img src="/images/icons/discordIcon.png" alt="" width={36} height={18} />
                </a>
              </div>
            </div>

            {COLUMNS.map((col) => (
              <div key={col.title} className="xl:col-span-2">
                <h2 className="mb-6 text-lg font-bold text-black dark:text-white">{col.title}</h2>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}><Link href={l.href} className={linkClass}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Kontakt */}
            <div className="xl:col-span-3">
              <h2 className="mb-6 text-lg font-bold text-black dark:text-white">Kontakt</h2>
              <ul className="space-y-3">
                <li><a href="tel:+4795044586" className={linkClass}>+47 950 44 586</a></li>
                <li><a href="mailto:contact@polarcode.solutions" className={linkClass}>contact@<wbr />polarcode.solutions</a></li>
                <li className="text-base text-body-color dark:text-body-color-dark">Mo i Rana, Nordland</li>
              </ul>
              <p className="mb-3 mt-6 text-sm font-semibold text-black dark:text-white">Del oss med andre</p>
              <div className="flex gap-2">
                <FacebookShareButton url={url} title={title} aria-label="Del på Facebook"><FacebookIcon size={30} round /></FacebookShareButton>
                <TwitterShareButton url={url} title={title} aria-label="Del på X"><TwitterIcon size={30} round /></TwitterShareButton>
                <LinkedinShareButton url={url} title={title} aria-label="Del på LinkedIn"><LinkedinIcon size={30} round /></LinkedinShareButton>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-body-color-dark">
              © {new Date().getFullYear()} PolarCode Solutions – utviklet med kjærlighet for koden.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
          
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
