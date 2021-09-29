import ReactThreeTestRenderer from "@react-three/test-renderer";
import App from ".";
// // test("renders learn react link", () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

it("test", async () => {
  const renderer = await ReactThreeTestRenderer.create(<App />);

  // assertions using the TestInstance & Scene Graph
  console.log(renderer.toGraph());
});
