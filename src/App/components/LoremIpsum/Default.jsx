import { Text, useMatcapTexture } from "@react-three/drei";
import { useControls } from "leva";

import { FontFamily, MatCap } from "App/lib";

const LoremIpsumDefault = () => {
  const { size, string } = useControls("Components", {
    size: {
      label: "Size",
      value: 0.5,
      min: 0.1,
      max: 1,
    },
    string: {
      label: "String",
      value: "Lorem ipsum dolor sit amet.",
    },
  });

  const [matcapGreenCrystal] = useMatcapTexture(
    MatCap.id.GREEN_CRYSTAL,
    MatCap.size.XL
  );
  const [matcapSilvery] = useMatcapTexture(MatCap.id.SILVERY, MatCap.size.XL);
  const [matcapWornGold] = useMatcapTexture(
    MatCap.id.WORN_GOLD,
    MatCap.size.XL
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
