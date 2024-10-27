"use client";
import React from "react";
import Input from "./Input";
import { useFormik } from "formik";
import TextArea from "./TextArea";
import { schema } from "@/utils/formContactValidation";
import Swal from "sweetalert2";
type Props = {};

const Form = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values) => {
      const message = { message: values };
      try {
        const result = await fetch(`${process.env.URL_API}/create-message`, {
          headers: {
            "content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(message),
        });
        //console.log(result.status);
        if (result.status === 201) {
          Swal.fire({
            title: "Enviado!",
            text: "Seu e-mail foi enviado com sucesso!",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      } catch (error: any) {
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
    <form
      method="post"
      className="bg-bg-icons rounded-3xl p-5 w-full xl:w-1/2"
      onSubmit={formik.handleSubmit}
    >
      <h2 className="font-bold text-primary text-xl my-5">
        Envie-nos uma mensagem
      </h2>
      <Input
        label="name"
        placeholder="Digite seu name"
        type="text"
        name="name"
        value={formik.values.name}
        handle={formik.handleChange}
        error={formik.errors.name}
      />
      <Input
        label="Email"
        placeholder="Digite seu email"
        type="email"
        name="email"
        value={formik.values.email}
        handle={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        label="Número"
        placeholder="(77) 9 9999-9999"
        type="phone"
        name="phone"
        maxLength={15}
        value={formik.values.phone}
        handle={formik.handleChange}
        error={formik.errors.phone}
      />
      <TextArea
        label="Mensagem"
        placeholder="Digite sua mensagem"
        name="message"
        value={formik.values.message}
        handleTxtArea={formik.handleChange}
        error={formik.errors.message}
      />
      <input
        type="submit"
        value="Enviar"
        className="bg-secondary py-2 px-10 rounded-xl pointer text-white hover:bg-secondary-hover transition-colors"
      />
    </form>
  );
};

export default Form;
