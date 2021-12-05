import { useControls } from "leva";

import Default from "./Default";
import MatcapTexture from "./MatcapTexture";
import NormalTexture from "./NormalTexture";
import PhysicalMaterial from "./PhysicalMaterial";
import StandardMaterial from "./StandardMaterial";
import ToonMaterial from "./ToonMaterial";

const SUZANNE = {
  Default: "Default",
  MatcapTexture: "MatcapTexture",
  NormalTexture: "NormalTexture",
  PhysicalMaterial: "PhysicalMaterial",
  StandardMaterial: "StandardMaterial",
  ToonMaterial: "ToonMaterial",
};

const Suzanne = () => {
  const { useSuzanne } = useControls("Components", {
    useSuzanne: {
      label: "Suzanne",
      options: {
        "Default          ": SUZANNE.Default,
        "Matcap Texture   ": SUZANNE.MatcapTexture,
        "Normal Texture   ": SUZANNE.NormalTexture,
        "Physical Material": SUZANNE.PhysicalMaterial,
        "Standard Material": SUZANNE.StandardMaterial,
        "Toon Material    ": SUZANNE.ToonMaterial,
      },
      value: SUZANNE.Default,
    },
  });

  function enableSuzanne(name) {
    return useSuzanne === name;
  }

  return (
    <>
      {enableSuzanne(SUZANNE.Default) && <Default />}
      {enableSuzanne(SUZANNE.MatcapTexture) && <MatcapTexture />}
      {enableSuzanne(SUZANNE.NormalTexture) && <NormalTexture />}
      {enableSuzanne(SUZANNE.PhysicalMaterial) && <PhysicalMaterial />}
      {enableSuzanne(SUZANNE.StandardMaterial) && <StandardMaterial />}
      {enableSuzanne(SUZANNE.ToonMaterial) && <ToonMaterial />}
    </>
  );
};

export default Suzanne;
