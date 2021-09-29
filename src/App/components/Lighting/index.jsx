import { MathUtils } from "three";

const Lighting = () => {
  return (
    <>
      <ambientLight color={0xffffff} intensity={0.1} />
      <directionalLight
        castShadow={true}
        color={0xffffff}
        intensity={1}
        position={[4, 4, 1]}
      />
      <hemisphereLight />
      <pointLight
        castShadow={true}
        color={0xffcc77}
        intensity={0.5}
        position={[-4, 1, -4]}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={true}
        color={0xffcc77}
        intensity={1}
        penumbra={0.5}
        position={[0, 4, 0]}
      />
    </>
  );
};

export default Lighting;
