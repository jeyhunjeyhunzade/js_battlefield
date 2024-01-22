export default function findMaxNum(arr: number[], max = arr[0]): number {
  // Base Case
  if (max === undefined) return 0;
  if (arr.length === 0) return max;

  const nextItem = arr.shift() as number;
  if (nextItem > max) {
    max = nextItem;
  }

  // Recursive Case
  return findMaxNum(arr, max);
}
