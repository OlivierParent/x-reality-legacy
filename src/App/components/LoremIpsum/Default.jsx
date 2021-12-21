import { Text, useMatcapTexture } from "@react-three/drei";
import { useControls } from "leva";

import { FontFamily, Matcap } from "App/libs";

const LoremIpsumDefault = () => {
  const { size, string } = useControls("Components", {
    size: {
      label: "Size",
      max: 1.0,
      min: 0.1,
      value: 0.5,
    },
    string: {
      label: "String",
      value: "Lorem ipsum dolor sit amet.",
    },
  });

  const [matcapGreenCrystal] = useMatcapTexture(
    Matcap.id.GREEN_CRYSTAL,
    Matcap.size.XL
  );
  const [matcapSilvery] = useMatcapTexture(Matcap.id.SILVERY, Matcap.size.XL);
  const [matcapWornGold] = useMatcapTexture(
    Matcap.id.WORN_GOLD,
    Matcap.size.XL
  );

  return (
    <>
      <Text fontSize={size} position={[0, 1, -0.2]}>
        {string}
        <meshLambertMaterial />
      </Text>
      <Text
        font={FontFamily.ROBOTO_SLAB.url}
        fontSize={size}
        position={[0, 0, 0]}
      >
        {string}
        <meshMatcapMaterial matcap={matcapWornGold} />
      </Text>
      <Text
        font={FontFamily.ARCHITECTS_DAUGHTER.url}
        fontSize={size}
        opacity={0.5}
        position={[0, -1, 0.1]}
        text={string}
      >
        <meshMatcapMaterial matcap={matcapGreenCrystal} />
      </Text>
      <Text
        color={0x000000}
        font={FontFamily.PRESS_START_2P.url}
        fontSize={size}
        outlineColor={0x00ff00}
        outlineWidth={0.04}
        position={[0, -2, 0.2]}
        text={string}
      >
        <meshMatcapMaterial matcap={matcapSilvery} opacity={0.9} />
      </Text>
    </>
  );
};

export default LoremIpsumDefault;
