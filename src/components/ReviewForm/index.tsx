"use client";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

import React, { useState } from 'react';

interface ReviewFormProps {
  formTitle: string;
  formDescription: string;
  fields: Array<{
    label: string;
    type: string;
    name: string;
    options?: string[];
  }>;
  submitButtonText: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({
  formTitle,
  formDescription,
  fields,
  submitButtonText
}) => {
  const [result, setResult] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Ny state for å spore innsending

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sender....');
    const formData = new FormData(event.currentTarget);

    formData.append('access_key', '78e21037-a9e2-44e2-9c65-b5f038377df6');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true); // Sett state til "innsendt"
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="review"
      className="overflow-hidden flex items-center justify-center min-h-screen py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="w-full max-w-lg px-4">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              {!isSubmitted ? (
                <>
                  <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    {formTitle}
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                    {formDescription}
                  </p>
                  <form onSubmit={onSubmit}>
                    <div className="-mx-4 flex flex-wrap">
                      {fields.map((field, index) => (
                        <div className="w-full px-4 mb-8" key={index}>
                          <label
                            htmlFor={field.name}
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            {field.label}
                          </label>
                          {field.type === 'textarea' ? (
                            <textarea
                              name={field.name}
                              rows={5}
                              placeholder={field.label.toLowerCase()}
                              required
                              className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            ></textarea>
                          ) : field.type === 'radio' && field.options ? (
                            field.options.map((option) => (
                              <label key={option} className="mr-4">
                                <input
                                  type="radio"
                                  name={field.name}
                                  value={option}
                                  required
                                />{' '}
                                {option}
                              </label>
                            ))
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.label.toLowerCase()}
                              required
                              className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                            />
                          )}
                        </div>
                      ))}
                      <div className="w-full px-4">
                        <button
                          type="submit"
                          className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                        >
                          {submitButtonText}
                        </button>
                      </div>
                      <div className="w-full px-4 mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Din tilbakemelding vil bli publisert på vår nettside.
                        </p>
                      </div>
                    </div>
                  </form>
                  <span>{result}</span>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-bold">Takk for din tilbakemelding!</h2>
                  <p className="mt-4 text-lg">Vi setter stor pris på at du tok deg tid til å gi oss tilbakemelding.</p>
                  <a href="/" className="mt-6 inline-block bg-primary text-white px-4 py-2 rounded">
                    Gå til forsiden
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
