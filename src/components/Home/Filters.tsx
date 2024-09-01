"use client";
import React, { useEffect, useState } from "react";
import InputFilter from "./InputFilter";
import { fetchFilter } from "@/app/actions";
import { IType } from "@/models/intefaces/all";
import getFilters from "@/utils/functionFetch";
import { IoIosSearch } from "react-icons/io";
import { useFormik } from "formik";
type Props = {};

const Filters = (props: Props) => {
  const [types, setTypes] = useState<IType[]>([]);
  const [categories, setCategories] = useState<IType[]>([]);
  const [cities, setCities] = useState<IType[]>([]);
  useEffect(() => {
    const fetchFilters = async () => {
      const typesFetch = await getFilters("get-types");
      setTypes(typesFetch);

      const categoriesFetch = await getFilters("get-categories");
      setCategories(categoriesFetch);

      const citiesFetch = await fetch(
        "https://brasilapi.com.br/api/ibge/municipios/v1/BA?providers=dados-abertos-br,gov,wikipedia"
      )
        .then((response) => response.json())
        .then((cities) => {
          let citiesArr: IType[] = [];
          cities.map((city: any) => {
            citiesArr.push(
              (city = {
                id: city.codigo_ibge,
                description: city.nome,
              })
            );
          });
          setCities(citiesArr);
        });
    };
    fetchFilters();
  }, []);

  const formik = useFormik({
    initialValues: {
      type: "venda",
      category: "casa",
      city: "BARREIRAS",
    },
    onSubmit: (values) => {
      console.log(values, "vai redirecionar para outra página.");
    },
  });
  return (
    <form
      className="w-full rounded-3xl bg-white text-color-text-filter p-4 absolute bottom-[-170px] pb-8 lg:pb-4 left-0 shadow-2xl md:bottom-[-230px] lg:relative lg:bottom-0 lg:flex lg:gap-4 lg:rounded-full text-center lg:items-center lg:mt-5"
      method="POST"
      onSubmit={formik.handleSubmit}
    >
      <InputFilter
        arrTypes={types}
        name="type"
        label="Tipo"
        handleInput={formik.handleChange}
      />
      <InputFilter
        arrTypes={categories}
        name="category"
        label="Categoria"
        handleInput={formik.handleChange}
      />
      <InputFilter
        arrTypes={cities}
        name="city"
        label="Cidade"
        handleInput={formik.handleChange}
      />
      <div className="w-full absolute bottom-[-40px] left-0 lg:w-auto lg:!static">
        <button
          type="submit"
          className="text-xl p-5 bg-primary text-white rounded-full hover:bg-black transition-colors"
        >
          <IoIosSearch />
        </button>
      </div>
    </form>
  );
};

export default Filters;
