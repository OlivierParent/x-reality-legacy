import { useControls } from "leva";

import { ImageDefault as Default } from "./Default";
import { ImageSvgCustom as SvgCustom } from "./SvgCustom";
import { ImageSvgDrei as SvgDrei } from "./SvgDrei";

const IMAGE = Object.freeze({
  Default: "Default",
  Svg: "SvgDrei",
  SvgCustom: "SvgCustom",
});

const Image = () => {
  const { useImage } = useControls("Components", {
    useImage: {
      label: "Image",
      options: IMAGE,
      value: IMAGE.Default,
    },
  });

  function enableImage(name, element) {
    return useImage === name ? element : null;
  }

  return (
    <>
      {enableImage(IMAGE.Default, <Default />)}
      {enableImage(IMAGE.Svg, <SvgCustom />)}
      {enableImage(IMAGE.SvgCustom, <SvgDrei />)}
    </>
  );
};

export default Image;
