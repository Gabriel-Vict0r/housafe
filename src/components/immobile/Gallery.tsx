"use client";
import React, { useState } from "react";
import LightBox from "yet-another-react-lightbox";
import NextJsImage from "./NextImage";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { TbPhotoSearch } from "react-icons/tb";

type Props = {};

const Gallery = (props: Props) => {
  const [open, setOpen] = useState<boolean>();
  return (
    <>
      <button
        className="relative appearance-none bg-transparent rounded-3xl"
        onClick={() => setOpen(true)}
      >
        <div className="absolute top-0 w-full flex flex-col justify-center items-center h-full bg-cover-img-immobile rounded-3xl">
          <div className=" text-white text-center flex flex-col items-center">
            <TbPhotoSearch className="text-xl" />
            <p className="text-white text-xl">Ver todas</p>
            <span>12 fotos</span>
          </div>
        </div>
        <Image
          src="/hotel.png"
          width={847}
          height={549}
          alt="teste"
          className="object-cover h-full rounded-3xl"
        />
      </button>
      <LightBox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "https://yet-another-react-lightbox.com/images/image01.jpeg",
          },
          {
            src: "https://yet-another-react-lightbox.com/images/image02.jpeg",
          },
          {
            src: "https://yet-another-react-lightbox.com/images/image03.jpeg",
          },
        ]}
        render={{ slide: NextJsImage }}
        className="z-[999]"
      />
    </>
  );
};

export default Gallery;
