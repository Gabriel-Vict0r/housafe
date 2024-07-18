import React from "react";

type Props = {
  title: string;
};

const TitlePage = ({ title }: Props) => {
  return <h1 className="font-semibold text-2xl">{title}</h1>;
};

export default TitlePage;
