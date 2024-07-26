import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester vi tilbyr våre kunder | PolarCode Solutions",
  description: "Utforsk våre tjenester innen skreddersydd webdesign, programvareutvikling og vedlikehold. Kontakt oss for å få din bedrift på nett med PolarCode Solutions.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="          "
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
