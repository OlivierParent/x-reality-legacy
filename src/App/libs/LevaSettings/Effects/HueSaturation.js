export { levaBlendFunctionNormal as levaBlendFunction } from "./index";

export const levaHue = {
  label: "Hue",
  hint: "The hue in degrees (converted to radians).",
  max: 180,
  min: -180,
  step: 1,
  value: 0,
};

export const levaSaturation = {
  label: "Saturation",
  hint: "The saturation factor, ranging from -1 to 1, where 0 means no change.",
  max: 1.0,
  min: -1.0,
  step: 0.01,
  value: 0.0,
};
