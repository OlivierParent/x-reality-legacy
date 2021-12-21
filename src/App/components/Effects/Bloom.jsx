import { Resizer, KernelSize } from "postprocessing";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaIntensity,
  levaLuminanceSmoothing,
  levaLuminanceThreshold,
} from "App/libs/LevaSettings/Effects/Bloom";

/**
 * Bloom effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/bloom
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/BloomEffect.js~BloomEffect.html
 */
const EffectsBloom = () => {
  const { blendFunction, intensity, luminanceSmoothing, luminanceThreshold } =
    useControls("General", {
      "Effects Composer": folder({
        "Bloom Effect": folder({
          blendFunction: levaBlendFunction,
          intensity: levaIntensity,
          luminanceSmoothing: levaLuminanceSmoothing,
          luminanceThreshold: levaLuminanceThreshold,
        }),
      }),
    });

  return (
    <EffectComposer>
      <Bloom
        blendFunction={blendFunction}
        height={Resizer.AUTO_SIZE}
        intensity={intensity}
        kernelSize={KernelSize.LARGE}
        luminanceSmoothing={luminanceSmoothing}
        luminanceThreshold={luminanceThreshold}
        width={Resizer.AUTO_SIZE}
      />
    </EffectComposer>
  );
};

export default EffectsBloom;
