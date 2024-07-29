"use client";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

import React, { useState } from 'react';
import NewsLatterBox from './NewsLatterBox';

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const shareUrl = "https://www.polarcode.solutions/kontakt";
  const title = "Kontakt Oss for tilbud og info | PolarCode Solutions";

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
      setResult('Melding sendt!');
      if (event.currentTarget) {
        event.currentTarget.reset();
      }
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Lurer du på noe? Vi svarer så fort vi kan!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Vi er her for å hjelpe deg. Vennligst fyll ut skjemaet nedenfor og vi vil svare deg så snart som mulig.
              </p>
              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Ditt navn
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Skriv inn ditt navn"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Din e-post
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Skriv inn din e-post"
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Din melding
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Skriv inn din melding"
                        required
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Send melding
                    </button>
                  </div>
                </div>
                
              </form>
              <span>{result}</span>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                  <FacebookIcon size={32} round />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`} target="_blank" rel="noopener noreferrer">
                  <TwitterIcon size={32} round />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}&summary=Oppdag%20våre%20skreddersydde%20webdesigntjenester%20hos%20PolarCode%20Solutions.%20Vi%20skaper%20unike,%20brukervennlige%20nettsteder%20som%20hjelper%20din%20bedrift%20å%20skille%20seg%20ut.`} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon size={32} round />
                </a>
              </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
