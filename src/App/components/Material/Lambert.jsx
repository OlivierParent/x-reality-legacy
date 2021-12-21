import { folder, useControls } from "leva";

import {
  levaDithering,
  levaOpacity,
  levaSide,
  levaTransparent,
} from "App/libs/LevaSettings/Material";
import {
  levaColor,
  levaEmissive,
  levaEmissiveIntensity,
  levaWireframe,
} from "App/libs/LevaSettings/Material/Lambert";

/**
 * A material for non-shiny surfaces, without specular highlights.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial
 */
const MaterialLambert = () => {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    opacity,
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
      "Lambert Material": folder({
        color: levaColor,
        emissive: levaEmissive,
        emissiveIntensity: levaEmissiveIntensity,
        wireframe: levaWireframe,
      }),
    }),
  });

  return (
    <meshLambertMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      opacity={opacity}
      side={side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialLambert;
