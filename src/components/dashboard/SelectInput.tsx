import { TBroker, TCatAndType } from "@/models/types/all";
import { ChangeEventHandler } from "react";

type Props = {
  standard: number;
  options: TCatAndType[];
  name: string;
  value: number;
  handle?: ChangeEventHandler<HTMLSelectElement>;
};

const SelectInput = ({ standard, options, value, handle, name }: Props) => {
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={value}
      onChange={handle}
      id={name}
    >
      <option disabled defaultValue={standard}>
        {standard}
      </option>
      {options.map((element) => (
        <option value={element.id} key={element.id}>
          {element.description}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
