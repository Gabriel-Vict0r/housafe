import { IType } from "@/models/intefaces/all";
import React from "react";

interface IInputLocal {
  arrTypes: IType[];
  name: string;
  label: string;
  handleInput: React.ChangeEventHandler;
}
const InputFilter = ({ arrTypes, name, label, handleInput }: IInputLocal) => {
  return (
    <select
      name={name}
      id={name}
      className="w-full p-2 text-color-text-filter border-2 rounded-xl mb-3 lg:rounded-3xl lg:mb-0"
      defaultValue={label}
      onChange={handleInput}
    >
      <option selected value={label}>
        {label}
      </option>
      {arrTypes.map((type) => (
        <option
          value={type.id}
          className="text-color-text-filter "
          key={type.id}
        >
          {type.description}
        </option>
      ))}
    </select>
  );
};

export default InputFilter;
