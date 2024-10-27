import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";

import { MdOutlineBed } from "react-icons/md";
import { LiaCouchSolid } from "react-icons/lia";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineGarage } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { CiCamera } from "react-icons/ci";

import Image from "next/image";
import Gallery from "@/components/immobile/Gallery";
import DetailProperty from "@/components/immobile/DetailProperty";
import BrokerFormPage from "@/components/immobile/BrokerFormPage";
import { GetStaticPropsContext } from "next";
import { ImmobileProps } from "@/models/intefaces/all";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function getStaticSideProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const immobileResponse = await fetch(
    `${process.env.URL_API}/recents-immobile`
  );
  const immobiles = await immobileResponse.json();

  return {
    props: {
      immobiles,
    },
  };
}

async function generateStaticParams() {
  const immobileResponse = await fetch(
    `${process.env.URL_API}/recents-immobile`
  );
  const immobiles: Array<ImmobileProps> = await immobileResponse.json();
  return immobiles.map((element) => {
    id: String(element.id);
  });
}
async function fetchImmobile(id: string) {
  const immobile = await fetch(`${process.env.URL_API}/get-immobile/${id}`, {
    next: { revalidate: 3600 },
  });
  return immobile.json();
}

export default async function ImmobileSinglePage({ params }: Params) {
  //GET IMMOBILE
  const { id } = params;
  const immobile: ImmobileProps = await fetchImmobile(id);
  const coinBr = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const priceByM = Number(immobile.price) / immobile.size;
  const addressEmbed = encodeURIComponent(
    `${immobile.address.street}, ${immobile.address.number} - ${immobile.address.district}, ${immobile.address.city} - ${immobile.address.state}`
  );

  interface IDetailProperties {
    icon: React.ReactNode;
    description: string;
    data: number;
  }
  const detailsProperties: IDetailProperties[] = [
    {
      icon: <MdOutlineBed />,
      description: "Quartos",
      data: immobile.bedrooms,
    },
    {
      icon: <MdOutlineGarage />,
      description: "Garagens",
      data: immobile.vehicle_vacany,
    },
    {
      icon: <LiaCouchSolid />,
      description: "Área de lazer",
      data: immobile.recreation_area,
    },
    {
      icon: <BiArea />,
      description: "Área total",
      data: immobile.size,
    },
    {
      icon: <MdOutlineBathroom />,
      description: "Banheiros",
      data: immobile.bathroom,
    },
    {
      icon: <MdPool />,
      description: "Piscinas",
      data: immobile.pools,
    },
  ];
  return (
    <main className="mt-32">
      <Header />
      <button className="btn uppercase bg-secondary font-medium text-white">
        {`Imóvel para ${immobile.type.description}`}
      </button>

      <section className="my-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between my-5">
          <div className="">
            <h1 className="text-primary text-xl font-semibold">
              {immobile.title}
            </h1>
            <p className="text-gray-500 font-normal">
              {`${immobile.address.street}, ${immobile.address.district}, n°${immobile.address.number} - ${immobile.address.city} - ${immobile.address.state}`}
            </p>
          </div>
          <div className="flex justify-between items-center lg:flex-col lg:items-end">
            <p className="text-primary text-xl font-semibold">{`${coinBr.format(
              Number(immobile.price)
            )}`}</p>
            <p className="text-gray-500 font-normal">
              {`${coinBr.format(priceByM)}/M²`}
            </p>
          </div>
        </div>
        <div className="lg:flex lg:gap-5">
          <Image
            src={immobile.Images[0].url}
            width={847}
            height={549}
            alt="teste"
            className="hidden lg:block object-cover rounded-3xl lg:w-[60%]"
          />
          <div className="my-5 md:flex md:gap-5 lg:flex-col lg:justify-between lg:w-[40%] lg:my-0">
            <Gallery arr={immobile.Images} alt={immobile.title} />
            <iframe
              width="600"
              height="286"
              loading="lazy"
              className="w-full rounded-3xl"
              style={{ border: "1px solid", borderColor: "#C6C6C6" }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAhxEurhPz36Nlb92Seh2ZedhCVdxt8Kxk
    &q=${addressEmbed}`}
            ></iframe>
          </div>
        </div>
      </section>

      {/* SEGUNDA SESSÃO */}
      <section className="md:flex md:justify-between">
        <div className="w-full md:w-[60%]">
          <div className="">
            <h2 className="text-primary font-medium text-xl">Descrição</h2>
            <p className="font-light text-gray-500">{immobile.description}</p>
          </div>
          <div className="my-5">
            <h2 className="text-primary font-medium text-xl">
              Detalhes da propriedade
            </h2>
            <div className="">
              {detailsProperties.map((detail, index) => (
                <DetailProperty
                  icon={detail.icon}
                  description={detail.description}
                  data={detail.data}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <BrokerFormPage />
      </section>
      <Footer />
    </main>
  );
}
