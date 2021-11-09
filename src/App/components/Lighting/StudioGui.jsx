import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { folder, useControls } from "leva";
import { useHelper } from "@react-three/drei";

const LightingStudio = () => {
  const {
    ambientLightColor,
    ambientLightIntensity,
    frontLightColor,
    frontLightIntensity,
    leftLightColor,
    leftLightIntensity,
    rightLightColor,
    rightLightIntensity,
  } = useControls("Lightings", {
    "Ambient Light": folder({
      ambientLightColor: { label: "Color", value: "hsl(0, 0%, 100%)" },
      ambientLightIntensity: { label: "Intensity", max: 1, min: 0, value: 0.1 },
    }),
    "Front Light": folder({
      frontLightColor: { label: "Color", value: "hsl(0, 0%, 70%)" },
      frontLightIntensity: { label: "Intensity", max: 2, min: 0, value: 0.4 },
    }),
    "Left Light": folder({
      leftLightColor: { label: "Color", value: "hsl(210, 100%, 70%)" },
      leftLightIntensity: { label: "Intensity", max: 2, min: 0, value: 1 },
    }),
    "Right Light": folder({
      rightLightColor: { label: "Color", value: "hsl(30, 100%, 70%)" },
      rightLightIntensity: { label: "Intensity", max: 2, min: 0, value: 1 },
    }),
  });

  const frontLightRef = useRef();
  const leftLightRef = useRef();
  const rightLightRef = useRef();
  const helperSize = 0.5;
  useHelper(frontLightRef, DirectionalLightHelper, helperSize, frontLightColor);
  useHelper(leftLightRef, DirectionalLightHelper, helperSize, leftLightColor);
  useHelper(rightLightRef, DirectionalLightHelper, helperSize, rightLightColor);

  return (
    <>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <directionalLight
        castShadow={true}
        color={frontLightColor}
        intensity={frontLightIntensity}
        position={[0, 2, 4]}
        ref={frontLightRef}
      />
      <directionalLight
        castShadow={true}
        color={leftLightColor}
        intensity={leftLightIntensity}
        position={[-4, 0, 0]}
        ref={leftLightRef}
      />
      <directionalLight
        castShadow={true}
        color={rightLightColor}
        intensity={rightLightIntensity}
        position={[4, 0, 0]}
        ref={rightLightRef}
      />
    </>
  );
};

export default LightingStudio;
