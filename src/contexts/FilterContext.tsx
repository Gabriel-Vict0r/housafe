"use client";

import { IType } from "@/models/intefaces/all";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface IFilters {
  types: IType[];
  setTypes: React.Dispatch<React.SetStateAction<IType[]>>;
  categories: IType[];
  setCategories: React.Dispatch<React.SetStateAction<IType[]>>;
  cities: IType[];
  setCities: React.Dispatch<React.SetStateAction<IType[]>>;
}

const FiltersContext = createContext<IFilters>({
  types: [],
  setTypes: () => {},
  categories: [],
  setCategories: () => {},
  cities: [],
  setCities: () => {},
});

const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [types, setTypes] = useState<IType[]>([]);
  const [categories, setCategories] = useState<IType[]>([]);
  const [cities, setCities] = useState<IType[]>([]);

  return (
    <FiltersContext.Provider
      value={{ types, setTypes, categories, setCategories, cities, setCities }}
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
