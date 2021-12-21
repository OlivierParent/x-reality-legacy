import { MathUtils } from "three";
import { Ring } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaInnerRadius,
  levaOuterRadius,
  levaΘLength,
  levaΘSegments,
  levaΘStart,
  levaΦSegments,
} from "App/libs/LevaSettings/Geometry/Ring";

import Material from "../Material";

/**
 * Ring geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/RingGeometry
 */
const Geometry2DRing = ({ children }) => {
  const { innerRadius, outerRadius, θLength, θSegments, θStart, φSegments } =
    useControls("Components", {
      Geometry: folder({
        Arguments: folder({
          "XY Plane": folder({
            innerRadius: levaInnerRadius,
            outerRadius: levaOuterRadius,
            Θ: folder({
              θSegments: levaΘSegments,
              θStart: levaΘStart,
              θLength: levaΘLength,
            }),
            Φ: folder({
              φSegments: levaΦSegments,
            }),
          }),
        }),
      }),
    });

  return (
    <Ring
      args={[
        innerRadius,
        outerRadius,
        θSegments,
        φSegments,
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Ring>
  );
};

export default Geometry2DRing;
