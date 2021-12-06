import { useState } from "react";
import { Text } from "@react-three/drei";
import { useLocation } from "wouter";

const WouterPathWouter = () => {
  const [, setLocation] = useLocation();
  const [hover, setHover] = useState(false);

  return (
    <Text
      color={hover ? "hsl(0, 100%, 50%)" : "hsl(30, 100%, 70%)"}
      fontSize={0.5}
      onClick={() => {
        const route = "/router";
        console.log("Route: ", route);
        setLocation(route);
      }}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      position={[0, -2, 0]}
      text="Path Wouter"
    />
  );
};

export default WouterPathWouter;
