export { levaAlphaMap } from "./Basic";

export { levaAoMap } from "./Basic";

export { levaAoMapIntensity } from "./Basic";

export { levaColor } from "./Basic";

export { levaCombine } from "./Basic";

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

export { levaEnvMap } from "./Basic";

export { levaLightMap } from "./Basic";

export { levaLightMapIntensity } from "./Basic";

export { levaMap } from "./Basic";

export { levaReflectivity } from "./Basic";

export { levaRefractionRatio } from "./Basic";

export { levaSpecularMap } from "./Basic";

export { levaWireframe } from "./Basic";
