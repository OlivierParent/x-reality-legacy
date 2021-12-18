import { EffectComposer, Grid } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { folder, useControls } from "leva";

const EffectsGrid = () => {
  const { blendFunction, lineWidth, scale } = useControls("General", {
    Effects: folder({
      Grid: folder({
        blendFunction: {
          label: "Blend Function",
          options: BlendFunction,
          value: BlendFunction.OVERLAY,
        },
        lineWidth: {
          label: "Line Width",
          max: 5,
          min: 0,
          step: 0.1,
          value: 0,
        },
        scale: {
          label: "Scale",
          max: 5,
          min: 0.5,
          step: 0.05,
          value: 1,
        },
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
