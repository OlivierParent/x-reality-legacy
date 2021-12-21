import { Icosahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaDetail,
  levaRadius,
} from "App/libs/LevaSettings/Geometry/Icosahedron";

import Material from "../Material";

/**
 * Icosahedron geometry (20 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry
 */
const Geometry3DIcosahedron = ({ children }) => {
  const { detail, radius } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        radius: levaRadius,
        detail: levaDetail,
      }),
    }),
  });

  return (
    <Icosahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Icosahedron>
  );
};

export default Geometry3DIcosahedron;
