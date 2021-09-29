import { MathUtils } from "three";
import { Plane } from "@react-three/drei";

const Face = (props) => {
  return (
    <Plane
      args={[10, 10]}
      rotation={[MathUtils.degToRad(-90), 0, 0]}
      {...props}
    >
      <meshStandardMaterial />
    </Plane>
  );
};

export default Face;
