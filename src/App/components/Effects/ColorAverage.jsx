import { ColorAverage, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { folder, useControls } from "leva";

const EffectsColorAverage = () => {
  const { blendFunction } = useControls("General", {
    Effects: folder({
      ColorAverage: folder({
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
      <ColorAverage blendFunction={blendFunction} />
    </EffectComposer>
  );
};

export default EffectsColorAverage;
