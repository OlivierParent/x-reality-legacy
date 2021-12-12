import { useControls } from "leva";

import Default from "./Default";
import Sprites from "./Sprites";

const PARTICLES = Object.freeze({
  Default: "Default",
  Sprites: "Sprites",
});

const Particles = () => {
  const { useParticles } = useControls("Components", {
    useParticles: {
      label: "Particles",
      options: PARTICLES,
      value: PARTICLES.Default,
    },
  });

  function enableParticles(name) {
    return useParticles === name;
  }

  return (
    <>
      {enableParticles(PARTICLES.Default) && <Default />}
      {enableParticles(PARTICLES.Sprites) && <Sprites />}
    </>
  );
};

export default Particles;
