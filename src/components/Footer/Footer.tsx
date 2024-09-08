import { socialMedias } from "@/utils/socialMedias";
import Image from "next/image";
import React from "react";
import Links from "./Links";
import GroupLink from "./GroupLink";
import paginaLinks from "@/utils/contentFooter";
import groupLinks from "@/utils/contentFooter";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="my-5 p-5 flex flex-col lg:flex-row">
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
      <div className="my-5 flex flex-row w-full flex-wrap justify-between">
        {groupLinks.map((group, i) => (
          <GroupLink groupLinks={group} key={i} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
