import { Dodecahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaDetail,
  levaRadius,
} from "App/libs/LevaSettings/Geometry/Dodecahedron";

import Material from "../Material";

/**
 * Dodecahedron geometry (12 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry
 */
const Geometry3DDodecahedron = ({ children }) => {
  const { detail, radius } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        radius: levaRadius,
        detail: levaDetail,
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
