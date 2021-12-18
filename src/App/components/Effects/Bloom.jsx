import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { folder, useControls } from "leva";

const EffectsBloom = () => {
  const { blendFunction, intensity, luminanceSmoothing, luminanceThreshold } =
    useControls("General", {
      Effects: folder({
        Bloom: folder({
          blendFunction: {
            label: "Blend Function",
            options: BlendFunction,
            value: BlendFunction.SCREEN,
          },
          intensity: {
            label: "Intensity",
            max: 10,
            min: 0,
            step: 0.1,
            value: 1,
          },
          luminanceSmoothing: {
            label: "Luminance Smoothing",
            max: 1,
            min: 0,
            step: 0.005,
            value: 0.025,
          },
          luminanceThreshold: {
            label: "Luminance Threshold",
            max: 1,
            min: 0,
            step: 0.05,
            value: 0.9,
          },
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
