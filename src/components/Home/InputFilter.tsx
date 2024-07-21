import { IType } from "@/models/intefaces/all";
import React from "react";

const InputFilter = (arrTypes: IType[]) => {
  return (
    <select
      name=""
      id=""
      className="w-full p-2 text-color-text-filter"
      defaultValue="types"
    >
      {arrTypes.map((type) => (
        <option value={type.id} className="text-color-text-filter " disabled>
          {type.description}
        </option>
      ))}
    </select>
  );
};

export default InputFilter;
