import { useLocation } from "wouter";
import { Text } from "@react-three/drei";

const Wouter = () => {
  const [, setLocation] = useLocation();

  return (
    <Text
      color="hsl(120, 100%, 70%)"
      fontSize={1}
      onClick={() => {
        const route = "/router";
        console.log("Route: ", route);
        setLocation(route);
      }}
      text="Wouter"
    />
  );
};

export default Wouter;
