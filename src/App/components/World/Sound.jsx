import { useEffect, useRef } from "react";
import { AudioListener, AudioLoader, DoubleSide, MathUtils } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Plane, PointerLockControls, Text } from "@react-three/drei";
import { useControls } from "leva";

import { KeyboardControls } from "App/utils";

import evolutionAudioFile from "./audio/bensound-evolution.mp3";

const MOVE_SPEED = {
  FORWARD: 0.1,
  RIGHT: 0.05,
  UP: 0.5,
};

const WorldSound = () => {
  const { enablePointerLockControls } = useControls("Controls", {
    enablePointerLockControls: { label: "PointerLock", value: true },
  });

  const pointerRef = useRef();
  const audioRef = useRef();
  const audioListener = new AudioListener();
  const audioBuffer = useLoader(AudioLoader, evolutionAudioFile);

  useEffect(() => {
    KeyboardControls.addEventListeners();

    if (pointerRef.current) {
      pointerRef.current.getObject().position.y = 1.75; // m
    }

    return KeyboardControls.removeEventListeners;
  }, [enablePointerLockControls]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.setBuffer(audioBuffer);
      audioRef.current.setLoop(true);
      audioRef.current.setVolume(0.01);
      audioRef.current.play();
    }
  }, [audioBuffer]);

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
      <audio args={[audioListener]} ref={audioRef} />
      <mesh position={[0, 0, 0]}>
        <Text position={[0, 1, 0]}>Music: https://www.bensound.com</Text>
      </mesh>
    </>
  );
};

export default WorldSound;
