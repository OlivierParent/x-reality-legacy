import ReactThreeTestRenderer from "@react-three/test-renderer";
import Face from ".";

it("ad", async () => {
  const renderer = await ReactThreeTestRenderer.create(<Face />);

  // assertions using the TestInstance & Scene Graph
  console.log(renderer.toGraph());
});
