import { useControls } from "leva";

import Analogue from "./Analogue";
import Digital from "./Digital";

const CLOCK = Object.freeze({
  Analogue: "Analogue",
  Digital: "Digital",
});

const Clock = () => {
  const { useClock } = useControls("Components", {
    useClock: {
      label: "Clock",
      options: CLOCK,
      value: CLOCK.Analogue,
    },
  });

  function enableClock(name, element) {
    return useClock === name ? element : null;
  }

  return (
    <>
      {enableClock(CLOCK.Analogue, <Analogue />)}
      {enableClock(CLOCK.Digital, <Digital />)}
    </>
  );
};

export default Clock;
