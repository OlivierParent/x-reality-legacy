const Tripod = (props) => {
  const length = 1;
  const radius = (length / 100) * 2;
  const segments = 32;
  const thickness = length / 100;

  return (
    <group {...props}>
      <mesh>
        <boxGeometry args={[1, 1, 1].map((value) => value * 1.5 * thickness)} />
        <meshMatcapMaterial color={0xffffff} />
      </mesh>

      {Array(3)
        .fill()
        .map((value, index) => {
          return (
            <group
              key={index}
              position={[0, 0, 0].map((v, i) =>
                index === i ? length / 2 + thickness * 2 : v
              )}
            >
              <mesh>
                <boxGeometry
                  args={[1, 1, 1].map(
                    (v, i) => v * (index === i ? length : thickness)
                  )}
                />
                <meshMatcapMaterial color={0xff0000 >> (8 * index)} />
              </mesh>
              <mesh
                position={[0, 0, 0].map((v, i) =>
                  index === i ? length / 2 + thickness * 3 : v
                )}
              >
                <sphereGeometry args={[radius, segments, segments]} />
                <meshMatcapMaterial color={0xffffff} />
              </mesh>
            </group>
          );
        })}
    </group>
  );
};

export default Tripod;
