import { folder, useControls } from "leva";

import Bloom from "./Bloom";
import BrightnessContrast from "./BrightnessContrast";
import ColorAverage from "./ColorAverage";
import ColorDepth from "./ColorDepth";
import Glitch from "./Glitch";
import Grid from "./Grid";
import HueSaturation from "./HueSaturation";
import Scanline from "./Scanline";

const EFFECT = Object.freeze({
  None: "None",
  Bloom: "Bloom",
  BrightnessContrast: "BrightnessContrast",
  ColorAverage: "ColorAverage",
  ColorDepth: "ColorDepth",
  Glitch: "Glitch",
  Grid: "Grid",
  HueSaturation: "HueSaturation",
  Scanline: "Scanline",
});

const Effects = () => {
  const { useEffect } = useControls("General", {
    Effects: folder({
      useEffect: {
        label: "Effect",
        options: EFFECT,
        value: EFFECT.None,
      },
    }),
  });

  function enableEffect(name, element) {
    return useEffect === name ? element : null;
  }

  return (
    <>
      {enableEffect(EFFECT.Bloom, <Bloom />)}
      {enableEffect(EFFECT.BrightnessContrast, <BrightnessContrast />)}
      {enableEffect(EFFECT.ColorAverage, <ColorAverage />)}
      {enableEffect(EFFECT.ColorDepth, <ColorDepth />)}
      {enableEffect(EFFECT.Glitch, <Glitch />)}
      {enableEffect(EFFECT.Grid, <Grid />)}
      {enableEffect(EFFECT.HueSaturation, <HueSaturation />)}
      {enableEffect(EFFECT.Scanline, <Scanline />)}
    </>
  );
};

export default Effects;
