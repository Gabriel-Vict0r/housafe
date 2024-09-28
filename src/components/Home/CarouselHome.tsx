"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "../shared/CardCarousel";
import { IImmobileItemProps } from "@/models/intefaces/all";
import ArrowCarousel from "./ArrowCarousel";
import { Sides } from "@/models/enums/all";

type Props = {};

const CarouselHome = (props: Props) => {
  const [immobile, setImmobile] = useState<IImmobileItemProps[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = fetch(`${process.env.URL_API}/recents-immobile`)
          .then((response) => response.json())
          .then((data) => setImmobile(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      arrows
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={500}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={1300}
      customRightArrow={<ArrowCarousel side={Sides.RIGHT} />}
      customLeftArrow={<ArrowCarousel side={Sides.LEFT} />}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-p"
      className="w-full"
    >
      {immobile.map((immobile, index) => (
        <CardCarousel immobile={immobile} key={index} />
      ))}
    </Carousel>
  );
};

export default CarouselHome;
