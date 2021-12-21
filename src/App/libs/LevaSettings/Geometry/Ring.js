export const levaInnerRadius = {
  label: "Inner Radius",
  hint: "Default is 0.5.",
  max: 3.0,
  min: 0.1,
  step: 0.1,
  value: 0.5,
};

export const levaOuterRadius = {
  label: "Outer Radius",
  hint: "Default is 1.",
  max: 3.0,
  min: 0.1,
  step: 0.1,
  value: 1.0,
};

export const levaΘSegments = {
  label: "Θ Segments",
  hint: "Number of segments. A higher number means the ring will be more round. Minimum is 3. Default is 8.",
  max: 64,
  min: 3,
  step: 1,
  value: 8,
};

export { levaΘLength } from "./Circle";

export { levaΘStart } from "./Circle";

export const levaΦSegments = {
  label: "Φ Segments",
  hints: "Minimum is 1. Default is 1.",
  max: 64,
  min: 1,
  step: 1,
  value: 8,
};
