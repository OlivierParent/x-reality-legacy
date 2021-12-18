import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { folder, useControls } from "leva";

const EffectsGlitch = () => {
  const { active, delay, duration, mode, ratio, strength } = useControls(
    "General",
    {
      Effects: folder({
        Glitch: folder({
          active: {
            label: "Active",
            value: true,
          },
          delay: {
            label: "Delay",
            max: 5,
            min: 0,
            step: 0.1,
            value: [1.5, 3.5],
          },
          duration: {
            label: "Duration",
            max: 5,
            min: 0,
            step: 0.1,
            value: [0.6, 1.0],
          },
          mode: {
            label: "Glitch Mode",
            options: GlitchMode,
            value: GlitchMode.SPORADIC,
          },
          ratio: {
            label: "Ratio",
            hint: "Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.",
            max: 1,
            min: 0,
            step: 0.05,
            value: 0.85,
          },
          strength: {
            label: "Strength",
            max: 5,
            min: 0,
            step: 0.1,
            value: [0.3, 1.0],
          },
        }),
      }),
    }
  );

  return (
    <EffectComposer>
      <Glitch
        active={active}
        delay={delay}
        duration={duration}
        mode={mode}
        ratio={ratio}
        strength={strength}
      />
    </EffectComposer>
  );
};

export default EffectsGlitch;
