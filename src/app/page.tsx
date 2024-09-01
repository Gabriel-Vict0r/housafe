import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";

import hotel1Img from "../../public/hotel_example_1.png";
import hotel2Img from "../../public/hotel_example_2.png";
import globalImg from "../../public/map.png";
import calendarImg from "../../public/calendar.png";
import penImg from "../../public/pen.png";
import Filters from "@/components/Home/Filters";
import Oportunity from "@/components/Home/Oportunity";
import { oportunities } from "@/utils/contentOportunities";
import CarouselHome from "@/components/Home/CarouselHome";

export default function Home() {
  return (
    <main className="mt-32">
      <div className="flex flex-col md:flex-row justify-around w-full p-5 pb-10 bg-gradient-to-r from-secondary to-third rounded-3xl gap-5 relative z-20">
        <div className="flex flex-col pt-10 w-full lg:w-auto">
          <p className="text-xl lg:text-lg">Bem vindo(a) ao HouseSafe</p>
          <h1 className="text-4xl font-bold lg:text-7xl py-8">
            Encontre seu <br />
            <span className="text-bg-icons"> novo lar </span>
          </h1>
          <p className="text-lg">
            Oferecemos as melhores opções para você comprar, <br /> vender ou
            alugar com facilidade e segurança.
          </p>
          <Filters />
        </div>

        <Image
          src="/hotel_example_1.png"
          width={592.5}
          height={515}
          alt="ilustração de um imóvel"
          className="md:w-[400px] md:h-auto object-contain"
        />
      </div>

      <div className="mt-[240px] md:mt-[290px] lg:mt-10 flex flex-col justify-center items-center m-auto text-center p-5">
        <p className="text-base font-normal">
          Ofertas especiais para quem busca um investimento certeiro.
        </p>
        <p className="font-bold text-3xl pt-2">Oportunidades Exclusivas</p>
      </div>
      <section className="flex flex-col gap-5 p-5 lg:flex-row lg:flex-nowrap">
        {oportunities.map((value, index: number) => (
          <Oportunity
            key={index}
            urlImage={value.urlImage}
            title={value.title}
            content={value.content}
          />
        ))}
      </section>
      <div className="lg:mt-10 flex flex-col justify-center items-start m-auto  p-5">
        <p className="text-base font-normal">Os melhores imóveis da região</p>
        <h2 className="font-bold text-3xl pt-2">Imóveis recentes</h2>
      </div>
      <section className="w-full">
        <CarouselHome />
      </section>
      {/* <div className="flex justify-around w-11/12 mx-auto py-5 bg-gradient-to-r from-secondary to-third rounded-3xl">
        <div className="flex flex-col mt-10">
          <p className="font-bold text-7xl py-8">
            Inscreva-se no <br /> nosso newsletter
          </p>
          <p className="mb-10">
            Assine nossa newsletter e fique por dentro das melhores <br />{" "}
            oportunidades do mercado imobiliário.
          </p>
          <label className="input input-bordered flex items-center gap-2 my-5 rounded-full relative">
            <input
              type="text"
              className="grow"
              placeholder="Digite seu e-mail"
            />
            <button className="btn bg-primary rounded-full text-white hover:text-black h-full w-36 absolute right-0">
              Enviar
            </button>
          </label>
        </div>

        <Image src={hotel2Img} alt="" />
      </div> */}

      {/* <Footer /> */}
    </main>
  );
}
