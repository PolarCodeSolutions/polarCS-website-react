// SliderComponent.tsx
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ images }: { images: { src: string; alt: string }[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="mb-10 w-full overflow-hidden rounded">
      <Slider {...settings} className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
