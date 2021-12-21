import { Plane } from "@react-three/drei";
import { folder, useControls } from "leva";

import Material from "../Material";

import {
  levaHeight,
  levaHeightSegments,
  levaWidth,
  levaWidthSegments,
} from "App/libs/LevaSettings/Geometry/Plane";

/**
 * Plane geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry
 */
const Geometry2DPlane = ({ children }) => {
  const { height, heightSegments, width, widthSegments } = useControls(
    "Components",
    {
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
