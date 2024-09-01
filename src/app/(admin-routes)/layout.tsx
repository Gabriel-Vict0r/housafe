import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SideBar from "@/components/dashboard/SideBar";
import NavBar from "@/components/dashboard/NavBar";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(authOptions);
  //console.log(session);
  if (!session) {
    redirect("/admin");
  }
  return (
    <main>
      <NavBar />
      <section className="flex gap-4">
        <SideBar />
        {children}
      </section>
    </main>
  );
}
