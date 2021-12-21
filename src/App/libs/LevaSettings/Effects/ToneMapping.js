export { levaBlendFunctionNormal as levaBlendFunction } from "./index";

export const levaAdaptationRate = {
  label: "Adaption Rate",
  hint: "The luminance adaptation rate. Default = 1.0.",
  max: 9.9,
  min: 0.0,
  step: 0.1,
  value: 1.0,
};

export const levaAverageLuminance = {
  label: "Average Luminance",
  hint: "The average luminance. Used for the non-adaptive Reinhard operator. Default = 1.0.",
  max: 9.9,
  min: 0.0,
  step: 0.1,
  value: 1.0,
};

export const levaMiddleGrey = {
  label: "Middle Grey",
  hint: "The middle grey factor. Default = 0.6.",
  max: 2.0,
  min: 0.0,
  step: 0.01,
  value: 0.6,
};

export const levaResolution = {
  label: "Resolution",
  hint: "The resolution of the luminance texture. Must be a power of two. Default = 256.",
  options: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
  value: 256,
};
