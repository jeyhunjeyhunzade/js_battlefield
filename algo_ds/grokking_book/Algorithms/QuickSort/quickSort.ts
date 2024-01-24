export default function quickSort(arr: number[]): number[] {
  // Base Case
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const less: number[] = [];
  const greater: number[] = [];

  // Recuse

  // pre
  for (let num of arr) {
    if (num !== pivot) {
      num < pivot ? less.push(num) : greater.push(num);
    }
  }

  // recurse
  return [...quickSort(less), ...[pivot], ...quickSort(greater)];
}
