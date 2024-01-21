import selectionSort from "./selectionSort";

describe("selectionSort", () => {
  it("should return the sorted version of array in ascending order", () => {
    const arr = [7, 3, 1, 9, 5, 8, 2, 4, 10, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = selectionSort(arr);
    expect(result).toEqual(expected);
  });

  it("should return a new array with sorted numbers", () => {
    const arr = [7, 3, 1, 9, 5, 8, 2, 4, 10, 6];
    const result = selectionSort(arr);

    expect(result).not.toBe(arr);
  });

  it("should work correctly with arrays of different lengths", () => {
    const arr1: number[] = [];
    const arr2 = [5];
    const arr3 = [3, 4, 5, 1];

    const expected1: number[] = [];
    const expected2 = [5];
    const expected3 = [1, 3, 4, 5];

    const result1 = selectionSort(arr1);
    const result2 = selectionSort(arr2);
    const result3 = selectionSort(arr3);

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
  });

  it("should work correctly with arrays containing NaN or Infinity", () => {
    const arr = [4, NaN, 2, Infinity, 1, 3];
    const expected = [1, 2, 3, 4, NaN, Infinity];
    const result = selectionSort(arr);
    expect(result).toEqual(expected);
  });
});
