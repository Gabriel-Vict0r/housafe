import { TInput } from "@/models/types/all";
import React from "react";

type Props = {};

const Input = (props: TInput) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor={props.label} className="text-primary font-light">
        {props.label}
      </label>
      <label className="input w-full focus-within:outline-secondary border-gray-400 focus-within:border-secondary flex items-center gap-3">
        <input
          autoComplete="true"
          id={props.name}
          type={props.type}
          className="grow"
          placeholder={props.placeholder}
          onChange={props.handle}
          value={props.value}
        />
      </label>
      <span className="text-secondary-hover text-xl">{props.error}</span>
    </div>
  );
};

export default Input;
