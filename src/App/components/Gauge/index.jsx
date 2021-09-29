// @todo Rotate gauge based on range, in stead of compensating rotation in calculation.
import { useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Box, Circle, Cone, Cylinder } from "@react-three/drei";

const ANGLE_RANGE = 270;
const NEEDLE_STEP = {
  DOWN: -250,
  UP: 60,
};

const Gauge = (props) => {
  const TICK_MARKS = [
    { color: "green", label: "0", ref: useRef(), value: 0 },
    { color: "white", label: "10", ref: useRef(), value: 1000 },
    { color: "white", label: "20", ref: useRef(), value: 2000 },
    { color: "white", label: "30", ref: useRef(), value: 3000 },
    { color: "white", label: "40", ref: useRef(), value: 4000 },
    { color: "white", label: "50", ref: useRef(), value: 5000 },
    { color: "orange", label: "60", ref: useRef(), value: 6000 },
    { color: "red", label: "70", ref: useRef(), value: 7000 },
    { color: "red", label: "80", ref: useRef(), value: 8000 },
  ];
  const angleStep = ANGLE_RANGE / (TICK_MARKS.length - 1);
  const angleStart = MathUtils.degToRad(-(90 + (360 - ANGLE_RANGE) / 2));
  const valueRange = (TICK_MARKS.length - 1) * 1000;
  const valueStep = ANGLE_RANGE / valueRange;
  const needleRef = useRef();
  let needleAngle = 0;
  let needleValue = 0;
  let needleStep = NEEDLE_STEP.UP;

  useFrame(() => {
    if (needleValue <= 0) {
      needleStep = NEEDLE_STEP.UP;
    } else if (valueRange <= needleValue) {
      needleStep = NEEDLE_STEP.DOWN;
    }
    needleValue += needleStep;
    needleAngle = MathUtils.degToRad(-(valueStep * needleValue));
    needleRef.current.rotation.z = needleAngle;

    TICK_MARKS.forEach((tickMark) => {
      tickMark.ref.current.children[0].material.color.setColorName(
        tickMark.value <= needleValue ? "blue" : tickMark.color
      );
    });
  });

  return (
    <group {...props} rotation={[0, 0, angleStart]}>
      <Circle args={[1.2, 62]} position={[0, 0, 0]} receiveShadow={true}>
        <meshStandardMaterial opacity={0.25} transparent={true} />
      </Circle>
      {TICK_MARKS.map((tickMark, index) => {
        return (
          <group
            key={index}
            ref={tickMark.ref}
            rotation={[0, 0, -angleStep * index].map((degrees) =>
              MathUtils.degToRad(degrees)
            )}
          >
            <Box args={[0.25, 0.05, 0.02]} position={[1, 0, 0.01]}>
              <meshStandardMaterial
                color={tickMark.color}
                metalness={0.1}
                opacity={0.5}
                roughness={0.6}
                transparent={true}
              />
            </Box>
          </group>
        );
      })}

      <group position={[0, 0, 0.05]}>
        <group ref={needleRef}>
          <group
            rotation={[0, 0, -90].map((degrees) => MathUtils.degToRad(degrees))}
          >
            <Cone args={[0.03, 1, 4]} castShadow={true} position={[0, 0.5, 0]}>
              <meshStandardMaterial
                color="orange"
                metalness={0.1}
                roughness={0.6}
              />
            </Cone>
          </group>
        </group>
        <Cylinder
          args={[0.1, 0.05, 0.1, 36]}
          castShadow={true}
          rotation={[-90, 0, 0].map((degrees) => MathUtils.degToRad(degrees))}
        >
          <meshStandardMaterial />
        </Cylinder>
      </group>
    </group>
  );
};

export default Gauge;
