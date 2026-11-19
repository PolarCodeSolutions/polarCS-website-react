import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pt-28 dark:bg-night-900 lg:pt-[150px]">
      {/* Nordlys-glød */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-night-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-[-5%] h-[320px] w-[560px] rounded-full bg-aurora-gradient opacity-20 blur-[120px] animate-aurora-shift dark:opacity-30" />
      </div>

      <div className="container pb-10 lg:pb-16">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-7/12">
            <div className="mb-8 max-w-[640px] md:mb-0">
              <span className="mb-4 inline-block h-1 w-14 rounded-full bg-aurora-gradient" />
              <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
                {pageName}
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-4/12 lg:w-5/12">
            <div className="text-end">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className="pr-1 text-base font-medium text-body-color transition hover:text-primary"
                  >
                    Hjem
                  </Link>
                  <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                </li>
                <li className="text-base font-medium text-primary">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
