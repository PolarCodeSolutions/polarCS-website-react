import OfferList from "./OfferList";

const PricingBox = (props: {
  packageName: string;
  tagline: string;
  price: React.ReactNode; // stort tall, f.eks. «249»
  unit: string; // f.eks. «/mnd»
  note: string; // linje under prisen, f.eks. «+ 1 990 kr i oppstart»
  features: string[];
  highlight?: boolean;
  cta: string;
  onSelect: () => void;
}) => {
  const { packageName, tagline, price, unit, note, features, highlight, cta, onSelect } = props;

  return (
    <div
      className={`relative flex h-full flex-col rounded-lg bg-white px-7 py-9 shadow-three transition-all duration-300 hover:shadow-one dark:bg-gray-dark dark:shadow-two ${
        highlight ? "ring-2 ring-primary" : ""
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-night-900">
          Mest valgt
        </span>
      )}
      <p className="mb-2 text-xl font-bold text-dark dark:text-white">{packageName}</p>
      <p className="mb-6 min-h-[3rem] text-sm text-body-color">{tagline}</p>
      <p className="text-dark dark:text-white">
        <span className="text-[40px] font-bold leading-none">{price}</span>
        <span className="ml-1 text-base font-medium text-body-color">{unit}</span>
      </p>
      <p className="mb-6 mt-2 text-sm text-body-color">{note}</p>
      <div className="mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10" />
      <div className="mb-8 flex-1">
        {features.map((f) => (
          <OfferList key={f} text={f} status="active" />
        ))}
      </div>
      <button
        type="button"
        onClick={onSelect}
        className={`w-full rounded-lg px-6 py-3 text-base font-semibold transition ${
          highlight
            ? "bg-primary text-night-900 hover:bg-primary/90"
            : "border-2 border-primary text-dark hover:bg-primary hover:text-night-900 dark:text-white"
        }`}
      >
        {cta}
      </button>
    </div>
  );
};

export default PricingBox;
