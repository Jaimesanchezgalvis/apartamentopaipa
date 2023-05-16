import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "../styles/whatsapp.css";

export const IconWhatsapp = () => {
  return (
    <>
      <div className="animate__animated animate__bounceInDown">
        <a href="https://wa.me/573143681004" target="blank">
          <BsWhatsapp className="BsWhatsapp" />
        </a>
      </div>
    </>
  );
};
