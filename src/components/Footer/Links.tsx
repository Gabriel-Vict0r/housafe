import { ISocialMedia } from "@/models/intefaces/all";
import Link from "next/link";
import React from "react";

type Props = {};

const Links = ({ url, icon, name }: ISocialMedia) => {
  return (
    <Link href={url} aria-label={name} className="text-2xl text-primary">
      {icon}
    </Link>
  );
};

export default Links;
