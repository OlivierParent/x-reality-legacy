import ZeroFill from "../ZeroFill";

describe("Test ZeroFill class in Utils", () => {
  test("Prefix a single digit number with zeroes up to 3 characters", () => {
    const number = 1;
    const numberZeroFill = new ZeroFill(number, 3);
    expect(`${numberZeroFill}`).toEqual("001");
  });

  test("Prefix a two digit number with zeroes up to 6 characters, and postfix with 'km'", () => {
    const number = 12;
    const numberZeroFill = new ZeroFill(number, 6, " km");
    expect(`${numberZeroFill}`).toEqual("000012 km");
  });
});
