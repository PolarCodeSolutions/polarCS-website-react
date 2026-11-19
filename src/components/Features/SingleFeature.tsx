import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, dropdownInfo } = feature;
  return (
    <div className="group h-full rounded-2xl border border-stroke-stroke bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-soft dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-primary/40">
      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-aurora-gradient text-night-900 shadow-glow-soft transition group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
        {paragraph}
      </p>
      {dropdownInfo && (
        <details className="group/d mt-4 text-sm font-medium text-body-color dark:text-body-color-dark">
          <summary className="cursor-pointer list-none font-semibold text-primary transition hover:text-primary/80">
            Les mer
            <span className="ml-1 inline-block transition group-open/d:rotate-90">›</span>
          </summary>
          <p className="mt-3 leading-relaxed">{dropdownInfo}</p>
        </details>
      )}
    </div>
  );
};

export default SingleFeature;
