import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Head from 'next/head';


const metadata = {
  title: "Profesjonell Webdesign og Programvareutvikling | PolarCode Solutions",
  description: "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for å få din bedrift på nett.",
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Blog />
      <Features />
      <Brands />
      <Pricing />
      <Contact />
    </>
  );
}

//<Testimonials />
//<Blog />

