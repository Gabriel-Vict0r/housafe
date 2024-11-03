import { ILinksFooter } from "@/models/intefaces/all";
import Link from "next/link";
import React from "react";

type Props = {};

const GroupLink = ({ groupLinks }: { groupLinks: ILinksFooter }) => {
  return (
    <div className="w-1/2 md:w-1/3">
      <h5 className="font-bold text-xl text-primary mb-3">
        {groupLinks.title}
      </h5>
      <ul className="flex flex-col gap-2 w-full">
        {groupLinks.arrayLinks.map((link, i) => (
          <li key={i} className="">
            <Link
              href={link.link}
              className="break-words text-sm font-normal hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupLink;
