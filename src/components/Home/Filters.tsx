import React from "react";
import InputFilter from "./InputFilter";
import { fetchFilter, getFilters } from "@/app/actions";
import { IType } from "@/models/intefaces/all";

type Props = {};

const Filters = async (props: Props) => {
  const types = await fetchFilter({
    route: "get-types",
    keys: ["types-immobile"],
    tag: ["types-immobile"],
  });
  const convertedTypes = types as IType[];

  const categories = await fetchFilter({
    route: "get-categories",
    keys: ["categories-immobile"],
    tag: ["categories-immobile"],
  });

  const convertedCategories = categories as IType[];

  const cities = async () => {
    const citiesFetch = await fetch(
      "https://brasilapi.com.br/api/ibge/municipios/v1/BA?providers=dados-abertos-br,gov,wikipedia"
    );
    return citiesFetch.json();
  };
  let citiesArr: IType[] = [];
  const convertedCities = (await cities().then((arr) => {
    arr.map((city: any) => {
      citiesArr.push(
        (city = {
          id: city.codigo_ibge,
          description: city.nome,
        })
      );
    });
  })) as IType[];
  return (
    <form className="w-full rounded-3xl bg-white text-color-text-filter p-4">
      <InputFilter arrTypes={convertedTypes} name="Tipo" />
      <InputFilter arrTypes={convertedCategories} name="Categoria" />
      <InputFilter arrTypes={citiesArr} name="Cidade" />
    </form>
  );
};

export default Filters;
