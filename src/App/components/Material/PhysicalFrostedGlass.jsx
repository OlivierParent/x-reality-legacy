import { folder, useControls } from "leva";

const MaterialPhysicalFrostedGlass = () => {
  const { roughness, thickness, transmission } = useControls("Components", {
    "Physical Material": folder({
      roughness: {
        label: "Roughness",
        max: 1,
        min: 0,
        step: 0.01,
        value: 0.5,
      },
      thickness: {
        label: "Thickness",
        max: 1,
        min: 0,
        step: 0.01,
        value: 0.7,
      },
      transmission: {
        label: "Transmission",
        max: 1,
        min: 0,
        step: 0.01,
        value: 1,
      },
    }),
  });

  return (
    <meshPhysicalMaterial
      roughness={roughness}
      thickness={thickness}
      transmission={transmission}
    />
  );
};

export default MaterialPhysicalFrostedGlass;
