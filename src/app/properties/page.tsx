"use client";

import Footer from "@/components/Footer/Footer";
import { useState, useEffect } from "react";
import Filters from "@/components/Home/Filters";
import SubTitle from "@/components/shared/SubTitle";
import CardCarousel from "@/components/shared/CardCarousel";
import { Fade } from "react-awesome-reveal";
import { useFiltersContext } from "@/contexts/FilterContext";
import { ImmobileProps } from "@/models/intefaces/all";
import Header from "@/components/Header";

export default function Properties() {
  const {
    categories,
    types,
    cities,
    immobile,
    setImmobile,
    immobileFiltered,
    setImmobileFiltered,
    arrayLength,
    setArrayLength,
    type,
    category,
    city,
  } = useFiltersContext();
  useEffect(() => {
    const fetchData = () => {
      try {
        const data = fetch(`${process.env.URL_API}/recents-immobile`)
          .then((response) => response.json())
          .then((data) => setImmobile(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const condition = !category && !city && !type;
    function filter() {
      const filtered = immobile.slice(0, arrayLength);
      setImmobileFiltered(filtered);
    }
    if (condition) {
      filter();
    }
    console.log(immobileFiltered);
  }, [arrayLength, immobile]);

  const increaseArray = () => {
    setArrayLength(arrayLength + 7);
  };
  return (
    <main>
      <Header />
      <section
        className="bg-cover p-16 mt-32 flex items-center flex-col justify-center rounded-2xl text-center relative lg:h-[50vh] lg:gap-7"
        style={{ backgroundImage: "url(/cover-properties.jpg)" }}
      >
        <article className="flex flex-col gap-5">
          <h1 className="font-bold text-white text-xl lg:text-3xl">
            Descubra seu Lar
          </h1>
          <p className="text-white font-light text-base lg:text-xl">
            Explore nossa coleção de imóveis disponíveis para compra e aluguel.
            Encontre o lugar perfeito para chamar de lar!
          </p>
        </article>
        <Filters whatPage="properties" />
      </section>
      <section>
        <SubTitle
          text="Ofertas especiais para quem busca um investimento certeiro."
          subtitle="Escolha seu Espaço"
        />
        <div className="w-full flex grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {immobileFiltered.map((immobile, index) => (
            <Fade key={index}>
              <CardCarousel immobile={immobile} whatPage="properties" />
            </Fade>
          ))}
        </div>
        <div className="w-full text-center my-10">
          <button
            className="bg-secondary hover:bg-secondary-hover text-white font-light uppercase px-7 py-2 rounded-xl text-base transition-colors"
            onClick={increaseArray}
          >
            carregar mais
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
