import { useState } from "react";
import { MathUtils } from "three";
import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

const Spring = (props) => {
  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [colorCurrent, setColorCurrent] = useState(0xff0000);
  const { opacity, rotation, scale } = useSpring({
    opacity: toggle ? 0.5 : 0.2,
    rotation: toggle ? [MathUtils.degToRad(-45), 0, 0] : [0, 0, 0],
    scale: hover ? [1.5, 1.25, 1] : [1, 1, 1],
  });

  return (
    <animated.group
      {...props}
      onClick={() => setToggle(!toggle)}
      onDoubleClick={() => setColorCurrent(colorCurrent >> 8)}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      rotation={rotation}
    >
      <animated.mesh scale={scale}>
        <planeGeometry args={[1, 0.5]} />
        <animated.meshBasicMaterial
          color={0xff0000}
          opacity={opacity}
          transparent={true}
        />
      </animated.mesh>
      <Text color="white" fontSize={0.2} position={[0, 0, 0.01]}>
        Click Me!
      </Text>
    </animated.group>
  );
};

export default Spring;
