import { MathUtils } from "three";
import { Torus } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

const Geometry3DTorus = ({ children }) => {
  const { arc, radialSegments, radius, tube, tubularSegments } = useControls(
    "Components",
    {
      Geometry: folder({
        Torus: folder({
          radius: {
            label: "Radius",
            max: 3,
            min: 0.1,
            step: 0.1,
            value: 1,
          },
          tube: {
            label: "Tube",
            max: 5,
            min: 0,
            step: 0.1,
            value: 0.4,
          },
          radialSegments: {
            label: "Radial Segments",
            max: 64,
            min: 3,
            step: 1,
            value: 8,
          },
          tubularSegments: {
            label: "Tubular Segments",
            max: 64,
            min: 3,
            step: 1,
            value: 6,
          },
          arc: {
            label: "Arc",
            max: 360,
            min: 0,
            step: 1,
            value: 360,
          },
        }),
      }),
    }
  );

  return (
    <Torus
      args={[
        radius,
        tube,
        radialSegments,
        tubularSegments,
        MathUtils.degToRad(arc),
      ]}
    >
      {children ?? <Material />}
    </Torus>
  );
};

export default Geometry3DTorus;
