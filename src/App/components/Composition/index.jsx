import MaterialPhysicalFrostedGlass from "../Material/PhysicalFrostedGlass";
import Painting from "./Painting";
import Suzanne from "../Suzanne/CustomMaterial";

const Composition = () => {
  return (
    <>
      <Suzanne>
        <MaterialPhysicalFrostedGlass />
      </Suzanne>
      <Painting />
    </>
  );
};

export default Composition;
