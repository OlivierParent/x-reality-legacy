import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@react-three/drei";

const ReactRouterPathOmega = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <Text
      color={hover ? "hsl(0, 100%, 50%)" : "hsl(30, 100%, 70%)"}
      fontSize={0.5}
      onClick={() => navigate("/alpha")}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      position={[0, -2, 0]}
      text="Path Omega"
    />
  );
};

export default ReactRouterPathOmega;
