import { DoubleSide, Vector2 } from "three";
import { useTexture } from "@react-three/drei";

import uvGrid from "./assets/UV_Grid_Sm.jpg";

const ImageDefault = (props) => {
  const texture = useTexture(uvGrid);
  texture.offset = new Vector2(0, 0);
  texture.repeat = new Vector2(1, 1);

  return (
    <group {...props}>
      <mesh>
        <planeGeometry args={[1, 1, 1]} />
        <meshStandardMaterial center={true} map={texture} side={DoubleSide} />
      </mesh>
    </group>
  );
};

export { ImageDefault };
