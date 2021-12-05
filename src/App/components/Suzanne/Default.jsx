import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import suzanneGlb from "./suzanne.glb";

const SuzanneDefault = () => {
  const [clockwise, setClockwise] = useState(false);
  const [rotate, setRotate] = useState(false);
  const { nodes, materials } = useGLTF(suzanneGlb, true);
  const objectRef = useRef();
  const speed = 0.025;

  useFrame(() => {
    if (objectRef.current) {
      objectRef.current.rotation.x +=
        speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
      objectRef.current.rotation.y +=
        speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
      objectRef.current.rotation.z +=
        speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
    }
  });

  return (
    <group
      ref={objectRef}
      onClick={() => setClockwise(!clockwise)}
      onDoubleClick={() => setRotate(!rotate)}
    >
      <mesh geometry={nodes.Suzanne.geometry} material={materials["Paars"]} />
    </group>
  );
};

export default SuzanneDefault;
