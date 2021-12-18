import { OrbitControls, TrackballControls } from "@react-three/drei";
import { folder, useControls } from "leva";

const CONTROLS = Object.freeze({
  Orbit: "Orbit",
  Trackball: "Trackball",
});

const InputControls = () => {
  const { useInputControls } = useControls("General", {
    enableStats: { label: "Stats", value: false },
    "Input Controls": folder({
      useInputControls: {
        label: "Controls",
        options: CONTROLS,
        value: CONTROLS.Orbit,
      },
    }),
  });

  function enableInputControls(name, element) {
    return useInputControls === name ? element : null;
  }

  return (
    <>
      {enableInputControls(
        CONTROLS.Orbit,
        <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      )}
      {enableInputControls(CONTROLS.Trackball, <TrackballControls />)}
    </>
  );
};

export default InputControls;
