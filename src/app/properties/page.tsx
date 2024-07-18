"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import roomImg from "../../../public/cil_room.png"
import areaImg from "../../../public/area.png"

import Image from 'next/image'
import { SlidersHorizontal, Search } from "lucide-react";
import { useState, useEffect } from "react";

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
        },
    ]
}

export default function Properties() {
    const [immobile, setImmobile] = useState<ImmobileProps[]>([]);

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
            <Header />

            <div className="bg-[url('/cover-properties.jpg')] text-white flex flex-col justify-center items-center m-auto h-128 w-10/12 rounded-2xl">
                <p className="font-bold text-5xl mb-5">Descubra seu lar</p>
                <p className="font-semibold text-center">Explore nossa coleção de imóveis disponíveis para compra e aluguel. <br /> Encontre o lugar perfeito para chamar de lar!</p>
            </div>

            <div className="navbar bg-white flex h-32 w-7/12 rounded-xl m-auto -mt-20 drop-shadow-md">
                <div className="flex items-center justify-between px-8 w-full">

                    <select className="bg-transparent select">
                        <option disabled selected>Tipo</option>
                        <option>Aluguel</option>
                        <option>Venda</option>
                        <option>Bart</option>
                    </select>

                    <select className="bg-transparent select">
                        <option disabled selected>Categoria</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>

                    <select className="bg-transparent select">
                        <option disabled selected>Cidade</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>

                    <SlidersHorizontal />

                    <button className="btn bg-secondary text-white hover:text-black flex items-center">
                        <Search />
                        <p>Pesquisar</p>
                    </button>

                </div>
            </div>

            <div className="h-80 flex flex-col justify-center items-center m-auto">
                <p>Ofertas especiais para quem busca um investimento certeiro.</p>
                <p className="font-bold text-5xl pt-2">Escolha seu Espaço</p>
            </div>


            <div className='grid grid-cols-3'>
                {immobile.map(item => (
                    <div key={item.id} className="p-5 md:basis-1/2 lg:basis-1/3">
                        <div className="card card-compact bg-bg-icon g-bg-icons border hover:border-secondary rounded-box px-2 py-4">

                            <figure>
                                {<Image
                                    src={item.Images[0].url}
                                    width="500"
                                    height="500"
                                    alt="Immobile image"
                                    className="px-5 rounded-3xl"
                                />}
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
                    </div>
                ))}

            </div>

            <button className="btn bg-secondary text-white hover:text-black flex m-auto w-60">CARREGAR MAIS</button>


            <Footer />
        </>
    )
}