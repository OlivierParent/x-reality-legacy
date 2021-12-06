import { useControls } from "leva";

import Default from "./Default";
import BakedNormals from "./BakedNormals";

const TEXTURE = Object.freeze({
  Default: "Default",
  BakedNormals: "BakedNormals",
});

const Texture = () => {
  const { useTexture } = useControls("Components", {
    useTexture: {
      label: "Type",
      options: {
        "Default      ": TEXTURE.Default,
        "Baked Normals": TEXTURE.BakedNormals,
      },
      value: TEXTURE.Default,
    },
  });

  function enableTexture(name) {
    return useTexture === name;
  }

  return (
    <>
      {enableTexture(TEXTURE.Default) && <Default />}
      {enableTexture(TEXTURE.BakedNormals) && <BakedNormals />}
    </>
  );
};

export default Texture;
