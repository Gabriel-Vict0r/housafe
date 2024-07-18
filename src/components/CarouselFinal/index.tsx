import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import roomImg from "../../../public/cil_room.png"
import areaImg from "../../../public/area.png"

import Link from 'next/link'
import { useState, useEffect } from "react";

type ImmobileItemProps = {
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
    },
  ]
}

export default function CarouselFinal() {
  const [immobile, setImmobile] = useState<ImmobileItemProps[]>([]);

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

  return (
    <>
      <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      
      className="mb-32"
      >
        <CarouselContent className="w-10/12">
          {immobile.map(item => (
            <CarouselItem key={item.id} className="pl-10 md:basis-1/2 lg:basis-1/3">
              <Link href={{
                pathname: "/immobile",
                query: { id: item.id }
              }}>
              <div className="card card-compact bg-bg-icon g-bg-icons border hover:border-secondary rounded-box px-2 py-4">
                
                <figure>
                  <Image
                    src={item.Images[0].url}
                    width="500"
                    height="500"
                    alt="Immobile image"
                    className="px-5 rounded-3xl"
                  />
                </figure>

                <div className="card-body">

                  <h2 className="card-title text-secondary">{item.type.description}</h2>

                  <h2 className="card-title font-bold">{item.title}</h2>

                  <p>{item.description}</p>

                  <p>{item.address.city}</p>

                  <p>{item.address.state}</p>

                  <div className="card-actions justify-between mt-5">

                    <div className="flex items-center">
                      <Image
                        src={roomImg}
                        alt=""
                        className="mr-2"
                      />
                      <p>{item.bedrooms} cômodo(s)</p>
                    </div>

                    <div className="flex items-center">
                      <Image
                        src={areaImg}
                        alt=""
                        className="mr-2"
                      />
                      <p>{item.size} m²</p>
                    </div>

                  </div>

                </div>
              </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}