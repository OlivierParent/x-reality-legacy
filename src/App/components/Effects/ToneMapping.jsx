import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaAdaptationRate,
  levaAverageLuminance,
  levaBlendFunction,
  levaMiddleGrey,
  levaResolution,
} from "App/libs/LevaSettings/Effects/ToneMapping";

/**
 * ToneMapping effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/tone-mapping
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/ToneMappingEffect.js~ToneMappingEffect.html
 */
const EffectsToneMapping = () => {
  const {
    adaptationRate,
    averageLuminance,
    blendFunction,
    middleGrey,
    resolution,
  } = useControls("General", {
    "Effects Composer": folder({
      "ToneMapping Effect": folder({
        adaptationRate: levaAdaptationRate,
        averageLuminance: levaAverageLuminance,
        blendFunction: levaBlendFunction,
        middleGrey: levaMiddleGrey,
        resolution: levaResolution,
      }),
    }),
  });

  return (
    <EffectComposer>
      <ToneMapping
        adaptationRate={adaptationRate}
        averageLuminance={averageLuminance}
        blendFunction={blendFunction}
        middleGrey={middleGrey}
        resolution={resolution}
      />
    </EffectComposer>
  );
};

export default EffectsToneMapping;
