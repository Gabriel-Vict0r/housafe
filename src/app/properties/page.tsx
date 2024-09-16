"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import roomImg from "../../../public/cil_room.png";
import areaImg from "../../../public/area.png";

import Image from "next/image";
import { SlidersHorizontal, Search } from "lucide-react";
import { useState, useEffect } from "react";
import Filters from "@/components/Home/Filters";

type ImmobileProps = {
  id: string;
  title: string;
  description: string;
  bedrooms: number;
  size: number;
  address: {
    city: string;
    state: string;
  };
  type: {
    description: string;
  };
  Images: [
    {
      id: string;
      url: string;
    }
  ];
};

export default function Properties() {
  const [immobile, setImmobile] = useState<ImmobileProps[]>([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = fetch("https://housesafe-api.vercel.app/recents-immobile")
          .then((response) => response.json())
          .then((data) => setImmobile(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <section
        className="bg-cover p-5 mt-32 flex items-center flex-col justify-center rounded-2xl text-center"
        style={{ backgroundImage: "url(/cover-properties.jpg)" }}
      >
        <h1 className="font-bold text-white text-xl lg:text-lg">
          Descubra seu Lar
        </h1>
        <p className="text-white font-light text-base">
          Explore nossa coleção de imóveis disponíveis para compra e aluguel.
          Encontre o lugar perfeito para chamar de lar!
        </p>
        <Filters />
      </section>
    </main>
  );
}
