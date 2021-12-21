import { folder, useControls } from "leva";

import {
  levaDithering,
  levaOpacity,
  levaSide,
  levaTransparent,
} from "App/libs/LevaSettings/Material";
import {
  levaColor,
  levaReflectivity,
  levaRefractionRatio,
  levaWireframe,
} from "App/libs/LevaSettings/Material/Basic";

/**
 * A material for drawing geometries in a simple shaded (flat or wireframe) way.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial
 */
const MaterialBasic = () => {
  const {
    color,
    dithering,
    opacity,
    reflectivity,
    refractionRatio,
    side,
    transparent,
    wireframe,
  } = useControls("Components", {
    Materials: folder({
      Material: folder({
        dithering: levaDithering,
        opacity: levaOpacity,
        side: levaSide,
        transparent: levaTransparent,
      }),
      "Basic Material": folder({
        color: levaColor,
        reflectivity: levaReflectivity,
        refractionRatio: levaRefractionRatio,
        wireframe: levaWireframe,
      }),
    }),
  });

  return (
    <meshBasicMaterial
      color={color}
      dithering={dithering}
      opacity={opacity}
      reflectivity={reflectivity}
      refractionRatio={refractionRatio}
      side={side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialBasic;
