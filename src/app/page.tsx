"use client";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

import Filters from "@/components/Home/Filters";
import Oportunity from "@/components/Home/Oportunity";
import { oportunities } from "@/utils/contentOportunities";
import CarouselHome from "@/components/Home/CarouselHome";
import NewsLetterForm from "@/components/Home/NewsLetterForm";
import { Fade } from "react-awesome-reveal";
import SubTitle from "@/components/shared/SubTitle";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="mt-32">
      <Header />
      <Fade>
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
            <Filters whatPage="home" />
          </div>

          <Image
            src="/hotel_example_1.png"
            width={592.5}
            height={515}
            alt="ilustração de um imóvel"
            className="md:w-[400px] md:h-auto object-contain"
          />
        </div>
      </Fade>

      <Fade direction="up">
        <SubTitle
          text="Ofertas especiais para quem busca um investimento certeiro."
          subtitle="Oportunidades Exclusivas"
        />
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
      </Fade>

      <Fade>
        <div className="lg:mt-10 flex flex-col justify-center items-start m-auto  p-5">
          <p className="text-base font-normal">Os melhores imóveis da região</p>
          <h2 className="font-bold text-3xl pt-2">Imóveis recentes</h2>
        </div>
        <section className="w-full py-5">
          <CarouselHome />
        </section>
      </Fade>
      <Fade>
        <section className="flex flex-col p-5 bg-gradient-to-r from-secondary-64-opacity to-third rounded-3xl my-5 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="flex flex-col gap-5 lg:w-1/2">
            <h2 className="font-semibold text-3xl lg:text-5xl">
              Inscreva-se no <br></br> nosso newsletter
            </h2>
            <p className="font-light text-base">
              Assine nossa newsletter e fique por dentro das melhores
              oportunidades do mercado imobiliário.
            </p>
            <NewsLetterForm />
          </div>
          <Image
            src="/hotel_example_2.png"
            width={416}
            height={382}
            alt="Ilustração de um hotel"
            className="hidden lg:block"
          />
        </section>
      </Fade>

      <Footer />
    </main>
  );
}
