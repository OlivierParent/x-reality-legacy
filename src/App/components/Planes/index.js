import Plane from "./Plane";
import Suzanne from "../Suzanne/Default";

const PLANE = Object.freeze({
  FRONTAL: Object.freeze({
    color: "yellow",
    name: Object.freeze({
      en: "Frontal Plane",
      nl: "Frontaal Vlak",
    }),
    rotation: [0, 0, 0],
  }),
  SAGITTAL: Object.freeze({
    color: "cyan",
    name: Object.freeze({
      en: "Sagittal Plane",
      nl: "Sagittaal Vlak",
    }),
    rotation: [0, 90, 0],
  }),
  TRANSVERSE: Object.freeze({
    color: "magenta",
    name: Object.freeze({
      en: "Transverse Plane",
      nl: "Transversaal Vlak",
    }),
    rotation: [-90, 0, 0],
  }),
});

const Planes = () => {
  return (
    <>
      <Suzanne />
      {[PLANE.FRONTAL, PLANE.TRANSVERSE, PLANE.SAGITTAL].map((props, index) => (
        <Plane {...props} key={index} />
      ))}
    </>
  );
};

export default Planes;
