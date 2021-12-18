import { folder, useControls } from "leva";

const MaterialStandard = () => {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    metalness,
    opacity,
    refractionRatio,
    roughness,
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
    }),
  });

  return (
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
  );
};

export default MaterialStandard;
