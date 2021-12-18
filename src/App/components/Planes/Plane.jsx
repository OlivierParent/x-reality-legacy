import { DoubleSide, MathUtils } from "three";
import { Plane } from "@react-three/drei";

import Text from "./Text";

const PlanesPlane = ({ color, name, rotation }) => {
  const opacity = 0.25;
  const size = 3;

  return (
    <group rotation={rotation.map((degrees) => MathUtils.degToRad(degrees))}>
      <Plane args={[size, size]}>
        <meshBasicMaterial
          color={color}
          opacity={opacity}
          side={DoubleSide}
          transparent={true}
        />
      </Plane>
      {[
        [0, 0, 0],
        [0, 0, 90],
        [0, 180, 0],
        [0, 180, 90],
      ].map((rotation) => (
        <group
          rotation={rotation.map((degrees) => MathUtils.degToRad(degrees))}
        >
          <Text color={color} name={name} />
        </group>
      ))}
    </group>
  );
};

export default PlanesPlane;
