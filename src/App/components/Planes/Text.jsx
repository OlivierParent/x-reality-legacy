import { FrontSide } from "three";
import { Text } from "@react-three/drei";

const PlanesPlane = ({ color, name }) => {
  const offset = 0.02;
  const padding = 0.1;
  const size = 3;

  return (
    <group>
      <Text
        position={[-size / 2 + padding / 2, size / 2 - padding, offset]}
        anchorX="left"
      >
        {name.en}
        <meshBasicMaterial color={color} side={FrontSide} />
      </Text>
      <Text
        position={[size / 2 - padding / 2, -size / 2 + padding, offset]}
        anchorX="right"
      >
        {name.nl}
        <meshBasicMaterial color={color} side={FrontSide} />
      </Text>
    </group>
  );
};

export default PlanesPlane;
