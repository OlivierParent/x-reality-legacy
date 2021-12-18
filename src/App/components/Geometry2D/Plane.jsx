import { Plane } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

const Geometry2DPlane = ({ children }) => {
  const { height, heightSegments, width, widthSegments } = useControls(
    "Components",
    {
      Geometry: folder({
        Arguments: folder({
          "X Axis": folder({
            width: {
              label: "Width",
              max: 5,
              min: 0.1,
              step: 0.1,
              value: 1,
            },
            widthSegments: {
              label: "Segments",
              max: 10,
              min: 1,
              step: 1,
              value: 1,
            },
          }),
          "Y Axis": folder({
            height: {
              label: "Height",
              max: 5,
              min: 0.1,
              step: 0.1,
              value: 1,
            },
            heightSegments: {
              label: "Segments",
              max: 10,
              min: 1,
              step: 1,
              value: 1,
            },
          }),
        }),
      }),
    }
  );

  return (
    <Plane args={[width, height, widthSegments, heightSegments]}>
      {children ?? <Material />}
    </Plane>
  );
};

export default Geometry2DPlane;
