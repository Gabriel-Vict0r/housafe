"use client";
import React from "react";
import TitlePage from "./TitlePage";
import BtnAdd from "./BtnAdd";
import { useFormik } from "formik";
import InputForm from "./InputForm";
import showSwal from "./ModalMessage";

type Props = {};

const BrokerForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      image: [],
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      const image: Blob = (values.image[0] as unknown) as Blob;
      console.log(values.image[0]);
      formData.append("image", image);
      formData.append("broker", JSON.stringify(values));

      const result = await fetch(`${process.env.URL_API}/create-broker`, {
        method: "POST",
        headers: {},
        body: formData,
      }).then(async (result) => {
        if (result.ok) {
          showSwal(
            "Tudo OK!",
            "O cadastro do corretor foi realizado com sucesso!",
            "success"
          );
          setShowModal(false);
        } else {
          const message = await result.json();
          showSwal("Erro ao realizar o cadastro", message.message, "error");
        }
        //setShowModal(false);
      });
    },
  });
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <TitlePage title="Corretores" />
        <BtnAdd
          title="+  Adicionar Corretor"
          onchange={() => setShowModal(true)}
        />
      </div>
      {showModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-3 mx-auto max-w-5xl min-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Cadastrar Corretor</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    method="POST"
                    className="flex flex-col gap-3"
                    onSubmit={formik.handleSubmit}
                  >
                    {/* informações do corretor */}
                    <div className="flex flex-col gap-3">
                      <InputForm
                        label="Nome"
                        type="text"
                        name="name"
                        placeholder="Nome do corretor"
                        value={formik.values.name}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Email do corretor"
                        value={formik.values.email}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Celular"
                        type="text"
                        name="phone"
                        placeholder="(77) 9 9999-9999"
                        value={formik.values.phone}
                        handle={formik.handleChange}
                      />
                    </div>

                    {/* Input fotos */}
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Escolher fotos</span>
                      </div>
                      <input
                        type="file"
                        name="image"
                        className="file-input file-input-bordered w-full max-w-xs"
                        placeholder="escolher"
                        onChange={(event) =>
                          formik.setFieldValue(
                            "image",
                            event.currentTarget.files
                          )
                        }
                      />
                    </label>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-medium uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Fechar
                      </button>
                      <button
                        className="bg-secondary text-white active:bg-secondary-hover font-medium uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Cadastrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </div>
  );
};

export default BrokerForm;
