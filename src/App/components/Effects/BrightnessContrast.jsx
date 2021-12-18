import {
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { folder, useControls } from "leva";

const EffectsHueSaturation = () => {
  const { blendFunction, brightness, contrast } = useControls("General", {
    Effects: folder({
      Glitch: folder({
        blendFunction: {
          label: "Blend Function",
          options: BlendFunction,
          value: BlendFunction.NORMAL,
        },
        brightness: {
          label: "Brightness",
          max: 1,
          min: -1,
          step: 0.001,
          value: 0,
        },
        contrast: {
          label: "Contrast",
          max: 1,
          min: -1,
          step: 0.001,
          value: 0,
        },
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

export default EffectsHueSaturation;
