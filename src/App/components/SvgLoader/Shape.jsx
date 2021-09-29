import { DoubleSide } from "three";

const SvgLoaderShape = ({ color, index, shape }) => {
  // console.log("Shape", color, index);
  return (
    <mesh position={[0, 0, -0.05 * index]}>
      <shapeGeometry args={[shape]} />
      <meshBasicMaterial color={color} side={DoubleSide} />
    </mesh>
  );
};

export default SvgLoaderShape;
