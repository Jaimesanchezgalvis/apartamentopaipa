import React from "react";
import { Card, Text } from "@nextui-org/react";

export const Ubicacion = () => {
  return (
    <Card
      xs={12}
      css={{
        display: "flex",
        alignItems: "center",
        mw: "800px",
        margin: "0 auto",
        marginTop: "2rem",
      }}
    >
      <Card.Body
        css={{
          padding: "1rem",
        }}
      >
        <Text size={15}>
          <b>Ubicacion:</b>
          <span> Conjunto torres de panorama</span>
        </Text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15878.324732307614!2d-73.1179621!3d5.7732365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a6b7b3ffb8791%3A0x3b5f28ce7d65026a!2sTorres%20de%20Panorama%20Apartamentos!5e0!3m2!1ses!2sco!4v1684264398534!5m2!1ses!2sco"
          width="auto"
          height="450"
          frameBorder={0}
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Card.Body>
    </Card>
  );
};

