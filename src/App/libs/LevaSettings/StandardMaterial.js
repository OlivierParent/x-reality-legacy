export { levaAlphaMap } from "./BasicMaterial";

export { levaAoMap } from "./BasicMaterial";

export { levaAoMapIntensity } from "./BasicMaterial";

export { levaBumpMap } from "./PhongMaterial";

export { levaBumpScale } from "./PhongMaterial";

export { levaColor } from "./BasicMaterial";

export { levaDisplacementBias } from "./PhongMaterial";

export { levaDisplacementMap } from "./PhongMaterial";

export { levaDisplacementScale } from "./PhongMaterial";

export { levaEmissive } from "./LambertMaterial";

export { levaEmissiveIntensity } from "./LambertMaterial";

export { levaEmissiveMap } from "./LambertMaterial";

export { levaEnvMap } from "./BasicMaterial";

export const levaEnvMapIntensity = {
  label: "Environment Map Intensity",
  hint: "Scales the effect of the environment map by multiplying its color.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.0,
};

export { levaFlatShading } from "./PhongMaterial";

export { levaLightMap } from "./BasicMaterial";

export { levaLightMapIntensity } from "./BasicMaterial";

export { levaMap } from "./BasicMaterial";

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

export { levaNormalMap } from "./PhongMaterial";

export { levaNormalMapType } from "./PhongMaterial";

export { levaNormalScale } from "./PhongMaterial";

export { levaRefractionRatio } from "./BasicMaterial";

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

export { levaWireframe } from "./BasicMaterial";
