import { useLocation } from "wouter";
import { Text } from "@react-three/drei";

const WouterPathWouter = () => {
  const [, setLocation] = useLocation();

  return (
    <Text
      color="hsl(30, 100%, 70%)"
      fontSize={1}
      onClick={() => {
        const route = "/router";
        console.log("Route: ", route);
        setLocation(route);
      }}
      position={[0, -2, 0]}
      text="Path Wouter"
    />
  );
};

export default WouterPathWouter;
