import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";

const LightingThreePoint = () => {
  const { helpers } = useControls("Lightings", {
    helpers: { label: "Helpers", value: false },
  });
  const ambientLight = useControls("Lightings", {
    "Ambient Light": folder({
      color: { label: "Color", value: "hsl(0, 0%, 100%)" },
      intensity: {
        label: "Intensity",
        max: 1,
        min: 0,
        value: 0.1,
      },
    }),
  });
  const backLight = useControls("Lightings", {
    "Back Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "hsl(0, 0%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
      position: { label: "Position", value: { x: 4, y: 2, z: -4 } },
    }),
  });
  const fillLight = useControls("Lightings", {
    "Fill Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "hsl(210, 100%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
      position: { label: "Position", value: { x: -4, y: 2, z: 4 } },
    }),
  });
  const keyLight = useControls("Lightings", {
    "Key Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "hsl(30, 100%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
      position: { label: "Position", value: { x: 4, y: 2, z: 4 } },
    }),
  });

  const nullRef = { current: null };
  const backLightRef = useRef();
  const fillLightRef = useRef();
  const keyLightRef = useRef();

  useHelper(helpers ? backLightRef : nullRef, SpotLightHelper, backLight.color);
  useHelper(helpers ? fillLightRef : nullRef, SpotLightHelper, fillLight.color);
  useHelper(helpers ? keyLightRef : nullRef, SpotLightHelper, keyLight.color);

  return (
    <>
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
      />
      <spotLight
        castShadow={backLight.castShadow}
        color={backLight.color}
        intensity={backLight.intensity}
        position={[
          backLight.position.x,
          backLight.position.y,
          backLight.position.z,
        ]}
        ref={backLightRef}
      />
      <spotLight
        castShadow={fillLight.castShadow}
        color={fillLight.color}
        intensity={fillLight.intensity}
        position={[
          fillLight.position.x,
          fillLight.position.y,
          fillLight.position.z,
        ]}
        ref={fillLightRef}
      />
      <spotLight
        castShadow={keyLight.castShadow}
        color={keyLight.color}
        intensity={keyLight.intensity}
        position={[
          keyLight.position.x,
          keyLight.position.y,
          keyLight.position.z,
        ]}
        ref={keyLightRef}
      />
    </>
  );
};

export default LightingThreePoint;
