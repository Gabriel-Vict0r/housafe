"use client";
import React, { FormEventHandler, useState } from "react";

type Props = {};

const NewsLetterForm = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  function subscribe(e: Event) {
    e.preventDefault();
    console.log(email);
  }
  return (
    <form className="relative">
      <input
        type="email"
        name="email"
        id="email"
        className="p-3 rounded-3xl w-full lg:py-5 lg:rounded-full outline-none border border-solid focus:border-primary border-white transition-colors "
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="submit"
        value="Assinar"
        className="absolute right-0 top-0 py-3 px-5 lg:py-5 md:px-10 bg-primary text-white rounded-3xl lg:rounded-full cursor-pointer transition-colors hover:bg-black border border-solid border-primary"
        onClick={subscribe}
      />
    </form>
  );
};

export default NewsLetterForm;
