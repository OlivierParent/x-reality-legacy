import { Svg } from "@react-three/drei";

import logoNl from "./assets/arteveldehogeschool_logo.svg";
import svgLogo from "./assets/SVG_logo.svg";

const svgLogoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg";

const ImageSvgDrei = (props) => {
  const scale = 0.0075;

  return (
    <group {...props}>
      <Svg position={[0, 0, 0]} scale={scale} src={svgLogoUrl} />
      <Svg position={[0, 0, -1]} scale={scale} src={logoNl} />
      <Svg position={[0, 0, -2]} scale={scale} src={svgLogo} />
    </group>
  );
};

export { ImageSvgDrei };
