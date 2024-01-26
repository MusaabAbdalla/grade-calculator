import { calculate } from "./calculate";
import { totalLessThanZero, valueOrtotalMustBeNumber } from "./errorList";
// - first we should import calculate function

// - We setup Test
// We make assertion

describe("Calculate function", () => {
  it("return an A for 10/10 scrore", () => {
    expect(calculate(10, 10)).toEqual("A");
  });
  it("return a B for 8/10 score", () => {
    expect(calculate(8, 10)).toEqual("B");
  });
  it("return a C for 6/10 score", () => {
    expect(calculate(6, 10)).toEqual("C");
  });
  it("throws an error if total is less than 0", () => {
    expect(() => {
      calculate(10, -10);
    }).toThrow(totalLessThanZero);
  });
  it("throws an error if value or totnal are not of type number", () => {
    expect(() => {
      calculate("10", 10);
    }).toThrow(valueOrtotalMustBeNumber);
  });
});

// I want to review my promise knowledge and then complete jest testing for the calculate function.
