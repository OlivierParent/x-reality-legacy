import { MathUtils } from "three";
import { Cone } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaHeight,
  levaHeightSegments,
  levaOpenEnded,
  levaRadialSegments,
  levaRadius,
  levaΘStart,
  levaΘLength,
} from "App/libs/LevaSettings/Geometry/Cone";

import Material from "../Material";

/**
 * Cone geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry
 */
const Geometry3DCone = ({ children }) => {
  const {
    height,
    heightSegments,
    openEnded,
    radialSegments,
    radius,
    θLength,
    θStart,
  } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        "XZ Plane": folder({
          radius: levaRadius,
          radialSegments: levaRadialSegments,
          openEnded: levaOpenEnded,
          Θ: folder({
            θStart: levaΘStart,
            θLength: levaΘLength,
          }),
        }),
        "Y Axis": folder({
          height: levaHeight,
          heightSegments: levaHeightSegments,
        }),
      }),
    }),
  });

  return (
    <Cone
      args={[
        radius,
        height,
        radialSegments,
        heightSegments,
        openEnded,
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Cone>
  );
};

export default Geometry3DCone;
