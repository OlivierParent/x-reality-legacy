import { useState } from "react";
import { useLocation } from "wouter";
import { Text } from "@react-three/drei";

const Wouter = () => {
  const [, setLocation] = useLocation();
  const [hover, setHover] = useState(false);

  return (
    <Text
      color={hover ? "hsl(0, 100%, 50%)" : "hsl(120, 100%, 70%)"}
      fontSize={1}
      onClick={() => {
        const route = "/router";
        console.log("Route: ", route);
        setLocation(route);
      }}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      text="Wouter"
    />
  );
};

export default Wouter;
