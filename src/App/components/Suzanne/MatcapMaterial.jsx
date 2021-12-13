import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { MatCap } from "App/lib";

import suzanneGlb from "./assets/suzanne.glb";

const SuzanneMatcapMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);
  const [matcap] = useMatcapTexture(MatCap.id.WORN_GOLD, MatCap.size.XL);

  return (
    <mesh geometry={nodes.Suzanne.geometry}>
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};

export default SuzanneMatcapMaterial;
