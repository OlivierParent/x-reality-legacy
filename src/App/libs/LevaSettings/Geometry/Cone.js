export { levaHeight } from "./Plane";

export { levaHeightSegments } from "./Plane";

export const levaOpenEnded = {
  label: "Open Ended",
  hint: "A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.",
  value: false,
};

export const levaRadialSegments = {
  label: "Radial Segments",
  hint: "Number of segmented faces around the circumference of the cone. Default is 8.",
  max: 64,
  min: 3,
  step: 1,
  value: 8,
};

export { levaRadius } from "./Circle";

export { levaΘLength } from "./Circle";

export { levaΘStart } from "./Circle";
