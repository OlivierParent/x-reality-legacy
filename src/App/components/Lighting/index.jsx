import { useControls } from "leva";

import Demo from "./Demo";
import DemoHelpers from "./DemoHelpers";
import Studio from "./Studio";
import StudioHelpers from "./StudioHelpers";
import ThreePoint from "./ThreePoint";
import ThreePointHelpers from "./ThreePointHelpers";

const LIGHTING = {
  Demo: "Demo",
  Studio: "Studio",
  ThreePoint: "ThreePoint",
};

const Lighting = () => {
  const { useHelpers, useLighting } = useControls("Lightings", {
    useLighting: {
      label: "Lighting",
      options: {
        "Demo       ": LIGHTING.Demo,
        "Studio     ": LIGHTING.Studio,
        "Three Point": LIGHTING.ThreePoint,
      },
      value: LIGHTING.Studio,
    },
    useHelpers: {
      label: "Helpers",
      value: false,
    },
  });

  function enableLighting(name, helpers = false) {
    return useLighting === name && useHelpers === helpers;
  }

  return (
    <>
      {enableLighting(LIGHTING.Demo) && <Demo />}
      {enableLighting(LIGHTING.Demo, true) && <DemoHelpers />}
      {enableLighting(LIGHTING.Studio) && <Studio />}
      {enableLighting(LIGHTING.Studio, true) && <StudioHelpers />}
      {enableLighting(LIGHTING.ThreePoint) && <ThreePoint />}
      {enableLighting(LIGHTING.ThreePoint, true) && <ThreePointHelpers />}
    </>
  );
};

export default Lighting;
