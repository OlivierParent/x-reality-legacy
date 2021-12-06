import { useEffect, useRef } from "react";
import { DoubleSide, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import {
  Plane,
  PointerLockControls,
  PositionalAudio,
  Text,
} from "@react-three/drei";
import { useControls } from "leva";

import { KeyboardControls } from "App/utils";

// import badassAudioFile from "./audio/bensound-badass.mp3";
import badassAudioFile from "./audio/bensound-evolution.mp3";

const MOVE_SPEED = {
  FORWARD: 0.1,
  RIGHT: 0.05,
  UP: 0.5,
};

const WorldPositionalSound = () => {
  const { enablePointerLockControls } = useControls("Controls", {
    enablePointerLockControls: { label: "PointerLock", value: true },
  });

  const pointerRef = useRef();

  useEffect(() => {
    KeyboardControls.addEventListeners();

    if (pointerRef.current) {
      pointerRef.current.getObject().position.y = 1.75; // m
    }

    return KeyboardControls.removeEventListeners;
  }, [enablePointerLockControls]);

  useFrame(() => {
    if (pointerRef.current) {
      pointerRef.current.moveForward(
        MOVE_SPEED.FORWARD * KeyboardControls.forwardDirection
      );
      pointerRef.current.moveRight(
        MOVE_SPEED.RIGHT * KeyboardControls.rightDirection
      );
      pointerRef.current.getObject().position.y +=
        MOVE_SPEED.UP * KeyboardControls.upDirection; // m
    }
  });

  return (
    <>
      {enablePointerLockControls && <PointerLockControls ref={pointerRef} />}
      <Plane args={[10, 10]} rotation={[MathUtils.degToRad(-90), 0, 0]}>
        <meshBasicMaterial color={0x666666} side={DoubleSide} />
      </Plane>
      <mesh position={[0, 0, 0]}>
        <Text position={[0, 1, 0]}>Music: https://www.bensound.com</Text>
        <PositionalAudio
          distance={1}
          loop
          // distance={0.1}
          // loop={true}
          // ref={positionalAudioRef}
          url={badassAudioFile}
        />
      </mesh>
    </>
  );
};

export default WorldPositionalSound;
