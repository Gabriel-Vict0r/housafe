import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  icon: React.ReactNode;
  name: string;
};

const ButtonSignOut = ({ icon, name }: Props) => {
  //função para fazer logout
  const router = useRouter();
  async function logOut() {
    await signOut({
      redirect: false,
    });

    router.replace("/");
  }
  return (
    <button
      className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-secondary hover:bg-opacity-80 focus:bg-secondary focus:bg-opacity-100 active:bg-gray-50 active:bg-opacity-80 hover:text-white focus:text-white active:text-white outline-none"
      onClick={logOut}
    >
      <div className="grid place-items-center mr-4">{icon}</div>
      {name}
    </button>
  );
};

export default ButtonSignOut;
