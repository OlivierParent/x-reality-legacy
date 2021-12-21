export { levaAlphaMap } from "./Basic";

export { levaAoMap } from "./Basic";

export { levaAoMapIntensity } from "./Basic";

export { levaBumpMap } from "./Phong";

export { levaBumpScale } from "./Phong";

export { levaColor } from "./Basic";

export { levaDisplacementBias } from "./Phong";

export { levaDisplacementMap } from "./Phong";

export { levaDisplacementScale } from "./Phong";

export { levaEmissive } from "./Lambert";

export { levaEmissiveIntensity } from "./Lambert";

export { levaEmissiveMap } from "./Lambert";

export { levaEnvMap } from "./Basic";

export const levaEnvMapIntensity = {
  label: "Environment Map Intensity",
  hint: "Scales the effect of the environment map by multiplying its color.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.0,
};

export { levaFlatShading } from "./Phong";

export { levaLightMap } from "./Basic";

export { levaLightMapIntensity } from "./Basic";

export { levaMap } from "./Basic";

export const levaMetalness = {
  label: "Metalness",
  hint: "How much the material is like a metal. Non-metallic materials such as wood or stone use 0.0, metallic use 1.0, with nothing (usually) in between. Default is 0.0. A value between 0.0 and 1.0 could be used for a rusty metal look. If metalnessMap is also provided, both values are multiplied.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.0,
};

export const levaMetalnessMap = {
  label: "Metalness Map",
  hint: "The blue channel of this texture is used to alter the metalness of the material.",
  value: null,
};

export { levaNormalMap } from "./Phong";

export { levaNormalMapType } from "./Phong";

export { levaNormalScale } from "./Phong";

export { levaRefractionRatio } from "./Basic";

export const levaRoughness = {
  label: "Roughness",
  hint: "How rough the material appears. 0.0 means a smooth mirror reflection, 1.0 means fully diffuse. Default is 1.0. If roughnessMap is also provided, both values are multiplied.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 1.0,
};

export const levaRoughnessMap = {
  label: "Roughness Map",
  hint: "The green channel of this texture is used to alter the roughness of the material.",
  value: null,
};

export { levaWireframe } from "./Basic";
