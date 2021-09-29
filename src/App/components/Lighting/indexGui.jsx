import { useRef } from "react";
import {
  DirectionalLightHelper,
  MathUtils,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";

const LightingGui = () => {
  const { ambientLightColor, ambientLightIntensity } = useControls(
    "Lighting - Ambient Light",
    {
      ambientLightColor: { label: "Color", value: "#ffffff" },
      ambientLightIntensity: { label: "Intensity", max: 1, min: 0, value: 0.1 },
    }
  );
  const { directionalLightColor, directionalLightIntensity } = useControls(
    "Lighting - Directional Light",
    {
      directionalLightColor: { label: "Color", value: "#ffffff" },
      directionalLightIntensity: {
        label: "Intensity",
        max: 1,
        min: 0,
        value: 1,
      },
    }
  );
  const {
    pointLightColor,
    pointLightIntensity,
    pointLightPosition,
  } = useControls("Lighting - Point Light", {
    pointLightColor: { label: "Color", value: "#ffcc77" },
    pointLightIntensity: { label: "Intensity", max: 20, min: 0, value: 0.5 },
    pointLightPosition: { label: "Position XZ", value: { x: -4, z: -4 } },
  });
  const {
    spotLightColor,
    spotLightIntensity,
    spotLightPosition,
    spotLightTarget,
  } = useControls("Lighting - Spot Light", {
    spotLightColor: { label: "Color", value: "#ffcc77" },
    spotLightIntensity: { label: "Intensity", max: 20, min: 0, value: 1 },
    spotLightPosition: { label: "Position XZ", value: { x: 0, z: 0 } },
    spotLightTarget: { label: "Target XZ", value: { x: 0, z: 0 } },
  });

  const { scene } = useThree();
  const target = new Object3D();
  scene.add(target);

  const directionalLightRef = useRef();
  // const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const spotLightRef = useRef();
  const helperSize = 0.5;
  useHelper(
    directionalLightRef,
    DirectionalLightHelper,
    helperSize,
    directionalLightColor
  );
  useHelper(pointLightRef, PointLightHelper, helperSize, pointLightColor);
  useHelper(spotLightRef, SpotLightHelper, spotLightColor);

  useFrame(() => {
    target.translateX(spotLightTarget.x);
    target.translateZ(spotLightTarget.z);
  });

  return (
    <>
      <ambientLight
        color={ambientLightColor}
        intensity={ambientLightIntensity}
      />
      <directionalLight
        castShadow={true}
        color={directionalLightColor}
        intensity={directionalLightIntensity}
        position={[4, 4, 1]}
        ref={directionalLightRef}
      />
      {/* <hemisphereLight ref={hemisphereLightRef} /> */}
      <pointLight
        castShadow={true}
        color={pointLightColor}
        intensity={pointLightIntensity}
        position={[pointLightPosition.x, 1, pointLightPosition.z]}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color={spotLightColor}
        intensity={spotLightIntensity}
        penumbra={0.5}
        position={[spotLightPosition.x, 4, spotLightPosition.z]}
        ref={spotLightRef}
        target={target}
      />
    </>
  );
};

export default LightingGui;
