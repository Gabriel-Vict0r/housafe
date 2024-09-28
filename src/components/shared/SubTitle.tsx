import React from "react";

type Props = {
  subtitle: string;
  text: string;
};

const SubTitle = ({ subtitle, text }: Props) => {
  return (
    <div className="mt-[240px] md:mt-[290px] lg:mt-10 flex flex-col justify-center items-center m-auto text-center p-5">
      <p className="text-base font-normal">{text}</p>
      <p className="font-bold text-3xl pt-2">{subtitle}</p>
    </div>
  );
};

export default SubTitle;
