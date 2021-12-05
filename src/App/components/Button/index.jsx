import { useControls } from "leva";

import Default from "./Default";
import Spring from "./Spring";

const BUTTON = {
  Default: "Default",
  Spring: "Spring",
};

const Button = () => {
  const { useButton } = useControls("Components", {
    useButton: {
      label: "Button",
      options: BUTTON,
      value: BUTTON.Default,
    },
  });

  function enableButton(name) {
    return useButton === name;
  }

  return (
    <>
      {enableButton(BUTTON.Default) && <Default />}
      {enableButton(BUTTON.Spring) && <Spring />}
    </>
  );
};

export default Button;
