"use client";
import Image from "next/image";
import React from "react";
import InputFormBroker from "./InputFormBroker";
import { useFormik } from "formik";
import { schema } from "@/utils/formContactValidation";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
type Props = {};

const BrokerFormPage = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values, actions) => {
      console.log(values);
      const templateParams = {
        from_name: values.name,
        message: values.message,
        email: values.email,
        subject: "Imóvel do housafe",
        contact: values.phone,
        email_broker: "rotciv257@gmail.com",
      };
      actions.resetForm();

      try {
        const sendEmail = await emailjs.send(
          process.env.SERVICE_ID ?? "",
          process.env.TEMPLATE ?? "",
          templateParams,
          process.env.EMAIL_KEY
        );
        if (sendEmail.status === 200) {
          console.log(formik.values);
          Swal.fire({
            title: "Enviado!",
            text: "Seu e-mail foi enviado com sucesso!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        actions.resetForm();
      } catch (error) {
        Swal.fire({
          title: "Erro",
          text: `Ocorreu um erro ao enviar o seu email ${String(error)}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });
  return (
    <div className="rounded-xl bg-secondary p-10 lg:w-[35%]">
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
      <form
        action=""
        className="my-5 flex flex-col gap-5"
        onSubmit={formik.handleSubmit}
        method="POST"
      >
        <InputFormBroker
          name="name"
          placeholder="Nome"
          type="text"
          value={formik.values.name}
          handle={formik.handleChange}
          error={formik.errors.name}
        />
        <InputFormBroker
          name="email"
          placeholder="Email"
          type="email"
          value={formik.values.email}
          handle={formik.handleChange}
          error={formik.errors.email}
        />
        <InputFormBroker
          name="phone"
          placeholder="Telefone"
          type="phone"
          value={formik.values.phone}
          handle={formik.handleChange}
          error={formik.errors.phone}
        />
        <InputFormBroker
          name="message"
          placeholder="Mensagem"
          value={formik.values.message}
          handleTxtArea={formik.handleChange}
          error={formik.errors.message}
          typeInput="textarea"
        />
        <input
          type="submit"
          value="Enviar"
          className="btn bg-primary border-none text-white font-light uppercase"
        />
      </form>
    </div>
  );
};

export default BrokerFormPage;
