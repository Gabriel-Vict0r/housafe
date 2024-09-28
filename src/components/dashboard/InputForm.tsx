import { TInput } from "@/models/types/all";
import React from "react";

const InputForm = (props: TInput) => {
  return (
    <label className="input input-bordered  flex-1 flex items-center gap-2">
      {props.label}
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        className="w-9/12"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handle}
      />
    </label>
  );
};

export default InputForm;
