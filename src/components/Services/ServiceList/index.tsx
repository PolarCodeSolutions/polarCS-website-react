"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceList.css"; // Importing CSS for styling

// Service Item Component
const ServiceItem = ({ title, description, images, link, alignRight }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={`service-item ${alignRight ? "reverse" : ""}`}>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="service-link">
          <b>Se hele prosjektet her</b>
        </a>
      </div>
      <div className="service-image">
        <Slider {...settings} className="service-slide">
          {images.map((image: any, index: number) => (
            <img
              key={index}
              src={image.src}
              alt={title}
              width={image.width || 600} // Default width if not provided
              height={image.height || 400} // Default height if not provided
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired, // Link is now required
  alignRight: PropTypes.bool,
};

// Main Component
const ServiceList = () => {
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      title: "Moderne nettside for snekkerfirma",
      description:
        "Varm og tydelig nettside for håndverkere, med tjenester, prosjekter og kontaktskjema. Kunden legger selv inn nye prosjekter, bilder og tekster i PolarCode-portalen – nettsiden oppdateres med en gang.",
      images: [
        {
          src: "/images/eksempler/snekker/snekker_front_1.png",
          width: 600,
          height: 400,
        },
        {
          src: "/images/eksempler/snekker/snekker_front_2.png",
          width: 600,
          height: 400,
        },
        {
          src: "/images/eksempler/snekker/snekker_front_3.png",
          width: 600,
          height: 400,
        },
        {
          src: "/images/eksempler/snekker/snekker_front_4.png",
          width: 600,
          height: 400,
        },
      ],
      link: "https://snekker.polarcode.solutions/",
      alignRight: false,
    },
    {
      title: "Brukervennlig nettside for elektrikertjenester",
      description:
        "Moderne nettside med fokus på tjenester, døgnvakt og rask kontakt. Samme fleksible løsning som snekkeren, men med et helt eget uttrykk – alt innhold redigeres i PolarCode-portalen.",
      images: [
        {
          src: "/images/eksempler/elektriker/elektriker_front_1.png",
          width: 600,
          height: 400,
        },
        {
          src: "/images/eksempler/elektriker/elektriker_front_2.png",
          width: 600,
          height: 400,
        },
        {
          src: "/images/eksempler/elektriker/elektriker_front_3.png",
          width: 600,
          height: 400,
        },
      ],
      link: "https://elektriker.polarcode.solutions/",
      alignRight: true,
    },
    {
      title: "Nettside for lag og foreninger",
      description:
        "Arrangementer med påmelding og billetter, nyheter, sponsorer etter nivå og nyhetsbrev. Påmeldingsskjemaene lages i portalen, og påmeldingene havner rett i oversikten til styret.",
      images: [
        { src: "/images/eksempler/forening/forening_front_1.png", width: 600, height: 400 },
        { src: "/images/eksempler/forening/forening_front_2.png", width: 600, height: 400 },
        { src: "/images/eksempler/forening/forening_front_3.png", width: 600, height: 400 },
        { src: "/images/eksempler/forening/forening_front_4.png", width: 600, height: 400 },
      ],
      link: "https://forening.polarcode.solutions/",
      alignRight: false,
    },
    {
      title: "Nettbutikk med Vipps og kortbetaling",
      description:
        "Komplett nettbutikk med produktvarianter, handlekurv og kasse med Vipps, kort og Klarna. Produkter, priser, lager, frakt og rabattkoder styres i PolarCode-portalen, og ordrene dukker opp der.",
      images: [
        { src: "/images/eksempler/nettbutikk/nettbutikk_front_1.png", width: 600, height: 400 },
        { src: "/images/eksempler/nettbutikk/nettbutikk_front_2.png", width: 600, height: 400 },
        { src: "/images/eksempler/nettbutikk/nettbutikk_front_3.png", width: 600, height: 400 },
        { src: "/images/eksempler/nettbutikk/nettbutikk_front_4.png", width: 600, height: 400 },
      ],
      link: "https://nettbutikk.polarcode.solutions/",
      alignRight: true,
    },
  ];

  useEffect(() => {
    // Function to detect screen size change
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Call once to initialize
    window.addEventListener("resize", handleResize); // Add listener on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="service-list-container">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          title={service.title}
          description={service.description}
          images={service.images} // Image array is passed directly with width/height
          link={service.link} // Pass the link to each service
          alignRight={!isMobile && service.alignRight} // Align right only when not mobile
        />
      ))}
    </div>
  );
};

export default ServiceList;
