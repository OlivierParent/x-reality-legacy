import { TorusKnot } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

const Geometry3DTorusKnot = ({ children }) => {
  const { radius, tube, radialSegments, tubularSegments, p, q } = useControls(
    "Components",
    {
      Geometry: folder({
        Arguments: folder({
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
          tubularSegments: {
            label: "Tubular Segments",
            max: 256,
            min: 3,
            step: 1,
            value: 64,
          },
          radialSegments: {
            label: "Radial Segments",
            max: 64,
            min: 3,
            step: 1,
            value: 8,
          },
          p: {
            label: "P",
            max: 32,
            min: 1,
            step: 1,
            value: 2,
          },
          q: {
            label: "Q",
            max: 32,
            min: 1,
            step: 1,
            value: 3,
          },
        }),
      }),
    }
  );
  return (
    <TorusKnot args={[radius, tube, tubularSegments, radialSegments, p, q]}>
      {children ?? <Material />}
    </TorusKnot>
  );
};

export default Geometry3DTorusKnot;
