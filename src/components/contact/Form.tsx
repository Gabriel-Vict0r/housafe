"use client";
import React from "react";
import Input from "./Input";
import { useFormik } from "formik";

type Props = {};

const Form = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      phone: "",
    },
    onSubmit: () => {},
  });
  return (
    <form action="" method="post" className="bg-bg-icons rounded-3xl p-5">
      <h2 className="font-bold text-primary text-xl my-5">
        Envie-nos uma mensagem
      </h2>
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        type="text"
        name="nome"
        value={formik.values.nome}
        handle={formik.handleChange}
        error={formik.errors.nome}
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
        value={formik.values.phone}
        handle={formik.handleChange}
        error={formik.errors.phone}
      />
    </form>
  );
};

export default Form;
