import { ColorDepth, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBits,
  levaBlendFunction,
} from "App/libs/LevaSettings/Effects/ColorDepth";

/**
 * Color depth effect.
 *
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/ColorDepthEffect.js~ColorDepthEffect.html
 */
const EffectsColorDepth = () => {
  const { bits, blendFunction } = useControls("General", {
    "Effects Composer": folder({
      "Color Depth Effect": folder({
        bits: levaBits,
        blendFunction: levaBlendFunction,
      }),
    }),
  });

  return (
    <EffectComposer>
      <ColorDepth bits={bits} blendFunction={blendFunction} />
    </EffectComposer>
  );
};

export default EffectsColorDepth;
