import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import gltfLogoGlb from "./assets/gltf-logo.glb";

const LogoDouble = () => {
  const [clockwise, setClockwise] = useState(false);

  const gltfLogo = useGLTF(gltfLogoGlb, true);
  const logo1Ref = useRef();
  const logo2Ref = useRef();
  const speed = 0.025;

  useFrame(() => {
    if (logo1Ref.current)
      logo1Ref.current.rotation.x += speed * (clockwise ? 1 : -1);
    if (logo2Ref.current)
      logo2Ref.current.rotation.y += speed * (clockwise ? 1 : -1);
  });

  return (
    <group onClick={() => setClockwise(!clockwise)}>
      <primitive
        object={gltfLogo.scene}
        position={[-1, -1, 0]}
        ref={logo1Ref}
      />
      <primitive
        object={gltfLogo.scene.clone(true)}
        position={[1, 1, 0]}
        ref={logo2Ref}
      />
    </group>
  );
};

export default LogoDouble;
