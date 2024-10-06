import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import Image from "next/image";

import aboutImg from "../../../public/about_img.svg";
import Input from "@/components/contact/Input";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <main className="mt-32">
      <Header />
      <section className="flex flex-col gap-5">
        <h1 className="text-primary font-bold text-3xl">
          Entre em contato conosco
        </h1>
        <p className="font-light text-gray-500 text-base">
          Para reservas, dúvidas ou sugestões, estamos sempre à disposição para
          ajudar. Preencha o formulário abaixo e nossa equipe entrará em contato
          o mais breve possível.
        </p>
      </section>
      <section className="my-10 flex justify-between gap-5">
        <Image
          src="/about_img.svg"
          width={505}
          height={253.15}
          alt="Ilustração para entrar em contato"
          className="hidden lg:block xl:w-[600px]"
        />
        <Form />
      </section>
      <Footer />
    </main>
  );
}
