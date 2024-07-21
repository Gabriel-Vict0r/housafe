import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { MdOutlineBed } from "react-icons/md";
import { LiaCouchSolid } from "react-icons/lia";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineGarage } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { CiCamera } from "react-icons/ci";

import Image from "next/image";

export default function Immobile() {
  return (
    <>
      <button className="btn bg-secondary text-white hover:text-black w-40 mx-16">
        PARA VENDA
      </button>

      <div className="flex flex-row justify-around w-full mt-10">
        <div className="">
          <p className="font-bold text-5xl mb-5">Casa com piscina</p>

          <p className="text-xl">
            R. Napoleão Bonaparte, Morada Nobre, n° 1004 - Barreiras - BA
          </p>
        </div>

        <div className="text-end">
          <p className="font-bold text-5xl mb-5">R$1.500.300,00</p>

          <p className="text-xl">R$5000,00/M²</p>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full my-10 px-16 gap-5">
        <Image src="/hotel.png" width="800" height="200" alt="" />

        <div className="flex flex-col gap-2">
          <div className="bg-[url('/cover-properties.jpg')] flex flex-col justify-center items-center h-2/4 w-142 rounded-3xl text-white">
            <CiCamera className="text-5xl mb-5" />
            <p className="text-2xl">Ver Todas</p>
            <p>12 fotos</p>
          </div>

          <div className="h-2/4 w-142">
            <iframe
              className="w-full h-full rounded-3xl"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex flex-row px-16">
        <div className="flex flex-col">
          <div className="w-11/12">
            <strong className="text-3xl">Descrição</strong>
            <p className="mt-5 text-lg">
              Descubra o lar dos seus sonhos nesta deslumbrante residência,
              ideal para quem busca conforto, sofisticação e lazer. Localizada
              em um bairro nobre, esta casa combina elegância e funcionalidade
              em cada detalhe.
              <br />
              Descubra o lar dos seus sonhos nesta deslumbrante residência,
              ideal para quem busca conforto, sofisticação e lazer. Localizada
              em um bairro nobre, esta casa combina elegância e funcionalidade
              em cada detalhe.
            </p>
          </div>

          <div className="w-11/12 mt-12">
            <strong className="text-3xl">Detalhes da propriedade</strong>

            <div className="flex gap-2 mt-12 mb-3">
              <div className="flex justify-between items-center text-2xl border-b-2 border-b-border py-3 w-2/4">
                <div className="flex items-center">
                  <MdOutlineBed className="mx-2" />
                  <p>Quartos</p>
                </div>

                <p className="mx-2">4</p>
              </div>

              <div className="flex justify-between items-center text-2xl border-b-2 border-b-border py-3 w-2/4">
                <div className="flex items-center">
                  <LiaCouchSolid className="mx-2" />
                  <p>Área de Lazer</p>
                </div>

                <p className="mx-2">4</p>
              </div>
            </div>

            <div className="flex gap-2 mb-3">
              <div className="flex justify-between items-center text-2xl border-b-2 border-b-border py-3 w-2/4">
                <div className="flex items-center">
                  <MdOutlineBathroom className="mx-2" />
                  <p>Banheiros</p>
                </div>

                <p className="mx-2">4</p>
              </div>

              <div className="flex justify-between items-center text-2xl border-b-2 border-b-border py-3 w-2/4">
                <div className="flex items-center">
                  <MdOutlineGarage className="mx-2" />
                  <p>Garagens</p>
                </div>

                <p className="mx-2">4</p>
              </div>
            </div>

            <div className="flex gap-2 ">
              <div className="flex justify-between items-center text-2xl border-b-2 border-b-border py-3 w-2/4">
                <div className="flex items-center">
                  <BiArea className="mx-2" />
                  <p>Área Total</p>
                </div>

                <p className="mx-2">4</p>
              </div>

              <div className="flex justify-between items-center text-2xl border-b-2 border-b-border py-3 w-2/4">
                <div className="flex items-center">
                  <MdPool className="mx-2" />
                  <p>Piscinas</p>
                </div>

                <p className="mx-2">4</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-secondary w-96 row-start-3 justify-self-end">
          <p className="font-medium text-3xl text-white mx-8 mt-5">Corretor</p>

          <div className="card-body">
            <div className="flex p-4 gap-4">
              <Image
                src="/cover-admin.jpg"
                height="50"
                width="50"
                alt=""
                objectFit="cover"
                className="rounded-full"
              />

              <div className="text-white">
                <p className="font-semibold">Maria Joana</p>
                <p>(77) 99903-9999</p>
                <p>corretor@gmail.com</p>
              </div>
            </div>

            <input type="text" className="input" placeholder="Nome" />
            <input type="email" className="input" placeholder="Email" />
            <input type="text" className="input" placeholder="Telefone" />

            <textarea
              className="textarea textarea-bordered h-32"
              placeholder="Digite sua mensagem"
            ></textarea>

            <button className="btn bg-primary text-white w-32">Enviar</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
