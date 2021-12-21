import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  levaActive,
  levaColumns,
  levaDelay,
  levaDtSize,
  levaDuration,
  levaMode,
  levaRatio,
  levaStrength,
} from "App/libs/LevaSettings/Effects/Glitch";

/**
 * Glitch effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/glitch
 * @see https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/GlitchEffect.js~GlitchEffect.html
 */
const EffectsGlitch = () => {
  const {
    active,

    columns,
    delay,
    dtSize,
    duration,
    mode,
    ratio,
    strength,
  } = useControls("General", {
    "Effects Composer": folder({
      "Glitch Effect": folder({
        active: levaActive,
        columns: levaColumns,
        delay: levaDelay,
        dtSize: levaDtSize,
        duration: levaDuration,
        mode: levaMode,
        ratio: levaRatio,
        strength: levaStrength,
      }),
    }),
  });

  return (
    <EffectComposer>
      <Glitch
        active={active}
        columns={columns}
        delay={delay}
        dtSize={dtSize}
        duration={duration}
        mode={mode}
        ratio={ratio}
        strength={strength}
      />
    </EffectComposer>
  );
};

export default EffectsGlitch;
