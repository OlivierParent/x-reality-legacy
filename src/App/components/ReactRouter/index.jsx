import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@react-three/drei";
import { useControls } from "leva";

import { ROUTES } from "./ROUTES";

const ReactRouter = () => {
  const navigate = useNavigate();
  const [hoverSubTitle, setHoverSubTitle] = useState(false);
  const [hoverTitle, setHoverTitle] = useState(false);

  useControls("Components", {
    route: {
      label: "Route",
      options: ROUTES,
      value: ROUTES.Root,
      onChange: (route) => {
        navigate(route);
      },
    },
  });

  return (
    <>
      <Text
        color={hoverTitle ? "hsl(0, 100%, 50%)" : "hsl(120, 100%, 70%)"}
        fontSize={1}
        onClick={() => navigate(ROUTES.Alpha)}
        onPointerOut={() => setHoverTitle(false)}
        onPointerOver={() => setHoverTitle(true)}
        text="React Router"
      />
      <Text
        color={hoverSubTitle ? "hsl(0, 100%, 50%)" : "hsl(120, 100%, 70%)"}
        fontSize={0.5}
        onClick={() => navigate(ROUTES.Root)}
        onPointerOut={() => setHoverSubTitle(false)}
        onPointerOver={() => setHoverSubTitle(true)}
        position={[0, -0.75, 0]}
        text="(go back)"
      />
    </>
  );
};

export default ReactRouter;
