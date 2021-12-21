import { folder, useControls } from "leva";

import Basic from "./Basic";
import Lambert from "./Lambert";
import MatCap from "./Matcap";
import Normal from "./Normal";
import Phong from "./Phong";
import Physical from "./Physical";
import PhysicalFrostedGlass from "./PhysicalFrostedGlass";
import Standard from "./Standard";
import StandardNormalMap from "./StandardNormalMap";
import Toon from "./Toon";

const MATERIAL = Object.freeze({
  Basic: "Basic",
  Lambert: "Lambert",
  MatCap: "MatCap",
  Normal: "Normal",
  Phong: "Phong",
  Physical: "Physical",
  PhysicalFrostedGlass: "PhysicalFrostedGlass",
  Standard: "Standard",
  StandardNormalMap: "StandardNormalMap",
  Toon: "Toon",
});

function enableMaterial(name) {
  let element;
  switch (name) {
    case MATERIAL.Basic:
      element = <Basic />;
      break;
    case MATERIAL.Lambert:
      element = <Lambert />;
      break;
    case MATERIAL.MatCap:
      element = <MatCap />;
      break;
    case MATERIAL.Normal:
      element = <Normal />;
      break;
    case MATERIAL.Phong:
      element = <Phong />;
      break;
    case MATERIAL.Physical:
      element = <Physical />;
      break;
    case MATERIAL.PhysicalFrostedGlass:
      element = <PhysicalFrostedGlass />;
      break;
    case MATERIAL.StandardNormalMap:
      element = <StandardNormalMap />;
      break;
    case MATERIAL.Toon:
      element = <Toon />;
      break;
    default:
      element = <Standard />;
  }
  return element;
}

const Material = () => {
  const { materialName } = useControls("Components", {
    Materials: folder({
      materialName: {
        label: "Material",
        options: {
          "Basic (Flat, no light)               ": MATERIAL.Basic,
          "MatCap (Material Capture, no light)  ": MATERIAL.MatCap,
          "Lambert (NPBR, Gouraud)              ": MATERIAL.Lambert,
          "Phong (NPBR, Blinn-Phong)            ": MATERIAL.Phong,
          "Standard (PBR, Metallic-Roughness)   ": MATERIAL.Standard,
          "Standard - Normal Map                ": MATERIAL.StandardNormalMap,
          "Physical (PBR, extension of Standard)": MATERIAL.Physical,
          "Physical - Frosted Glass             ":
            MATERIAL.PhysicalFrostedGlass,
          "Toon                                 ": MATERIAL.Toon,
        },
        value: MATERIAL.Standard,
      },
    }),
  });

  return enableMaterial(materialName);
};

export default Material;
