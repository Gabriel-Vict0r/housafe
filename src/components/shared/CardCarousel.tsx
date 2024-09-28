import { IImmobileItemProps } from "@/models/intefaces/all";
import { TWhatPage } from "@/models/types/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const CardCarousel = ({
  immobile,
  whatPage,
}: {
  immobile: IImmobileItemProps;
  whatPage: TWhatPage;
}) => {
  return (
    <div
      className={`relative flex flex-col text-gray-700 bg-white bg-clip-border rounded-xl border border-solid border-gray-400 border-opacity-30 w-full ${
        whatPage === "properties" ? "" : "mx-4"
      }`}
    >
      <div className="relative h-56 m-4 overflow-hidden text-white bg-clip-border rounded-xl">
        <Image
          src={immobile.Images[0].url}
          width={368}
          height={263}
          className="rounded-2xl w-full object-cover"
          alt={immobile.title}
        />
      </div>
      <div className="p-6 pb-0">
        <h4 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-secondary">
          {immobile.type.description}
        </h4>
        <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {immobile.title}
        </h5>
        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
          {immobile.description}
        </p>
      </div>
      <div className="p-6 flex justify-between">
        <div className="flex gap-2 items-center justify-start w-1/2">
          <Image
            src="/cil_room.png"
            width={22}
            height={22}
            alt="Icone de cômodo"
          />
          <span>4 cômodo(s)</span>
        </div>
        <div className="flex gap-2 items-center justify-end w-1/2">
          <Image src="/area.png" width={20} height={22} alt="Icone de cômodo" />
          <span>240m²</span>
        </div>
      </div>
      <div className="p-6 pt-2">
        <Link
          href="/"
          className="bg-primary text-white p-2 rounded-xl transition-colors hover:bg-black"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  );
};

export default CardCarousel;
