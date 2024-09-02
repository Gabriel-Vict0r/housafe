import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import Image from "next/image";

import aboutImg from "../../../public/about_img.svg";

export default function Contact() {
  return (
    <>
      <Header />

      <div className="ml-20">
        <p className="font-bold text-6xl mb-10">Entre em Contato Conosco</p>
        <p className="text-lg">
          Para reservas, dúvidas ou sugestões, estamos sempre à disposição para
          ajudar. Preencha o <br /> formulário abaixo e nossa equipe entrará em
          contato o mais breve possível.
        </p>
      </div>

      <div className="flex justify-around my-20 items-center">
        <div>
          <Image src={aboutImg} alt="" />
        </div>

        <div className="bg-bg-icons w-2/4 p-10 rounded-3xl">
          <p className="font-bold text-2xl mb-8">Envie-nos uma mensagem</p>

          <div className="flex justify-between mb-8 gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text mb-2">Nome</span>
              </div>
              <input
                type="text"
                placeholder="Fulano da Silva"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text mb-2">Email</span>
              </div>
              <input
                type="text"
                placeholder="fulano@email.com"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="flex justify-between mb-8 gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text mb-2">Assunto</span>
              </div>
              <input
                type="text"
                placeholder="Assunto de interesse"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text mb-2">Número de telefone</span>
              </div>
              <input
                type="text"
                placeholder="(77) 99999-9999"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <label className="form-control w-full mb-8">
            <div className="label">
              <span className="label-text mb-2">Mensagem</span>
            </div>
            <textarea className="textarea textarea-bordered h-32"></textarea>
          </label>

          <button className="btn bg-secondary text-white hover: text-black">
            Enviar Mensagem
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
