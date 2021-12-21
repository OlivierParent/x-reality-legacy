import { MathUtils } from "three";
import { Circle } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

import {
  levaRadius,
  levaSegments,
  levaΘLength,
  levaΘStart,
} from "App/libs/LevaSettings/Geometry/Circle";

/**
 * Circle geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry
 */
const Geometry2DCircle = ({ children }) => {
  const { radius, segments, θLength, θStart } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        "XY Plane": folder({
          radius: levaRadius,
          segments: levaSegments,
          Θ: folder({
            θStart: levaΘStart,
            θLength: levaΘLength,
          }),
        }),
      }),
    }),
  });

  return (
    <Circle
      args={[
        radius,
        segments,
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Circle>
  );
};

export default Geometry2DCircle;
