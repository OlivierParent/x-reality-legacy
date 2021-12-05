import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";

const LightingThreePointHelpers = () => {
  const {
    ambientLightColor,
    ambientLightIntensity,
    backLightColor,
    backLightIntensity,
    fillLightColor,
    fillLightIntensity,
    keyLightColor,
    keyLightIntensity,
  } = useControls("Lightings", {
    "Ambient Light": folder({
      ambientLightColor: { label: "Color", value: "hsl(0, 0%, 100%)" },
      ambientLightIntensity: {
        label: "Intensity",
        max: 1,
        min: 0,
        value: 0.1,
      },
    }),
    "Back Light": folder({
      backLightColor: { label: "Color", value: "hsl(0, 0%, 70%)" },
      backLightIntensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
    }),
    "Fill Light": folder({
      fillLightColor: { label: "Color", value: "hsl(210, 100%, 70%)" },
      fillLightIntensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
    }),
    "Key Light": folder({
      keyLightColor: { label: "Color", value: "hsl(30, 100%, 70%)" },
      keyLightIntensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
    }),
  });

  const backLightRef = useRef();
  const fillLightRef = useRef();
  const keyLightRef = useRef();
  useHelper(backLightRef, SpotLightHelper, backLightColor);
  useHelper(fillLightRef, SpotLightHelper, fillLightColor);
  useHelper(keyLightRef, SpotLightHelper, keyLightColor);

  return (
    <>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <spotLight
        castShadow={true}
        color={backLightColor}
        intensity={backLightIntensity}
        position={[4, 2, -4]}
        ref={backLightRef}
      />
      <spotLight
        castShadow={true}
        color={fillLightColor}
        intensity={fillLightIntensity}
        position={[-4, 2, 4]}
        ref={fillLightRef}
      />
      <spotLight
        castShadow={true}
        color={keyLightColor}
        intensity={keyLightIntensity}
        position={[4, 2, 4]}
        ref={keyLightRef}
      />
    </>
  );
};

export default LightingThreePointHelpers;
