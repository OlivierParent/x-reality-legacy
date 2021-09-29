const LightingStudio = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow={true}
        color="hsl(0, 0%, 70%)"
        intensity={0.4}
        position={[0, 2, 4]}
      />
      <directionalLight
        castShadow={true}
        color="hsl(210, 100%, 70%)"
        position={[-4, 0, 0]}
      />
      <directionalLight
        castShadow={true}
        color="hsl(30, 100%, 70%)"
        position={[4, 0, 0]}
      />
    </>
  );
};

export default LightingStudio;
