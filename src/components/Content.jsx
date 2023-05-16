import { Card, Text, Row, Avatar } from "@nextui-org/react";
import bedroom from "../assets/icons/bedroom.svg";
import living_room from "../assets/icons/living_room.svg";
import study from "../assets/icons/study.svg";
import bathroom from "../assets/icons/bathroom.svg";
import kitchen_point from "../assets/icons/kitchen_point.svg";
import security from "../assets/icons/security.svg";
import dollar from "../assets/icons/dollar.svg";



const Content = () => {
  return (
    <Card
      xs={12}
      css={{
        display: "flex",
        alignItems: "center",
        mw: "800px",
        margin: "0 auto",
      }}
    >
      <Card.Body>
        <Text size={20}>Descripcion:</Text>

        <Row
          css={{
            gap: "1rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Avatar squared src={bedroom} />
          <Text size={20}>
            {" "}
            Habitacion principal con baño privado y vestier.
          </Text>
        </Row>

        <Row
          css={{
            gap: "1rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Avatar squared src={bedroom} />
          <Text size={20}>
            {" "}
            2 Habitaciones con vistas al lago y luz natural.
          </Text>
        </Row>

        <Row
          css={{
            gap: "1rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Avatar squared src={bathroom} />
          <Text size={20}> Baño social con ducha y acabados.</Text>
        </Row>

        <Row
          css={{
            gap: "1rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Avatar squared src={study} />
          <Text size={20}> Espacio para estudio con luz natural.</Text>
        </Row>

        <Row
          css={{
            gap: "1rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Avatar squared src={living_room} />
          <Text size={20}>
            {" "}
            Grande sala comedor con vista al lago y luz natural.
          </Text>
        </Row>

        <Row
          css={{
            gap: "1rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Avatar squared src={kitchen_point} />
          <Text size={20}>
            {" "}
            Cocina integral con acabados y espacio para lavadora.
          </Text>
        </Row>
        <Row
          css={{
            gap: "1rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Avatar squared src={security} />
          <Text size={20}>
            {" "}
            Ubicacion: conjunto cerrado torres del panorama con vigilancia 24/7.
          </Text>
        </Row>
        <hr />
        <Row
          css={{
            gap: "1rem",
            alignItems: "center",
            padding: "0 1rem",
          }}
        >
          <Avatar squared src={dollar} />
          <Text size={20}>
            {" "}
            Precio del arriendo $750000 incluye administracion.
          </Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Content;