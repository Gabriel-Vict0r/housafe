import { IOportunities } from "@/models/intefaces/all";
import Image from "next/image";
import React from "react";

const Oportunity = ({ urlImage, title, content }: IOportunities) => {
  return (
    <div className="p-5 flex flex-col gap-5 border border-solid border-gray-400 border-opacity-30 rounded-3xl">
      <Image src={urlImage} width={35} height={43.67} alt="Icone" />
      <h5 className="font-semibold text-xl">{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default Oportunity;
