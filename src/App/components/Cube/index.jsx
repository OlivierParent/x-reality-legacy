import { useState } from "react";
import { animated, useSpring } from "@react-spring/three";

const Cube = (props) => {
  const colors = ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const [toggle, setToggle] = useState(true);
  const { opacity, position } = useSpring({
    opacity: toggle ? 1 : 0.5,
    position: toggle ? [0, 0, 0] : getPosition(),
  });

  function getPosition() {
    return [4, 4, 0].map((value) => (Math.random() * 2 - 1) * value);
  }

  return (
    <animated.mesh
      {...props}
      onClick={() => setToggle(!toggle)}
      position={position}
    >
      <boxGeometry args={[1, 1, 1]} />
      <animated.meshMatcapMaterial
        color={color}
        opacity={opacity}
        transparent={true}
      />
    </animated.mesh>
  );
};

export default Cube;
