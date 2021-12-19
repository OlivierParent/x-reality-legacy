import { AddOperation, MixOperation, MultiplyOperation } from "three";

export const levaAlphaMap = {
  label: "Alpha Map",
  hint: "The alpha map is a grayscale texture that controls the opacity across the surface (black: fully transparent; white: fully opaque).",
  value: null,
};

export const levaAoMap = {
  label: "Ambient Occlusion Map",
  hint: "The red channel of this texture is used as the ambient occlusion map. The aoMap requires a second set of UVs.",
  value: null,
};

export const levaAoMapIntensity = {
  label: "Ambient Occlusion Map Intensity",
  hint: "Intensity of the ambient occlusion effect. Zero is no occlusion effect.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 1.0,
};

export const levaColor = {
  label: "Color",
  hint: "Color of the material.",
  value: "#ffffff",
};

export const levaCombine = {
  label: "Color",
  hint: "How to combine the result of the surface's color with the environment map, if any.",
  options: { AddOperation, MixOperation, MultiplyOperation },
  value: MultiplyOperation,
};

export const levaEnvMap = {
  label: "Environment Map",
  hint: "The environment map.",
  value: null,
};

export const levaLightMap = {
  label: "Light Map",
  hint: "The light map. The lightMap requires a second set of UVs.",
  value: null,
};

export const levaLightMapIntensity = {
  label: "Light Map Intensity",
  hint: "Intensity of the baked light.",
  value: 1.0,
};

export const levaMap = {
  label: "Map",
  hint: "The color map.",
  value: null,
};

export const levaReflectivity = {
  label: "Reflectivity",
  hint: "How much the environment map affects the surface; also see .combine. The default value is 1 and the valid range is between 0 (no reflections) and 1 (full reflections).",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 1.0,
};

export const levaRefractionRatio = {
  label: "Refraction Ratio",
  hint: "The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material. It is used with environment mapping modes THREE.CubeRefractionMapping and THREE.EquirectangularRefractionMapping. The refraction ratio should not exceed 1.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 0.98,
};

export const levaSpecularMap = {
  label: "Specular Map",
  hint: "Specular map used by the material.",
  value: null,
};

export const levaWireframe = {
  label: "Wireframe",
  hint: "Render geometry as wireframe. Default is false (i.e. render as flat polygons).",
  value: false,
};
