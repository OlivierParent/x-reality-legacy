import { EffectComposer, Noise } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaPremultiply,
} from "App/libs/LevaSettings/Effects/Noise";

/**
 * Noise effect.
 *
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/NoiseEffect.js~NoiseEffect.html
 */
const EffectsNoise = () => {
  const { blendFunction, premultiply } = useControls("General", {
    "Effects Composer": folder({
      "Noise Effect": folder({
        blendFunction: levaBlendFunction,
        premultiply: levaPremultiply,
      }),
    }),
  });

  return (
    <EffectComposer>
      <Noise blendFunction={blendFunction} premultiply={premultiply} />
    </EffectComposer>
  );
};

export default EffectsNoise;
