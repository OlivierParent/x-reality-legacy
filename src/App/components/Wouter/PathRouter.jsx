import { useLocation } from "wouter";
import { Text } from "@react-three/drei";

const WouterPathRouter = () => {
  const [, setLocation] = useLocation();

  return (
    <Text
      color="hsl(210, 100%, 70%)"
      fontSize={1}
      onClick={() => {
        const route = "/wouter";
        console.log("Route: ", route);
        setLocation(route);
      }}
      position={[0, 2, 0]}
      text="Path Router"
    />
  );
};

export default WouterPathRouter;
