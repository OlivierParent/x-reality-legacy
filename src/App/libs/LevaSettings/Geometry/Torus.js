export const levaArc = {
  label: "Arc",
  max: 360.0,
  min: 0.0,
  step: 0.1,
  value: 360.0,
};

export { levaRadialSegments } from "./Cone";

export { levaRadius } from "./Circle";

export const levaTube = {
  label: "Tube",
  hint: "Radius of the tube. Default = 0.4.",
  max: 3.0,
  min: 0.0,
  step: 0.1,
  value: 0.4,
};

export const levaTubularSegments = {
  label: "Tubular Segments",
  hint: "Default = 6.",
  max: 64,
  min: 3,
  step: 1,
  value: 6,
};
