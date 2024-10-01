import React, { useState } from 'react';

type Service = {
  question: string;
  explanation: string; // Forklaring for spørsmålet
  options: { text: string; price: number; disabled?: boolean }[];
};

const DynamicPricingBox = ({
  basePrice,
  packageName,
  subtitle,
  services
}: {
  basePrice: number;
  packageName: string;
  subtitle: string;
  services: Service[];
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [summary, setSummary] = useState<string[]>([]);

  const handleOptionChange = (price: number, text: string) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentStep] = price;
    setSelectedOptions(updatedOptions);

    const updatedSummary = [...summary];
    updatedSummary[currentStep] = `${services[currentStep].question}: ${text} (Kr ${price})`;
    setSummary(updatedSummary);

    setTimeout(() => handleNextStep(), 500);
  };

  const calculateTotalPrice = () => {
    const totalSelectedPrices = selectedOptions.reduce(
      (total, price) => total + (price || 0),
      0
    );
    return Math.round(basePrice + totalSelectedPrices);
  };

  const handleNextStep = () => {
    if (currentStep < services.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetSurvey = () => {
    setSelectedOptions([]);
    setSummary([]);
    setCurrentStep(0);
  };

  const handleContactRedirect = () => {
    const contactUrl = `/kontakt?summary=${encodeURIComponent(
      summary.join('\n')
    )}&total=${calculateTotalPrice()}`;
    window.location.href = contactUrl; // Bruker window.location til å omdirigere
  };

  return (
    <div className="w-full">
      <div className="relative z-10 rounded-lg bg-white dark:bg-gray-800 px-10 py-12 shadow-lg transition-all duration-300">
        <div className="flex flex-col items-center">
          <p className="mb-2 text-2xl font-bold text-dark dark:text-white">
            {packageName}
          </p>
          <p className="price mb-6 text-[48px] font-extrabold text-black dark:text-white">
            kr <span className="amount">{calculateTotalPrice()}</span>
          </p>
        </div>
        <p className="mb-10 text-lg text-center text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>

        {/* Spørsmål og valgmuligheter */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-center text-dark dark:text-white mb-4">
            {services[currentStep].question}
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
            {services[currentStep].explanation}
          </p>
          <div className="flex flex-col items-center space-y-4">
            {services[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionChange(option.price, option.text)}
                className={`w-3/4 px-6 py-3 text-lg rounded-lg border-2 font-medium transition ${
                  selectedOptions[currentStep] === option.price
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-dark dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {option.text} (Kr {option.price})
              </button>
            ))}
          </div>
        </div>

        {/* Navigasjon */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePreviousStep}
            disabled={currentStep === 0}
            className="px-6 py-2 bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 disabled:opacity-50"
          >
            Forrige
          </button>
          <button
            onClick={handleNextStep}
            disabled={currentStep === services.length - 1}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            Neste
          </button>
        </div>

        {/* Tilbakestill og Kontakt-knapper */}
        {currentStep === services.length - 1 && (
          <div className="flex flex-col items-center mt-8">
            <button
              onClick={resetSurvey}
              className="mb-4 px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600"
            >
              Tilbakestill undersøkelsen
            </button>
            <button
              onClick={handleContactRedirect}
              className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
            >
              Kontakt oss
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicPricingBox;
