import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Webdesign & Programvareutvikling | PolarCode Solutions</title>
        <meta name="description" content="PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt." />
        <meta name="keywords" content="webdesign, programvareutvikling, webutvikling, vedlikehold, PolarCode Solutions, polarcode, software, software solutions, nettside bedrift, nettside, mo i rana, helgeland, nordland" />
        <meta property="og:title" content="Webdesign & Programvareutvikling | PolarCode Solutions" />
        <meta property="og:description" content="PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt." />
        <meta property="og:image" content="/images/logo/croppedPolarLogo.png" />
        <meta property="og:url" content="https://polarcode.solutions" />
      </Head>
      <ScrollUp />
      <Hero />
      <Blog />
      <Features />
      <Brands />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
