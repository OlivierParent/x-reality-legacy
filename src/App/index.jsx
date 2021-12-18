import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import Content from "./Content";

import "./index.css";

const App = () => {
  return (
    <>
      <Leva flat={true} oneLineLabels={true} />
      <Canvas linear={false} shadows={true}>
        <Content />
      </Canvas>
    </>
  );
};

export default App;
