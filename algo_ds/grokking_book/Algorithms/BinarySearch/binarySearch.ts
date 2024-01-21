export default function binarySearch(
  list: string[] | number[],
  item: string | number
): { index: number; step: number } | null {
  let low: number = 0;
  let high: number = list.length;
  let step = 0;

  do {
    step++;
    const mid = Math.floor(low + (high - low) / 2);

    if (list[mid] === item) {
      return { index: mid, step };
    } else if (list[mid] < item) {
      low = mid + 1;
    } else {
      high = mid;
    }
  } while (low < high);

  return null;
}
