import MathCircle from "../MathCircle";

describe("Test MathCircle class in Utils", () => {
  test("Get coordinates every 45 degrees for a circle with radius 1", () => {
    const circle = new MathCircle();
    const angle000 = 0;
    expect(circle.getCoordinates(0)).toEqual({
      x: Math.cos(angle000),
      y: Math.sin(angle000),
    });
    const angle045 = Math.PI / 4;
    expect(circle.getCoordinates(45)).toEqual({
      x: Math.cos(angle045),
      y: Math.sin(angle045),
    });
    const angle090 = Math.PI / 2;
    expect(circle.getCoordinates(90)).toEqual({
      x: Math.cos(angle090),
      y: Math.sin(angle090),
    });
    const angle135 = (3 * Math.PI) / 4;
    expect(circle.getCoordinates(135)).toEqual({
      x: Math.cos(angle135),
      y: Math.sin(angle135),
    });
    const angle180 = Math.PI;
    expect(circle.getCoordinates(180)).toEqual({
      x: Math.cos(angle180),
      y: Math.sin(angle180),
    });
    const angle225 = (5 * Math.PI) / 4;
    expect(circle.getCoordinates(225)).toEqual({
      x: Math.cos(angle225),
      y: Math.sin(angle225),
    });
    const angle270 = (3 * Math.PI) / 2;
    expect(circle.getCoordinates(270)).toEqual({
      x: Math.cos(angle270),
      y: Math.sin(angle270),
    });
    const angle315 = (7 * Math.PI) / 4;
    expect(circle.getCoordinates(315)).toEqual({
      x: Math.cos(angle315),
      y: Math.sin(angle315),
    });
  });
});
