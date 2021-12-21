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
} from "App/libs/LevaSettings/Material/Toon";

/**
 * A material implementing toon shading.
 *
 * @see https://threejs.org/docs/index.html?q=toon#api/en/materials/MeshToonMaterial
 */
const MaterialToon = () => {
  const {
    color,
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
      "Toon Material": folder({
        color: levaColor,
        emissive: levaEmissive,
        emissiveIntensity: levaEmissiveIntensity,
        wireframe: levaWireframe,
      }),
    }),
  });

  return (
    <meshToonMaterial
      color={color}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      opacity={opacity}
      side={side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialToon;
