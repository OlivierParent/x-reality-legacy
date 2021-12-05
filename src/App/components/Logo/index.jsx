import { useControls } from "leva";

import Default from "./Default";
import Double from "./Double";

const LOGO = {
  Default: "Default",
  Double: "Double",
};

const Image = () => {
  const { useLogo } = useControls("Components", {
    useLogo: {
      label: "Variant",
      options: LOGO,
      value: LOGO.Default,
    },
  });

  function enableLogo(name) {
    return useLogo === name;
  }

  return (
    <>
      {enableLogo(LOGO.Default) && <Default />}
      {enableLogo(LOGO.Double) && <Double />}
    </>
  );
};

export default Image;
