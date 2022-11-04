import { useControls } from "leva";

import { ClockAnalogue as Analogue } from "./Analogue";
import { ClockDigital as Digital } from "./Digital";

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

export { Clock };
