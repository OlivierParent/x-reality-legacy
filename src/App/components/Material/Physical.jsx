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
} from "App/libs/LevaSettings/Material/Standard";
import {
  levaClearcoat,
  levaClearcoatRoughness,
  levaIor,
  levaReflectivity,
  levaSheen,
  levaSheenColor,
  levaSheenRoughness,
  levaThickness,
  levaTransmission,
} from "App/libs/LevaSettings/Material/Physical";

/**
 * An extension of the MeshStandardMaterial, providing more advanced physically-based rendering properties.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial
 */
const MaterialPhysical = () => {
  const {
    clearcoat,
    clearcoatRoughness,
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    ior,
    metalness,
    opacity,
    reflectivity,
    roughness,
    sheen,
    sheenColor,
    sheenRoughness,
    side,
    thickness,
    transmission,
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
      "Physical Material": folder({
        clearcoat: levaClearcoat,
        clearcoatRoughness: levaClearcoatRoughness,
        ior: levaIor,
        reflectivity: levaReflectivity,
        sheen: levaSheen,
        sheenColor: levaSheenColor,
        sheenRoughness: levaSheenRoughness,
        thickness: levaThickness,
        transmission: levaTransmission,
      }),
    }),
  });

  return (
    <meshPhysicalMaterial
      clearcoat={clearcoat}
      clearcoatRoughness={clearcoatRoughness}
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      ior={ior}
      metalness={metalness}
      opacity={opacity}
      reflectivity={reflectivity}
      roughness={roughness}
      sheen={sheen}
      sheenColor={sheenColor}
      sheenRoughness={sheenRoughness}
      side={side}
      thickness={thickness}
      transmission={transmission}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialPhysical;
