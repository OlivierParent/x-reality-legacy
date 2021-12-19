import { ObjectSpaceNormalMap, TangentSpaceNormalMap } from "three";

export { levaAlphaMap } from "./BasicMaterial";

export { levaAoMap } from "./BasicMaterial";

export { levaAoMapIntensity } from "./BasicMaterial";

export const levaBumpMap = {
  label: "Bump Map",
  hint: "The texture to create a bump map. The black and white values map to the perceived depth in relation to the lights. Bump doesn't actually affect the geometry of the object, only the lighting. If a normal map is defined this will be ignored.",
  value: null,
};

export const levaBumpScale = {
  label: "Bump Scale",
  hint: "How much the bump map affects the material. Typical ranges are 0-1.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 1.0,
};

export { levaColor } from "./BasicMaterial";

export { levaCombine } from "./BasicMaterial";

export const levaDisplacementMap = {
  label: "Displacement Map",
  hint: "The displacement map affects the position of the mesh's vertices. Unlike other maps which only affect the light and shade of the material the displaced vertices can cast shadows, block other objects, and otherwise act as real geometry. The displacement texture is an image where the value of each pixel (white being the highest) is mapped against, and repositions, the vertices of the mesh.",
  value: null,
};

export const levaDisplacementBias = {
  label: "Displacement Bias",
  hint: "How much the displacement map affects the mesh (where black is no displacement, and white is maximum displacement). Without a displacement map set, this value is not applied. Default is 1.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 1.0,
};

export const levaDisplacementScale = {
  label: "Displacement Scale",
  hint: "How much the displacement map affects the mesh (where black is no displacement, and white is maximum displacement). Without a displacement map set, this value is not applied. Default is 1.",
  max: 1.0,
  min: 0.0,
  step: 0.01,
  value: 1.0,
};

export { levaEmissive } from "./LambertMaterial";

export { levaEmissiveIntensity } from "./LambertMaterial";

export { levaEmissiveMap } from "./LambertMaterial";

export { levaEnvMap } from "./BasicMaterial";

export const levaFlatShading = {
  label: "Flat Shading",
  hint: "Define whether the material is rendered with flat shading.",
  value: false,
};

export { levaLightMap } from "./BasicMaterial";

export { levaLightMapIntensity } from "./BasicMaterial";

export { levaMap } from "./BasicMaterial";

export const levaNormalMap = {
  label: "Normal Map",
  hint: "The texture to create a normal map. The RGB values affect the surface normal for each pixel fragment and change the way the color is lit. Normal maps do not change the actual shape of the surface, only the lighting. In case the material has a normal map authored using the left handed convention, the y component of normalScale should be negated to compensate for the different handedness.",
  value: null,
};

export const levaNormalMapType = {
  label: "Normal Map Type",
  hint: "The type of normal map.",
  options: { ObjectSpaceNormalMap, TangentSpaceNormalMap },
  value: TangentSpaceNormalMap,
};

export const levaNormalScale = {
  label: "Normal Map Type",
  hint: "How much the normal map affects the material. Typical ranges are 0-1. Default is a Vector2 set to (1,1).",
  options: { ObjectSpaceNormalMap, TangentSpaceNormalMap },
  max: 1,
  min: 0,
  step: 0.01,
  value: [1, 1],
};

export { levaReflectivity } from "./BasicMaterial";

export { levaRefractionRatio } from "./BasicMaterial";

export const levaShininess = {
  label: "Shininess",
  hint: "How shiny the .specular highlight is; a higher value gives a sharper highlight.",
  max: 100.0,
  min: 0.0,
  step: 0.1,
  value: 30.0,
};

export const levaSpecular = {
  label: "Specular",
  hint: "Specular color of the material. Default is a Color set to 0x111111 (very dark grey).",
  value: "#111111",
};

export { levaSpecularMap } from "./BasicMaterial";

export { levaWireframe } from "./BasicMaterial";
