import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
// import renderer from "react-test-renderer";
import Gauge from "./index";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

// test("test", () => {
//   const component = renderer.create(<Gauge />);
// });
it("can render and update a counter", () => {
  // Test first render and componentDidMount
  act(() => {
    render(<Gauge />, container);
  });
  // const button = container.querySelector("button");
  // const label = container.querySelector("p");
  // expect(label.textContent).toBe("You clicked 0 times");
  // expect(document.title).toBe("You clicked 0 times");

  // // Test second render and componentDidUpdate
  // act(() => {
  //   button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  // });
  // expect(label.textContent).toBe("You clicked 1 times");
  // expect(document.title).toBe("You clicked 1 times");
});
