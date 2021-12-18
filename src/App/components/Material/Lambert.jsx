import { folder, useControls } from "leva";

const MaterialLambert = () => {
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
      "Lambert Material": folder({
        color: { label: "Color", value: "#ffffff" },
        wireframe: { label: "Wireframe", value: false },
      }),
    }),
  });

  return (
    <meshLambertMaterial
      color={color}
      opacity={opacity}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialLambert;
