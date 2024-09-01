import { Sides } from "@/models/enums/all";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  onClick?: React.MouseEventHandler;
  side: Sides;
};

const ArrowCarousel = ({ onClick, side }: Props) => {
  return (
    <button
      className={`absolute top-1/2 ${
        side === Sides.RIGHT ? "right-0" : "left-0"
      } text-2xl bg-secondary bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-100 transition-colors`}
      onClick={onClick}
      name={side === Sides.RIGHT ? "botão esquerdo" : "botão direito"}
    >
      <FaArrowRight className={`${side === Sides.RIGHT ? "" : "rotate-180"}`} />
    </button>
  );
};

export default ArrowCarousel;
