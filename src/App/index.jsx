import { Canvas } from "@react-three/fiber";
import Content from "./Content";

import "./index.css";

const App = () => {
  return (
    <Canvas linear={false} shadows={true}>
      <Content />
    </Canvas>
  );
};

export default App;
