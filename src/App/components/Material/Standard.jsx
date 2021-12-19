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
  levaFlatShading,
  levaMetalness,
  levaRoughness,
  levaWireframe,
} from "App/libs/LevaSettings/StandardMaterial";

const MaterialStandard = () => {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    metalness,
    opacity,
    roughness,
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
      "Standard Material": folder({
        color: levaColor,
        emissive: levaEmissive,
        emissiveIntensity: levaEmissiveIntensity,
        flatShading: levaFlatShading,
        metalness: levaMetalness,
        roughness: levaRoughness,
        wireframe: levaWireframe,
      }),
    }),
  });

  return (
    <meshStandardMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      metalness={metalness}
      opacity={opacity}
      roughness={roughness}
      side={side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialStandard;
