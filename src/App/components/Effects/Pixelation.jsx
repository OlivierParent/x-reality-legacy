import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import { levaGranularity } from "App/libs/LevaSettings/Effects/Pixelation";

/**
 * Pixelation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/pixelation
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/PixelationEffect.js~PixelationEffect.html
 */
const EffectsPixelation = () => {
  const { granularity } = useControls("General", {
    "Effects Composer": folder({
      "Pixelation Effect": folder({
        granularity: levaGranularity,
      }),
    }),
  });

  return (
    <EffectComposer>
      <Pixelation granularity={granularity} />
    </EffectComposer>
  );
};

export default EffectsPixelation;
