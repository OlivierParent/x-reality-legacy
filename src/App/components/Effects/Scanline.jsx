import { BlendFunction } from "postprocessing";
import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

const EffectsScanline = () => {
  const { density, blendFunction } = useControls("General", {
    Effects: folder({
      Scanline: folder({
        density: { label: "density", min: 0, max: 10, step: 0.01, value: 1.25 },
        blendFunction: {
          label: "Blend Mode",
          options: BlendFunction,
          value: BlendFunction.OVERLAY,
        },
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
