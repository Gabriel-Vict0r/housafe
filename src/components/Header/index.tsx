"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { motion, Variants } from "framer-motion";

import logoImg from "../../../public/logo_black.png";
import { useState } from "react";
import LinkAnimated from "./LinkAnimated";
export default function Header() {
  const [toggleHamburguer, setToggleHamburguer] = useState<boolean>(false);
  const showNavBar = () => {
    toggleHamburguer ? setToggleHamburguer(false) : setToggleHamburguer(true);
  };
  const variants: Variants = {
    hidden: {
      //opacity: 0,
      right: -300,
    },
    enter: { opacity: 1, right: 0 },
  };
  return (
    <header className=" relative w-full py-5 bg-bg-header my-5 px-5 rounded-full lg:px-9">
      <nav className="flex w-full justify-between">
        <div className="justify-between items-center flex w-full lg:w-auto">
          <Link href="/">
            <Image src="logo.svg" width={130} height={32} alt="logo" />
          </Link>
          <div className="lg:hidden">
            <Hamburger
              color="#6D445A"
              size={20}
              onToggle={showNavBar}
              toggled={toggleHamburguer}
              rounded
            />
          </div>
        </div>
        {toggleHamburguer && (
          <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: "linear", delay: 7000 }}
          >
            <div className="bg-white h-screen absolute right-0 top-20 w-full transition-all py-5">
              <ul className="flex flex-col gap-5 text-center">
                <li>
                  <Link href="/" onClick={showNavBar}>
                    Página inicial
                  </Link>
                </li>
                <li>
                  <Link href="/immobile" onClick={showNavBar}>
                    Imóveis
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={showNavBar}>
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>
          </motion.main>
        )}
        <div className="hidden lg:!flex">
          <ul className="flex gap-8 text-center w-full items-center">
            <li>
              <LinkAnimated route="/" content="Página Inicial" />
            </li>
            <li>
              <LinkAnimated route="/immobile" content="Imóveis" />
            </li>
            <li>
              <LinkAnimated route="/contact" content="sobre" />
            </li>
          </ul>
        </div>
        <div className="hidden lg:!flex gap-5 justify-between items-center">
          <LinkAnimated route="/contact" content="Contate-nos" />
          <Link
            href="/admin"
            className="border-border-btn border px-9 py-4 bg-white rounded-full hover:bg-secondary transition-colors hover:border-secondary hover:text-white"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
