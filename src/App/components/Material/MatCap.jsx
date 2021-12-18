import { useMatcapTexture } from "@react-three/drei";
import { MatCap } from "App/libs";

const MaterialMatCap = () => {
  const [matcap] = useMatcapTexture(MatCap.id.WORN_GOLD, MatCap.size.XL);

  return <meshMatcapMaterial matcap={matcap} />;
};

export default MaterialMatCap;
