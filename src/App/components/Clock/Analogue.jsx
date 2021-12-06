import { useRef } from "react";
import { DoubleSide, MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { MathCircle } from "App/utils";

function isHour(tick) {
  return !(tick % 5);
}

const HH = 12;
const MM = 60;
const SS = 60;

const CLOCK_SIZE = 2;

const CLOCK = Object.freeze({
  HAND: {
    HH: {
      LENGTH: 0.6 * CLOCK_SIZE,
      WIDTH: 0.02 * CLOCK_SIZE,
    },
    MM: { LENGTH: 0.7 * CLOCK_SIZE },
    SS: { COLOR: 0xffcc66, LENGTH: 0.8 * CLOCK_SIZE },
    THICKNESS: 0.02 * CLOCK_SIZE,
  },
  MARK: {
    HH: {
      COLOR: 0xff0000,
      LENGTH: 0.1 * CLOCK_SIZE,
      WIDTH: 0.02 * CLOCK_SIZE,
    },
    MM: {
      COLOR: 0xffffff,
      LENGTH: 0.08 * CLOCK_SIZE,
      WIDTH: 0.01 * CLOCK_SIZE,
    },
    OFFSET: 0.05 * CLOCK_SIZE,
  },
});

/**
 * Clock using standard React Three Fiber JSX
 */
const ClockAnalogue = (props) => {
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
      <group>
        <Text
          color="black"
          fontSize={0.1 * CLOCK_SIZE}
          position={[0, -0.25, 0.01].map((value) => value * CLOCK_SIZE)}
        >
          Arteveldehogeschool
        </Text>
        {Array(HH)
          .fill(null)
          .map((value, index) => {
            const c = new MathCircle(CLOCK.MARK.HH.LENGTH * 7.5);
            const angle = (index * 360) / HH + 90;
            const { x, y } = c.getCoordinates(angle);
            return (
              <Text
                color={CLOCK.HAND.SS.COLOR}
                fontSize={0.1 * CLOCK_SIZE}
                key={index}
                position={[x, y, 0.01]}
                scale={Array(3).fill(1)}
              >
                {(12 - index).toString()}
              </Text>
            );
          })}
      </group>
      <group rotation={[0, 0, angleStart]}>
        <mesh receiveShadow={true}>
          <circleGeometry args={[CLOCK_SIZE, MM]} />
          <meshStandardMaterial
            opacity={0.25}
            side={DoubleSide}
            transparent={true}
          />
        </mesh>
        <group position={[0, 0, CLOCK.HAND.THICKNESS / 2]}>
          <group position={[0, 0, CLOCK.HAND.THICKNESS / 2]} ref={handHoursRef}>
            <mesh castShadow={true} position={[CLOCK.HAND.HH.LENGTH / 2, 0, 0]}>
              <boxGeometry
                args={[
                  CLOCK.HAND.HH.LENGTH,
                  0.06 * CLOCK_SIZE,
                  CLOCK.HAND.THICKNESS,
                ]}
              />
              <meshStandardMaterial />
            </mesh>
          </group>
          <group
            position={[0, 0, CLOCK.HAND.THICKNESS * 2]}
            ref={handMinutesRef}
          >
            <mesh castShadow={true} position={[CLOCK.HAND.MM.LENGTH / 2, 0, 0]}>
              <boxGeometry
                args={[CLOCK.HAND.MM.LENGTH, 0.04, CLOCK.HAND.THICKNESS]}
              />
              <meshStandardMaterial />
            </mesh>
          </group>
          <group
            position={[
              0,
              0,
              CLOCK.HAND.THICKNESS * 3 + CLOCK.HAND.THICKNESS / 2,
            ]}
            ref={handSecondsRef}
          >
            <mesh castShadow={true} position={[CLOCK.HAND.SS.LENGTH / 2, 0, 0]}>
              <boxGeometry
                args={[CLOCK.HAND.SS.LENGTH, 0.02, CLOCK.HAND.THICKNESS]}
              />
              <meshStandardMaterial color={CLOCK.HAND.SS.COLOR} />
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
                      CLOCK.MARK.OFFSET -
                      (isHour(index)
                        ? CLOCK.MARK.HH.LENGTH - 0.01
                        : CLOCK.MARK.HH.LENGTH) /
                        2,
                    0,
                    0,
                  ]}
                >
                  <boxGeometry
                    args={[
                      isHour(index)
                        ? CLOCK.MARK.HH.LENGTH
                        : CLOCK.MARK.MM.LENGTH,
                      isHour(index) ? CLOCK.MARK.HH.WIDTH : CLOCK.MARK.MM.WIDTH,
                      0.01,
                    ]}
                  />
                  <meshStandardMaterial
                    color={
                      index === 0
                        ? 0x0000ff
                        : isHour(index)
                        ? CLOCK.MARK.HH.COLOR
                        : CLOCK.MARK.MM.COLOR
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
          <cylinderGeometry args={[0.1, 0.05, CLOCK.HAND.THICKNESS * 7, 36]} />
          <meshStandardMaterial />
        </mesh>
      </group>
    </group>
  );
};

export default ClockAnalogue;
