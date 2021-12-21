import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaDarkness,
  levaEskil,
  levaOffset,
} from "App/libs/LevaSettings/Effects/Vignette";

/**
 * Vignette effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/vignette
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/VignetteEffect.js~VignetteEffect.html
 */
const EffectsVignette = () => {
  const { blendFunction, darkness, eskil, offset } = useControls("General", {
    "Effects Composer": folder({
      "Vignette Effect": folder({
        blendFunction: levaBlendFunction,
        darkness: levaDarkness,
        eskil: levaEskil,
        offset: levaOffset,
      }),
    }),
  });

  return (
    <EffectComposer>
      <Vignette
        blendFunction={blendFunction}
        darkness={darkness}
        eskil={eskil}
        offset={offset}
      />
    </EffectComposer>
  );
};

export default EffectsVignette;
