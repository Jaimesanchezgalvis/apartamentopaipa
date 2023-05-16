import { Container, Card, Text, Image } from "@nextui-org/react";
import headerImage from "./assets/headerImg.jpeg";
import {
  GalleryComponent,
  Title,
  Content,
  Ubicacion,
  Whatsapp,
} from "./components/index";

import "./App.css";

function App() {
  // const api_key = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;

  return (
    <Container>
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
