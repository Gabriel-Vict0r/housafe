import { object, ObjectSchema, setLocale, string } from "yup";
import { ptForm } from 'yup-locale-pt';



setLocale(ptForm)
export interface IFormContact {
    nome: string;
    email: string;
    phone: string;
    message: string;
}

export const schema: ObjectSchema<IFormContact> = object({
    nome: string().required().min(4),
    email: string().email().required(),
    phone: string().required().min(14),
    message: string().required().min(10).max(800)
})