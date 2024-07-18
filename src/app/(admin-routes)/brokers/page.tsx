"use client";
import BrokerForm from "@/components/dashboard/BrokerForm";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
type Props = {};

type TBroker = {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
};
const page = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [broker, setBrokers] = useState<TBroker[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchData = () => {
      try {
        const data = fetch(`${process.env.URL_API}/get-broker`)
          .then((response) => response.json())
          .then((data) => setBrokers(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-4 w-full px-2 pr-10">
      <div className="w-full flex justify-between flex-col">
        <BrokerForm />
        <div className="mt-5 flex flex-col gap-3">
          {broker.map((element) => (
            <div
              className="card card-side bg-base-100 shadow-xl"
              key={element.id}
            >
              <figure>
                <Image
                  src={element.image}
                  alt={element.name}
                  objectFit="cover"
                  width={200}
                  height={250}
                  className="h-full"
                  quality={100}
                  priority
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{element.name}</h2>
                <p className="text-gray-500">Corretor(a) de imóveis</p>

                <div className="flex flex-col gap-5">
                  <div className="flex gap-3">
                    <MdEmail className="text-gray-500" />
                    <span className="text-gray-500">email@email</span>
                  </div>
                  <div className="flex gap-3">
                    <FaPhoneAlt className="text-gray-500" />
                    <span className="text-gray-500">77 999 9 9 9 9</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
