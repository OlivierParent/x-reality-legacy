import { useState } from "react";
import { Text } from "@react-three/drei";

const ButtonDefault = () => {
  const [color, setColor] = useState(0x00ff00);
  const [hover, setHover] = useState(false);

  return (
    <group
      onClick={() => setColor(0xff0000)}
      onDoubleClick={() => setColor(0x0000ff)}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
    >
      <mesh>
        <meshBasicMaterial
          color={color}
          opacity={hover ? 0.75 : 1}
          transparent={true}
        />
        <planeGeometry args={[1, 0.5]} />
      </mesh>
      <Text fontSize={0.2} position={[0, 0, 0.01]}>
        Click Me!
      </Text>
    </group>
  );
};

export default ButtonDefault;
