export const levaP = {
  label: "P",
  hint: "This value determines, how many times the geometry winds around its axis of rotational symmetry. Default = 2.",
  max: 32,
  min: 1,
  step: 1,
  value: 2,
};

export const levaQ = {
  label: "Q",
  hint: "This value determines, how many times the geometry winds around a circle in the interior of the torus. Default = 3.",
  max: 32,
  min: 1,
  step: 1,
  value: 3,
};

export { levaRadialSegments } from "./Cone";

export { levaRadius } from "./Circle";

export { levaTube } from "./Torus";

export { levaTubularSegments } from "./Torus";
