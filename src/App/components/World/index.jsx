import { useControls } from "leva";

import Default from "./Default";
// import PositionalSound from "./PositionalSound";
import Sound from "./Sound";

const WORLD = Object.freeze({
  Default: "Default",
  // PositionalSound: "PositionalSound", // Bug in Drei
  Sound: "Sound",
});

const World = () => {
  const { useWorld } = useControls("Components", {
    useWorld: {
      label: "World",
      options: WORLD,
      value: WORLD.Default,
    },
  });

  function enableWorld(name, element) {
    return useWorld === name ? element : null;
  }

  return (
    <>
      {enableWorld(WORLD.Default, <Default />)}
      {/* {enableWorld(WORLD.PositionalSound, <PositionalSound />)} */}
      {enableWorld(WORLD.Sound, <Sound />)}
    </>
  );
};

export default World;
