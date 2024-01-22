import calculateArrayLength from "./calculateArrayLength";

describe("Calculate Array Length Recursively", () => {
  it("should return 0 when given an empty array", () => {
    const arr: any[] = [];

    const result = calculateArrayLength(arr);

    expect(result).toBe(0);
  });

  it("should return the length of the array with given non-empty array", () => {
    const arr: any[] = [1, "2", [], {}];
    const expected = arr.length;

    const result = calculateArrayLength(arr);

    expect(result).toBe(expected);
  });

  it("should handle arrays with a single element", () => {
    const arr = [1];

    const result = calculateArrayLength(arr);

    expect(result).toBe(1);
  });

  it("should handle arrays with null or undefined values", () => {
    const arr = [null, undefined, 1, 2, 3];

    const result = calculateArrayLength(arr);

    expect(result).toBe(5);
  });
});
