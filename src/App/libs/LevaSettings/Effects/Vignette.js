export { levaBlendFunctionNormal as levaBlendFunction } from "./index";

export const levaEskil = {
  label: "Eskil",
  hint: "Enables Eskil's vignette technique. Default = false.",
  value: false,
};

export const levaDarkness = {
  label: "Darkness",
  hint: "The vignette darkness. Default = 0.5.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.5,
};

export const levaOffset = {
  label: "Offset",
  hint: "The vignette offset. Default = 0.5.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.5,
};
