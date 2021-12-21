import { useMatcapTexture } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Matcap } from "App/libs";
import {
  levaDithering,
  levaOpacity,
  levaSide,
  levaTransparent,
} from "App/libs/LevaSettings/Material";
import {
  levaColor,
  levaFlatShading,
} from "App/libs/LevaSettings/Material/Matcap";

/**
 * MeshMatcapMaterial is defined by a MatCap (or Lit Sphere) texture, which encodes the material color and shading.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial
 */
const MaterialMatcap = () => {
  const { color, dithering, flatShading, opacity, side, transparent } =
    useControls("Components", {
      Materials: folder({
        Material: folder({
          dithering: levaDithering,
          opacity: levaOpacity,
          side: levaSide,
          transparent: levaTransparent,
        }),
        "Normal Material": folder({
          color: levaColor,
          flatShading: levaFlatShading,
        }),
      }),
    });
  const [matcap] = useMatcapTexture(Matcap.id.WORN_GOLD, Matcap.size.XL);

  return (
    <meshMatcapMaterial
      color={color}
      dithering={dithering}
      flatShading={flatShading}
      matcap={matcap}
      opacity={opacity}
      side={side}
      transparent={transparent}
    />
  );
};

export default MaterialMatcap;
