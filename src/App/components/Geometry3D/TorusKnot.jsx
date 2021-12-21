import { TorusKnot } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaP,
  levaQ,
  levaRadialSegments,
  levaRadius,
  levaTube,
  levaTubularSegments,
} from "App/libs/LevaSettings/Geometry/TorusKnot";

import Material from "../Material";

const Geometry3DTorusKnot = ({ children }) => {
  const { p, q, radialSegments, radius, tube, tubularSegments } = useControls(
    "Components",
    {
      Geometry: folder({
        Arguments: folder({
          radius: levaRadius,
          tube: levaTube,
          tubularSegments: levaTubularSegments,
          radialSegments: levaRadialSegments,
          p: levaP,
          q: levaQ,
        }),
      }),
    }
  );
  return (
    <TorusKnot args={[radius, tube, tubularSegments, radialSegments, p, q]}>
      {children ?? <Material />}
    </TorusKnot>
  );
};

export default Geometry3DTorusKnot;
