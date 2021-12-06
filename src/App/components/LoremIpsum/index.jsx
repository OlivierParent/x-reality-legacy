import { useControls } from "leva";

import Default from "./Default";
import Fonts from "./Fonts";

const LOREM_IPSUM = Object.freeze({
  Default: "Default",
  Fonts: "Fonts",
});

const LoremIpsum = () => {
  const { useLoremIpsum } = useControls("Components", {
    useLoremIpsum: {
      label: "LoremIpsum",
      options: LOREM_IPSUM,
      value: LOREM_IPSUM.Default,
    },
  });

  function enableLoremIpsum(name) {
    return useLoremIpsum === name;
  }

  return (
    <>
      {enableLoremIpsum(LOREM_IPSUM.Default) && <Default />}
      {enableLoremIpsum(LOREM_IPSUM.Fonts) && <Fonts />}
    </>
  );
};

export default LoremIpsum;
