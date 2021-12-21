import { MathUtils } from "three";
import { Sphere } from "@react-three/drei";
import { folder, useControls } from "leva";

import {
  levaHeightSegments,
  levaRadius,
  levaWidthSegments,
  levaΘLength,
  levaΘStart,
  levaΦLength,
  levaΦStart,
} from "App/libs/LevaSettings/Geometry/Sphere";

import Material from "../Material";

/**
 * Sphere geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry
 */
const Geometry3DSphere = ({ children }) => {
  const {
    heightSegments,
    radius,
    widthSegments,
    θLength,
    θStart,
    φLength,
    φStart,
  } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        "Transverse Plane": folder({
          radius: levaRadius,
          sphereWidthSegments: levaWidthSegments,
          Φ: folder({
            φStart: levaΦStart,
            φLength: levaΦLength,
          }),
        }),
        "Frontal Plane": folder({
          heightSegments: levaHeightSegments,
          Θ: folder({
            θStart: levaΘStart,
            θLength: levaΘLength,
          }),
        }),
      }),
    }),
  });

  return (
    <Sphere
      args={[
        radius,
        widthSegments,
        heightSegments,
        MathUtils.degToRad(φStart),
        MathUtils.degToRad(φLength),
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Sphere>
  );
};

export default Geometry3DSphere;
