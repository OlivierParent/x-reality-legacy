const LightingThreePoint = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <spotLight
        castShadow={true}
        color="hsl(0, 0%, 70%)"
        intensity={0.75}
        position={[4, 2, -4]}
      />
      <spotLight
        castShadow={true}
        color="hsl(210, 100%, 70%)"
        intensity={0.75}
        position={[-4, 2, 4]}
      />
      <spotLight
        castShadow={true}
        color="hsl(30, 100%, 70%)"
        intensity={0.75}
        position={[4, 2, 4]}
      />
    </>
  );
};

export default LightingThreePoint;
