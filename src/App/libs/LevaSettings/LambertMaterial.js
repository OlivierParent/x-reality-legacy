export { levaAlphaMap } from "./BasicMaterial";

export { levaAoMap } from "./BasicMaterial";

export { levaAoMapIntensity } from "./BasicMaterial";

export { levaColor } from "./BasicMaterial";

export { levaCombine } from "./BasicMaterial";

export const levaEmissive = {
  label: "Emissive",
  hint: "Emissive (light) color of the material, essentially a solid color unaffected by other lighting.",
  value: "#000000",
};

export const levaEmissiveIntensity = {
  label: "Emissive Intensity",
  hint: "Intensity of the emissive light. Modulates the emissive color.",
  max: 5,
  min: 0,
  value: 1,
};

export const levaEmissiveMap = {
  label: "Emissive Map",
  hint: "Set emissive (glow) map. The emissive map color is modulated by the emissive color and the emissive intensity. If you have an emissive map, be sure to set the emissive color to something other than black.",
  value: null,
};

export { levaEnvMap } from "./BasicMaterial";

export { levaLightMap } from "./BasicMaterial";

export { levaLightMapIntensity } from "./BasicMaterial";

export { levaMap } from "./BasicMaterial";

export { levaReflectivity } from "./BasicMaterial";

export { levaRefractionRatio } from "./BasicMaterial";

export { levaSpecularMap } from "./BasicMaterial";

export { levaWireframe } from "./BasicMaterial";
