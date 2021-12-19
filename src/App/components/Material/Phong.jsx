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
  levaSpecular,
  levaWireframe,
} from "App/libs/LevaSettings/PhongMaterial";

const MaterialPhong = () => {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
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
