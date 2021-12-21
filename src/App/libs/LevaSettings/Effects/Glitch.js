import { GlitchMode } from "postprocessing";

export const levaActive = {
  label: "Active",
  value: true,
};

export const levaColumns = {
  label: "Columns",
  hint: "The scale of the blocky glitch columns.",
  max: 5.0,
  min: 0.0,
  step: 0.1,
  value: 0.05,
};

export const levaDelay = {
  label: "Delay",
  hint: "The minimum and maximum delay between glitch activations in seconds.",
  max: 5.0,
  min: 0.0,
  step: 0.1,
  value: [1.5, 3.5],
};

export const levaDtSize = {
  label: "dt Size",
  hint: "The size of the generated noise map. Will be ignored if a perturbation map is provided.",
  max: 256,
  min: 0,
  step: 1,
  value: 64,
};

export const levaDuration = {
  label: "Duration",
  hint: "The minimum and maximum duration of a glitch in seconds.",
  max: 5.0,
  min: 0.0,
  step: 0.1,
  value: [0.6, 1.0],
};

export const levaMode = {
  label: "Glitch Mode",
  options: GlitchMode,
  value: GlitchMode.SPORADIC,
};

export const levaPerturbationMap = {
  label: "PerturbationMap",
  hint: "A perturbation map. If none is provided, a noise texture will be created.",
  value: null,
};

export const levaRatio = {
  label: "Ratio",
  hint: "Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.",
  max: 1.0,
  min: 0.0,
  step: 0.05,
  value: 0.85,
};

export const levaStrength = {
  label: "Strength",
  hint: "The strength of weak and strong glitches.",
  max: 5.0,
  min: 0.0,
  step: 0.1,
  value: [0.3, 1.0],
};
