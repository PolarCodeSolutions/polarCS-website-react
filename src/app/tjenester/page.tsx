"use strict";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polarcode.solutions/"),
  title: "Tjenester vi tilbyr våre kunder | PolarCode Solutions",
  description: "Utforsk våre tjenester innen skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for å få din bedrift på nett med PolarCode Solutions.",
  keywords: "polar tjenester, webdesign, programvareutvikling, webutvikling, vedlikehold, PolarCode Solutions, polarcode, software, software solutions, nettside bedrift, nettside, mo i rana, helgeland, nordland",
  openGraph: {
    type: "website",
    title: "Tjenester vi tilbyr våre kunder | PolarCode Solutions",
    description: "Utforsk våre tjenester innen skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for å få din bedrift på nett med PolarCode Solutions.",
    url: "https://www.polarcode.solutions/tjenester",
    images: [
      {
        url: "https://www.polarcode.solutions/images/logo/croppedPolarLogo.png",
        width: 800,
        height: 600,
        alt: "PolarCode Solutions logo"
      }
    ]
  },
  alternates: {
    canonical: "https://www.polarcode.solutions/tjenester"
  }
};

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        
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
        
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      
      <Breadcrumb
        pageName="Tjenester vi tilbyr våre kunder"
        description="På denne siden finner du våre tjenester. Vi tilbyr en rekke tjenester som kan hjelpe deg med å utvikle og forbedre din bedrift. Våre tjenester inkluderer webdesign, apputvikling, digital markedsføring og mye mer."
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">

          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
