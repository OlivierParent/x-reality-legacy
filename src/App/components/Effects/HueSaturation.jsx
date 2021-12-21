import { MathUtils } from "three";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaHue,
  levaSaturation,
} from "App/libs/LevaSettings/Effects/HueSaturation";

/**
 * Hue/saturation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/hue-saturation
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/HueSaturationEffect.js~HueSaturationEffect.html
 */
const EffectsHueSaturation = () => {
  const { blendFunction, hue, saturation } = useControls("General", {
    "Effects Composer": folder({
      "Hue/Saturation Effect": folder({
        blendFunction: levaBlendFunction,
        hue: levaHue,
        saturation: levaSaturation,
      }),
    }),
  });

  return (
    <EffectComposer>
      <HueSaturation
        blendFunction={blendFunction}
        hue={MathUtils.degToRad(hue)}
        saturation={saturation}
      />
    </EffectComposer>
  );
};

export default EffectsHueSaturation;
