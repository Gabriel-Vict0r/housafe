import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";

import hotel1Img from "../../public/hotel_example_1.png";
import hotel2Img from "../../public/hotel_example_2.png";
import globalImg from "../../public/map.png";
import calendarImg from "../../public/calendar.png";
import penImg from "../../public/pen.png";
import CarouselFinal from "@/components/CarouselFinal";
import Filters from "@/components/Home/Filters";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row justify-around w-full py-5 bg-gradient-to-r from-secondary to-third rounded-3xl px-5 gap-5">
        <div className="flex flex-col pt-10 w-full">
          <p className="text-xl lg:text-lg">Bem vindo(a) ao HouseSafe</p>
          <h1 className="text-4xl font-bold lg:text-7xl py-8">
            Encontre seu <br />
            <span className="text-bg-icons"> novo lar </span>
          </h1>
          <p className="text-lg">
            Oferecemos as melhores opções para você comprar, <br /> vender ou
            alugar chom facilidade e segurança.
          </p>
          <Filters />
        </div>

        <Image src={hotel1Img} alt="" />
      </div>

      {/* <div className="h-80 flex flex-col justify-center items-center m-auto">
        <p>Ofertas especiais para quem busca um investimento certeiro.</p>
        <p className="font-bold text-5xl pt-2">Oportunidades Exclusivas</p>
      </div>

      <div className="h-80 flex justify-around items-center w-10/12 m-auto">
        <div className="w-3/12">
          <Image src={globalImg} alt="" />

          <p className="font-bold my-3 text-2xl">Explore nossas ofertas</p>

          <p>
            Navegue pelo nosso catálogo online e encontre o imóvel que atende às
            suas necessidades.
          </p>
        </div>

        <div className="w-3/12">
          <Image src={calendarImg} alt="" />

          <p className="font-bold my-3 text-2xl">Agende uma Visita</p>

          <p>
            Marque uma visita guiada com um de nossos corretores especializados
            para conhecer o imóvel de perto.
          </p>
        </div>

        <div className="w-3/12">
          <Image src={penImg} alt="" />

          <p className="font-bold my-3 text-2xl">Conclua a Compra</p>

          <p>
            Finalize a negociação com segurança e tranquilidade com a ajuda da
            nossa equipe.
          </p>
        </div>
      </div>

      <div className="h-72 flex items-center px-36">
        <div className="flex flex-col">
          <p>Os melhores imóveis da região</p>
          <p className="font-bold text-5xl mt-5">Imóveis recentes</p>
        </div>
      </div> */}

      {/* <CarouselFinal /> */}

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
