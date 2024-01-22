export default function calculateArrayLength(arr: any[], size = 0) {
  // Base Case
  if (arr.length === 0) return size;

  // Recursive Case
  // pre
  arr.shift();
  // recursion
  return calculateArrayLength(arr, size + 1);
}
