import { EffectComposer, Grid } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaLineWidth,
  levaScale,
} from "App/libs/LevaSettings/Effects/Grid";

/**
 * Grid effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/grid
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/GridEffect.js~GridEffect.html
 */
const EffectsGrid = () => {
  const { blendFunction, lineWidth, scale } = useControls("General", {
    "Effects Composer": folder({
      "Grid Effect": folder({
        blendFunction: levaBlendFunction,
        lineWidth: levaLineWidth,
        scale: levaScale,
      }),
    }),
  });

  return (
    <EffectComposer>
      <Grid blendFunction={blendFunction} lineWidth={lineWidth} scale={scale} />
    </EffectComposer>
  );
};

export default EffectsGrid;
