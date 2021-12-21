import { ColorAverage, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import { levaBlendFunction } from "App/libs/LevaSettings/Effects/ColorAverage";

/**
 * Color average effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/color-average
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/ColorAverageEffect.js~ColorAverageEffect.html
 */
const EffectsColorAverage = () => {
  const { blendFunction } = useControls("General", {
    "Effects Composer": folder({
      "Color Average Effect": folder({
        blendFunction: levaBlendFunction,
      }),
    }),
  });

  return (
    <EffectComposer>
      <ColorAverage blendFunction={blendFunction} />
    </EffectComposer>
  );
};

export default EffectsColorAverage;
