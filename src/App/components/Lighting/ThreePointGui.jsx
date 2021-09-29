import { useRef } from "react";
import { SpotLightHelper } from "three";
import { useControls } from "leva";
import { useHelper } from "@react-three/drei";

const LightingThreePointGui = () => {
  const { ambientLightColor, ambientLightIntensity } = useControls(
    "Lighting - Ambient Light",
    {
      ambientLightColor: { label: "Color", value: "hsl(0, 0%, 100%)" },
      ambientLightIntensity: { label: "Intensity", max: 1, min: 0, value: 0.1 },
    }
  );
  const { backLightColor, backLightIntensity } = useControls(
    "Lighting - Back Light",
    {
      backLightColor: { label: "Color", value: "hsl(0, 0%, 70%)" },
      backLightIntensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
    }
  );
  const { fillLightColor, fillLightIntensity } = useControls(
    "Lighting - Fill Light",
    {
      fillLightColor: { label: "Color", value: "hsl(210, 100%, 70%)" },
      fillLightIntensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
    }
  );
  const { keyLightColor, keyLightIntensity } = useControls(
    "Lighting - Key Light",
    {
      keyLightColor: { label: "Color", value: "hsl(30, 100%, 70%)" },
      keyLightIntensity: { label: "Intensity", max: 2, min: 0, value: 0.75 },
    }
  );

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

export default LightingThreePointGui;
