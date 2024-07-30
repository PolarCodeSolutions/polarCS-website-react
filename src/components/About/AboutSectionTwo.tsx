import Image from "next/image";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

const AboutSectionTwo = () => {
  const shareUrl = "https://polarcode.solutions/om";
  const title = "Om Oss | PolarCode Solutions";
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/opensource.webp"
                alt="about image"
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/opensource.webp"
                alt="about image"
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />

            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Open Source-utvikling
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Vi tror på kraften i åpen kildekode og ønsker å bidra til fellesskapet ved å dele vår kunnskap og våre løsninger.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Kvalitet og Innovasjon
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Ved å bruke de nyeste teknologiene og metodene, sikrer vi at våre produkter og tjenester er pålitelige, sikre og i forkant av teknologiske trender.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Bygge Langsiktige Partnerskap
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Vi verdsetter våre kunder og arbeider tett med dem for å forstå deres behov og levere løsninger som overgår forventningene.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Samarbeid og Læring
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Vi skaper et miljø hvor våre ansatte og samarbeidspartnere kan vokse og utvikle seg gjennom samarbeid og kontinuerlig læring.                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Drive Bærekraftig Utvikling
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Vi er opptatt av å utvikle teknologi som bidrar til en bærekraftig fremtid, både miljømessig og økonomisk. Ved å følge disse prinsippene, håper vi å inspirere og bidra til en teknologisk utvikling som er inkluderende, ansvarlig og fremtidsrettet.                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
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
    </section>
  );
};

export default AboutSectionTwo;
