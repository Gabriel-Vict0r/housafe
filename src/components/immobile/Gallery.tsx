"use client";
import React, { useEffect, useState } from "react";
import LightBox, { SlideImage } from "yet-another-react-lightbox";
import NextJsImage from "./NextImage";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { TbPhotoSearch } from "react-icons/tb";

interface IImage {
  id: number;
  id_immobile: number;
  url: string;
}

const Gallery = ({ arr, alt }: { arr: Array<IImage>; alt: string }) => {
  const [open, setOpen] = useState<boolean>();
  const [arrImages, setArrImages] = useState<SlideImage[]>([]);
  // const slides = arr.map((element) => {
  //   src: element;
  // });
  useEffect(() => {
    arr.map((element) => {
      setArrImages((prevImages) => [...prevImages, { src: element.url }]);
    });
  }, []);
  console.log(arrImages);
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
            <span>
              {arrImages.length > 1 ? `${arrImages.length} fotos` : "1 foto"}
            </span>
          </div>
        </div>
        <Image
          src={arr[0].url}
          width={847}
          height={549}
          alt={`Imagem de ${alt}`}
          className="object-cover h-full rounded-3xl"
        />
      </button>
      <LightBox
        open={open}
        close={() => setOpen(false)}
        slides={arrImages}
        render={{ slide: NextJsImage }}
        className="z-[999]"
      />
    </>
  );
};

export default Gallery;
