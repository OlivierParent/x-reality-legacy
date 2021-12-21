import { DotScreen, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaAngle,
  levaBlendFunction,
  levaScale,
} from "App/libs/LevaSettings/Effects/DotScreen";

/**
 * Dot screen effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/dot-screen
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/DotScreenEffect.js~DotScreenEffect.html
 */
const EffectsDotScreen = () => {
  const { angle, blendFunction, scale } = useControls("General", {
    "Effects Composer": folder({
      "Dot Screen Effect": folder({
        angle: levaAngle,
        blendFunction: levaBlendFunction,
        scale: levaScale,
      }),
    }),
  });

  return (
    <EffectComposer>
      <DotScreen angle={angle} blendFunction={blendFunction} scale={scale} />
    </EffectComposer>
  );
};

export default EffectsDotScreen;
