import { MathUtils } from "three";
import { Ring } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

const Geometry2DRing = ({ children }) => {
  const { innerRadius, outerRadius, θLength, θSegments, θStart, φSegments } =
    useControls("Components", {
      Geometry: folder({
        Arguments: folder({
          "XY Plane": folder({
            innerRadius: {
              label: "Inner Radius",
              max: 3,
              min: 0.1,
              step: 0.1,
              value: 0.5,
            },
            outerRadius: {
              label: "Outer Radius",
              max: 3,
              min: 0.1,
              step: 0.1,
              value: 1,
            },
            Θ: folder({
              θSegments: {
                label: "Θ Segments",
                max: 64,
                min: 3,
                step: 1,
                value: 8,
              },
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
            Φ: folder({
              φSegments: {
                label: "Φ Segments",
                max: 64,
                min: 1,
                step: 1,
                value: 8,
              },
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
