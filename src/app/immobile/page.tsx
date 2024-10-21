import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";

import { MdOutlineBed } from "react-icons/md";
import { LiaCouchSolid } from "react-icons/lia";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineGarage } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { CiCamera } from "react-icons/ci";

import Image from "next/image";
import Gallery from "@/components/immobile/Gallery";
import DetailProperty from "@/components/immobile/DetailProperty";
import BrokerFormPage from "@/components/immobile/BrokerFormPage";

export default function Immobile() {
  return (
    <main className="mt-32">
      <Header />
      <button className="btn uppercase bg-secondary font-medium text-white">
        para venda
      </button>

      <section className="my-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between my-5">
          <div className="">
            <h1 className="text-primary text-xl font-semibold">
              Casa com piscina
            </h1>
            <p className="text-gray-500 font-normal">
              R. Napoleão Bonaparte, Morada Nobre, n° 1004 - Barreiras - BA
            </p>
          </div>
          <div className="flex justify-between items-center lg:flex-col lg:items-end">
            <p className="text-primary text-xl font-semibold">R$1.500.300,00</p>
            <p className="text-gray-500 font-normal">R$5000,00/M²</p>
          </div>
        </div>
        <div className="lg:flex lg:gap-5">
          <Image
            src="/hotel.jpg"
            width={847}
            height={549}
            alt="teste"
            className="hidden lg:block object-cover rounded-3xl lg:w-[60%]"
          />
          <div className="my-5 md:flex md:gap-5 lg:flex-col lg:justify-between lg:w-[40%] lg:my-0">
            <Gallery />
            <iframe
              width="600"
              height="286"
              loading="lazy"
              className="w-full rounded-3xl"
              style={{ border: "1px solid", borderColor: "#C6C6C6" }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAhxEurhPz36Nlb92Seh2ZedhCVdxt8Kxk
    &q=Space+Needle,Seattle+WA"
            ></iframe>
          </div>
        </div>
      </section>

      {/* SEGUNDA SESSÃO */}
      <section className="">
        <div className="w-full md:w-1/2">
          <div className="">
            <h2 className="text-primary font-medium text-xl">Descrição</h2>
            <p className="font-light text-gray-500">
              Descubra o lar dos seus sonhos nesta deslumbrante residência,
              ideal para quem busca conforto, sofisticação e lazer. Localizada
              em um bairro nobre, esta casa combina elegância e funcionalidade
              em cada detalhe.
            </p>
          </div>
          <div className="my-5">
            <h2 className="text-primary font-medium text-xl">
              Detalhes da propriedade
            </h2>
            <div className="md:flex md:gap-5">
              <DetailProperty
                icon={<MdOutlineBed />}
                description="Quartos"
                data={4}
              />
              <DetailProperty
                icon={<MdOutlineBed />}
                description="Quartos"
                data={4}
              />
            </div>
          </div>
        </div>
        <BrokerFormPage />
      </section>
      <Footer />
    </main>
  );
}
