import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { ZeroFill } from "App/utils";

const ClockDigital = (props) => {
  const clockRef = useRef();

  useEffect(() => {
    if (clockRef.current) {
      clockRef.current.rotation.x = MathUtils.degToRad(-30);
    }
  }, []);

  useFrame(() => {
    let d = new Date();

    const HH = new ZeroFill(d.getHours(), 2);
    const MM = new ZeroFill(d.getMinutes(), 2);
    const SS = new ZeroFill(d.getSeconds(), 2);
    if (clockRef.current) {
      clockRef.current.text = `${HH}:${MM}:${SS}`;
    }
  });

  return <Text fontSize={2} ref={clockRef} {...props} />;
};

export default ClockDigital;
