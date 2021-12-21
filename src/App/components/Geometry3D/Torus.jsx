import { MathUtils } from "three";
import { Torus } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaArc,
  levaRadialSegments,
  levaRadius,
  levaTube,
  levaTubularSegments,
} from "App/libs/LevaSettings/Geometry/Torus";

import Material from "../Material";

const Geometry3DTorus = ({ children }) => {
  const { arc, radialSegments, radius, tube, tubularSegments } = useControls(
    "Components",
    {
      Geometry: folder({
        Torus: folder({
          radius: levaRadius,
          tube: levaTube,
          radialSegments: levaRadialSegments,
          tubularSegments: levaTubularSegments,
          arc: levaArc,
        }),
      }),
    }
  );

  return (
    <Torus
      args={[
        radius,
        tube,
        radialSegments,
        tubularSegments,
        MathUtils.degToRad(arc),
      ]}
    >
      {children ?? <Material />}
    </Torus>
  );
};

export default Geometry3DTorus;
