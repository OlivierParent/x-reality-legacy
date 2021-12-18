import { folder, useControls } from "leva";

const MaterialNormal = () => {
  const { opacity, transparent, wireframe } = useControls("Components", {
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
      "Normal Material": folder({
        wireframe: { label: "Wireframe", value: false },
      }),
    }),
  });

  return (
    <meshNormalMaterial
      opacity={opacity}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export default MaterialNormal;
