import { useControls } from "leva";

import Default from "./Default";
import Double from "./Double";

const LOGO = Object.freeze({
  Default: "Default",
  Double: "Double",
});

const Image = () => {
  const { useLogo } = useControls("Components", {
    useLogo: {
      label: "Logo",
      options: LOGO,
      value: LOGO.Default,
    },
  });

  function enableLogo(name, element) {
    return useLogo === name ? element : null;
  }

  return (
    <>
      {enableLogo(LOGO.Default, <Default />)}
      {enableLogo(LOGO.Double, <Double />)}
    </>
  );
};

export default Image;
