import { useRef } from "react";
import {
  DirectionalLightHelper,
  HemisphereLightHelper,
  MathUtils,
  Object3D,
  PointLightHelper,
  SpotLightHelper,
} from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";

const LightingDemoHelpers = () => {
  const ambientLight = useControls("Lightings", {
    "Ambient Light": folder({
      color: { label: "Color", value: "#ffffff" },
      intensity: {
        label: "Intensity",
        max: 1,
        min: 0,
        value: 0.1,
      },
    }),
  });
  const directionalLight = useControls("Lightings", {
    "Directional Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "#ffffff" },
      intensity: {
        label: "Intensity",
        max: 1,
        min: 0,
        value: 1,
      },
      position: {
        label: "Position",
        value: { x: 4, y: 4, z: 1 },
      },
    }),
  });
  const hemisphereLight = useControls("Lightings", {
    "Hemisphere Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Sky Color", value: "#ffffff" },
      groundColor: { label: "Ground Color", value: "#ffffff" },
      intensity: {
        label: "Intensity",
        max: 1,
        min: 0,
        value: 1,
      },
      position: {
        label: "Position",
        value: { x: 0, y: 1, z: 0 },
      },
    }),
  });
  const pointLight = useControls("Lightings", {
    "Point Light": folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "#ffcc77" },
      intensity: { label: "Intensity", max: 20, min: 0, value: 0.5 },
      position: { label: "Position", value: { x: -4, y: 1, z: -4 } },
    }),
  });
  const spotLight = useControls("Lightings", {
    Spotlight: folder({
      castShadow: { label: "Cast Shadow", value: true },
      color: { label: "Color", value: "#ffcc77" },
      intensity: { label: "Intensity", max: 20, min: 0, value: 1 },
      penumbra: { label: "Penumbra", value: 0.5 },
      position: { label: "Position", value: { x: 0, y: 4, z: 0 } },
      target: { label: "Target", value: { x: 0, y: 0, z: 0 } },
    }),
  });

  const { scene } = useThree();
  const target = new Object3D();
  scene.add(target);

  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const spotLightRef = useRef();
  const helperSize = 0.5;
  useHelper(
    directionalLightRef,
    DirectionalLightHelper,
    helperSize,
    directionalLight.color
  );
  useHelper(pointLightRef, PointLightHelper, helperSize, pointLight.color);
  useHelper(spotLightRef, SpotLightHelper, spotLight.color);
  useHelper(hemisphereLightRef, HemisphereLightHelper, helperSize);

  useFrame(() => {
    target.translateX(spotLight.target.x);
    target.translateZ(spotLight.target.z);
  });

  return (
    <>
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
      />
      <directionalLight
        castShadow={directionalLight.castShadow}
        color={directionalLight.color}
        intensity={directionalLight.intensity}
        position={[
          directionalLight.position.x,
          directionalLight.position.y,
          directionalLight.position.z,
        ]}
        ref={directionalLightRef}
      />
      <hemisphereLight
        castShadow={hemisphereLight.castShadow}
        color={hemisphereLight.color}
        groundColor={hemisphereLight.groundColor}
        intensity={hemisphereLight.intensity}
        position={[
          hemisphereLight.position.x,
          hemisphereLight.position.y,
          hemisphereLight.position.z,
        ]}
        ref={hemisphereLightRef}
      />
      <pointLight
        castShadow={pointLight.castShadow}
        color={pointLight.color}
        intensity={pointLight.intensity}
        position={[
          pointLight.position.x,
          pointLight.position.y,
          pointLight.position.z,
        ]}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={spotLight.castShadow}
        color={spotLight.color}
        intensity={spotLight.intensity}
        penumbra={spotLight.penumbra}
        position={[
          spotLight.position.x,
          spotLight.position.y,
          spotLight.position.z,
        ]}
        ref={spotLightRef}
        target={target}
      />
    </>
  );
};

export default LightingDemoHelpers;
