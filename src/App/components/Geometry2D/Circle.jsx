import { MathUtils } from "three";
import { Circle } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

const Geometry2DCircle = ({ children }) => {
  const { radius, segments, θLength, θStart } = useControls("Components", {
    Geometry: folder({
      Arguments: folder({
        "XY Plane": folder({
          radius: {
            label: "Radius",
            max: 3,
            min: 0.1,
            step: 0.1,
            value: 1,
          },
          segments: {
            label: "Segments",
            max: 64,
            min: 3,
            step: 1,
            value: 8,
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
