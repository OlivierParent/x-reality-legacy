export { levaHeight } from "./Plane";

export { levaHeightSegments } from "./Plane";

export { levaOpenEnded } from "./Cone";

export { levaRadialSegments } from "./Cone";

export const levaRadiusBottom = {
  label: "Radius Bottom",
  hint: "Radius of the cylinder at the top. Default is 1.",
  max: 3.0,
  min: 0.1,
  step: 0.1,
  value: 1.0,
};

export const levaRadiusTop = {
  label: "Radius Top",
  hint: "Radius of the cylinder at the bottom. Default is 1.",
  max: 3.0,
  min: 0.1,
  step: 0.1,
  value: 1.0,
};

export { levaΘLength } from "./Circle";

export { levaΘStart } from "./Circle";
