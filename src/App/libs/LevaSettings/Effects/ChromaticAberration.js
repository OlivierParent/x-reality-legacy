export { levaBlendFunctionNormal as levaBlendFunction } from "./index";

export const levaOffset = {
  hint: "The color offset. Default = [0, 0]",
  label: "Offset",
  max: 0.01,
  min: -0.01,
  step: 0.001,
  value: { x: 0.0, y: 0.0 },
};
