import { ColorDepth, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { folder, useControls } from "leva";

const EffectsColorDepth = () => {
  const { bits, blendFunction } = useControls("General", {
    Effects: folder({
      ColorDepth: folder({
        bits: {
          label: "Bits",
          max: 24,
          min: 0,
          step: 1,
          value: 16,
        },
        blendFunction: {
          label: "Blend Function",
          options: BlendFunction,
          value: BlendFunction.NORMAL,
        },
      }),
    }),
  });

  return (
    <EffectComposer>
      <ColorDepth bits={bits} blendFunction={blendFunction} />
    </EffectComposer>
  );
};

export default EffectsColorDepth;
