import React from "react";

type Props = {
  title: string;
  onchange: React.MouseEventHandler<HTMLButtonElement>;
};

const BtnAdd = ({ title, onchange }: Props) => {
  return (
    <button
      className="btn bg-secondary hover:bg-secondary-hover text-white font-normal"
      onClick={onchange}
    >
      {title}
    </button>
  );
};

export default BtnAdd;
