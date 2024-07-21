import React from "react";
import InputFilter from "./InputFilter";
import { fetchFilter } from "@/app/actions";

type Props = {};

const Filters = async (props: Props) => {
  const types = await fetchFilter({
    route: "get-types",
    keys: ["types"],
    tag: ["types"],
  });
  console.log(types);
  return (
    <form className="w-full rounded-3xl bg-white text-color-text-filter">
      {/* <InputFilter /> */}
    </form>
  );
};

export default Filters;
