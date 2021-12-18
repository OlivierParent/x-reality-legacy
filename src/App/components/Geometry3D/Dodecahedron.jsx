import { Dodecahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

const Geometry3DDodecahedron = ({ children }) => {
  const { detail, radius } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        radius: {
          label: "Radius",
          max: 3,
          min: 0.1,
          step: 0.1,
          value: 1,
        },
        detail: {
          label: "Detail",
          max: 8,
          min: 0,
          step: 1,
          value: 0,
        },
      }),
    }),
  });

  return (
    <Dodecahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Dodecahedron>
  );
};

export default Geometry3DDodecahedron;
