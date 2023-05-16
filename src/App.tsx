import { Container, Card, Text, Image } from "@nextui-org/react";
import headerImage from "./assets/headerImg.jpeg";
// import {
//   GalleryComponent,
//   Title,
//   Content,
//   Ubicacion,
//   Whatsapp,
// } from "./components";

import { Title } from "./components/Title";
import { GalleryComponent } from "./components/GalleryComponent";
import { Content } from "./components/Content";
import { Ubicacion } from "./components/Ubicacion";
import { Whatsapp } from "./components/Whatsapp";

import "./App.css";

function App() {
  return (
    <Container 
    css={{
      maxWidth: "1200px",
    }}
    >
      <Card
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src={headerImage}
          alt="Default Image"
          width="100%"
          height="auto"
          css={{
            borderRadius: "10px",
            objectFit: "cover",
            objectPosition: "center",
            maxHeight: "300px",
          }}
        />
        <Text size={10}>(Vista real desde el apartamento)</Text>
      </Card>
      <Title />
      <GalleryComponent />
      <Content />
      <Ubicacion />
      <Whatsapp />
    </Container>
  );
}

export default App;
