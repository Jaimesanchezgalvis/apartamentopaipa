import { useSpring, animated } from "react-spring";

const Title = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <animated.h2 style={props}>
      Vive con calidad de vida, hermosas vistas cerca al lago y al centro de
      Paipa. 😎
    </animated.h2>
  );
};

export default Title;