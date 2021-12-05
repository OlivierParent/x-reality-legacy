import { useControls } from "leva";

import Analogue from "./Analogue";
import Digital from "./Digital";

const CLOCK = {
  Analogue: "Analogue",
  Digital: "Digital",
};

const Clock = () => {
  const { useClock } = useControls("Components", {
    useClock: {
      label: "Clock",
      options: CLOCK,
      value: CLOCK.Analogue,
    },
  });

  const enableClock = (name) => {
    return useClock === name;
  };

  return (
    <>
      {enableClock(CLOCK.Analogue) && <Analogue />}
      {enableClock(CLOCK.Digital) && <Digital />}
    </>
  );
};

export default Clock;
