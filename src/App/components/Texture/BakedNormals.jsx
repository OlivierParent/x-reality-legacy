import { MathUtils } from "three";
import { useGLTF } from "@react-three/drei";

import cubeGlb from "./BakedNormals.glb";

const TextureBakedNormals = () => {
  const { nodes, materials } = useGLTF(cubeGlb, true);
  return (
    <mesh
      geometry={nodes.Plane.geometry}
      material={materials["Material"]}
      rotation={[90, 0, 0].map((degree) => MathUtils.degToRad(degree))}
    />
  );
};

export default TextureBakedNormals;
