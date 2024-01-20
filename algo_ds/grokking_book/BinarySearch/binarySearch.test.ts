import binarySearch from "./binarySearch";

describe("binarySearch", () => {
  it("should return the correct index of item when item is in the list", () => {
    const sortedList = Array.from({ length: 100 }, (_, index) => index + 1);
    const item = 55;
    const indexOfItem = item - 1;

    const result = binarySearch(sortedList, item);

    expect(result).toEqual({ index: indexOfItem, step: result?.step });
  });

  it("should return the correct index of the item by the maximum step when the item is located before the last element in the list", () => {
    const sortedList = Array.from({ length: 100 }, (_, index) => index + 1);
    const item = 99;
    const indexOfItem = item - 1;
    const step = Math.ceil(Math.log2(sortedList.length));

    const result = binarySearch(sortedList, item);

    expect(result).toEqual({ index: indexOfItem, step });
  });

  it("should return null when item is not in the list", () => {
    const sortedList = Array.from({ length: 100 }, (_, index) => index + 1);
    const item = 101;
    const indexOfItem = null;

    const result = binarySearch(sortedList, item);

    expect(result).toBe(indexOfItem);
  });

  it("should return null when the list is empty", () => {
    const list: number[] = [];
    const item = 5;
    const expected = null;

    const result = binarySearch(list, item);

    expect(result).toBe(expected);
  });
});
