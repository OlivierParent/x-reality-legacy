import {
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaOffset,
} from "App/libs/LevaSettings/Effects/ChromaticAberration";

/**
 * Chromatic aberration effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/chromatic-aberration
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/ChromaticAberrationEffect.js~ChromaticAberrationEffect.html
 */
const EffectsChromaticAberration = () => {
  const { blendFunction, offset } = useControls("General", {
    "Effects Composer": folder({
      "Chromatic Aberration Effect": folder({
        blendFunction: levaBlendFunction,
        offset: levaOffset,
      }),
    }),
  });

  return (
    <EffectComposer>
      <ChromaticAberration
        blendFunction={blendFunction}
        offset={[offset.x, offset.y]}
      />
    </EffectComposer>
  );
};

export default EffectsChromaticAberration;
