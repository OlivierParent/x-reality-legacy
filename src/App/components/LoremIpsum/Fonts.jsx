import { Text } from "@react-three/drei";
import { useControls } from "leva";

import { FontFamily } from "App/libs";

const length = Object.keys(FontFamily).length;

const LoremIpsumFonts = () => {
  const { color, size, string } = useControls("Components", {
    color: {
      label: "Color",
      value: "#ffffff",
    },
    size: {
      label: "Size",
      value: 0.5,
      min: 0.1,
      max: 1,
    },
    string: {
      label: "String",
      value: "Lorem ipsum dolor sit amet.",
    },
  });

  const start = (-length * size) / 2;

  return (
    <>
      {Object.keys(FontFamily).map((name, index) => {
        return (
          <Text
            color={color}
            font={FontFamily[name].url}
            fontSize={size}
            key={name}
            position={[0, start + index * size, 0]}
          >
            {string}
          </Text>
        );
      })}
    </>
  );
};

export default LoremIpsumFonts;
