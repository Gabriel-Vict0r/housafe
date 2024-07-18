"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

import logoImg from "../../../public/logo_black.png";
import { useState } from "react";
export default function Header() {
  const [toggleHamburguer, setToggleHamburguer] = useState<boolean>(false);
  const showNavBar = () => {
    toggleHamburguer ? setToggleHamburguer(false) : setToggleHamburguer(true);
  };
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  };
  return (
    <header className=" relative w-full py-5 bg-bg-header my-5 px-5 rounded-full lg:px-9">
      <nav className="flex w-full justify-between">
        <div className="justify-between items-center flex w-full lg:w-auto">
          <Image
            src="logo.svg"
            width={178}
            height={32}
            alt="logo"
            className="w-1/3 md:w-1/4 lg:w-[150px]"
          />
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
            transition={{ type: "linear" }}
          >
            <div className="bg-white h-screen absolute right-0 top-20 w-full transition-all py-5">
              <ul className="flex flex-col gap-5 text-center">
                <li>
                  <Link href="/" onClick={showNavBar}>
                    Página inicial
                  </Link>
                </li>
                <li>
                  <Link href="/immobile">Imóveis</Link>
                </li>
                <li>
                  <Link href="/contact">Sobre</Link>
                </li>
              </ul>
            </div>
          </motion.main>
        )}
        <div className="hidden lg:!flex">
          <ul className="flex gap-5 text-center w-full items-center">
            <li>
              <Link href="/" onClick={showNavBar}>
                Página inicial
              </Link>
            </li>
            <li>
              <Link href="/immobile">Imóveis</Link>
            </li>
            <li>
              <Link href="/contact">Sobre</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:!flex gap-5 justify-between items-center">
          <Link href="/contact">Contate-nos</Link>
          <Link
            href="/contact"
            className="border-border-btn border px-9 py-4 bg-white rounded-full"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
