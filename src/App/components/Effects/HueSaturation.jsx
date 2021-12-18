import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { folder, useControls } from "leva";

const EffectsHueSaturation = () => {
  const { blendFunction, hue, saturation } = useControls("General", {
    Effects: folder({
      HueSaturation: folder({
        blendFunction: {
          label: "Blend Function",
          options: BlendFunction,
          value: BlendFunction.NORMAL,
        },
        hue: {
          label: "Hue",
          hint: "In radians.",
          max: Math.PI,
          min: -Math.PI,
          step: 0.001,
          value: 0,
        },
        saturation: {
          label: "Saturation",
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
      <HueSaturation
        blendFunction={blendFunction}
        hue={hue}
        saturation={saturation}
      />
    </EffectComposer>
  );
};

export default EffectsHueSaturation;
