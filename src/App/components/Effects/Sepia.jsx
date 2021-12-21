import { EffectComposer, Sepia } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaIntensity,
} from "App/libs/LevaSettings/Effects/Sepia";

/**
 * Sepia effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/sepia
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/SepiaEffect.js~SepiaEffect.html
 */
const EffectsSepia = () => {
  const { blendFunction, intensity } = useControls("General", {
    "Effects Composer": folder({
      "Sepia Effect": folder({
        blendFunction: levaBlendFunction,
        intensity: levaIntensity,
      }),
    }),
  });

  return (
    <EffectComposer>
      <Sepia blendFunction={blendFunction} intensity={intensity} />
    </EffectComposer>
  );
};

export default EffectsSepia;
