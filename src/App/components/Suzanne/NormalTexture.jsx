import { useGLTF, useNormalTexture } from "@react-three/drei";

import suzanneGlb from "./suzanne.glb";

const SuzanneNormalTexture = () => {
  const { nodes } = useGLTF(suzanneGlb, true);
  const [normalMap] = useNormalTexture(
    8, // Index or file name, see: https://github.com/emmelleppi/normal-maps/
    //0 index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
    {
      anisotropy: 8,
      offset: [0, 0],
      repeat: [10, 10],
    }
  );

  return (
    <mesh geometry={nodes.Suzanne.geometry}>
      <meshStandardMaterial normalMap={normalMap} />
    </mesh>
  );
};

export default SuzanneNormalTexture;
