import { folder, useControls } from "leva";

const MaterialToon = () => {
  const { color, opacity, transparent, wireframe } = useControls("Components", {
    Materials: folder({
      Material: folder({
        dithering: { label: "Dithering", value: false },
        opacity: { label: "Transparent", max: 1, min: 0, value: 1 },
        transparent: { label: "Transparent", value: true },
      }),
      "Toon Material": folder({
        color: { label: "Color", value: "#ffffff" },
        wireframe: { label: "Wireframe", value: false },
      }),
    }),
  });

  return (
    <meshToonMaterial
      color={color}
      opacity={opacity}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialToon;
