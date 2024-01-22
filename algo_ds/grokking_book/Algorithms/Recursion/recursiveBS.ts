export default function recursiveBinarySearch(
  list: number[] | string[],
  item: number | string,
  low: number = 0,
  high: number = list.length,
  step: number = 0
): { index: number; step: number } | null {
  // Base Case
  if (low < high) {
    step++;
    let midpoint: number = Math.floor(low + (high - low) / 2);

    // Recusive Case
    if (list[midpoint] === item) {
      return { index: midpoint, step };
    } else if (list[midpoint] < item) {
      return recursiveBinarySearch(list, item, midpoint + 1, high, step);
    } else if (list[midpoint] > item) {
      return recursiveBinarySearch(list, item, low, midpoint, step);
    }
  }

  return null;
}
