import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";

import Suzanne from "./Default";

const SuzanneRotating = () => {
  const [clockwise, setClockwise] = useState(false);
  const suzanneRef = useRef();

  const { speed, rotate } = useControls("Components", {
    Rotation: folder({
      rotate: { label: "Rotate", value: true },
      speed: { label: "Speed", max: 0.5, min: 0, step: 0.005, value: 0.025 },
    }),
  });

  useFrame(() => {
    if (suzanneRef.current) {
      suzanneRef.current.rotation.x +=
        speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
      suzanneRef.current.rotation.y +=
        speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
      suzanneRef.current.rotation.z +=
        speed * (rotate ? 1 : 0) * (clockwise ? 1 : -1);
    }
  });

  return (
    <group ref={suzanneRef} onClick={() => setClockwise(!clockwise)}>
      <Suzanne />
    </group>
  );
};

export default SuzanneRotating;
