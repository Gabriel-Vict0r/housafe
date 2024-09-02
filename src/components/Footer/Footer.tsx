import { socialMedias } from "@/utils/socialMedias";
import Image from "next/image";
import React from "react";
import Links from "./Links";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="my-5 p-5">
      <div className="flex flex-col gap-5">
        <Image src="/logo.svg" width={169} height={32} alt="Logo housafe" />
        <p className="font-light text-base">
          Descubra segurança e simplicidade com a HouseSafe. Encontre seu lar
          ideal hoje mesmo
        </p>
        <div className="flex justify-start gap-10 items-center">
          {socialMedias.map((media, i) => (
            <Links
              url={media.url}
              icon={media.icon}
              name={media.name}
              key={i}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
