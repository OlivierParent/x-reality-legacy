import { Box } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

import {
  levaDepth,
  levaDepthSegments,
  levaHeight,
  levaHeightSegments,
  levaWidth,
  levaWidthSegments,
} from "App/libs/LevaSettings/Geometry/Box";

/**
 * Box geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry
 */
const Geometry3DBox = ({ children }) => {
  const { depth, depthSegment, height, heightSegments, width, widthSegments } =
    useControls("Components", {
      Geometry: folder({
        Arguments: folder({
          "X Axis": folder({
            width: levaWidth,
            widthSegments: levaWidthSegments,
          }),
          "Y Axis": folder({
            height: levaHeight,
            heightSegments: levaHeightSegments,
          }),
          "Z Axis": folder({
            depth: levaDepth,
            depthSegments: levaDepthSegments,
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
