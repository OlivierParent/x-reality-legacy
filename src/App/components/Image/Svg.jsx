import { SvgLoader } from "App/components";

import logoNl from "./assets/arteveldehogeschool_logo.svg";
import svgLogo from "./assets/SVG_logo.svg";

const svgLogoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg";

const ImageSvg = (props) => {
  const scale = 0.0075;

  return (
    <>
      <SvgLoader position={[0, 0, 0]} scale={scale} source={svgLogoUrl} />;
      <SvgLoader position={[0, 0, -1]} scale={scale} source={logoNl} />;
      <SvgLoader position={[0, 0, -2]} scale={scale} source={svgLogo} />;
    </>
  );
};

export default ImageSvg;
