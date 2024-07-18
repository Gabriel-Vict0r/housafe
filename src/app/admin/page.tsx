"use client";
import Input from "@/components/form/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Formik, useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const session = useSession();
  if (session) {
    redirect("/immobiles");
  }
  // const session = await getServerSession(authOptions);
  // if (session) {
  //   redirect("/dashboard");
  // }
  //console.log(session);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const result = await signIn("credentials", {
        ...values,
        redirect: false,
      });
      console.log(result);

      if (result?.error) {
        formik.setFieldError(
          "password",
          "Credenciais inválidas. Tente novamente."
        );
        return;
      }
      if (result?.ok) {
        router.replace("/dashboard");
      }
    },
  });
  return (
    <main className="w-full flex gap-2 md:flex-1 h-screen justify-center items-center overflow-hidden">
      <form
        method="post"
        className="w-4/5 md:w-1/2 flex flex-col gap-6 md:px-28"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-primary text-4xl">
            Bem-vindo de volta!
          </h1>
          <p className="text-gray-500 font-light">
            Acesse sua conta para continuar.
          </p>
        </div>
        <Input
          name="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu email"
          handle={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={formik.values.password}
          handle={formik.handleChange}
          error={formik.errors.password}
        />
        <div className="flex justify-between items-center">
          <label className="label justify-start gap-2 cursor-pointer ">
            <input type="checkbox" className="checkbox" />
            <span className=" text-xs label-text text-gray-500">
              Lembrar de mim
            </span>
          </label>
          <Link
            href="/admin"
            className="text-xs text-secondary font-medium hover:text-pink-800"
          >
            Esqueci a senha
          </Link>
        </div>
        <button
          className="h-10 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-secondary hover:bg-secondary-hover text-white font-normal"
          type="submit"
        >
          Entrar
        </button>
      </form>
      <Image
        className="hidden md:w-1/2 md:object-cover md:block"
        src="/cover-admin.jpg"
        width={663}
        height={1024}
        alt="imagem de um imóvel"
        quality={100}
        priority
      />
    </main>
  );
};

export default page;
