import { MathUtils } from "three";
import { Cylinder } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaHeight,
  levaHeightSegments,
  levaOpenEnded,
  levaRadialSegments,
  levaRadiusBottom,
  levaRadiusTop,
  levaΘLength,
  levaΘStart,
} from "App/libs/LevaSettings/Geometry/Cylinder";

import Material from "../Material";

/**
 * Cylinder geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry
 */
const Geometry3DCylinder = ({ children }) => {
  const {
    height,
    heightSegments,
    openEnded,
    radialSegments,
    radiusBottom,
    radiusTop,
    θLength,
    θStart,
  } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        "XZ Plane": folder({
          radiusBottom: levaRadiusBottom,
          radiusTop: levaRadiusTop,
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
    <Cylinder
      args={[
        radiusTop,
        radiusBottom,
        height,
        radialSegments,
        heightSegments,
        openEnded,
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Cylinder>
  );
};

export default Geometry3DCylinder;
