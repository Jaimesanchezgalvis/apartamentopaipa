import { Container, Card, Text, Image } from "@nextui-org/react";
import headerImage from "./assets/headerImg.jpeg";
import { Title } from "./components/Title";
import { GalleryComponent } from "./components/GalleryComponent";
import { Content } from "./components/Content";
import { Ubicacion } from "./components/Ubicacion";
import { Whatsapp } from "./components/Whatsapp";
import { IconWhatsapp } from "./components/IconWhatsapp";
import { VideoPlayer } from "./components/VideoPlayer";

import "./styles/global.css";

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
        <Text size={10}>(Vista real desde el apartamentoo)</Text>
      </Card>
      <Title />
      <GalleryComponent />
      <hr />
      <VideoPlayer />
      <Content />
      <Ubicacion />
      <Whatsapp />
      <IconWhatsapp />
    </Container>
  );
}

export default App;
