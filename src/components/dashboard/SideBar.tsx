"use client";
import Link from "next/link";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { PiBuildings } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import LinkSideBar from "./LinkSideBar";
import ButtonSignOut from "./ButtonSignOut";
type Props = {};

const SideBar = (props: Props) => {
  return (
    <>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          {/* <LinkSideBar
            icon={<RxDashboard />}
            name="Dashboard"
            href="/dashboard"
          /> */}
          <LinkSideBar
            icon={<RxDashboard />}
            name="Imóveis"
            href="/immobiles"
          />
          <LinkSideBar icon={<LuUsers />} name="Corretores" href="/brokers" />
          <ButtonSignOut icon={<CiLogout />} name="Log Out" />
        </nav>
      </div>
    </>
  );
};

export default SideBar;
