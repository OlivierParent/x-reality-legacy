export const levaRadius = {
  label: "Radius",
  hint: "Radius of the circle, default = 1.",
  max: 3.0,
  min: 0.1,
  step: 0.1,
  value: 1.0,
};

export const levaSegments = {
  label: "Segments",
  hint: "Number of segments (triangles), minimum = 3, default = 8.",
  max: 64,
  min: 3,
  step: 1,
  value: 8,
};

export const levaΘLength = {
  label: "Θ Length",
  hint: "The central angle, often called theta, of the circular sector. The default = 2*Math.PI, which makes for a complete circle.",
  max: 360.0,
  min: -360.0,
  step: 0.1,
  value: 360.0,
};

export const levaΘStart = {
  label: "Θ Start",
  hint: "Start angle for first segment, default = 0 (three o'clock position).",
  max: 360.0,
  min: -360.0,
  step: 0.1,
  value: 0.0,
};
