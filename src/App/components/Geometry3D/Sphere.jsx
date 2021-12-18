import { MathUtils } from "three";
import { Sphere } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

const Geometry3DSphere = ({ children }) => {
  const {
    radius,
    sphereHeightSegments,
    sphereWidthSegments,
    θLength,
    θStart,
    φLength,
    φStart,
  } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        "Transverse Plane": folder({
          radius: {
            label: "Radius",
            max: 3,
            min: 0.1,
            step: 0.1,
            value: 1,
          },
          sphereWidthSegments: {
            label: "Width Segments",
            max: 64,
            min: 3,
            step: 1,
            value: 32,
          },
          Φ: folder({
            φStart: {
              label: "Φ Start",
              max: 360,
              min: -360,
              step: 1,
              value: 0,
            },
            φLength: {
              label: "Φ Length",
              max: 360,
              min: 0,
              step: 1,
              value: 360,
            },
          }),
        }),
        "Frontal Plane": folder({
          sphereHeightSegments: {
            label: "Height Segments",
            max: 32,
            min: 2,
            step: 1,
            value: 16,
          },
          Θ: folder({
            θStart: {
              label: "Θ Start",
              max: 360,
              min: -360,
              step: 1,
              value: 0,
            },
            θLength: {
              label: "Θ Length",
              max: 360,
              min: 0,
              step: 1,
              value: 360,
            },
          }),
        }),
      }),
    }),
  });

  return (
    <Sphere
      args={[
        radius,
        sphereWidthSegments,
        sphereHeightSegments,
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
