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
  levaShininess,
  levaFlatShading,
  levaSpecular,
  levaWireframe,
} from "App/libs/LevaSettings/Material/Phong";

/**
 * A material for shiny surfaces with specular highlights.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial
 */
const MaterialPhong = () => {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    opacity,
    shininess,
    side,
    specular,
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
      "Phong Material": folder({
        color: levaColor,
        emissive: levaEmissive,
        emissiveIntensity: levaEmissiveIntensity,
        flatShading: levaFlatShading,
        shininess: levaShininess,
        specular: levaSpecular,
        wireframe: levaWireframe,
      }),
    }),
  });

  return (
    <meshPhongMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      opacity={opacity}
      shininess={shininess}
      side={side}
      specular={specular}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialPhong;
