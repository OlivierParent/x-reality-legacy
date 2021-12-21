import { folder, useControls } from "leva";

import Bloom from "./Bloom";
import BrightnessContrast from "./BrightnessContrast";
import ChromaticAberration from "./ChromaticAberration";
import ColorAverage from "./ColorAverage";
import ColorDepth from "./ColorDepth";
import DepthOfField from "./DepthOfField";
import DotScreen from "./DotScreen";
import Glitch from "./Glitch";
import Grid from "./Grid";
import HueSaturation from "./HueSaturation";
import Noise from "./Noise";
import Pixelation from "./Pixelation";
import SMAA from "./SMAA";
import Scanline from "./Scanline";
import Sepia from "./Sepia";
import ToneMapping from "./ToneMapping";
import Vignette from "./Vignette";

const EFFECT = Object.freeze({
  None: "None",
  Bloom: "Bloom",
  BrightnessContrast: "BrightnessContrast",
  ChromaticAberration: "ChromaticAberration",
  ColorAverage: "ColorAverage",
  ColorDepth: "ColorDepth",
  DepthOfField: "DepthOfField",
  DotScreen: "DotScreen",
  Glitch: "Glitch",
  Grid: "Grid",
  HueSaturation: "HueSaturation",
  Noise: "Noise",
  Pixelation: "Pixelation",
  SMAA: "SMAA",
  Scanline: "Scanline",
  Sepia: "Sepia",
  ToneMapping: "ToneMapping",
  Vignette: "Vignette",
});

const Effects = () => {
  const { useEffect } = useControls("General", {
    "Effects Composer": folder({
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
      {enableEffect(EFFECT.ChromaticAberration, <ChromaticAberration />)}
      {enableEffect(EFFECT.ColorAverage, <ColorAverage />)}
      {enableEffect(EFFECT.ColorDepth, <ColorDepth />)}
      {enableEffect(EFFECT.DepthOfField, <DepthOfField />)}
      {enableEffect(EFFECT.DotScreen, <DotScreen />)}
      {enableEffect(EFFECT.Glitch, <Glitch />)}
      {enableEffect(EFFECT.Grid, <Grid />)}
      {enableEffect(EFFECT.HueSaturation, <HueSaturation />)}
      {enableEffect(EFFECT.Noise, <Noise />)}
      {enableEffect(EFFECT.Pixelation, <Pixelation />)}
      {enableEffect(EFFECT.SMAA, <SMAA />)}
      {enableEffect(EFFECT.Scanline, <Scanline />)}
      {enableEffect(EFFECT.Sepia, <Sepia />)}
      {enableEffect(EFFECT.ToneMapping, <ToneMapping />)}
      {enableEffect(EFFECT.Vignette, <Vignette />)}
    </>
  );
};

export default Effects;
