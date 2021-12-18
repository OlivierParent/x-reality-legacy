import { folder, useControls } from "leva";

import Circle from "./Circle";
import Plane from "./Plane";
import Ring from "./Ring";

const GEOMETRY_2D = Object.freeze({
  Circle: "Circle",
  None: "None",
  Plane: "Plane",
  Ring: "Ring",
});

function enableGeometry(name, children) {
  let element;
  switch (name) {
    case GEOMETRY_2D.Circle:
      element = <Circle>{children}</Circle>;
      break;
    case GEOMETRY_2D.Plane:
      element = <Plane>{children}</Plane>;
      break;
    case GEOMETRY_2D.Ring:
      element = <Ring>{children}</Ring>;
      break;
    default:
      element = <></>;
  }
  return element;
}

const Geometry2D = ({ children }) => {
  const { geometry2DName } = useControls("Components", {
    Geometry: folder({
      geometry2DName: {
        label: "Geometry",
        options: GEOMETRY_2D,
        value: GEOMETRY_2D.Plane,
      },
    }),
  });

  return enableGeometry(geometry2DName, children);
};

export default Geometry2D;
