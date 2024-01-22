export default function recursiveSum(arr: number[]): number {
  // Base Case
  if (arr.length === 0) {
    return 0;
  }

  const firstItem: number = arr.shift()!;
  // Recursive Case
  return firstItem + recursiveSum(arr);
}
