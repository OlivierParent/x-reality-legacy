import { Octahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaDetail,
  levaRadius,
} from "App/libs/LevaSettings/Geometry/Octahedron";

import Material from "../Material";

/**
 * Octahedron geometry (8 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry
 */
const Geometry3DOctahedron = ({ children }) => {
  const { detail, radius } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        radius: levaRadius,
        detail: levaDetail,
      }),
    }),
  });

  return (
    <Octahedron args={[radius, detail]}>{children ?? <Material />}</Octahedron>
  );
};

export default Geometry3DOctahedron;
