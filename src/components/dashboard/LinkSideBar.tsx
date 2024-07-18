import Link from "next/link";
import React from "react";

type Props = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

const LinkSideBar = ({ icon, name, href }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-secondary hover:bg-opacity-80 focus:bg-secondary focus:bg-opacity-100 active:bg-gray-50 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
    >
      <div className="grid place-items-center mr-4">{icon}</div>
      {name}
    </Link>
  );
};

export default LinkSideBar;
