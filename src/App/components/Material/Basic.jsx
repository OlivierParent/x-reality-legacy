import { folder, useControls } from "leva";

const MaterialBasic = () => {
  const { color, opacity, transparent, wireframe } = useControls("Components", {
    Materials: folder({
      Material: folder({
        opacity: {
          label: "Opacity",
          hint: "`transparent` must be `true`",
          max: 1,
          min: 0,
          value: 1,
        },
        transparent: { label: "Transparent", value: true },
      }),
      "Basic Material": folder({
        color: { label: "Color", value: "#ffffff" },
        wireframe: { label: "Wireframe", value: false },
      }),
    }),
  });

  return (
    <meshBasicMaterial
      color={color}
      opacity={opacity}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialBasic;
