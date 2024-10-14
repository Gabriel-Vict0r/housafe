"use client";
import React, { useEffect, useState } from "react";
import { GET } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import TitlePage from "@/components/dashboard/TitlePage";
import BtnAdd from "@/components/dashboard/BtnAdd";
import ImmobileForm from "@/components/dashboard/ImobbileForm";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import Image from "next/image";
import roomImg from "../../../../public/cil_room.png";
import areaImg from "../../../../public/area.png";

type Props = {};

type ImmobileProps = {
  id: string;
  title: string;
  description: string;
  bedrooms: number;
  size: number;
  address: {
    city: string;
    state: string;
  };
  type: {
    description: string;
  };
  Images: [
    {
      id: string;
      url: string;
    }
  ];
};

const page = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [immobile, setImmobile] = useState<ImmobileProps[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchData = () => {
      try {
        const data = fetch("https://housesafe-api.vercel.app/recents-immobile")
          .then((response) => response.json())
          .then((data) => setImmobile(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // const token = await getTokenjwt();
  // console.log(token);
  return (
    <section className="py-4 w-full px-2 pr-10">
      <div className="w-full flex justify-between flex-col">
        <ImmobileForm />
        <div className="grid grid-cols-3">
          {immobile.map((item) => (
            <div key={item.id} className="p-5 md:basis-1/2 lg:basis-1/3">
              <div className="card card-compact bg-bg-icon g-bg-icons border hover:border-secondary rounded-box px-2 py-4">
                <figure>
                  {
                    <Image
                      src={item.Images[0].url}
                      width="500"
                      height="500"
                      alt="Immobile image"
                      className="px-5 rounded-3xl"
                    />
                  }
                </figure>

                <div className="card-body">
                  <h2 className="card-title text-secondary">
                    {item.type.description}
                  </h2>

                  <h2 className="card-title font-bold">{item.title}</h2>

                  <p>{item.description}</p>

                  <p>{item.address.city}</p>

                  <p>{item.address.state}</p>

                  <div className="card-actions justify-between mt-5">
                    <div className="flex items-center">
                      <Image src={roomImg} alt="" className="mr-2" />
                      <p>{item.bedrooms} cômodo(s)</p>
                    </div>

                    <div className="flex items-center">
                      <Image src={areaImg} alt="" className="mr-2" />
                      <p>{item.size} m²</p>
                    </div>
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
