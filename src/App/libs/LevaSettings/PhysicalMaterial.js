export const levaClearcoat = {
  label: "Clearcoat",
  hint: "Represents the intensity of the clear coat layer, from 0.0 to 1.0. Use clear coat related properties to enable multilayer materials that have a thin translucent layer over the base layer.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.0,
};

export const levaClearcoatMap = {
  label: "Clearcoat Map",
  hint: "The red channel of this texture is multiplied against .clearcoat, for per-pixel control over a coating's intensity.",
  value: null,
};

export const levaClearcoatNormalMap = {
  label: "Clearcoat Normal Map",
  hint: "Can be used to enable independent normals for the clear coat layer.",
  value: null,
};

export const levaClearcoatNormalScale = {
  label: "Clearcoat Normal Scale",
  hint: "How much .clearcoatNormalMap affects the clear coat layer, from (0,0) to (1,1). Default is (1,1).",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: [1.0, 1.0],
};

export const levaClearcoatRoughness = {
  label: "Clearcoat Roughness",
  hint: "Roughness of the clear coat layer, from 0.0 to 1.0.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.0,
};

export const levaIor = {
  label: "Index-of-Refraction",
  hint: "Index-of-refraction for non-metallic materials, from 1.0 to 2.333. Default is 1.5.",
  max: 2.333,
  min: 1.0,
  step: 0.001,
  value: 1.5,
};

export const levaReflectivity = {
  label: "Reflectivity",
  hint: "Degree of reflectivity, from 0.0 to 1.0. Default is 0.5, which corresponds to an index-of-refraction of 1.5.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.5,
};

export const levaSheen = {
  label: "Sheen",
  hint: "The intensity of the sheen layer, from 0.0 to 1.0. Default is 0.0.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.0,
};

export const levaSheenColor = {
  label: "Sheen Color",
  hint: "The sheen tint. Default is 0xffffff, white.",
  value: "#ffffff",
};

export const levaSheenColorMap = {
  label: "Sheen Color Map",
  hint: "The RGB channels of this texture are multiplied against .sheenColor, for per-pixel control over sheen tint.",
  value: null,
};

export const levaSheenRoughness = {
  label: "Sheen Roughness",
  hint: "Roughness of the sheen layer, from 0.0 to 1.0. Default is 1.0.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 1.0,
};

export const levaSheenRoughnessMap = {
  label: "Sheen Roughness Map",
  hint: "The alpha channel of this texture is multiplied against .sheenRoughness, for per-pixel control over sheen roughness.",
  value: null,
};

export const levaThickness = {
  label: "Thickness",
  max: 9.0,
  min: 0.0,
  step: 0.01,
  value: 0.01,
};

export const levaTransmission = {
  label: "Transmission",
  hint: "Degree of transmission (or optical transparency), from 0.0 to 1.0. Default is 0.0.\nThin, transparent or semitransparent, plastic or glass materials remain largely reflective even if they are fully transmissive. The transmission property can be used to model these materials.\nWhen transmission is non-zero, opacity should be set to 1.",
  max: 2.0,
  min: 0.0,
  step: 0.01,
  value: 0.0,
};
