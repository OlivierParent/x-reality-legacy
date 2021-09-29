import { Text, useMatcapTexture } from "@react-three/drei";
import { FontFamily, MatCap } from "App/lib";

const LoremIpsum = () => {
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
      <Text fontSize={1} position={[0, 1, -0.2]}>
        Lorem Ipsum
        <meshLambertMaterial />
      </Text>
      <Text font={FontFamily.Roboto_Slab} fontSize={1} position={[0, 0, 0]}>
        Lorem Ipsum
        <meshMatcapMaterial matcap={matcapWornGold} />
      </Text>
      <Text
        font={FontFamily.Architects_Daughter}
        fontSize={1}
        opacity={0.5}
        position={[0, -1, 0.1]}
        text="Lorem Ipsum"
      >
        <meshMatcapMaterial matcap={matcapGreenCrystal} />
      </Text>
      <Text
        color={0x000000}
        font={FontFamily.Press_Start_2P}
        fontSize={1}
        outlineColor={0x00ff00}
        outlineWidth={0.04}
        position={[0, -2, 0.2]}
        text="Lorem Ipsum"
      >
        <meshMatcapMaterial matcap={matcapSilvery} opacity={0.9} />
      </Text>
    </>
  );
};

export default LoremIpsum;
