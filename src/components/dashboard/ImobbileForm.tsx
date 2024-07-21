"use client";
import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import { TBroker, TCatAndType } from "@/types/all";
import SelectInput from "./SelectInput";
import { states } from "@/lib/utils";
import { useFormik } from "formik";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getSession, useSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import TitlePage from "./TitlePage";
import BtnAdd from "./BtnAdd";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import showSwal from "./ModalMessage";

const ImmobileForm = () => {
  const SwalForm = withReactContent(Swal);
  //console.log(session?.user);
  const [brokers, setBrokers] = useState<TBroker[]>([]);
  const [categories, setCategories] = useState<TCatAndType[]>([]);
  const [types, setTypes] = useState<TCatAndType[]>([]);
  useEffect(() => {
    const getBrokers = async () => {
      await fetch(`${process.env.URL_API}/get-broker`)
        .then((element) => element.json())
        .then((elements) => setBrokers(elements));
    };
    const getCategories = async () => {
      await fetch(`${process.env.URL_API}/get-categories`)
        .then((element) => element.json())
        .then((elements) => setCategories(elements));
    };

    const getTypes = async () => {
      await fetch(`${process.env.URL_API}/get-types`)
        .then((element) => element.json())
        .then((elements) => setTypes(elements));
    };
    getBrokers();
    getCategories();
    getTypes();
    brokers.map((element) => console.log(element));
  }, []);

  const formik = useFormik({
    initialValues: {
      immobile: {
        title: "",
        description: "",
        additional: "",
        price: 0,
        size: 0,
        id_category: 1,
        id_type: 1,
        id_broker: 1,
        bathroom: 0,
        vehicle_vacany: 0,
        recreation_area: 0,
        pools: 0,
        bedrooms: 0,
      },
      address: {
        street: "",
        district: "",
        city: "",
        state: "",
        number: 0,
      },
      images: [],
    },
    onSubmit: async (values) => {
      console.log(values);
      const photosLenght = values.images.length;
      const formData = new FormData();
      for (let index = 0; index < photosLenght; index++) {
        formData.append("image", values.images[index]);
      }
      formData.append("address", JSON.stringify(values.address));
      formData.append("immobile", JSON.stringify(values.immobile));

      const result = await fetch(`${process.env.URL_API}/create-immobile`, {
        method: "POST",
        headers: {},
        body: formData,
      }).then(async (result) => {
        if (result.ok) {
          showSwal(
            "Tudo OK!",
            "O cadastro foi do imóvel foi realizado com sucesso!",
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

  //modal
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex w-full justify-between ">
        <TitlePage title="Imóveis" />
        <BtnAdd
          title="+  Adicionar Imóvel"
          onchange={() => setShowModal(true)}
        />
      </div>
      {showModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-3 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Cadastrar Imóvel</h3>
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
                    {/* titulo do imóvel */}
                    <div className="flex flex-col gap-3">
                      <InputForm
                        label="Título"
                        type="text"
                        name="immobile.title"
                        placeholder="Título do imóvel"
                        value={formik.values.immobile.title}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Descrição"
                        type="text"
                        name="immobile.description"
                        placeholder="Breve descrição do imóvel"
                        value={formik.values.immobile.description}
                        handle={formik.handleChange}
                      />
                    </div>
                    <div className="flex gap-3">
                      {/* Preço do imóvel */}
                      <InputForm
                        label="Preço"
                        type="number"
                        name="immobile.price"
                        placeholder="Preço de venda/aluguel"
                        value={formik.values.immobile.price}
                        handle={formik.handleChange}
                      />

                      {/* tamanho do imóvel */}
                      <InputForm
                        label="Área (m²)"
                        type="number"
                        name="immobile.size"
                        placeholder="Tamanho do imóvel"
                        value={formik.values.immobile.size}
                        handle={formik.handleChange}
                      />
                    </div>
                    {/* selects */}
                    <div className="flex gap-3">
                      <SelectInput
                        standard={0}
                        name="immobile.id_category"
                        options={categories}
                        value={formik.values.immobile.id_category!}
                        handle={(event) =>
                          formik.setFieldValue(
                            "immobile.id_category",
                            parseInt(event.currentTarget.value)
                          )
                        }
                      />
                      <SelectInput
                        standard={0}
                        options={types}
                        name="immobile.id_type"
                        value={formik.values.immobile.id_type!}
                        handle={(event) =>
                          formik.setFieldValue(
                            "immobile.id_type",
                            parseInt(event.currentTarget.value)
                          )
                        }
                      />
                      <select
                        className="select select-bordered w-full max-w-xs"
                        id="immobile.id_broker"
                        value={formik.values.immobile.id_broker!}
                        onChange={(event) =>
                          formik.setFieldValue(
                            "immobile.id_broker",
                            parseInt(event.currentTarget.value)
                          )
                        }
                      >
                        <option disabled defaultValue="standard">
                          Corretor
                        </option>
                        {brokers.map((element) => (
                          <option value={element.id} key={element.id}>
                            {element.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* características */}
                    <div className="flex gap-3 flex-wrap">
                      <InputForm
                        label="Banheiros"
                        type="number"
                        name="immobile.bathroom"
                        placeholder="qtd"
                        value={formik.values.immobile.bathroom!}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Áreas"
                        type="number"
                        name="immobile.recreation_area"
                        placeholder="qtd"
                        value={formik.values.immobile.recreation_area!}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Piscinas"
                        type="number"
                        name="immobile.pools"
                        placeholder="qtd"
                        value={formik.values.immobile.pools!}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Quartos"
                        type="number"
                        name="immobile.bedrooms"
                        placeholder="qtd"
                        value={formik.values.immobile.bedrooms!}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Garagens"
                        type="number"
                        name="immobile.vehicle_vacany"
                        placeholder="qtd"
                        value={formik.values.immobile.vehicle_vacany!}
                        handle={formik.handleChange}
                      />
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <InputForm
                        label="Rua"
                        type="text"
                        name="address.street"
                        placeholder="Rua do imóvel"
                        value={formik.values.address.street!}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Bairro"
                        type="text"
                        name="address.district"
                        placeholder="Bairro do imóvel"
                        value={formik.values.address.district!}
                        handle={formik.handleChange}
                      />
                      <InputForm
                        label="Número"
                        type="number"
                        name="address.number"
                        placeholder="Número do imóvel"
                        value={formik.values.address.number!}
                        handle={formik.handleChange}
                      />
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <select
                        className="select select-bordered w-full max-w-xs"
                        value={formik.values.address.state!}
                        id="address.state"
                        onChange={formik.handleChange}
                      >
                        <option disabled defaultValue="standard">
                          Estado
                        </option>
                        {states.map((element, index) => (
                          <option value={element.value} key={index}>
                            {element.name}
                          </option>
                        ))}
                      </select>
                      <InputForm
                        label="Cidade"
                        type="text"
                        name="address.city"
                        placeholder="Cidade do imóvel"
                        value={formik.values.address.city!}
                        handle={formik.handleChange}
                      />
                    </div>
                    <textarea
                      className="textarea textarea-bordered"
                      placeholder="Características adicionais"
                      id="immobile.additional"
                      value={formik.values.immobile.additional!}
                      onChange={formik.handleChange}
                    ></textarea>

                    {/* Input fotos */}
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Escolher fotos</span>
                      </div>
                      <input
                        type="file"
                        name="images"
                        className="file-input file-input-bordered w-full max-w-xs"
                        placeholder="escolher"
                        onChange={(event) =>
                          formik.setFieldValue(
                            "images",
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
    </>
  );
};

export default ImmobileForm;
