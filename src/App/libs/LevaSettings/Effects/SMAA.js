import { EdgeDetectionMode, SMAAPreset } from "postprocessing";

export const levaEdgeDetectionMode = {
  label: "Edge Detection Mode",
  hint: "The edge detection mode. Default = EdgeDetectionMode.COLOR.",
  options: EdgeDetectionMode,
  value: EdgeDetectionMode.COLOR,
};

export const levaPreset = {
  label: "Preset",
  hint: "An SMAA quality preset. Default = SMAAPreset.HIGH.",
  options: SMAAPreset,
  value: SMAAPreset.HIGH,
};
