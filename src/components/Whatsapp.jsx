import React from "react";
import { Card, Text } from "@nextui-org/react";

const Whatsapp = () => {
  return (
    <Card
      xs={12}
      css={{
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
        mw: "800px",
        margin: "0 auto",
        marginTop: "1rem",
      }}
    >
      <Card.Body
        css={{
          padding: "1rem",
        }}
      >
        <Text
          size={15}
          css={{
            textAlign: "center",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          Reserva tu cita para visitarlo en:
          <a
            href="https://wa.me/573143681004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            <b> Whatsapp </b>
          </a>
          3143681004
        </Text>
      </Card.Body>
    </Card>
  );
};

export default Whatsapp;
