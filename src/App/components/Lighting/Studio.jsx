import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { folder, useControls } from "leva";
import { useHelper } from "@react-three/drei";

const LightingStudio = () => {
  const { helpers, helperSize } = useControls("Lightings", {
    helpers: { label: "Helpers", value: false },
    helperSize: { label: "Helper Size", max: 2, min: 0, value: 0.5 },
  });
  const ambientLight = useControls("Lightings", {
    "Ambient Light": folder({
      color: { label: "Color", value: "hsl(0, 0%, 100%)" },
      intensity: { label: "Intensity", max: 1, min: 0, value: 0.1 },
    }),
  });
  const frontLight = useControls("Lightings", {
    "Front Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "hsl(0, 0%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 0.4 },
      position: { label: "Position", value: { x: 0, y: 2, z: 4 } },
    }),
  });
  const leftLight = useControls("Lightings", {
    "Left Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "hsl(210, 100%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 1 },
      position: { label: "Position", value: { x: -4, y: 0, z: 0 } },
    }),
  });
  const rightLight = useControls("Lightings", {
    "Right Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "hsl(30, 100%, 70%)" },
      intensity: { label: "Intensity", max: 2, min: 0, value: 1 },
      position: { label: "Position", value: { x: 4, y: 0, z: 0 } },
    }),
  });

  const nullRef = { current: null };
  const frontLightRef = useRef();
  const leftLightRef = useRef();
  const rightLightRef = useRef();

  useHelper(
    helpers ? frontLightRef : nullRef,
    DirectionalLightHelper,
    helperSize,
    frontLight.color
  );
  useHelper(
    helpers ? leftLightRef : nullRef,
    DirectionalLightHelper,
    helperSize,
    leftLight.color
  );
  useHelper(
    helpers ? rightLightRef : nullRef,
    DirectionalLightHelper,
    helperSize,
    rightLight.color
  );

  return (
    <>
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
      />
      <directionalLight
        castShadow={frontLight.castShadow}
        color={frontLight.color}
        intensity={frontLight.intensity}
        position={[
          frontLight.position.x,
          frontLight.position.y,
          frontLight.position.z,
        ]}
        ref={frontLightRef}
      />
      <directionalLight
        castShadow={leftLight.castShadow}
        color={leftLight.color}
        intensity={leftLight.intensity}
        position={[
          leftLight.position.x,
          leftLight.position.y,
          leftLight.position.z,
        ]}
        ref={leftLightRef}
      />
      <directionalLight
        castShadow={rightLight.castShadow}
        color={rightLight.color}
        intensity={rightLight.intensity}
        position={[
          rightLight.position.x,
          rightLight.position.y,
          rightLight.position.z,
        ]}
        ref={rightLightRef}
      />
    </>
  );
};

export default LightingStudio;
