import { useGLTF } from "@react-three/drei";

import suzanneGlb from "./suzanne.glb";

const SuzanneStandardMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  return (
    <mesh geometry={nodes.Suzanne.geometry}>
      <meshStandardMaterial />
    </mesh>
  );
};

export default SuzanneStandardMaterial;
