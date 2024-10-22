import { TInput } from "@/models/types/all";
import React from "react";

type Props = {};

const InputFormBroker = (props: TInput) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handle}
      className="input w-full"
    />
  );
};

export default InputFormBroker;
