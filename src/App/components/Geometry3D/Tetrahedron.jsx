import { Tetrahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaDetail,
  levaRadius,
} from "App/libs/LevaSettings/Geometry/Tetrahedron";

import Material from "../Material";

/**
 * Tetrahedron geometry (4 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry
 */
const Geometry3DTetrahedron = ({ children }) => {
  const { detail, radius } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        radius: levaRadius,
        detail: levaDetail,
      }),
    }),
  });

  return (
    <Tetrahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Tetrahedron>
  );
};

export default Geometry3DTetrahedron;
