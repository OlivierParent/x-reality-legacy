import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, MathUtils } from "three";

import MathCircle from "App/utils/MathCircle";

import { CLOCK } from "./Analogue.config";

const SAFE_OFFSET = 0.001;

function isFirstHour(mark) {
  return !(mark % CLOCK.HH);
}

function isHour(mark) {
  return !(mark % (CLOCK.MM / CLOCK.HH));
}

const ClockAnalogue = (props) => {
  const handHourRef = useRef();
  const handMinuteRef = useRef();
  const handSecondRef = useRef();

  const angleStart = 90;

  useFrame(() => {
    const d = new Date();
    if (handHourRef.current) {
      const angleHandHour =
        angleStart -
        (360 / CLOCK.HH) * (d.getHours() + d.getMinutes() / CLOCK.MM);
      handHourRef.current.rotation.z = MathUtils.degToRad(angleHandHour);
    }
    if (handMinuteRef.current) {
      const angleHandMinute = angleStart - (360 / CLOCK.MM) * d.getMinutes();
      handMinuteRef.current.rotation.z = MathUtils.degToRad(angleHandMinute);
    }
    if (handSecondRef.current) {
      const angleHandSecond = angleStart - (360 / CLOCK.SS) * d.getSeconds();
      handSecondRef.current.rotation.z = MathUtils.degToRad(angleHandSecond);
    }
  });

  return (
    <group name="Analogue Clock" {...props}>
      <group name="Face">
        <group name="Plate">
          <mesh receiveShadow={true}>
            <circleGeometry args={[CLOCK.SIZE, CLOCK.MM]} />
            <meshStandardMaterial
              color={0x999999}
              opacity={0.75}
              side={DoubleSide}
              transparent={true}
            />
          </mesh>
        </group>
        <group
          name="Marks"
          position={[0, 0, CLOCK.MARK.THICKNESS / 2 + SAFE_OFFSET]}
          rotation={[0, 0, MathUtils.degToRad(angleStart)]}
        >
          {Array(CLOCK.MM)
            .fill(null)
            .map((value, index) => {
              const angle = -(360 / CLOCK.MM) * index;
              const isFirstHH = isFirstHour(index);
              const isHH = isHour(index);

              return (
                <group
                  name="Mark"
                  key={index}
                  rotation={[0, 0, MathUtils.degToRad(angle)]}
                >
                  <mesh
                    castShadow={true}
                    position={[CLOCK.SIZE - CLOCK.MARK.OFFSET * 1.5, 0, 0]}
                  >
                    <boxGeometry
                      args={[
                        isHH ? CLOCK.MARK.HH.LENGTH : CLOCK.MARK.MM.LENGTH,
                        isHH ? CLOCK.MARK.HH.WIDTH : CLOCK.MARK.MM.WIDTH,
                        CLOCK.MARK.THICKNESS,
                      ]}
                    />
                    <meshStandardMaterial
                      color={
                        isHH
                          ? isFirstHH
                            ? CLOCK.MARK.HH.COLOR_FIRST
                            : CLOCK.MARK.HH.COLOR
                          : CLOCK.MARK.MM.COLOR
                      }
                    />
                  </mesh>
                </group>
              );
            })}
        </group>
        <group name="Hours">
          {Array(CLOCK.HH)
            .fill(null)
            .map((value, index) => {
              const c = new MathCircle(CLOCK.MARK.HH.LENGTH * 7.75);
              const angle = 90 - (360 / CLOCK.HH) * index;
              const { x, y } = c.getCoordinates(angle);

              return (
                <Text
                  color={CLOCK.MARK.MM.COLOR}
                  fontSize={CLOCK.SIZE / 10}
                  key={index}
                  position={[x, y, SAFE_OFFSET]}
                >
                  {index + (index % 12 ? 0 : 12)}
                </Text>
              );
            })}
        </group>
        <group name="Brand" position={[0, -CLOCK.SIZE / 3, SAFE_OFFSET]}>
          <Text color={0x333333} fontSize={CLOCK.SIZE / 18}>
            Artevelde University of Applied Sciences
          </Text>
        </group>
      </group>

      <group name="Hands">
        <group
          name="Shaft"
          position={[0, 0, CLOCK.HAND.THICKNESS * 2.5 + SAFE_OFFSET]}
          rotation={[-MathUtils.degToRad(angleStart), 0, 0]}
        >
          <mesh castShadow={true} receiveShadow={true}>
            <cylinderGeometry
              args={[
                CLOCK.HAND.THICKNESS * 3,
                CLOCK.HAND.THICKNESS,
                CLOCK.HAND.THICKNESS * 5,
                CLOCK.HH * 3,
              ]}
            />
            <meshStandardMaterial />
          </mesh>
        </group>
        <group
          name="Hour Hand"
          position={[0, 0, CLOCK.HAND.THICKNESS]}
          ref={handHourRef}
        >
          <mesh
            castShadow={true}
            position={[CLOCK.HAND.HH.LENGTH / 2, 0, 0]}
            receiveShadow={true}
          >
            <boxGeometry
              args={[
                CLOCK.HAND.HH.LENGTH,
                CLOCK.HAND.HH.WIDTH,
                CLOCK.HAND.THICKNESS,
              ]}
            />
            <meshStandardMaterial color={CLOCK.HAND.HH.COLOR} />
          </mesh>
        </group>
        <group
          name="Minute Hand"
          position={[0, 0, CLOCK.HAND.THICKNESS * 2.5]}
          ref={handMinuteRef}
        >
          <mesh
            castShadow={true}
            position={[CLOCK.HAND.MM.LENGTH / 2, 0, 0]}
            receiveShadow={true}
          >
            <boxGeometry
              args={[
                CLOCK.HAND.MM.LENGTH,
                CLOCK.HAND.MM.WIDTH,
                CLOCK.HAND.THICKNESS,
              ]}
            />
            <meshStandardMaterial color={CLOCK.HAND.MM.COLOR} />
          </mesh>
        </group>
        <group
          name="Second Hand"
          position={[0, 0, CLOCK.HAND.THICKNESS * 4]}
          ref={handSecondRef}
        >
          <mesh castShadow={true} position={[CLOCK.HAND.SS.LENGTH / 2, 0, 0]}>
            <boxGeometry
              args={[
                CLOCK.HAND.SS.LENGTH,
                CLOCK.HAND.SS.WIDTH,
                CLOCK.HAND.THICKNESS,
              ]}
            />
            <meshStandardMaterial color={CLOCK.HAND.SS.COLOR} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

export { ClockAnalogue };
