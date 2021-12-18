import { useGLTF } from "@react-three/drei";

import Material from "../Material";
import suzanneGlb from "./assets/suzanne.glb";

const SuzanneMaterial = ({ children }) => {
  const { nodes } = useGLTF(suzanneGlb, true);

  return (
    <mesh geometry={nodes.Suzanne.geometry}>{children ?? <Material />}</mesh>
  );
};

export default SuzanneMaterial;
