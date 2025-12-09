import { describe, it, expect } from "vitest";

import { getKineticEnergy } from "./physics.js";

// `describe` indicates a test suite.
describe("getKineticEnergy", function () {
  // `it` or `test` is used for one test case.
  it("returns undefined if mass is negative", function () {
    expect(getKineticEnergy(-5, 10)).toBeUndefined();
  });

  /*
  An **edge case** is a scenario at the "edge" of expected behavior.
  Common edge cases to consider are:
  - zero, empty, or null inputs
  - unusual input, such as incorrect types
  */

  it("returns 0 if mass or speed is 0", function () {
    expect(getKineticEnergy(0, 10)).toEqual(0);
    expect(getKineticEnergy(10, 0)).toEqual(0);
  });

  it("handles positive numbers: 3kg, 5m/s => 37.5J", function () {
    expect(getKineticEnergy(3, 5)).toEqual(37.5);
  });

  it("handles negative numbers: 3kg, -5m/s => 37.5J", function () {
    expect(getKineticEnergy(3, -5)).toEqual(37.5);
  });

  it("handles floating point numbers: 0.2kg, 12.2m/s => 14.884J", function () {
    expect(getKineticEnergy(0.2, 12.2)).toBeCloseTo(14.884);
  });

  // Test suites can be nested
  describe("types", function () {
    it("returns NaN if mass is not a number", function () {
      expect(getKineticEnergy("five", 10)).toBeNaN();
    });

    it("returns NaN if speed is not a number", function () {
      expect(getKineticEnergy(5, "ten")).toBeNaN();
    });

    it("returns a number", function () {
      expect(getKineticEnergy(5, 10)).toBeTypeOf("number");
    });
  });
});
