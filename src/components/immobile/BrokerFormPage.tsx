"use client";
import Image from "next/image";
import React from "react";
import InputFormBroker from "./InputFormBroker";
import { useFormik } from "formik";

type Props = {};

const BrokerFormPage = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async () => {},
  });
  return (
    <div className="rounded-xl bg-secondary p-10">
      <h3 className="font-normal text-white text-2xl mb-5">Corretor</h3>
      <div className="flex gap-5">
        <Image
          src="/broker.png"
          width={80}
          height={59.27}
          alt="Corretor"
          className="object-cover rounded-full"
        />
        <article className="text-white">
          <h4 className="text-xl">Maria Joana</h4>
          <p className="text-gray-300">(77) 99903-0842</p>
          <p className="text-gray-300">corretor@gmail.com</p>
        </article>
      </div>
      <form action="" className="my-5">
        <InputFormBroker
          name="nome"
          placeholder="Nome"
          type="text"
          value=""
          handle={() => console.log("ok")}
        />
        <InputFormBroker
          name=""
          placeholder="Nome"
          type="text"
          value=""
          handle={() => console.log("ok")}
        />
      </form>
    </div>
  );
};

export default BrokerFormPage;
