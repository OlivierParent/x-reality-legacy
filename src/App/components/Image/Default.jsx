import { DoubleSide, Vector2 } from "three";
import { useTexture } from "@react-three/drei";

import uvGrid from "./UV_Grid_Sm.jpg";

const ImageDefault = () => {
  const texture = useTexture(uvGrid, true);
  texture.offset = new Vector2(0, 0);
  texture.repeat = new Vector2(1, 1);

  return (
    <mesh>
      <planeGeometry args={[1, 1, 1]} />
      <meshStandardMaterial center map={texture} side={DoubleSide} />
    </mesh>
  );
};

export default ImageDefault;
