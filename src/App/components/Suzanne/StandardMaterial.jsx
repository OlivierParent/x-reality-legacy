import { MathUtils } from "three";
import { Plane, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import suzanneGlb from "./suzanne.glb";

const SuzanneStandardMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  const { dithering, opacity, transparent } = useControls("Material", {
    dithering: { label: "Dithering", value: false },
    opacity: { label: "Transparent", max: 1, min: 0, value: 1 },
    transparent: { label: "Transparent", value: true },
  });

  const {
    color,
    emissive,
    emissiveIntensity,
    metalness,
    refractionRatio,
    roughness,
    wireframe,
  } = useControls("Standard Material", {
    color: { label: "Color", value: "#ffffff" },
    emissive: { label: "Emissive", value: "#000000" },
    emissiveIntensity: {
      label: "Emissive Intensity",
      max: 5,
      min: 0,
      value: 1,
    },
    metalness: { label: "Metalness", max: 1, min: 0, value: 0 },
    refractionRatio: {
      label: "Refraction Ratio",
      max: 2,
      min: 0,
      value: 0.98,
    },
    roughness: { label: "Roughness", max: 1, min: 0, value: 1 },
    wireframe: { label: "Wireframe", value: false },
  });

  return (
    <>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshStandardMaterial
          color={color}
          dithering={dithering}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
          metalness={metalness}
          opacity={opacity}
          refractionRatio={refractionRatio}
          roughness={roughness}
          transparent={transparent}
          wireframe={wireframe}
        />
      </mesh>
      <Plane
        args={[2, 2]}
        position={[0, 0, -1]}
        rotation={[0, 0, 45].map((v) => MathUtils.degToRad(v))}
      />
    </>
  );
};

export default SuzanneStandardMaterial;
