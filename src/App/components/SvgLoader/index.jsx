import { useEffect, useState } from "react";
import { SVGLoader } from "three-stdlib";

import Group from "./Group";

const SvgLoader = (props) => {
  const [paths, setPaths] = useState([]);
  const position = props.position;
  const scale = [props.scale, props.scale, props.scale];

  useEffect(() => {
    const svgResource = new Promise((resolve) =>
      new SVGLoader().load(props.source, (data) => resolve(data.paths))
    );
    svgResource.then(setPaths);
  }, [props]);

  return <Group paths={paths} position={position} scale={scale} />;
};

export default SvgLoader;
