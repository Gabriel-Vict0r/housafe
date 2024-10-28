import { TInput } from "@/models/types/all";
import { phoneMask } from "@/utils/phoneMask";
import React, { useState } from "react";

type Props = {};

const Input = (props: TInput) => {
  const [value, setValue] = useState(props.value);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    let newValue = event.currentTarget.value;
    if (props.type === "phone") {
      newValue = phoneMask(newValue);
    }
    setValue(newValue);

    if (props.handle) {
      props.handle(event);
    }
  }

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
          onChange={handleChange}
          maxLength={props.maxLength}
          value={value}
        />
      </label>
      <span className="text-secondary-hover text-base">{props.error}</span>
    </div>
  );
};

export default Input;
