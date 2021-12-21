import { MathUtils } from "three";
import { Plane, Text } from "@react-three/drei";
import { useControls } from "leva";

import CustomMaterial from "./CustomMaterial";
import Default from "./Default";
import Rotating from "./Rotating";

const SUZANNE = Object.freeze({
  CustomMaterial: "CustomMaterial",
  Default: "Default",
  Rotating: "Rotating",
});

const Suzanne = () => {
  const { useSuzanne } = useControls("Components", {
    useSuzanne: {
      label: "Suzanne",
      options: {
        "Custom Material ": SUZANNE.CustomMaterial,
        "Default         ": SUZANNE.Default,
        "Default Rotating": SUZANNE.Rotating,
      },
      value: SUZANNE.Default,
    },
  });

  function enableSuzanne(name, element) {
    return useSuzanne === name ? element : null;
  }

  return (
    <>
      <Text
        color={"white"}
        fillOpacity={1}
        fontSize={0.25}
        position={[0, -1.85, -1.499]}
      >
        SUZANNE
      </Text>
      <Plane
        args={[4, 4]}
        position={[0, 0, -1.5]}
        rotation={[0, 0, 45].map((degree) => MathUtils.degToRad(degree))}
      >
        <meshBasicMaterial opacity={0.05} transparent={true} />
      </Plane>
      <>
        {enableSuzanne(SUZANNE.CustomMaterial, <CustomMaterial />)}
        {enableSuzanne(SUZANNE.Default, <Default />)}
        {enableSuzanne(SUZANNE.Rotating, <Rotating />)}
      </>
    </>
  );
};

export default Suzanne;
