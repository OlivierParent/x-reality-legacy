import { folder, useControls } from "leva";

import {
  levaDithering,
  levaOpacity,
  levaSide,
  levaTransparent,
} from "App/libs/LevaSettings/Material";
import {
  levaFlatShading,
  levaWireframe,
} from "App/libs/LevaSettings/Material/Normal";

/**
 * A material that maps the normal vectors to RGB colors.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshNormalMaterial
 */
const MaterialNormal = () => {
  const { dithering, flatShading, opacity, side, transparent, wireframe } =
    useControls("Components", {
      Materials: folder({
        Material: folder({
          dithering: levaDithering,
          opacity: levaOpacity,
          side: levaSide,
          transparent: levaTransparent,
        }),
        "Normal Material": folder({
          flatShading: levaFlatShading,
          wireframe: levaWireframe,
        }),
      }),
    });

  return (
    <meshNormalMaterial
      dithering={dithering}
      flatShading={flatShading}
      opacity={opacity}
      side={side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialNormal;
