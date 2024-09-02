import { ISocialMedia } from "@/models/intefaces/all";
import { FaLink, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import React from "react";

export const socialMedias: ISocialMedia[] = [
  {
    name: "whatsapp",
    url: "/",
    icon: <FaWhatsapp />,
  },
  {
    name: "LinkedIn",
    url: "/",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    url: "/",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    url: "/",
    icon: <FaFacebook />,
  },
];
