import { useRef } from "react";
import { VertexNormalsHelper } from "three-stdlib";
import { useGLTF, useHelper } from "@react-three/drei";
import { useControls } from "leva";

import suzanneGlb from "./assets/suzanne.glb";

const SuzanneDefault = () => {
  const { nodes, materials } = useGLTF(suzanneGlb, true);
  const suzanneRef = useRef();

  const { normalColor, enableVertexNormalsHelper, helperSize } = useControls(
    "Components",
    {
      enableVertexNormalsHelper: {
        label: "Normals",
        value: false,
      },
      normalColor: { label: "Normal Color", value: "cyan" },
      helperSize: {
        label: "Helper Size",
        max: 2,
        min: 0,
        step: 0.05,
        value: 0.25,
      },
    }
  );

  useHelper(
    enableVertexNormalsHelper ? suzanneRef : { current: null },
    VertexNormalsHelper,
    helperSize,
    normalColor
  );

  return (
    <mesh
      ref={suzanneRef}
      geometry={nodes.Suzanne.geometry}
      material={materials["Paars"]}
    />
  );
};

export default SuzanneDefault;
