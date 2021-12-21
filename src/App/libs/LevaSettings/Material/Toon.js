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

export const levaGradientMap = {
  label: "Gradient Map",
  hint: "Gradient map for toon shading. It's required to set Texture.minFilter and Texture.magFilter to THREE.NearestFilter when using this type of texture. Default is null.",
  value: null,
};

export { levaLightMap } from "./Basic";

export { levaLightMapIntensity } from "./Basic";

export { levaMap } from "./Basic";

export { levaNormalMap } from "./Phong";

export { levaNormalMapType } from "./Phong";

export { levaNormalScale } from "./Phong";

export { levaWireframe } from "./Basic";
