import { useGLTF } from "@react-three/drei";
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
    sheenColor,
    sheenRoughness,
    specularColor,
    specularIntensity,
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
        sheenColor: { label: "Sheen Color", value: "#ffffff" },
        sheenRoughness: { label: "Sheen Roughness", max: 1, min: 0, value: 1 },
        specularColor: { label: "Specular Color", value: "#ffffff" },
        specularIntensity: {
          label: "Specular Intensity",
          max: 1,
          min: 0,
          value: 1,
        },
        thickness: { label: "Thickness", max: 10, min: 0, value: 0.01 },
        transmission: { label: "Transmission", max: 1, min: 0, value: 0 },
      }),
    }),
  });

  return (
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
        sheenColor={sheenColor}
        sheenRoughness={sheenRoughness}
        specularColor={specularColor}
        specularIntensity={specularIntensity}
        thickness={thickness}
        transmission={transmission}
        transparent={transparent}
        wireframe={wireframe}
      />
    </mesh>
  );
};

export default SuzannePhysicalMaterial;
