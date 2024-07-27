import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          
          <div className="w-full px-4">
          <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Kjente teknologier
                </h2>
                </div>
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/3 items-center justify-center px-3 py-[15px] sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/8">
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="relative w-full h-20 opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
    >
      <div className="hidden dark:block">
        <Image
          src={imageLight}
          alt={name}
          title={name}
          width={70}
          height={70}
          style={{ objectFit: 'contain', width: '70px', height: '70px' }}
          loading="eager"
        />
      </div>
      <div className="block dark:hidden">
        <Image
          src={image}
          alt={name}
          title={name}
          width={70}
          height={70}
          style={{ objectFit: 'contain', width: '70px', height: '70px' }}
          loading="eager"
        />
      </div>





    </a>
  </div>

  );
};
