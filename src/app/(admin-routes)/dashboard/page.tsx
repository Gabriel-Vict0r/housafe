import { GET } from "@/app/api/auth/[...nextauth]/route";
import SideBar from "@/components/dashboard/SideBar";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(GET);

  return <main></main>;
};

export default page;
