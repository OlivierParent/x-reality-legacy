export { levaBlendFunctionScreen as levaBlendFunction } from "./index";

export const levaBrightness = {
  label: "Brightness",
  hint: "Scene brightness shift. Default = 0.",
  max: 1.0,
  min: -1.0,
  step: 0.01,
  value: 0.0,
};

export const levaContrast = {
  label: "Contrast",
  hint: "Scene contrast shift. Default = 0.",
  max: 1.0,
  min: -1.0,
  step: 0.01,
  value: 0.0,
};
