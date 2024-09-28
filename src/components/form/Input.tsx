import React from "react";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { TInput } from "@/models/types/all";
const Input = (props: TInput) => {
  const Icon = () => {
    switch (props.type) {
      case "email":
        return <MdEmail className="text-gray-500" />;
      case "password":
        return <FaKey className="text-gray-500" />;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor={props.label} className="text-primary font-medium">
        {props.label}
      </label>
      <label className="input w-full focus-within:outline-secondary border-gray-400 focus-within:border-secondary flex items-center gap-3">
        <Icon />
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
