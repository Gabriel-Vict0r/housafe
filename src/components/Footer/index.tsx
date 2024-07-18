import Image from "next/image"

import whatsappImg from "../../../public/whatsapp.svg"
import linkedinImg from "../../../public/linkedin.svg"
import instagramImg from "../../../public/instagram.svg"
import facebookImg from "../../../public/facebook.svg"
import logoImg from "../../../public/logo_black.png"
import envelopeImg from "../../../public/envelope-regular.svg"
import phoneImg from "../../../public/phone-solid.svg"
export default function Footer() {
    return (
        <div className="flex items-center pb-9 mt-20 justify-around">
            <div>
                <Image
                    src={logoImg}
                    alt=""
                />

                <p className="py-5">Descubra segurança e simplicidade com a <br /> Housafe. Encontre seu lar ideal hoje mesmo!</p>

                <div className="flex">
                    <Image
                        src={whatsappImg}
                        alt="logo imagem"
                        className="size-6 mr-2"
                    />

                    <Image
                        src={linkedinImg}
                        alt="logo imagem"
                        className="size-6 mr-2"
                    />

                    <Image
                        src={instagramImg}
                        alt="logo imagem"
                        className="size-6 mr-2"
                    />

                    <Image
                        src={facebookImg}
                        alt="logo imagem"
                        className="size-6"
                    />
                </div>
            </div>

            <div className="flex justify-around w-2/4">
                <div>
                    <p className="font-bold text-2xl pb-2">Páginas</p>
                    <p>Página Inicial</p>
                    <p>Imóveis</p>
                    <p>Sobre</p>
                </div>

                <div>
                    <p className="font-bold text-2xl pb-2">Links</p>
                    <p>Políticas de privacidade</p>
                    <p>Termos de uso</p>
                    <p>Saiba Mais</p>
                </div>

                <div>
                    <p className="font-bold text-2xl pb-2">Contato</p>
                    <div className="flex items-center">
                        <Image
                            src={phoneImg}
                            alt=""
                            className="size-3.5 mr-2"
                        />
                        <p>(77) 9 9999-9999</p>
                    </div>

                    <div className="flex items-center mt-2">
                        <Image
                            src={envelopeImg}
                            alt=""
                            className="size-3.5 mr-2"
                        />
                        <p>housafe@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}