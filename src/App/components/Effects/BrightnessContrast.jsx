import {
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaBrightness,
  levaContrast,
} from "App/libs/LevaSettings/Effects/BrightnessContrast";

/**
 * Brightness/contrast effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/brightness-contrast
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/BrightnessContrastEffect.js~BrightnessContrastEffect.html
 */
const EffectsBrightnessContrast = () => {
  const { blendFunction, brightness, contrast } = useControls("General", {
    "Effects Composer": folder({
      "Brightness/Contrast Effect": folder({
        blendFunction: levaBlendFunction,
        brightness: levaBrightness,
        contrast: levaContrast,
      }),
    }),
  });

  return (
    <EffectComposer>
      <BrightnessContrast
        blendFunction={blendFunction}
        brightness={brightness}
        contrast={contrast}
      />
    </EffectComposer>
  );
};

export default EffectsBrightnessContrast;
