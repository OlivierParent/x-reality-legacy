export { levaBlendFunctionNormal as levaBlendFunction } from "./index";

export const levaBokehScale = {
  label: "Bokeh Scale",
  hint: "The scale of the bokeh blur.",
  max: 16.0,
  min: 0.0,
  step: 0.1,
  value: 1.0,
};

export const levaFocalLength = {
  label: "Focal Length",
  hint: "The focal length. Range = [0.0, 1.0]",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.1,
};

export const levaFocusDistance = {
  label: "Focus Distance",
  hint: "The normalized focus distance. Range = [0.0, 1.0].",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.0,
};
