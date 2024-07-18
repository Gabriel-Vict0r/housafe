import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

type Props = {};

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="navbar bg-base-100 justify-between pr-10">
      <div className="flex gap-36 w-2/3">
        <Image src="/logo.svg" width={178} height={32} alt="Logo" />
        <div className="form-control w-full">
          <input
            type="text"
            placeholder="Pesquisar"
            className="input input-bordered w-full md:w-auto"
          />
        </div>
      </div>

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="icon user"
                src="https://avatars.githubusercontent.com/u/46754034?s=400&u=eb30a9ea80725213c305ffb25da2d48b43cb8426&v=4"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">novo</span>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-primary font-medium text-base">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
