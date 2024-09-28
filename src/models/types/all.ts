import { ChangeEventHandler, InputHTMLAttributes } from "react";


type TInput = {
    name: string;
    label: string;
    type: React.HTMLInputTypeAttribute | undefined;
    placeholder: string;
    handle?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string | number | readonly string[] | undefined;
    error?: string | undefined;
}
type TBroker = {
    id: number;
    name: string;
    phone: string;
    email: string;
    image: string;
    status: string;
};

type TCatAndType = {
    id: number;
    description: string;
    status: string;
};

export type { TInput, TBroker, TCatAndType }
export type TWhatPage = "properties" | "home"