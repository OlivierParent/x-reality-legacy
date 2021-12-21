export const levaHeightSegments = {
  label: "Height Segments",
  hint: "Number of vertical segments. Minimum = 2, default = 16.",
  max: 32,
  min: 2,
  step: 1,
  value: 16,
};

export { levaRadius } from "./Circle";

export const levaWidthSegments = {
  label: "Width Segments",
  hint: "Number of horizontal segments. Minimum = 3, default = 32.",
  max: 64,
  min: 3,
  step: 1,
  value: 32,
};

export const levaΘLength = {
  label: "Θ Length",
  hint: "Specify vertical sweep angle size. Default = Math.PI.",
  max: 180.0,
  min: -180.0,
  step: 0.1,
  value: 180.0,
};

export { levaΘStart } from "./Circle";

export const levaΦLength = {
  label: "Φ Length",
  hint: "Specify horizontal sweep angle size. Default = 2*Math.PI.",
  max: 360.0,
  min: 0.0,
  step: 0.1,
  value: 360.0,
};

export const levaΦStart = {
  label: "Φ Start",
  hint: "Specify horizontal starting angle. Default = 0.",
  max: 360.0,
  min: -360.0,
  step: 0.1,
  value: 0.0,
};
