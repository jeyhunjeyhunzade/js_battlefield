// with numbers, low to high case
export default function selectionSort(arr: number[]): number[] {
  const result: number[] = [];
  const inputArrCopy = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let min = inputArrCopy[0];
    let min_index = 0;

    for (let j = 1; j < inputArrCopy.length; j++) {
      if (inputArrCopy[j] < min) {
        min = inputArrCopy[j];
        min_index = j;
      }
    }

    result.push(inputArrCopy.splice(min_index, 1)[0]);
  }

  return result;
}
