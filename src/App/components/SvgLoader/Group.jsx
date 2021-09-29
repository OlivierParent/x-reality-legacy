import { MathUtils } from "three";
import Shape from "./Shape";

const SvgLoaderGroup = ({ paths, position, scale }) => {
  // console.log("Group", paths, scale);
  return (
    <group
      position={position}
      rotation={[180, 0, 0].map((degrees) => MathUtils.degToRad(degrees))}
      scale={scale}
    >
      {paths.map((path, index) => {
        // console.log("Path", index, path, path.color, path.toShapes());
        const shapes = path.toShapes();
        const pathIndex = index;
        return shapes.map((shape, index) => {
          return (
            <Shape
              color={path.color}
              index={index + pathIndex}
              key={index}
              shape={shape}
            />
          );
        });
      })}
    </group>
  );
};

export default SvgLoaderGroup;
