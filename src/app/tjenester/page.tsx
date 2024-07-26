import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Head from 'next/head';

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tjenester vi tilbyr våre kunder | PolarCode Solutions</title>
        <meta name="description" content="Utforsk våre tjenester innen skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for å få din bedrift på nett med PolarCode Solutions." />
        <meta name="keywords" content="tjenester, webdesign, programvareutvikling, vedlikehold, PolarCode Solutions, digital markedsføring, apputvikling" />
        <meta property="og:title" content="Tjenester vi tilbyr våre kunder | PolarCode Solutions" />
        <meta property="og:description" content="Utforsk våre tjenester innen skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for å få din bedrift på nett med PolarCode Solutions." />
        <meta property="og:image" content="/images/logo/croppedPolarLogo.png" />
        <meta property="og:url" content="https://polarcode.solutions/tjenester" />
      </Head>
      <Breadcrumb
        pageName=""
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
