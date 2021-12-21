export { levaBlendFunctionScreen as levaBlendFunction } from "./index";

export { levaIntensity } from "./index";

export const levaLuminanceSmoothing = {
  label: "Luminance Smoothing",
  hint: "Controls the smoothness of the luminance threshold. Range is [0, 1]. Default = 0.025.",
  max: 1.0,
  min: 0.0,
  step: 0.005,
  value: 0.025,
};

export const levaLuminanceThreshold = {
  label: "Luminance Threshold",
  hint: "The luminance threshold. Raise this value to mask out darker elements in the scene. Range is [0, 1].",
  max: 1.0,
  min: 0.0,
  step: 0.05,
  value: 0.9,
};
