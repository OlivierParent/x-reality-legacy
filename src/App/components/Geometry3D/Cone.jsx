import { MathUtils } from "three";
import { Cone } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

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
          radius: {
            label: "Radius",
            max: 3,
            min: 0.1,
            step: 0.1,
            value: 1,
          },
          radialSegments: {
            label: "Segments",
            max: 64,
            min: 3,
            step: 1,
            value: 8,
          },
          openEnded: {
            label: "Open Ended",
            value: false,
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
        "Y Axis": folder({
          height: {
            label: "Height",
            max: 3,
            min: 0.1,
            step: 0.1,
            value: 1,
          },
          heightSegments: {
            label: "Segments",
            max: 8,
            min: 1,
            step: 1,
            value: 1,
          },
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
