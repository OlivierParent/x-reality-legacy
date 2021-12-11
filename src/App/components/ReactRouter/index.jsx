import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@react-three/drei";

const ReactRouter = () => {
  const navigate = useNavigate();
  const [hoverTitle, setHoverTitle] = useState(false);
  const [hoverSubTitle, setHoverSubTitle] = useState(false);

  return (
    <>
      <Text
        color={hoverTitle ? "hsl(0, 100%, 50%)" : "hsl(120, 100%, 70%)"}
        fontSize={1}
        onClick={() => navigate("/alpha")}
        onPointerOut={() => setHoverTitle(false)}
        onPointerOver={() => setHoverTitle(true)}
        text="React Router"
      />
      <Text
        color={hoverSubTitle ? "hsl(0, 100%, 50%)" : "hsl(120, 100%, 70%)"}
        fontSize={0.5}
        onClick={() => navigate("/")}
        onPointerOut={() => setHoverSubTitle(false)}
        onPointerOver={() => setHoverSubTitle(true)}
        position={[0, -0.75, 0]}
        text="(go back)"
      />
    </>
  );
};

export default ReactRouter;
