import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Head from 'next/head';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign & Programvareutvikling | PolarCode Solutions",
  description: "PolarCode Solutions tilbyr skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for tilbud på ditt neste prosjekt.",
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

