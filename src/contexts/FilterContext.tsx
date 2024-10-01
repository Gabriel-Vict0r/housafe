"use client";

import { ImmobileProps, IType } from "@/models/intefaces/all";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface IFilters {
  types: IType[];
  setTypes: React.Dispatch<React.SetStateAction<IType[]>>;
  categories: IType[];
  setCategories: React.Dispatch<React.SetStateAction<IType[]>>;
  cities: IType[];
  setCities: React.Dispatch<React.SetStateAction<IType[]>>;
  immobile: ImmobileProps[];
  setImmobile: React.Dispatch<React.SetStateAction<ImmobileProps[]>>;
  immobileFiltered: ImmobileProps[];
  setImmobileFiltered: React.Dispatch<React.SetStateAction<ImmobileProps[]>>;
  arrayLength: number;
  setArrayLength: React.Dispatch<React.SetStateAction<number>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const FiltersContext = createContext<IFilters>({
  types: [],
  setTypes: () => {},
  categories: [],
  setCategories: () => {},
  cities: [],
  setCities: () => {},
  immobile: [],
  setImmobile: () => {},
  immobileFiltered: [],
  setImmobileFiltered: () => {},
  arrayLength: 7,
  setArrayLength: () => {},
  city: "",
  setCity: () => {},
  category: "",
  setCategory: () => {},
  type: "",
  setType: () => {},
});

const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [types, setTypes] = useState<IType[]>([]);
  const [categories, setCategories] = useState<IType[]>([]);
  const [cities, setCities] = useState<IType[]>([]);
  const [immobile, setImmobile] = useState<ImmobileProps[]>([]);
  const [immobileFiltered, setImmobileFiltered] = useState<ImmobileProps[]>([]);
  const [arrayLength, setArrayLength] = useState<number>(6);
  const [type, setType] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [city, setCity] = useState<string>("");
  return (
    <FiltersContext.Provider
      value={{
        types,
        setTypes,
        categories,
        setCategories,
        cities,
        setCities,
        immobile,
        setImmobile,
        immobileFiltered,
        setImmobileFiltered,
        arrayLength,
        setArrayLength,
        city,
        setCity,
        category,
        setCategory,
        type,
        setType,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

const useFiltersContext = (): IFilters => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error(
      "useFiltersContext deve ser usado dentro do componente FiltersProvider"
    );
  } else return context;
};
export { FiltersProvider, useFiltersContext };
