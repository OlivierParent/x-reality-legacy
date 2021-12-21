import { Suspense } from "react";
import { EffectComposer, SMAA } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaEdgeDetectionMode,
  levaPreset,
} from "App/libs/LevaSettings/Effects/SMAA";

/**
 * SMAA effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/smaa
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/SMAAEffect.js~SMAAEffect.html
 */
const EffectsSMAA = () => {
  const { edgeDetectionMode, preset } = useControls("General", {
    "Effects Composer": folder({
      "Subpixel Morphological Antialiasing (SMAA) Effect": folder({
        edgeDetectionMode: levaEdgeDetectionMode,
        preset: levaPreset,
      }),
    }),
  });

  return (
    <Suspense fallback={null}>
      <EffectComposer multisampling={0}>
        <SMAA edgeDetectionMode={edgeDetectionMode} preset={preset} />
      </EffectComposer>
    </Suspense>
  );
};

export default EffectsSMAA;
