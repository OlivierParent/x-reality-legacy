import { Box } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

const Geometry3DBox = ({ children }) => {
  const { depth, depthSegment, height, heightSegments, width, widthSegments } =
    useControls("Components", {
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
          "Z Axis": folder({
            depth: {
              label: "Depth",
              max: 5,
              min: 0.1,
              step: 0.1,
              value: 1,
            },
            depthSegments: {
              label: "Segments",
              max: 10,
              min: 1,
              step: 1,
              value: 1,
            },
          }),
        }),
      }),
    });

  return (
    <Box
      args={[width, height, depth, widthSegments, heightSegments, depthSegment]}
    >
      {children ?? <Material />}
    </Box>
  );
};

export default Geometry3DBox;
