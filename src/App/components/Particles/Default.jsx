import { folder, useControls } from "leva";

const ParticlesDefault = () => {
  const { color, complexity, opacity, radius, size, transparent } = useControls(
    "Components",
    {
      "Icosahedron (20 faces)": folder({
        radius: { label: "Radius", max: 3, min: 0.5, step: 0.1, value: 2 },
        complexity: {
          label: "Complexity",
          hint: "0 → 12 vertices",
          max: 50,
          min: 0,
          step: 1,
          value: 0,
        },
      }),
      "Points Material": folder({
        color: { label: "Color", value: "hsl(0, 100%, 100%)" },
        opacity: {
          label: "Opacity",
          hint: "`transparent` must be `true`",
          max: 1,
          min: 0,
          value: 1,
        },
        size: { label: "Size", max: 2, min: 0.05, step: 0.01, value: 1 },
        transparent: { label: "Transparent", value: false },
      }),
    }
  );

  return (
    <points>
      <icosahedronGeometry args={[radius, complexity]} />
      <pointsMaterial
        color={color}
        opacity={opacity}
        size={size}
        transparent={transparent}
      />
    </points>
  );
};

export default ParticlesDefault;
