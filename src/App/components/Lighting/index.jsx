import { useControls } from "leva";

import Demo from "./Demo";
import Studio from "./Studio";
import ThreePoint from "./ThreePoint";

const LIGHTING = Object.freeze({
  Demo: "Demo",
  None: "None",
  Studio: "Studio",
  ThreePoint: "ThreePoint",
});

function enableLighting(name) {
  let element;
  switch (name) {
    case LIGHTING.Demo:
      element = <Demo />;
      break;
    case LIGHTING.Studio:
      element = <Studio />;
      break;
    case LIGHTING.ThreePoint:
      element = <ThreePoint />;
      break;
    default:
      element = null;
  }
  return element;
}

const Lighting = () => {
  const { ligthingName } = useControls("Lightings", {
    ligthingName: {
      label: "Lighting",
      options: {
        "None       ": LIGHTING.None,
        "Demo       ": LIGHTING.Demo,
        "Studio     ": LIGHTING.Studio,
        "Three Point": LIGHTING.ThreePoint,
      },
      value: LIGHTING.Studio,
    },
  });

  return enableLighting(ligthingName);
};

export default Lighting;
