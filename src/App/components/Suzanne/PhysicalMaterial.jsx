import { MathUtils } from "three";
import { Plane, useGLTF } from "@react-three/drei";
import { folder, useControls } from "leva";

import suzanneGlb from "./suzanne.glb";

const SuzannePhysicalMaterial = () => {
  const { nodes } = useGLTF(suzanneGlb, true);

  const {
    clearcoat,
    clearcoatRoughness,
    color,
    dithering,
    emissive,
    emissiveIntensity,
    ior,
    metalness,
    opacity,
    refractionRatio,
    roughness,
    sheen,
    sheenRoughness,
    sheenTint,
    specularIntensity,
    specularTint,
    thickness,
    transmission,
    transparent,
    wireframe,
  } = useControls("Components", {
    Materials: folder({
      Material: folder({
        dithering: { label: "Dithering", value: false },
        opacity: { label: "Transparent", max: 1, min: 0, value: 1 },
        transparent: { label: "Transparent", value: true },
      }),
      "Standard Material": folder({
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
      }),
      "Physical Material": folder({
        clearcoat: { label: "Clearcoat", max: 1, min: 0, value: 0 },
        clearcoatRoughness: {
          label: "Clearcoat Roughness",
          max: 1,
          min: 0,
          value: 0,
        },
        ior: {
          label: "Index of Refraction",
          max: 2.333,
          min: 1,
          value: 1.5,
        },
        reflectivity: { label: "Reflectivity", max: 1, min: 0, value: 0.5 },
        sheen: { label: "Sheen", max: 1, min: 0, value: 0 },
        sheenRoughness: { label: "Sheen Roughness", max: 1, min: 0, value: 1 },
        sheenTint: { label: "Sheen Tint", value: "#ffffff" },
        specularIntensity: {
          label: "Specular Intensity",
          max: 1,
          min: 0,
          value: 1,
        },
        specularTint: { label: "Specular Tint", value: "#ffffff" },
        thickness: { label: "Thickness", max: 10, min: 0, value: 0.01 },
        transmission: { label: "Transmission", max: 1, min: 0, value: 0 },
      }),
    }),
  });

  return (
    <>
      <mesh geometry={nodes.Suzanne.geometry}>
        <meshPhysicalMaterial
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
          color={color}
          dithering={dithering}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
          ior={ior}
          metalness={metalness}
          opacity={opacity}
          refractionRatio={refractionRatio}
          roughness={roughness}
          sheen={sheen}
          sheenRoughness={sheenRoughness}
          sheenTint={sheenTint}
          specularIntensity={specularIntensity}
          specularTint={specularTint}
          thickness={thickness}
          transmission={transmission}
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

export default SuzannePhysicalMaterial;
