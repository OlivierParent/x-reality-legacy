import { BlendFunction } from "postprocessing";

export const levaBlendFunctionNormal = {
  label: "Blend Function",
  hint: "The blend function of this effect. Default = BlendFunction.NORMAL.",
  options: BlendFunction,
  value: BlendFunction.NORMAL,
};

export const levaBlendFunctionMultiply = {
  label: "Blend Function",
  hint: "The blend function of this effect. Default = BlendFunction.MULTIPLY.",
  options: BlendFunction,
  value: BlendFunction.MULTIPLY,
};

export const levaBlendFunctionOverlay = {
  label: "Blend Function",
  hint: "The blend function of this effect. Default = BlendFunction.OVERLAY.",
  options: BlendFunction,
  value: BlendFunction.OVERLAY,
};

export const levaBlendFunctionScreen = {
  label: "Blend Function",
  hint: "The blend function of this effect. Default = BlendFunction.SCREEN.",
  options: BlendFunction,
  value: BlendFunction.SCREEN,
};

export const levaIntensity = {
  label: "Intensity",
  hint: "The intensity of the effect. Default = 1.",
  max: 9.0,
  min: 0.0,
  step: 0.1,
  value: 1.0,
};
