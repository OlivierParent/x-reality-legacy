import { BackSide, DoubleSide, FrontSide } from "three";

export const levaDithering = {
  label: "Dithering",
  hint: "Whether to apply dithering to the color to remove the appearance of banding.",
  value: false,
};

export const levaOpacity = {
  label: "Opacity",
  hint: "Float in the range of 0.0 - 1.0 indicating how transparent the material is. A value of 0.0 indicates fully transparent, 1.0 is fully opaque.\nIf the material's transparent property is not set to true, the material will remain fully opaque and this value will only affect its color.",
  max: 1,
  min: 0,
  value: 1,
};

export const levaSide = {
  label: "Normals",
  hint: "Defines which side of faces will be rendered - front, back or both.",
  options: { BackSide, DoubleSide, FrontSide },
  value: FrontSide,
};

export const levaTransparent = {
  label: "Transparent",
  hint: "Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.\nWhen set to true, the extent to which the material is transparent is controlled by setting its opacity property.",
  value: false,
};
