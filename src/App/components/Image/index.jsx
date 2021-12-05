import { useControls } from "leva";

import Default from "./Default";
import Svg from "./Svg";

const IMAGE = {
  Default: "Default",
  Svg: "Svg",
};

const Image = () => {
  const { useImage } = useControls("Components", {
    useImage: {
      label: "Image",
      options: IMAGE,
      value: IMAGE.Default,
    },
  });

  function enableImage(name) {
    return useImage === name;
  }

  return (
    <>
      {enableImage(IMAGE.Default) && <Default />}
      {enableImage(IMAGE.Svg) && <Svg />}
    </>
  );
};

export default Image;
