import { useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { MathCircle } from "App/utils";

function isHour(tick) {
  return !(tick % 5);
}

const HH = 12;
const MM = 60;
const SS = 60;

const CLOCK_SIZE = 1;

const HAND_HH_LENGTH = 0.6;
const HAND_MM_LENGTH = 0.7;
const HAND_SS_COLOR = 0xffcc66;
const HAND_SS_LENGTH = 0.8;
const HAND_THICKNESS = 0.02;

const MARK_HH_COLOR = 0xff0000;
const MARK_HH_LENGTH = 0.1;
const MARK_HH_WIDTH = 0.02;
const MARK_MM_COLOR = 0xffffff;
const MARK_MM_LENGTH = 0.08;
const MARK_MM_WIDTH = 0.01;
const MARK_OFFSET = 0.05;

/**
 * Clock using standard react-three-fiber jsx
 */
const Clock = (props) => {
  const clockRef = useRef();
  const handHoursRef = useRef();
  const handMinutesRef = useRef();
  const handSecondsRef = useRef();

  const angleStart = MathUtils.degToRad(90);

  useFrame(() => {
    const d = new Date();
    if (handHoursRef.current) {
      handHoursRef.current.rotation.z = MathUtils.degToRad(
        (d.getHours() + d.getMinutes() / MM) * -(360 / HH)
      );
    }
    if (handMinutesRef.current) {
      handMinutesRef.current.rotation.z = MathUtils.degToRad(
        d.getMinutes() * -(360 / MM)
      );
    }
    if (handSecondsRef.current) {
      handSecondsRef.current.rotation.z = MathUtils.degToRad(
        d.getSeconds() * -(360 / SS)
      );
    }
  });

  return (
    <group ref={clockRef} {...props}>
      {/* <axesHelper /> */}
      <group>
        <Text color="black" position={[0, -0.25, 0.01]}>
          Arteveldehogeschool
        </Text>
        {Array(HH)
          .fill(null)
          .map((value, index) => {
            const c = new MathCircle(CLOCK_SIZE - MARK_HH_LENGTH * 2.5);
            const angle = index * (360 / HH) + 90;
            const { x, y } = c.getCoordinates(angle);
            return (
              <Text
                color={HAND_SS_COLOR}
                key={index}
                position={[x, y, 0.01]}
                scale={[1.2, 1.2, 1]}
              >
                {(12 - index).toString()}
              </Text>
            );
          })}
      </group>
      <group rotation={[0, 0, angleStart]}>
        <mesh receiveShadow={true}>
          <circleGeometry args={[CLOCK_SIZE, MM]} />
          <meshStandardMaterial opacity={0.25} transparent={true} />
        </mesh>
        <group position={[0, 0, HAND_THICKNESS / 2]}>
          <group position={[0, 0, HAND_THICKNESS / 2]} ref={handHoursRef}>
            <mesh castShadow={true} position={[HAND_HH_LENGTH / 2, 0, 0]}>
              <boxGeometry args={[HAND_HH_LENGTH, 0.06, HAND_THICKNESS]} />
              <meshStandardMaterial />
            </mesh>
          </group>
          <group position={[0, 0, HAND_THICKNESS * 2]} ref={handMinutesRef}>
            <mesh castShadow={true} position={[HAND_MM_LENGTH / 2, 0, 0]}>
              <boxGeometry args={[HAND_MM_LENGTH, 0.04, HAND_THICKNESS]} />
              <meshStandardMaterial />
            </mesh>
          </group>
          <group
            position={[0, 0, HAND_THICKNESS * 3 + HAND_THICKNESS / 2]}
            ref={handSecondsRef}
          >
            <mesh castShadow={true} position={[HAND_SS_LENGTH / 2, 0, 0]}>
              <boxGeometry args={[HAND_SS_LENGTH, 0.02, HAND_THICKNESS]} />
              <meshStandardMaterial color={HAND_SS_COLOR} />
            </mesh>
          </group>
        </group>
        {Array(MM)
          .fill(null)
          .map((value, index) => {
            const radians = MathUtils.degToRad((360 / MM) * index);

            return (
              <group
                key={index}
                rotation={[0, 0, radians]}
                position={[0, 0, 0.005]}
              >
                <mesh
                  position={[
                    CLOCK_SIZE -
                      MARK_OFFSET -
                      (isHour(index) ? MARK_HH_LENGTH - 0.01 : MARK_MM_LENGTH) /
                        2,
                    0,
                    0,
                  ]}
                >
                  <boxGeometry
                    args={[
                      isHour(index) ? MARK_HH_LENGTH : MARK_MM_LENGTH,
                      isHour(index) ? MARK_HH_WIDTH : MARK_MM_WIDTH,
                      0.01,
                    ]}
                  />
                  <meshStandardMaterial
                    color={
                      index === 0
                        ? 0x0000ff
                        : isHour(index)
                        ? MARK_HH_COLOR
                        : MARK_MM_COLOR
                    }
                  />
                </mesh>
              </group>
            );
          })}
        <mesh
          castShadow={true}
          position={[0, 0, 0.05]}
          rotation={[-90, 0, 0].map((degrees) => MathUtils.degToRad(degrees))}
        >
          <cylinderGeometry args={[0.1, 0.05, HAND_THICKNESS * 5, 36]} />
          <meshStandardMaterial />
        </mesh>
      </group>
    </group>
  );
};

export default Clock;
