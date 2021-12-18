import { MathUtils } from "three";
import { Cylinder } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

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
          radiusBottom: {
            label: "Radius Bottoms",
            max: 3,
            min: 0.1,
            step: 0.1,
            value: 1,
          },
          radiusTop: {
            label: "Radius Top",
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
