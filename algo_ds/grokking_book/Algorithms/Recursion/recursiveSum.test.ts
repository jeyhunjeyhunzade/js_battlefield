import recursiveSum from "./recursiveSum";

describe("Calculate sum of items in the list recursively", () => {
  it("should return 0 when given an empty array", () => {
    const result = recursiveSum([]);

    expect(result).toBe(0);
  });

  it("should return the sum of all elements in the array", () => {
    const result = recursiveSum([1, 2, 3, 4, 5]);

    expect(result).toBe(15);
  });

  it("should return the correct sum for an array with only one element", () => {
    const result = recursiveSum([10]);

    expect(result).toBe(10);
  });

  it("should handle an array with negative numbers", () => {
    const result = recursiveSum([-1, -2, -3, -4, -5]);

    expect(result).toBe(-15);
  });

  it("should handle an array with decimal numbers", () => {
    const result = recursiveSum([1.5, 2.5, 3.5]);

    expect(result).toBe(7.5);
  });
});
