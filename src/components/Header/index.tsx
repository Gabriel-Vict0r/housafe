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
    open: {
      position: "absolute",
      width: "100%",
      height: "auto",
      top: "0",
      left: 0,
      z: -10,
      transition: { duration: 0.6, ease: "easeIn" },
    },
    closed: {
      position: "absolute",
      width: "100%",
      height: "0px",
      top: -700,
      left: 0,
      z: -10,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <header className="w-full py-5 bg-bg-header my-5 px-5 rounded-full lg:px-9 z-50 fixed top-0 left-0">
      <nav className="flex w-full justify-between z-50">
        <div className="justify-between items-center flex w-full lg:w-auto z-50">
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
          <motion.div
            variants={variants}
            initial="closed"
            animate={toggleHamburguer ? "open" : "closed"}
            transition={{ duration: 2, ease: "linear" }}
          >
            <div className="bg-white absolute h-screen right-0 top-20 w-full transition-all py-5 z-40">
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
          </motion.div>
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
