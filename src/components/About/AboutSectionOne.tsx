import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const shareUrl = "https://polarcode.solutions/om";
  const title = "Om Oss | PolarCode Solutions";
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Vi leverer bærekraftige løsninger."
                paragraph="Vi er dedikert til å:"
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Fremme Open Source-utvikling" />
                    <List text="Levere Kvalitet og Innovasjon" />
                    <List text="Bygge Langsiktige Partnerskap" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Støtte Samarbeid og Læring" />
                    <List text="Drive Bærekraftig Utvikling" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <Image
                src="/images/about/barekraft.webp"
                alt="about-image"
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
                className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
              />
              <Image
                src="/images/about/barekraft.webp"
                alt="about-image"
                width={800}
                height={600}
                style={{ objectFit: 'cover' }}
                className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
              />

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

export default AboutSectionOne;
