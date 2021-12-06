import { MathUtils } from "three";
import { Plane } from "@react-three/drei";
import { useControls } from "leva";

import Default from "./Default";
import MatcapMaterial from "./MatcapMaterial";
import NormalMap from "./NormalMap";
import PhysicalMaterial from "./PhysicalMaterial";
import StandardMaterial from "./StandardMaterial";
import ToonMaterial from "./ToonMaterial";

const SUZANNE = Object.freeze({
  Default: "Default",
  MatcapMaterial: "MatcapTexture",
  NormalMap: "NormalTexture",
  PhysicalMaterial: "PhysicalMaterial",
  StandardMaterial: "StandardMaterial",
  ToonMaterial: "ToonMaterial",
});

const Suzanne = () => {
  const { useSuzanne } = useControls("Components", {
    useSuzanne: {
      label: "Suzanne",
      options: {
        "Default                      ": SUZANNE.Default,
        "Standard Material            ": SUZANNE.StandardMaterial,
        "Standard Material Normal Map ": SUZANNE.NormalMap,
        "Physical Material            ": SUZANNE.PhysicalMaterial,
        "Matcap Material              ": SUZANNE.MatcapMaterial,
        "Toon Material                ": SUZANNE.ToonMaterial,
      },
      value: SUZANNE.Default,
    },
  });

  function enableSuzanne(name) {
    return useSuzanne === name;
  }

  return (
    <>
      <>
        {enableSuzanne(SUZANNE.Default) && <Default />}
        {enableSuzanne(SUZANNE.MatcapMaterial) && <MatcapMaterial />}
        {enableSuzanne(SUZANNE.NormalMap) && <NormalMap />}
        {enableSuzanne(SUZANNE.PhysicalMaterial) && <PhysicalMaterial />}
        {enableSuzanne(SUZANNE.StandardMaterial) && <StandardMaterial />}
        {enableSuzanne(SUZANNE.ToonMaterial) && <ToonMaterial />}
      </>
      <Plane
        args={[2, 2]}
        position={[0, 0, -1]}
        rotation={[0, 0, 45].map((v) => MathUtils.degToRad(v))}
      />
    </>
  );
};

export default Suzanne;
