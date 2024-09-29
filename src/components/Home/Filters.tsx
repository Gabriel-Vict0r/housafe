"use client";
import React, { useEffect, useState } from "react";
import InputFilter from "./InputFilter";
import { fetchFilter } from "@/app/actions";
import { IType } from "@/models/intefaces/all";
import getFilters from "@/utils/functionFetch";
import { IoIosSearch } from "react-icons/io";
import { useFormik } from "formik";
import { useFiltersContext } from "@/contexts/FilterContext";
import { TWhatPage } from "@/models/types/all";

const Filters = ({ whatPage }: { whatPage: TWhatPage }) => {
  const {
    types,
    setTypes,
    cities,
    setCities,
    categories,
    setCategories,
    immobile,
    setImmobile,
    immobileFiltered,
    setImmobileFiltered,
    arrayLength,
    setArrayLength,
  } = useFiltersContext();
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
      type: "",
      category: "",
      city: "",
    },
    onSubmit: (values) => {
      const filters = immobile.filter((immobile) => {
        return (
          immobile.type.description.toLowerCase() ===
            (values.type === ""
              ? immobile.type.description.toLowerCase()
              : values.type.toLowerCase()) &&
          immobile.address.city.toLowerCase() ===
            (values.city === ""
              ? immobile.address.city.toLowerCase()
              : values.city.toLowerCase()) &&
          immobile.category.description.toLowerCase() ===
            (values.category === ""
              ? immobile.category.description.toLowerCase()
              : values.category.toLowerCase())
        );
      });
      setImmobileFiltered(filters.slice(1, arrayLength));
      console.log(immobileFiltered);
    },
  });
  return (
    <>
      {types.length > 0 && categories.length > 0 && cities.length > 0 ? (
        <form
          className={`w-full rounded-3xl bg-white text-color-text-filter p-4 absolute ${
            whatPage == "home" ? "bottom-[-170px]" : "bottom-[-200px]"
          } pb-8 lg:pb-4 left-0 shadow-2xl md:bottom-[-230px] lg:relative lg:bottom-0 lg:flex lg:gap-4 lg:rounded-full text-center lg:items-center lg:mt-5 lg:max-w-[1100px]`}
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
      ) : (
        <div className="z-[999] fixed top-0 left-0 h-screen w-screen bg-white flex items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default Filters;
