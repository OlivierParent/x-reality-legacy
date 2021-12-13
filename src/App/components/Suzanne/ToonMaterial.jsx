import { useGLTF } from "@react-three/drei";

import suzanneGlb from "./assets/suzanne.glb";

const SuzanneToonMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  return (
    <mesh geometry={nodes.Suzanne.geometry}>
      <meshToonMaterial />
    </mesh>
  );
};

export default SuzanneToonMaterial;
