import findMaxNum from "./findMaxNum";

describe("Find Maximum Number Recursively", () => {
  it("should return 0 when the array is empty", () => {
    const arr: number[] = [];

    const result = findMaxNum(arr);

    expect(result).toBe(0);
  });

  it("should return the only number in the array when it contains only one number", () => {
    const arr = [10];

    const result = findMaxNum(arr);

    expect(result).toBe(10);
  });

  it("should return the maximum number when the array contains positive integers", () => {
    const arr = [1, 2, 3, 4, 5];

    const result = findMaxNum(arr);

    expect(result).toBe(5);
  });

  it("should return 0 when all numbers in the array are negative", () => {
    const arr = [-1, -2, -3, -4, -5];

    const result = findMaxNum(arr);

    expect(result).toBe(-1);
  });
});
