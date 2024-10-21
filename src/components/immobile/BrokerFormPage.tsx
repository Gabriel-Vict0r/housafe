"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const BrokerFormPage = (props: Props) => {
  return (
    <div className="rounded-xl bg-secondary p-5">
      <h3 className="font-normal text-white text-2xl mb-5">Corretor</h3>
      <div className="flex gap-5">
        <Image
          src="/broker.png"
          width={80}
          height={59.27}
          alt="Corretor"
          className="object-cover rounded-full"
        />
        <article className="text-white">
          <h4 className="text-xl">Maria Joana</h4>
          <p className="text-gray-300">(77) 99903-0842</p>
          <p className="text-gray-300">corretor@gmail.com</p>
        </article>
      </div>
      <form action=""></form>
    </div>
  );
};

export default BrokerFormPage;
