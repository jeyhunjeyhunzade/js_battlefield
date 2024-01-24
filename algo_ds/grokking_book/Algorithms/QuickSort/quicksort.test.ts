import quickSort from "./quickSort";

describe("QuickSort", () => {
  it("should sort an array of positive integers in ascending order", () => {
    const arr = [5, 2, 8, 1, 9];

    const result = quickSort(arr);

    console.log(result);

    expect(result).toEqual([1, 2, 5, 8, 9]);
  });

  it("should sort an array of negative integers in ascending order", () => {
    const arr = [-5, -2, -8, -1, -9];

    const result = quickSort(arr);

    expect(result).toEqual([-9, -8, -5, -2, -1]);
  });

  it("should sort an array of mixed positive and negative integers in ascending order", () => {
    const arr = [-5, 2, -8, 1, -9];

    const result = quickSort(arr);

    expect(result).toEqual([-9, -8, -5, 1, 2]);
  });

  it("should sort an empty array", () => {
    const arr: number[] = [];
    const result = quickSort(arr);
    expect(result).toEqual([]);
  });

  it("should sort an array with one element", () => {
    const arr = [5];
    const result = quickSort(arr);
    expect(result).toEqual([5]);
  });

  it("should sort an array with two elements", () => {
    const arr = [5, 2];
    const result = quickSort(arr);
    expect(result).toEqual([2, 5]);
  });
});
