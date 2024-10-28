import React from "react";

type Props = {
  icon: React.ReactNode;
  description: string;
  data: number | string;
};

const DetailProperty = ({ icon, description, data }: Props) => {
  return (
    <div className="flex w-full justify-between items-center font-medium text-base p-5 border-b-2 border-gray-100 text-primary">
      <div className="flex gap-3 items-center">
        <span className="text-3xl">{icon}</span>
        <p>{description}</p>
      </div>
      <span>{data}</span>
    </div>
  );
};

export default DetailProperty;
