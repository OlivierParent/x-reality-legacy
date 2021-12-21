import { Resizer } from "postprocessing";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaBokehScale,
  levaFocalLength,
  levaFocusDistance,
} from "App/libs/LevaSettings/Effects/DepthOfField";

/**
 * Depth of Field effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/depth-of-field
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/DepthOfFieldEffect.js~DepthOfFieldEffect.html
 */
const EffectsDepthOfField = () => {
  const { blendFunction, bokehScale, focalLength, focusDistance } = useControls(
    "General",
    {
      "Effects Composer": folder({
        "Bloom Effect": folder({
          blendFunction: levaBlendFunction,
          bokehScale: levaBokehScale,
          focalLength: levaFocalLength,
          focusDistance: levaFocusDistance,
        }),
      }),
    }
  );

  return (
    <EffectComposer>
      <DepthOfField
        blendFunction={blendFunction}
        bokehScale={bokehScale}
        focalLength={focalLength}
        focusDistance={focusDistance}
        height={Resizer.AUTO_SIZE}
        width={Resizer.AUTO_SIZE}
      />
    </EffectComposer>
  );
};

export default EffectsDepthOfField;
