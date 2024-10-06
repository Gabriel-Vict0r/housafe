import { TInput } from "@/models/types/all";
import React from "react";

type Props = {};

const TextArea = (props: TInput) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor={props.label} className="text-primary font-light">
        {props.label}
      </label>
      <label className="textarea w-full focus-within:outline-secondary border-gray-400 focus-within:border-secondary flex items-center gap-3">
        <textarea
          autoComplete="true"
          id={props.name}
          className="grow outline-none"
          placeholder={props.placeholder}
          onChange={props.handleTxtArea}
          value={props.value}
        />
      </label>
      <span className="text-secondary-hover text-xl">{props.error}</span>
    </div>
  );
};

export default TextArea;
