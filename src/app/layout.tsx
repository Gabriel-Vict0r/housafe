import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppProps } from "next/app";
import NexthAuthSessionProvider from "@/providers/sessionProvider";
import Header from "@/components/Header";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Housafe",
  description: "Explore os nossos melhores imóveis",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} px-3 lg:px-10`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
