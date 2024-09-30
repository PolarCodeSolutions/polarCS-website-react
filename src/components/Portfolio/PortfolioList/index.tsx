"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PortfolioList.css"; // Importing CSS for styling

// Service Item Component
const ServiceItem = ({ title, description, images, internalLink, externalLink, alignRight, logo }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Sentraliser slideren
    centerPadding: "0", // Fjern padding
  };

  return (
    <div className={`service-item ${alignRight ? "reverse" : ""}`}>
      <div className="service-content">
        {/* Logo */}
        <div 
          onClick={() => window.open(externalLink, "_blank")} 
          role="button" 
          className="logo-link" 
          style={{ cursor: "pointer" }}>
          <img src={logo} alt={`${title} logo`} className="service-logo" />
        </div>

        <h3>{title}</h3>
        <p>{description}</p>
        <a href={internalLink} className="service-link">
          <b>Les mer om prosjektet her</b>
        </a>
      </div>
      <div className="service-image">
        <Slider {...settings} className="service-slide">
          {images.map((image: any, index: number) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={image.src}
                alt={title}
                width={image.width || 600}
                height={image.height || 400}
                style={{ margin: "0 auto", display: "block", maxWidth: '100%', maxHeight: '100%' }} // Ensures image scaling
              />
            </div>
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
  internalLink: PropTypes.string.isRequired, // Internal link for project details
  externalLink: PropTypes.string.isRequired, // External link for the logo
  alignRight: PropTypes.bool,
  logo: PropTypes.string.isRequired, // Logo is required
};

// Main Component
const ServiceList = () => {
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      title: "Moderne dashboard for systemkontroll",
      description:
        "Dette prosjektet ble utviklet for Hydroplant Technology AS. Systemet gir brukere full oversikt over anlegget og mulighet til å styre det fra en sentralisert plattform.",
      images: [
        {
          src: "/images/kunder/hydroplant/0.png",
          width: 600,
          height: 400,
        },
        {
          src: "/images/kunder/hydroplant/0_1.png",
          width: 600,
          height: 400,
        },
        {
          src: "/images/kunder/hydroplant/2.png",
          width: 600,
          height: 400,
        },
      ],
      internalLink: "/portfolio/hydroplant-dashboard", // Internal link to project details
      externalLink: "https://hydroplant.no", // External link for the logo
      alignRight: false,
      logo: "/images/kunder/hydroplant/logo.png", // Add the logo URL here
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
          internalLink={service.internalLink} // Pass the internal link for project details
          externalLink={service.externalLink} // Pass the external link for the logo
          alignRight={!isMobile && service.alignRight} // Align right only when not mobile
          logo={service.logo} // Pass the logo to each service
        />
      ))}
    </div>
  );
};

export default ServiceList;
