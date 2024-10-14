import WrapPage from "@/components/login/WrapPage";
import { getServerSession } from "next-auth";
import { GET } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(GET);
  if (session) {
    redirect("/dashboard");
  }
  return <WrapPage />;
};

export default page;
