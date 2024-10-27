"use client";
import { TInput } from "@/models/types/all";
import { phoneMask } from "@/utils/phoneMask";
import React, { useState } from "react";

type Props = {};

const InputFormBroker = (props: TInput) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (props.type === "phone") {
      event.currentTarget.value = phoneMask(event.currentTarget.value);
    }
    if (typeof props.handle === "function") {
      props.handle(event);
    }
  }
  return (
    <div className="w-full">
      {props.typeInput === "textarea" ? (
        <textarea
          name={props.name}
          id={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleTxtArea}
          className="textarea w-full"
          autoComplete="true"
        />
      ) : (
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={handleChange}
          className="input w-full"
        />
      )}
      <p className="text-gray-300 font-light">{props.error}</p>
    </div>
  );
};

export default InputFormBroker;
