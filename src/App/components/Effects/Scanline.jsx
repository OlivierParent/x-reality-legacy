import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaBlendFunction,
  levaDensity,
} from "App/libs/LevaSettings/Effects/Scanline";

/**
 * Scanline effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/scanline
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/ScanlineEffect.js~ScanlineEffect.html
 */
const EffectsScanline = () => {
  const { density, blendFunction } = useControls("General", {
    "Effects Composer": folder({
      "Scanline Effect": folder({
        blendFunction: levaBlendFunction,
        density: levaDensity,
      }),
    }),
  });

  return (
    <EffectComposer>
      <Scanline blendFunction={blendFunction} density={density} />
    </EffectComposer>
  );
};

export default EffectsScanline;
